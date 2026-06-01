import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Treatments />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <Booking />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}
