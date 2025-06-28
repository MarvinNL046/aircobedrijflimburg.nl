import { Helmet } from 'react-helmet-async';
import HeroOptimized from '../components/HeroOptimized';
import ServicesOptimized from '../components/ServicesOptimized';
import WhyUs from '../components/WhyUs';
import BrandLogos from '../components/BrandLogos';
import ProductGallery from '../components/ProductGallery';
import Contact from '../components/Contact';
import CTABanner from '../components/CTABanner';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Airco Bedrijf Limburg",
    "description": "Professionele airconditioning installatie, onderhoud en reparatie in heel Limburg. Gecertificeerde monteurs, gratis offerte.",
    "url": "https://aircobedrijflimburg.nl",
    "telephone": "046-202-1430",
    "email": "info@aircobedrijflimburg.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aan de Bogen 11",
      "addressLocality": "Nieuwstadt",
      "postalCode": "6118 AS",
      "addressCountry": "NL"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Limburg"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "163"
    }
  };

  return (
    <>
      <Helmet>
        <title>Airco Bedrijf Limburg - Airconditioning Installatie & Service | aircobedrijflimburg.nl</title>
        <meta name="description" content="Airco specialist in Limburg ✓ Installatie, onderhoud & reparatie ✓ Alle merken ✓ Gecertificeerde monteurs ✓ 4.7/5 sterren. Bel 046 202 1430 voor gratis offerte!" />
        <meta name="keywords" content="airco limburg, airco installateur limburg, airconditioning limburg, airco service limburg, airco heerlen, airco sittard, airco geleen, airco maastricht, airco roermond, airco kerkrade, airco brunssum, split airco limburg" />
        <link rel="canonical" href="https://aircobedrijflimburg.nl/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Airco Bedrijf Limburg - Airconditioning Specialist" />
        <meta property="og:description" content="Professionele airco installatie in heel Limburg. Gratis offerte, gecertificeerde monteurs. Bel 046 202 1430." />
        <meta property="og:url" content="https://aircobedrijflimburg.nl/" />
        <meta property="og:site_name" content="Airco Bedrijf Limburg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <HeroOptimized />
      <ServicesOptimized />
      <WhyUs />
      <CTABanner variant="secondary" />
      <ProductGallery />
      <BrandLogos />
      <Contact />
      <CTABanner variant="primary" />
    </>
  );
};

export default HomePage;