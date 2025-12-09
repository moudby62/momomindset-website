import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: any
  }
}

export function useAnalytics() {
  useEffect(() => {
    // Charger Google Analytics
    const gaId = import.meta.env.VITE_GA_ID
    if (!gaId) return

    // Script Google Analytics
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `
    document.head.appendChild(script2)
  }, [])

  // Fonction pour tracker les événements
  const trackEvent = (eventName: string, eventParams?: any) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  return { trackEvent }
}
