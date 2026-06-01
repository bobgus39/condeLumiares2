import React from 'react'
import { useStaggeredAnimation, useScrollAnimation } from '../hooks/useScrollAnimation'

const differentiators = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Medios Diagnósticos',
    description:
      'Electrocardiograma, espirometría, analíticas en centro y pruebas de diagnóstico rápido para una atención médica completa sin desplazamientos.',
    highlight: 'Resultados en 24 h',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: 'Equipo Especializado',
    description:
      'Médicos colegiados con formación continuada y amplia experiencia clínica, atentos a la historia de cada paciente y a su seguimiento a largo plazo.',
    highlight: '20+ años de experiencia',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Atención Integral',
    description:
      'Coordinamos medicina de familia y especialidades en un mismo centro. Tu médico de referencia conoce tu historial y supervisa todo tu proceso asistencial.',
    highlight: 'Médico de referencia propio',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Cita Ágil y Accesible',
    description:
      'Pedimos cita el mismo día para consultas urgentes. Sin largas esperas ni burocracia: tu salud no puede esperar y en Conde Lumiares lo sabemos.',
    highlight: 'Cita disponible hoy',
  },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function WhyUs() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2)
  const { ref, visibleItems } = useStaggeredAnimation(4, 0.1)

  return (
    <section id="por-que-nosotros" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(122,158,126,0.08) 0%, rgba(250,247,244,1) 50%, rgba(201,169,154,0.08) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Nuestra Diferencia
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light mt-3 mb-5">
            ¿Por qué elegir Conde Lumiares?
          </h2>
          <p className="font-body text-charcoal/60 text-base max-w-2xl mx-auto leading-relaxed">
            Más de 20 años de experiencia avalan nuestra manera de hacer medicina: con rigor
            clínico, trato humano cercano y un compromiso real con la salud de cada paciente.
          </p>
          <div className="w-12 h-0.5 bg-sage mx-auto mt-8" />
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className={`group text-center transition-all duration-600 ${
                visibleItems.includes(i)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Icon container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-sage/10 flex items-center justify-center mx-auto text-sage group-hover:bg-sage group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sage/30 group-hover:bg-sage transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-medium text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlight badge */}
              <span className="inline-block text-xs font-medium text-sage bg-sage/10 px-3 py-1 rounded-full">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom section with quote */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-charcoal/5 rounded-2xl px-10 py-6 border border-nude/30">
            <div className="text-left">
              <p className="font-display italic text-xl text-charcoal mb-1">
                "La confianza de nuestros pacientes es el mejor aval de nuestro trabajo"
              </p>
              <p className="font-body text-sm text-charcoal/50">— Dra. Carmen Aldeguer, Directora Médica</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-nude/60" />
            <button
              onClick={() => scrollToSection('reservar')}
              className="hidden md:flex shrink-0 items-center gap-2 text-sm font-medium text-sage hover:text-sage/80 transition-colors"
            >
              Reservar ahora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
