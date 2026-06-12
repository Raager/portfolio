import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import WhyMe from "./components/WhyMe/WhyMe";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { faqs } from "./data/index.js";

const SEO_TITLE = "Бурлак Владімір — Full-Stack веб-розробник | React, Node.js";
const SEO_DESC =
  "Розробка сучасних сайтів під ключ: лендінги, корпоративні сайти, інтернет-магазини на React та Node.js. Швидко, якісно, з SEO-оптимізацією.";
const SEO_URL = "https://portfolio-nine-alpha-98.vercel.app";
const SEO_IMAGE = `${SEO_URL}/og-image.jpg`;

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SEO_URL}/#person`,
  name: "Burlak Volodymyr",
  alternateName: "Бурлак Владімір",
  jobTitle: "Full-Stack Web Developer",
  url: SEO_URL,
  email: "kriovkriv@gmail.com",
  telephone: "+380680314050",
  sameAs: [
    "https://github.com/Raager",
    "https://www.linkedin.com/in/володимир-бурлак-969a8422b",
    "https://t.me/salad_a",
  ],
  knowsAbout: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "TypeScript"],
  description: SEO_DESC,
  image: `${SEO_URL}/avatar.jpg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "UA",
  },
  offers: {
    "@type": "Offer",
    name: "Розробка веб-сайтів",
    description: "Лендінги, корпоративні сайти, інтернет-магазини під ключ",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      minPrice: "100",
    },
  },
};

/* ── Schema: WebSite (sitelinks searchbox eligible) ───────── */
const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SEO_URL}/#website`,
  url: SEO_URL,
  name: "Burlak.dev",
  description: SEO_DESC,
  inLanguage: "uk-UA",
  author: { "@id": `${SEO_URL}/#person` },
};

/* ── Schema: FAQ ──────────────────────────────────────────── */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* ── Schema: ProfessionalService (LocalBusiness) ─────────── */
const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SEO_URL}/#service`,
  name: "Burlak Vladimir — веб-розробка",
  url: SEO_URL,
  telephone: "+380680314050",
  email: "kriovkriv@gmail.com",
  description: SEO_DESC,
  priceRange: "$100 – $1000+",
  currenciesAccepted: "USD, UAH",
  areaServed: {
    "@type": "Country",
    name: "Ukraine",
  },
  serviceType: [
    "Розробка лендінгів",
    "Корпоративні сайти",
    "Інтернет-магазини",
    "React розробка",
    "Node.js розробка",
  ],
  provider: { "@id": `${SEO_URL}/#person` },
};

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="uk" />
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESC} />
        <meta
          name="keywords"
          content="веб-розробник, розробка сайтів, React розробник, Node.js, інтернет-магазин, лендінг, Україна, фрілансер, full-stack"
        />
        <meta name="author" content="Burlak Volodymyr" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={SEO_URL} />
        {/* hreflang */}
        <link rel="alternate" hrefLang="uk" href={SEO_URL} />
        <link rel="alternate" hrefLang="x-default" href={SEO_URL} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Burlak.dev" />
        <meta property="og:url" content={SEO_URL} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESC} />
        <meta property="og:image" content={SEO_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Burlak Volodymyr — Full-Stack веб-розробник" />
        <meta property="og:locale" content="uk_UA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESC} />
        <meta name="twitter:image" content={SEO_IMAGE} />

        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(WEBSITE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(SERVICE_SCHEMA)}</script>

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
