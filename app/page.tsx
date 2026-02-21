'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO, SERVICES_MEN, SERVICES_WOMEN, SERVICES_SPECIAL, FEATURES, TESTIMONIALS } from '@/lib/constants';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImages = ["/hero-bg.png", "/2.jpeg"];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

const aboutImages = ["/abt1.jpeg", "/abt2.jpeg"];

const [currentAboutImage, setCurrentAboutImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentAboutImage((prev) => (prev + 1) % aboutImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">{/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${isScrolled ? 'glass' : 'bg-transparent'} border-b border-transparent hover:border-primary/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl font-bold text-primary tracking-wider">
            JANVI JEANS TAILOR
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm tracking-widest hover:text-primary transition-colors">SERVICES</a>
            <a href="#about" className="text-sm tracking-widest hover:text-primary transition-colors">ABOUT</a>
            <a href="#gallery" className="text-sm tracking-widest hover:text-primary transition-colors">GALLERY</a>
            <a href="#testimonials" className="text-sm tracking-widest hover:text-primary transition-colors">TESTIMONIALS</a>
            <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-primary-foreground font-semibold tracking-wider text-sm hover:bg-primary/90 transition-all">
              CONTACT
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border p-4 space-y-4">
            <a href="#services" className="block text-sm tracking-widest hover:text-primary">SERVICES</a>
            <a href="#about" className="block text-sm tracking-widest hover:text-primary">ABOUT</a>
            <a href="#gallery" className="block text-sm tracking-widest hover:text-primary">GALLERY</a>
            <a href="#testimonials" className="block text-sm tracking-widest hover:text-primary">TESTIMONIALS</a>
            <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-2 bg-primary text-primary-foreground font-semibold text-center text-sm hover:bg-primary/90">
              CONTACT
            </a>
          </div>
        )}
      </nav>

