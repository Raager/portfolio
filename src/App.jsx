import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import WhyMe from './components/WhyMe/WhyMe';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const SEO_TITLE = 'Бурлак Владімір — Full-Stack веб-розробник | React, Node.js';
const SEO_DESC = 'Розробка сучасних сайтів під ключ: лендінги, корпоративні сайти, інтернет-магазини на React та Node.js. Швидко, якісно, з SEO-оптимізацією.';
const SEO_URL = 'https://burlak.dev';
const SEO_IMAGE = `${SEO_URL}/og-image.jpg`;

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Burlak Vladimir",
  "jobTitle": "Full-Stack Web Developer",
  "url": SEO_URL,
  "sameAs": [
    "https://github.com/yourname",
    "https://linkedin.com/in/yourname",
    "https://t.me/your_telegram"
  ],
  "knowsAbout": ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "TypeScript"],
  "description": SEO_DESC,
  "offers": {
    "@type": "Offer",
    "name": "Розробка веб-сайтів",
    "description": "Лендінги, корпоративні сайти, інтернет-магазини"
  }
};

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="uk" />
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESC} />
        <meta name="keywords" content="веб-розробник, розробка сайтів, React, Node.js, інтернет-магазин, лендінг, Україна" />
        <meta name="author" content="Burlak Vladimir" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SEO_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_URL} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESC} />
        <meta property="og:image" content={SEO_IMAGE} />
        <meta property="og:locale" content="uk_UA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESC} />
        <meta name="twitter:image" content={SEO_IMAGE} />

        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>

        {/* Viewport & perf */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0F172A" />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <WhyMe />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </HelmetProvider>
  );
}
