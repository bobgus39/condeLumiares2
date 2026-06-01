import React, { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'

const navLinks = [
  { label: 'Inicio', href: 'inicio' },
  { label: 'Sobre Nosotros', href: 'sobre-nosotros' },
  { label: 'Servicios', href: 'servicios' },
  { label: 'Por Qué Nosotros', href: 'por-que-nosotros' },
  { label: 'Testimonios', href: 'testimonios' },
  { label: 'Galería', href: 'galeria' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
      if (isMenuOpen) setIsMenuOpen(false)

      const sections = navLinks.map((l) => l.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  return (
    <>
      <Navbar
        className={`fixed top-5 left-4 right-4 sm:left-6 sm:right-6 w-auto z-50
          rounded-2xl transition-all duration-500
          ${isScrolled
            ? 'bg-cream/92 backdrop-blur-xl shadow-xl shadow-charcoal/10 border border-nude/40'
            : 'bg-white/5 backdrop-blur-md border border-white/15 shadow-lg shadow-black/20'
          }`}
        maxWidth="full"
        height="4rem"
        classNames={{ wrapper: 'px-4 sm:px-5 max-w-full w-full' }}
      >
        {/* Hamburger — solo móvil/tablet */}
        <NavbarContent justify="start" className="lg:hidden shrink-0 basis-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className={`p-1 rounded-lg transition-colors ${isScrolled ? 'text-charcoal' : 'text-white'}`}
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </NavbarContent>

        {/* Brand centrado en móvil */}
        <NavbarContent justify="center" className="lg:hidden">
          <NavbarBrand as="button" onClick={() => { scrollToSection('inicio'); setIsMenuOpen(false) }} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-semibold">C</span>
              </div>
              <span className={`font-display text-lg font-medium tracking-wide transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
                Conde Lumiares
              </span>
            </div>
          </NavbarBrand>
        </NavbarContent>

        {/* Spacer derecho para equilibrar */}
        <NavbarContent justify="end" className="lg:hidden shrink-0 basis-auto">
          <div className="w-8" />
        </NavbarContent>

        {/* Brand — solo desktop */}
        <NavbarContent justify="start" className="hidden lg:flex">
          <NavbarBrand as="button" onClick={() => scrollToSection('inicio')} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-semibold">C</span>
              </div>
              <span className={`font-display text-xl font-medium tracking-wide transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
                Conde Lumiares
              </span>
            </div>
          </NavbarBrand>
        </NavbarContent>

        {/* Links — solo desktop */}
        <NavbarContent className="hidden lg:flex gap-0" justify="center">
          {navLinks.map((link) => (
            <NavbarItem key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={`relative px-2.5 py-1.5 text-sm tracking-wide rounded-lg transition-all duration-200 whitespace-nowrap
                  ${activeSection === link.href
                    ? isScrolled ? 'text-sage font-medium' : 'text-white font-medium'
                    : isScrolled
                    ? 'text-charcoal/65 hover:text-charcoal'
                    : 'text-white/65 hover:text-white'
                  }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0.5 left-2.5 right-2.5 h-px bg-sage rounded-full" />
                )}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* CTA — solo desktop */}
        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <Button
              onClick={() => scrollToSection('reservar')}
              size="sm"
              className={`text-sm font-medium px-5 rounded-xl transition-all duration-300 whitespace-nowrap
                ${isScrolled
                  ? 'bg-sage text-white hover:bg-sage/90 shadow-md shadow-sage/20'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                }`}
            >
              Reservar Cita
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Menú móvil — fuera del Navbar para evitar conflictos de posicionamiento */}
      {isMenuOpen && (
        <div
          className={`lg:hidden fixed left-4 right-4 sm:left-6 sm:right-6 z-40 rounded-b-2xl
            backdrop-blur-xl border-x border-b pt-3 pb-5 flex flex-col gap-0.5
            transition-all duration-300
            ${isScrolled ? 'bg-cream/98 border-nude/30' : 'bg-charcoal/95 border-white/10'}`}
          style={{ top: 'calc(1.25rem + 4rem)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => { scrollToSection(link.href); setIsMenuOpen(false) }}
              className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200
                ${activeSection === link.href
                  ? 'text-sage bg-sage/10'
                  : isScrolled
                  ? 'text-charcoal/75 hover:text-charcoal hover:bg-warm'
                  : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2 px-1">
            <Button
              onClick={() => { scrollToSection('reservar'); setIsMenuOpen(false) }}
              className="w-full bg-sage text-white font-medium rounded-xl text-sm"
            >
              Reservar Cita
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
