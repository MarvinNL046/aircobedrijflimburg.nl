import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Gratis Offerte Airco | Airco Bedrijf Limburg</title>
        <meta name="description" content="Neem contact op met Airco Bedrijf Limburg. ✓ Gratis offerte ✓ Binnen 24 uur reactie ✓ Bel 046 202 1430 of vraag online een offerte aan." />
        <link rel="canonical" href="https://aircobedrijflimburg.nl/contact" />
      </Helmet>

      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;