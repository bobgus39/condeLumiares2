import React from 'react'
import { Card, CardBody } from '@heroui/react' // verificar props en https://www.heroui.com/docs/components/card
import { useStaggeredAnimation } from '../hooks/useScrollAnimation'

const treatments = [
  {
    icon: '✦',
    emoji: '🩺',
    title: 'Medicina de Familia',
    description:
      'Atención continuada a pacientes de todas las edades: seguimiento de enfermedades crónicas, consultas agudas y coordinación con especialistas.',
    color: 'bg-sage/10',
    iconColor: 'text-sage',
    tags: ['Atención continuada', 'Crónicos', 'Derivaciones'],
  },
  {
    icon: '✦',
    emoji: '🔬',
    title: 'Especialidades Médicas',
    description:
      'Cardiología, traumatología, dermatología y otras especialidades en un mismo centro, sin largas esperas y con cita ágil.',
    color: 'bg-blush/10',
    iconColor: 'text-blush',
    tags: ['Cardiología', 'Traumatología', 'Dermatología'],
  },
  {
    icon: '✦',
    emoji: '🧪',
    title: 'Analíticas y Diagnóstico',
    description:
      'Extracción de sangre y orina en centro, electrocardiograma, espirometría y pruebas diagnósticas con resultados en 24 h.',
    color: 'bg-nude/30',
    iconColor: 'text-charcoal',
    tags: ['Análisis clínicos', 'ECG', 'Resultados rápidos'],
  },
  {
    icon: '✦',
    emoji: '⚕️',
    title: 'Urgencias y Consultas',
    description:
      'Atención de consultas urgentes sin cita previa para procesos agudos que no requieren acudir a urgencias hospitalarias.',
    color: 'bg-sage/10',
    iconColor: 'text-sage',
    tags: ['Sin cita previa', 'Procesos agudos', 'Atención rápida'],
  },
  {
    icon: '✦',
    emoji: '📋',
    title: 'Revisiones y Chequeos',
    description:
      'Revisiones periódicas completas adaptadas a cada franja de edad: analítica, tensión, peso, ECG y valoración médica integral.',
    color: 'bg-blush/10',
    iconColor: 'text-blush',
    tags: ['Medicina preventiva', 'Chequeo anual', 'Por edades'],
  },
  {
    icon: '✦',
    emoji: '👶',
    title: 'Salud Infantil',
    description:
      'Pediatría con seguimiento del crecimiento, vacunación, revisiones del niño sano y atención a enfermedades propias de la infancia.',
    color: 'bg-warm',
    iconColor: 'text-charcoal',
    tags: ['Pediatría', 'Vacunas', 'Niño sano'],
  },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Treatments() {
  const { ref, visibleItems } = useStaggeredAnimation(6, 0.1)

  return (
    <section id="servicios" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Servicios Médicos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light mt-3 mb-5">
            Nuestros Servicios
          </h2>
          <p className="font-body text-charcoal/60 text-base max-w-2xl mx-auto leading-relaxed">
            Ofrecemos atención médica integral para toda la familia: desde medicina general hasta
            especialidades, con la cercanía y profesionalidad que mereces.
          </p>
          <div className="w-12 h-0.5 bg-sage mx-auto mt-8" />
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, i) => (
            <Card
              key={i}
              className={`border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer group ${
                visibleItems.includes(i)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.3s ease` }}
              // verificar props en https://www.heroui.com/docs/components/card
            >
              <CardBody className={`p-8 ${treatment.color}`}>
                {/* Icon */}
                <div className="mb-5">
                  <span className="text-4xl">{treatment.emoji}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-medium text-charcoal mb-3">
                  {treatment.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-5">
                  {treatment.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {treatment.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 bg-white/60 rounded-full text-charcoal/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollToSection('reservar')}
                  className={`text-sm font-medium ${treatment.iconColor} flex items-center gap-2 group-hover:gap-3 transition-all duration-200`}
                >
                  Ver más
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-body text-charcoal/50 text-sm mb-5">
            ¿Necesitas otra especialidad? Consúltanos y te orientamos sin compromiso.
          </p>
          <button
            onClick={() => scrollToSection('contacto')}
            className="inline-flex items-center gap-2 text-sage font-medium text-sm border border-sage/40 px-6 py-3 rounded-full hover:bg-sage hover:text-white transition-all duration-200"
          >
            Consultar sin compromiso
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
    </section>
  )
}
