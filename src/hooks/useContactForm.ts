import { useState } from 'react'

interface ContactFormData {
  howWeHelp: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface UseContactFormReturn {
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  submitForm: (data: ContactFormData) => Promise<void>
  resetForm: () => void
}

export function useContactForm(): UseContactFormReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (data: ContactFormData) => {
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setIsSuccess(true)

      // Optional: Track conversion for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'hero_form'
        })
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setIsLoading(false)
    setIsSuccess(false)
    setError(null)
  }

  return {
    isLoading,
    isSuccess,
    error,
    submitForm,
    resetForm
  }
}
