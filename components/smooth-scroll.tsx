'use client'

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    // Enable smooth scrolling if not already enabled
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return null
}
