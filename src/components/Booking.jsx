import React, { useState } from 'react'
import { Button } from '@heroui/react'
import { submitAppointment } from '../services/api'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const treatmentOptions = [
  { key: 'familia', label: 'Medicina de Familia' },
  { key: 'especialidades', label: 'Especialidades Médicas' },
  { key: 'analiticas', label: 'Analíticas y Diagnóstico' },
  { key: 'urgencias', label: 'Urgencias y Consultas' },
  { key: 'revision', label: 'Revisión Médica / Chequeo' },
  { key: 'pediatria', label: 'Pediatría' },
  { key: 'otro', label: 'Otra especialidad / Primera consulta' },
]

const benefits = [
  'Primera consulta sin compromiso',
  'Respuesta en menos de 24 horas',
  'Médico de referencia propio',
  'Atención integral para toda la familia',
]

const fieldBase =
  'w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-sage/60 transition-colors duration-200'

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/60 text-xs font-medium tracking-wide uppercase">{label}</label>
      {children}
    </div>
  )
}

export default function Booking() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.15)
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.treatment) {
      setStatus('error')
      setErrorMsg('Por favor completa los campos obligatorios: nombre, teléfono y especialidad.')
      return
    }
    setIsLoading(true)
    setStatus(null)
    setErrorMsg('')
    try {
      await submitAppointment(form)
      setStatus('success')
      setForm({ name: '', phone: '', email: '', treatment: '', date: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Ha ocurrido un error. Por favor inténtalo de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="reservar"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2D2D2D 0%, #3a3530 40%, #2D2D2D 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #7A9E7E 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C9A99A 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: Info */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
              Cita Previa
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mt-3 mb-5">
              Reserva tu Cita
            </h2>
            <p className="font-body text-white/60 text-base leading-relaxed mb-10">
              Da el primer paso hacia una atención médica de calidad. Rellena el formulario y nuestro
              equipo se pondrá en contacto contigo a la mayor brevedad para confirmar tu cita.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-body text-white/70 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-8 space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+34 965 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@condelumiares.es</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-150 ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">¡Solicitud enviada!</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                    Hemos recibido tu solicitud de cita. Nuestro equipo se pondrá en contacto
                    contigo en menos de 24 horas para confirmar los detalles.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="text-sage text-sm font-medium hover:text-sage/80 transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <Field label="Nombre completo *">
                    <input
                      type="text"
                      placeholder="Tu nombre y apellidos"
                      value={form.name}
                      onChange={set('name')}
                      className={fieldBase}
                    />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Teléfono *">
                      <input
                        type="tel"
                        placeholder="+34 600 000 000"
                        value={form.phone}
                        onChange={set('phone')}
                        className={fieldBase}
                      />
                    </Field>

                    <Field label="Email">
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={set('email')}
                        className={fieldBase}
                      />
                    </Field>
                  </div>

                  <Field label="Especialidad de interés *">
                    <select
                      value={form.treatment}
                      onChange={set('treatment')}
                      className={`${fieldBase} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-charcoal">
                        Selecciona una especialidad
                      </option>
                      {treatmentOptions.map((opt) => (
                        <option key={opt.key} value={opt.key} className="bg-charcoal text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Fecha preferida">
                    <input
                      type="date"
                      value={form.date}
                      onChange={set('date')}
                      className={`${fieldBase} [color-scheme:dark]`}
                    />
                  </Field>

                  <Field label="Motivo de consulta o información adicional">
                    <textarea
                      placeholder="Cuéntanos brevemente el motivo de tu consulta..."
                      value={form.message}
                      onChange={set('message')}
                      rows={4}
                      className={`${fieldBase} resize-none`}
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                      <p className="text-red-400 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    isLoading={isLoading}
                    className="w-full bg-sage text-white font-medium py-6 rounded-xl hover:bg-sage/90 transition-all duration-200 text-sm tracking-wide shadow-lg"
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
                  </Button>

                  <p className="text-white/30 text-xs text-center">
                    * Campos obligatorios · Tu información está protegida
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