{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

  {/* Background Slideshow */}
<img
  src={heroImages[currentImage]}
  alt="Hero Background"
  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-3000"
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <div className="mb-8">
      <div className="inline-block glass px-6 py-3 mb-8">
        <p className="text-primary text-sm tracking-widest font-semibold">
          PREMIUM TAILORING SERVICE
        </p>
      </div>
    </div>

    <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 leading-tight text-white">
      Perfect Fit,<br />Perfect Craft
    </h1>

    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
      With {BUSINESS_INFO.experience} years of expertise, we deliver exceptional tailoring and alterations.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
      <a
        href={BUSINESS_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider hover:bg-primary/90 transition-all transform hover:scale-105"
      >
        BOOK NOW
      </a>

      <a
        href="#services"
        className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wider hover:bg-white/10 transition-all"
      >
        EXPLORE SERVICES
      </a>
    </div>

    <div className="grid grid-cols-3 gap-8 mt-12">
      {[
        { value: '25+', label: 'Years' },
        { value: '5000+', label: 'Happy Clients' },
        { value: '24hrs', label: 'Delivery' },
      ].map((stat, i) => (
        <div key={i} className="glass-light p-6 rounded transform hover:scale-110 transition-all">
          <p className="text-2xl font-bold text-primary">{stat.value}</p>
          <p className="text-sm text-white/70 tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>

  </div>

  {/* Floating WhatsApp */}
  {/* Floating Action Buttons */}
<div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">

  {/* WhatsApp */}
  <a
    href={BUSINESS_INFO.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform"
  >
    💬
  </a>

  {/* Location */}
  <a
    href="https://www.google.com/maps/place/JANVI+JEANS+TOILARS/@17.3862107,78.4915743,81m/data=!3m1!1e3!4m12!1m5!3m4!2zMTfCsDIzJzA5LjkiTiA3OMKwMjknMzAuNiJF!8m2!3d17.386084!4d78.491829!3m5!1s0x3bcb99d2129c899f:0x8642dc7b9ecd5ee0!8m2!3d17.3860375!4d78.4918598!16s%2Fg%2F11ys6_hfgq?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform"
  >
    📍
  </a>

  {/* Phone */}
  <a
    href="tel:+919700461454"
    className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform"
  >
    📞
  </a>

</div>

</section>


      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/20 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-primary tracking-tight">About Janvi</h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>Established by Vittal Koli, Janvi Jeans Tailore brings {BUSINESS_INFO.experience} years of tailoring expertise to Hyderabad. We specialize in professional alterations for jeans, pants, shirts, and complete tailoring services for formal and traditional wear.</p>
                <p>Our team of skilled craftsmen is dedicated to providing perfect fitting guarantees on every garment. We offer trial before final delivery and serve individuals, boutiques, and bulk orders with equal dedication and precision.</p>
                <p>Located in {BUSINESS_INFO.address}, we're committed to excellence in every stitch. Fast delivery within 24 hours and convenient home pickup & delivery service make quality tailoring accessible to everyone.</p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="text-foreground/80">Perfect Fit Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="text-foreground/80">Trial Before Final Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="text-foreground/80">24/7 Emergency Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-light p-8 rounded-lg">
  <img
    src={aboutImages[currentAboutImage]}
    alt="Our tailoring shop"
    className="w-full h-full object-cover rounded-lg transition-all duration-1000 ease-in-out"
  />
</div>
              <div className="absolute -bottom-4 -right-4 glass-dark p-6 rounded-lg w-48">
                <p className="font-serif text-3xl font-bold text-primary">Founded</p>
                <p className="text-sm text-foreground/60 mt-2">Professional tailoring since {new Date().getFullYear() - 25}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">Our Services</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">Professional tailoring and alterations for every occasion</p>
          </div>

          {/* Men's Services */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl font-bold mb-12 text-primary">Men's Tailoring</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES_MEN.map((service) => (
                <div key={service.id} className="group glass-light p-8 rounded-lg border-2 border-transparent hover:border-primary transition-all hover-3d">
                  <p className="text-5xl mb-4">{service.icon}</p>
                  <h4 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Women's Services
          <div className="mb-20">
            <h3 className="font-serif text-3xl font-bold mb-12 text-primary">Women's Tailoring</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES_WOMEN.map((service) => (
                <div key={service.id} className="group glass-light p-8 rounded-lg border-2 border-transparent hover:border-primary transition-all hover-3d">
                  <p className="text-5xl mb-4">{service.icon}</p>
                  <h4 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Special Services */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-12 text-primary">Special Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES_SPECIAL.map((service) => (
                <div key={service.id} className="group glass-light p-8 rounded-lg border-2 border-transparent hover:border-primary transition-all hover-3d">
                  <p className="text-5xl mb-4">{service.icon}</p>
                  <h4 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-section border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-20 text-primary text-center tracking-tight">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="group glass p-8 rounded-lg hover:glass-light transition-all transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-serif text-5xl md:text-6xl font-bold mb-20 text-primary text-center tracking-tight">
      Our Work
    </h2>

    {(() => {
      const images = [
        "/tailoring-1.jpg",
        "/tailoring-3.jpg",
        "/tailoring-5.jpg",
        "/5.jpeg",
        "/7.jpeg",
        "/30.jpeg",
        "/9.jpeg",
        "/10.jpeg",
        "/11.jpeg",
        "/12.jpeg",
        "/13.jpeg",
        "/14.jpeg",
        "/15.jpeg",
        "/16.jpeg",
        "/17.jpeg",
        "/18.jpeg",
        "/19.jpeg",
        "/20.jpeg",
        "/21.jpeg",
        "/22.jpeg",
        "/23.jpeg",
        "/24.jpeg",
        "/25.jpeg",
        "/26.jpeg",
        "/27.jpeg",
        "/28.jpeg",
        "/29.jpeg",
        "/30.jpeg",
      ];

      const visibleImages = showAll ? images : images.slice(0, 6);

      return (
        <>
          <div className="grid md:grid-cols-3 gap-8">
            {visibleImages.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg glass-light hover:glass transition-all"
              >
                <Image
                  src={src}
                  alt="Janvi Tailor Work"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {!showAll && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold tracking-wider hover:bg-primary/90 transition-all transform hover:scale-105"
              >
                VIEW MORE
              </button>
            </div>
          )}
        </>
      );
    })()}
  </div>
</section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/20 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-20 text-primary text-center tracking-tight">What Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="glass-light p-8 rounded-lg transform hover:scale-105 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-serif font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-primary tracking-tight">Get Your Perfect Fit</h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">Contact us via call or WhatsApp for fast, reliable tailoring with guaranteed perfect fit. Free home pickup & delivery available.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-light p-8 rounded-lg">
              <p className="text-4xl mb-4">📞</p>
              <h3 className="font-serif text-lg font-bold mb-2 text-primary">Call Us</h3>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-foreground/80 hover:text-primary transition-colors">{BUSINESS_INFO.phone}</a>
            </div>
            <a
  href="https://www.google.com/maps/place/JANVI+JEANS+TOILARS/@17.3862107,78.4915743,81m/data=!3m1!1e3!4m12!1m5!3m4!2zMTfCsDIzJzA5LjkiTiA3OMKwMjknMzAuNiJF!8m2!3d17.386084!4d78.491829!3m5!1s0x3bcb99d2129c899f:0x8642dc7b9ecd5ee0!8m2!3d17.3860375!4d78.4918598!16s%2Fg%2F11ys6_hfgq?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="glass-light p-8 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
    <p className="text-4xl mb-4">📍</p>
    <h3 className="font-serif text-lg font-bold mb-2 text-primary">
      Location
    </h3>
    <p className="text-foreground/80">
      {BUSINESS_INFO.address}
    </p>
  </div>
</a>
            <div className="glass-light p-8 rounded-lg">
              <p className="text-4xl mb-4">⏰</p>
              <h3 className="font-serif text-lg font-bold mb-2 text-primary">Hours</h3>
              <p className="text-foreground/80 text-sm">{BUSINESS_INFO.hours}</p>
            </div>
          </div>
          <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-4 bg-primary text-primary-foreground font-semibold tracking-wider text-lg hover:bg-primary/90 transition-all transform hover:scale-105">
            CONTACT ON WHATSAPP
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-serif text-lg font-bold text-primary mb-4">Janvi Jeans Tailore</h4>
              <p className="text-foreground/60 text-sm">Professional tailoring since {new Date().getFullYear() - 25}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#services" className="hover:text-primary transition-colors">Alterations</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Custom Tailoring</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Special Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary transition-colors">{BUSINESS_INFO.phone}</a></li>
                <li><a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
                <li className="text-xs mt-4">{BUSINESS_INFO.address}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8 space-y-4">
            <p className="text-center text-foreground/60 text-sm tracking-widest">
              © 2025 JANVI JEANS TAILORE. KACHIGUDA, HYDERABAD. ALL RIGHTS RESERVED.
            </p>
            <div className="text-center pt-4 border-t border-primary/10">
              <p className="text-foreground/50 text-xs mb-2">Website created by</p>
              <p className="text-primary font-semibold text-sm mb-1">
                <a href="https://www.charvexglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary/80 transition-colors">
                  CHARVEX GLOBAL LLP
                </a>
              </p>
              <p className="text-foreground/60 text-xs space-y-1">
                <span>Founder & CEO: Theja Suryachar P J</span><br />
                <span>Developer: Abhishek Koli</span><br />
                <a href="https://www.charvexglobal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  www.charvexglobal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
