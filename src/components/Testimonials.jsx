import React, { useState, useEffect, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'María G.',
    location: 'Alicante',
    text: 'Llevo más de 3 años siendo paciente de Conde Lumiares y no podría estar más satisfecha. La Dra. Aldeguer conoce mi historial al detalle y siempre me orienta con claridad. Un centro de confianza de verdad.',
    rating: 5,
    treatment: 'Medicina de Familia',
    avatar: 'MG',
    color: 'bg-sage',
  },
  {
    name: 'Javier T.',
    location: 'Alicante',
    text: 'Vine a hacerme un chequeo anual y el proceso fue rápido, cómodo y muy completo. Analítica, ECG y valoración médica en una sola visita. Volveré el año que viene sin pensarlo.',
    rating: 5,
    treatment: 'Revisión Médica',
    avatar: 'JT',
    color: 'bg-blush',
  },
  {
    name: 'Isabel R.',
    location: 'Alicante',
    text: 'Traigo a mis hijos desde pequeños a la consulta de pediatría. La Dra. Ramos es increíble con los niños, muy paciente y detallista. Toda la familia estamos encantados con el centro.',
    rating: 5,
    treatment: 'Pediatría',
    avatar: 'IR',
    color: 'bg-nude',
  },
  {
    name: 'Antonio M.',
    location: 'Mutxamel',
    text: 'Me atendieron de urgencias sin cita el mismo día. El Dr. Pérez fue muy profesional, me explicó todo con calma y me tranquilizó. Es un lujo tener un centro así tan cerca de casa.',
    rating: 5,
    treatment: 'Urgencias y Consultas',
    avatar: 'AM',
    color: 'bg-sage',
  },
  {
    name: 'Patricia V.',
    location: 'Alicante',
    text: 'Un centro médico de alto nivel. Las instalaciones son modernas y el personal te hace sentir en buenas manos desde el primer momento. Conseguí cita para cardiología en menos de una semana.',
    rating: 5,
    treatment: 'Especialidades Médicas',
    avatar: 'PV',
    color: 'bg-blush',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2)

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(index)
        setIsTransitioning(false)
      }, 300)
    },
    [isTransitioning]
  )

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((current + 1) % testimonials.length)

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [current, goTo])

  const t = testimonials[current]

  return (
    <section
      id="testimonios"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FAF7F4 0%, #F2EBE3 50%, #FAF7F4 100%)',
      }}
    >
      {/* Decorative element */}
      <div className="absolute top-12 left-10 font-display text-[200px] leading-none text-nude/20 select-none pointer-events-none">
        "
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light mt-3 mb-5">
            Lo que dicen nuestros pacientes
          </h2>
          <div className="w-12 h-0.5 bg-sage mx-auto" />
        </div>

        {/* Testimonial card */}
        <div className="relative">
          <div
            className={`transition-all duration-300 ${
              isTransitioning ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
            }`}
          >
            <div className="bg-cream rounded-3xl shadow-lg p-10 md:p-14 relative">
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating count={t.rating} />
                <span className="text-xs font-medium text-sage bg-sage/10 px-3 py-1 rounded-full">
                  {t.treatment}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="font-display text-2xl md:text-3xl font-light italic text-charcoal leading-snug mb-8">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`${t.color} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}
                >
                  <span className="font-display text-sm font-medium text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-body font-medium text-charcoal">{t.name}</p>
                  <p className="font-body text-sm text-charcoal/50">{t.location}</p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="absolute right-8 bottom-8 flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-nude/60 flex items-center justify-center text-charcoal/60 hover:border-sage hover:text-sage transition-all duration-200"
                  aria-label="Anterior testimonio"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-nude/60 flex items-center justify-center text-charcoal/60 hover:border-sage hover:text-sage transition-all duration-200"
                  aria-label="Siguiente testimonio"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-2 bg-sage'
                  : 'w-2 h-2 bg-nude hover:bg-blush'
              }`}
            />
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-14">
          {[
            { value: '4.9/5', label: 'Valoración media' },
            { value: '+500', label: 'Reseñas verificadas' },
            { value: '98%', label: 'Pacientes satisfechos' },
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl font-light text-sage">{badge.value}</div>
              <div className="font-body text-xs text-charcoal/50 mt-1">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
