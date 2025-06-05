declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      options?: {
        event_category?: string
        event_label?: string
        value?: number
      }
    ) => void
  }
}

export {}
