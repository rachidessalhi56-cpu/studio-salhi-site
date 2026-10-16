import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Photographer from '../components/Photographer.jsx'
import Services from '../components/Services.jsx'
import Gallery from '../components/Gallery.jsx'
import Pricing from '../components/Pricing.jsx'
import DocServices from '../components/DocServices.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Booking from '../components/Booking.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-ink font-body text-stone-200">
      <Navbar />
      <main>
        <Hero />
        <Photographer />
        <Services />
        <Gallery />
        <Pricing />
        <DocServices />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
