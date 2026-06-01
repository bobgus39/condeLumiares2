import React from 'react'
import { useStaggeredAnimation, useScrollAnimation } from '../hooks/useScrollAnimation'

const galleryItems = [
  {
    label: 'Sala de Tratamientos',
    sublabel: 'Equipamiento de última generación',
    gradient: 'linear-gradient(135deg, #7A9E7E 0%, #5a7a5e 50%, #3d5940 100%)',
    textColor: 'text-white',
  },
  {
    label: 'Recepción',
    sublabel: 'Ambiente cálido y acogedor',
    gradient: 'linear-gradient(135deg, #E8D5C4 0%, #d4b89e 50%, #C9A99A 100%)',
    textColor: 'text-charcoal',
  },
  {
    label: 'Sala de Consultas',
    sublabel: 'Instalaciones certificadas',
    gradient: 'linear-gradient(135deg, #2D2D2D 0%, #3d3d3d 50%, #4a4540 100%)',
    textColor: 'text-white',
  },
  {
    label: 'Zona Relax',
    sublabel: 'Tu espacio de bienestar',
    gradient: 'linear-gradient(135deg, #F2EBE3 0%, #E8D5C4 50%, #dcc4b0 100%)',
    textColor: 'text-charcoal',
  },
  {
    label: 'Equipamiento',
    sublabel: 'Tecnología de vanguardia',
    gradient: 'linear-gradient(135deg, #C9A99A 0%, #b89080 50%, #a07060 100%)',
    textColor: 'text-white',
  },
  {
    label: 'Consulta Médica',
    sublabel: 'Atención personalizada',
    gradient: 'linear-gradient(135deg, #7A9E7E 0%, #9ab89e 50%, #E8D5C4 100%)',
    textColor: 'text-charcoal',
  },
]

export default function Gallery() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2)
  const { ref, visibleItems } = useStaggeredAnimation(6, 0.08)

  return (
    <section id="galeria" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Instalaciones
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light mt-3 mb-5">
            Nuestras Instalaciones
          </h2>
          <p className="font-body text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed">
            Espacios diseñados para tu comodidad y confort, equipados con la tecnología más avanzada
          </p>
          <div className="w-12 h-0.5 bg-sage mx-auto mt-8" />
        </div>

        {/* Gallery grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-500 ${
                visibleItems.includes(i)
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Gradient background */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: item.gradient }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px)',
                }}
              />

              {/* Decorative circle */}
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full border opacity-30"
                style={{ borderColor: item.textColor === 'text-white' ? 'white' : '#2D2D2D' }}
              />
              <div
                className="absolute bottom-4 left-4 w-4 h-4 rounded-full opacity-20"
                style={{
                  background: item.textColor === 'text-white' ? 'white' : '#2D2D2D',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div
                  className={`${item.textColor} font-display text-xl md:text-2xl font-medium transition-transform duration-300 group-hover:-translate-y-1`}
                >
                  {item.label}
                </div>
                <div
                  className={`${item.textColor} opacity-0 group-hover:opacity-80 font-body text-xs mt-2 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}
                >
                  {item.sublabel}
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  background:
                    item.textColor === 'text-white'
                      ? 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.6), rgba(255,255,255,0))'
                      : 'linear-gradient(90deg, rgba(45,45,45,0), rgba(45,45,45,0.3), rgba(45,45,45,0))',
                }}
              />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-10">
          <p className="font-body text-charcoal/40 text-sm italic">
            Visítanos y descubre nuestro centro médico en el corazón de Alicante
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-nude" />
            <span className="font-display text-sage text-base italic">Alicante, España</span>
            <div className="h-px w-12 bg-nude" />
          </div>
        </div>
      </div>
    </section>
  )
}
