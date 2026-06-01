import React, { useState, useEffect } from 'react'
import { Button } from '@heroui/react'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Staggered entrance animation
    const t1 = setTimeout(() => setVisible(true), 100)
    const t2 = setTimeout(() => setStep(1), 300)
    const t3 = setTimeout(() => setStep(2), 600)
    const t4 = setTimeout(() => setStep(3), 900)
    const t5 = setTimeout(() => setStep(4), 1200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [])

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #1a2420 0%, #2d3a2e 20%, #3d4a3a 40%, #4a4030 60%, #5a4a3a 80%, #3d2d25 100%)',
      }}
    >
      {/* Subtle overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #7A9E7E 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #C9A99A 0%, transparent 40%),
                            radial-gradient(circle at 60% 80%, #E8D5C4 0%, transparent 35%)`,
        }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, #E8D5C4, transparent)' }}
        />
        <div
          className="absolute top-3/4 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, #7A9E7E, transparent)' }}
        />
        <div
          className="absolute left-1/4 top-0 bottom-0 w-px opacity-5"
          style={{ background: 'linear-gradient(180deg, transparent, #E8D5C4, transparent)' }}
        />
        <div
          className="absolute left-3/4 top-0 bottom-0 w-px opacity-5"
          style={{ background: 'linear-gradient(180deg, transparent, #E8D5C4, transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Overline */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-blush/80 font-light mb-8">
            <span className="w-8 h-px bg-blush/60 inline-block" />
            Centro Médico · Alicante
            <span className="w-8 h-px bg-blush/60 inline-block" />
          </span>
        </div>

        {/* Main heading */}
        <div
          className={`transition-all duration-700 delay-200 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-2">
            Tu salud en manos
          </h1>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            <span className="italic text-nude">de especialistas</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-700 delay-100 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-body font-light text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Medicina de familia, especialidades médicas y revisiones integrales
            <br className="hidden md:block" /> para toda la familia en Alicante
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`transition-all duration-700 delay-100 flex flex-col sm:flex-row items-center justify-center gap-4 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() => scrollToSection('reservar')}
            className="px-8 py-4 bg-sage text-white font-medium text-sm tracking-wide rounded-full hover:bg-sage/90 transition-all duration-200 shadow-lg hover:shadow-sage/30 hover:shadow-xl"
          >
            Reservar Cita
          </button>
          <button
            onClick={() => scrollToSection('servicios')}
            className="px-8 py-4 border border-white/40 text-white font-medium text-sm tracking-wide rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-200"
          >
            Nuestros Servicios
          </button>
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-700 delay-100 mt-10 ${
            step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-display italic text-blush/60 text-lg tracking-wider">
            "Tu salud, nuestro compromiso"
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
          step >= 4 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Descubrir</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
        <div
          className="w-5 h-5 border border-white/30 rounded-full flex items-center justify-center animate-bounce"
          style={{ animationDelay: '0.15s' }}
        >
          <svg
            className="w-3 h-3 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
