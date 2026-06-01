import React from 'react'
import { Card, CardBody } from '@heroui/react' // verificar props en https://www.heroui.com/docs/components/card
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '+5000', label: 'Pacientes atendidos' },
  { value: '10+', label: 'Especialidades médicas' },
  { value: '8', label: 'Médicos especialistas' },
]

const team = [
  {
    name: 'Dra. Carmen Aldeguer',
    role: 'Directora Médica',
    specialty: 'Medicina Familiar y Comunitaria',
    initials: 'CA',
    color: 'bg-sage',
    bio: 'Médica de familia con más de 20 años de experiencia y comprometida con la atención continuada y personalizada de cada paciente.',
  },
  {
    name: 'Dr. Marcos Pérez',
    role: 'Médico Especialista',
    specialty: 'Cardiología · Medicina Interna',
    initials: 'MP',
    color: 'bg-blush',
    bio: 'Especialista en cardiología y medicina interna con formación en los principales hospitales universitarios de España.',
  },
  {
    name: 'Dra. Sofía Ramos',
    role: 'Especialista en Pediatría',
    specialty: 'Salud Infantil · Vacunas',
    initials: 'SR',
    color: 'bg-nude',
    bio: 'Pediatra con amplia experiencia en el seguimiento del desarrollo infantil, vacunación y atención integral de los más pequeños.',
  },
]

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.15)
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.15)
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation(0.1)

  return (
    <section id="sobre-nosotros" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Quote + Philosophy */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
                Sobre Nosotros
              </span>
            </div>
            <blockquote className="font-display text-3xl md:text-4xl italic text-charcoal font-light leading-snug mb-8">
              "Salud y bienestar para toda la familia"
            </blockquote>
            <div className="w-12 h-0.5 bg-sage mb-8" />
            <p className="font-body text-charcoal/70 text-base leading-relaxed mb-6">
              En el Centro Médico Conde Lumiares creemos que una buena salud es el pilar de una vida
              plena. Nuestro equipo de médicos especialistas combina rigor científico con una atención
              cercana y personalizada para acompañarte en cada etapa de tu vida.
            </p>
            <p className="font-body text-charcoal/70 text-base leading-relaxed">
              Ubicados en el corazón de Alicante, ofrecemos un espacio de confianza donde cada
              paciente recibe una atención individualizada, con protocolos médicos contrastados y un
              seguimiento continuo adaptado a sus necesidades reales.
            </p>
          </div>

          {/* Right: Stats grid */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-200 ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-cream rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="font-display text-5xl font-light text-sage mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-charcoal/60 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team section */}
        <div
          ref={teamRef}
          className={`transition-all duration-700 ${
            teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light mb-4">
              Nuestro Equipo
            </h2>
            <p className="font-body text-charcoal/60 text-base max-w-xl mx-auto">
              Médicos especialistas comprometidos con tu salud y la de tu familia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card
                key={i}
                className="bg-cream border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
                // verificar props en https://www.heroui.com/docs/components/card
              >
                <CardBody className="p-8 text-center">
                  {/* Avatar */}
                  <div
                    className={`${member.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5`}
                  >
                    <span className="font-display text-2xl font-medium text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm font-medium text-sage mb-1">{member.role}</p>
                  <p className="font-body text-xs text-charcoal/40 mb-4">{member.specialty}</p>
                  <div className="w-8 h-px bg-nude mx-auto mb-4" />
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">{member.bio}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
