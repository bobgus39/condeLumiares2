import React, { useState } from 'react'
import { Button } from '@heroui/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Dirección',
    lines: ['Av. Conde de Lumiares, 37', '03010 Alicante', 'España'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Horario',
    lines: ['Lunes–Viernes: 9:00–20:00', 'Sábados: 10:00–14:00', 'Domingos: Cerrado'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Teléfono',
    lines: ['+34 965 000 000'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    lines: ['info@condelumiares.es'],
  },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/condelumiares',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/condelumiares',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@condelumiares',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1)
  const [quickForm, setQuickForm] = useState({ name: '', message: '' })
  const [quickSent, setQuickSent] = useState(false)

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    if (quickForm.name && quickForm.message) {
      setQuickSent(true)
      setQuickForm({ name: '', message: '' })
    }
  }

  return (
    <section id="contacto" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Contáctanos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light mt-3 mb-5">
            Estamos aquí para ti
          </h2>
          <p className="font-body text-charcoal/60 text-base max-w-xl mx-auto">
            Contacta con nosotros por teléfono, email o visítanos directamente en nuestra clínica
          </p>
          <div className="w-12 h-0.5 bg-sage mx-auto mt-8" />
        </div>

        {/* 3-column layout */}
        <div
          ref={sectionRef}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Col 1: Contact info */}
          <div className="bg-warm rounded-2xl p-8">
            <h3 className="font-display text-2xl font-medium text-charcoal mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center text-sage shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium text-sage uppercase tracking-wider mb-1">
                      {item.title}
                    </p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="font-body text-sm text-charcoal/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 pt-8 border-t border-nude/40">
              <p className="font-body text-xs font-medium text-charcoal/40 uppercase tracking-wider mb-4">
                Síguenos
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-charcoal/5 hover:bg-sage hover:text-white text-charcoal/60 flex items-center justify-center transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm min-h-[400px] lg:min-h-0">
            <iframe
              src="https://maps.google.com/maps?q=Avenida+Conde+de+Lumiares+37+Alicante+03010&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localización de Centro Médico Conde Lumiares en Alicante"
            />
          </div>

          {/* Col 3: Social + Quick contact */}
          <div className="space-y-6">
            {/* Social media cards */}
            <div className="bg-warm rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium text-charcoal mb-5">
                Redes Sociales
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream hover:bg-sage/5 border border-nude/30 hover:border-sage/30 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-charcoal/5 group-hover:bg-sage group-hover:text-white text-charcoal/60 flex items-center justify-center transition-all duration-200">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-charcoal">{social.name}</p>
                      <p className="font-body text-xs text-charcoal/40">@condelumiares</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-charcoal/30 ml-auto group-hover:text-sage transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick contact form */}
            <div className="bg-warm rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium text-charcoal mb-5">
                Contacto Rápido
              </h3>
              {quickSent ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-body text-sm text-charcoal/70">
                    Mensaje enviado. ¡Nos pondremos en contacto pronto!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-charcoal/50 uppercase tracking-wide">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={quickForm.name}
                      onChange={(e) => setQuickForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-cream border border-nude/50 rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-sage/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-charcoal/50 uppercase tracking-wide">
                      Mensaje
                    </label>
                    <textarea
                      placeholder="¿En qué podemos ayudarte?"
                      value={quickForm.message}
                      onChange={(e) => setQuickForm((p) => ({ ...p, message: e.target.value }))}
                      rows={3}
                      className="w-full bg-cream border border-nude/50 rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-sage/50 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="w-full bg-sage text-white rounded-xl font-medium"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
