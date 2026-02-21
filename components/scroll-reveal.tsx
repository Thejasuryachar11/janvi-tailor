'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const directionMap = {
              up: 'translateY(20px)',
              down: 'translateY(-20px)',
              left: 'translateX(20px)',
              right: 'translateX(-20px)',
            }

            entry.target.style.animation = `none`
            entry.target.style.opacity = '0'
            entry.target.style.transform = directionMap[direction]

            setTimeout(() => {
              entry.target.style.animation = `slideUp 0.8s ease-out forwards`
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'none'
            }, delay)

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, direction])

  return (
    <div ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
