'use client'

import { useEffect, useRef } from 'react'

export default function FabricWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrameId: number
    let time = 0

    const drawFabricWave = () => {
      // Clear canvas with a dark background
      ctx.fillStyle = '#1a1a1a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw fabric wave effect
      const frequency = 0.005
      const amplitude = 60
      const speed = 0.03

      ctx.strokeStyle = '#c9a961'
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.3

      // Multiple wave layers for depth
      for (let layerOffset = 0; layerOffset < 5; layerOffset++) {
        ctx.beginPath()
        let firstPoint = true

        for (let x = 0; x < canvas.width; x += 5) {
          const waveY =
            Math.sin((x * frequency + time * speed) * Math.PI * 2) * amplitude +
            Math.cos((x * frequency * 0.5 + time * speed * 0.7) * Math.PI * 2) * (amplitude * 0.5) +
            canvas.height / 2 +
            layerOffset * 80

          if (firstPoint) {
            ctx.moveTo(x, waveY)
            firstPoint = false
          } else {
            ctx.lineTo(x, waveY)
          }
        }

        ctx.stroke()
      }

      // Draw flowing particles
      ctx.globalAlpha = 0.4
      ctx.fillStyle = '#d4af37'

      const particleCount = 30
      for (let i = 0; i < particleCount; i++) {
        const x = (i * (canvas.width / particleCount) + time * 20) % canvas.width
        const y =
          Math.sin((x * frequency + time * speed) * Math.PI * 2) * (amplitude * 0.8) +
          canvas.height / 2 +
          50

        const size = 2 + Math.sin(time * 0.1 + i) * 1.5
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      time += 1

      animationFrameId = requestAnimationFrame(drawFabricWave)
    }

    drawFabricWave()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
