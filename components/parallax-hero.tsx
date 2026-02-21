'use client'

import { useEffect, useState } from 'react'

export default function ParallaxHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-background via-secondary to-background pt-20">
      {/* 3D Background Elements with Parallax */}
      <div className="absolute inset-0">
        {/* Back layer - slowest parallax */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #c9a961, transparent)',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />

        {/* Mid layer */}
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #d4af37, transparent)',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />

        {/* Front layer - fastest parallax */}
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #c9a961, transparent)',
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px) translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, #c9a961 25%, #c9a961 26%, transparent 27%, transparent 74%, #c9a961 75%, #c9a961 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #c9a961 25%, #c9a961 26%, transparent 27%, transparent 74%, #c9a961 75%, #c9a961 76%, transparent 77%, transparent)',
          backgroundSize: '80px 80px',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Animated text elements with staggered entrance */}
        <div
          className="mb-4 text-primary/60 text-sm tracking-[0.3em] font-light uppercase"
          style={{
            animation: 'slideUp 0.8s ease-out 0.2s both',
          }}
        >
          Welcome to Excellence
        </div>

        <h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 tracking-tight"
          style={{
            animation: 'slideUp 0.8s ease-out 0.4s both',
            textShadow: `0 4px 20px rgba(201, 169, 97, 0.1)`,
          }}
        >
          LUXOR
        </h1>

        <p
          className="max-w-2xl text-lg md:text-xl text-foreground/70 mb-12 leading-relaxed"
          style={{
            animation: 'slideUp 0.8s ease-out 0.6s both',
          }}
        >
          Where timeless craftsmanship meets contemporary elegance
        </p>

        {/* CTA Button with hover effect */}
        <div
          style={{
            animation: 'slideUp 0.8s ease-out 0.8s both',
          }}
        >
          <button className="group relative px-10 py-4 bg-primary text-primary-foreground font-semibold tracking-wider text-base overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              DISCOVER OUR CRAFT
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-primary/80 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 group-hover:origin-right -z-0" />
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator with parallax */}
      <div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY / 300,
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-primary/60 text-sm tracking-widest uppercase">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-primary/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
