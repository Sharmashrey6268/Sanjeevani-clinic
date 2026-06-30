import AboutTherapist from "@/components/AboutTherapist";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileStickyWhatsApp from "@/components/MobileStickyWhatsApp";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import GalleryVideo from "@/components/GalleryVideo";
import { siteConfig } from "@/data/site";
import AnimatedLogoLoader from "@/components/Loader/AnimatedLogoLoader";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.fullName,
    description:
      "Pediatric occupational therapy center in Indore for child development support.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1166/2B Nanda Nagar, Near Baby Care Convent School",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone,
    areaServed: "Indore",
    medicalSpecialty: "Occupational Therapy",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedLogoLoader />
      <Header />

     <main>
  <section id="home">
    <Hero />
  </section>

  <section id="services">
    <Services />
  </section>

  <section id="therapist">
    <AboutTherapist />
  </section>

  <section id="gallery">
    <GalleryVideo />
  </section>

  <section id="testimonials">
    <Testimonials />
  </section>

  <section id="contact">
    <Contact />
  </section>
</main>

      <Footer />
      <MobileStickyWhatsApp />
    </>
  );
}