import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Star, CheckCircle, Clock, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message?: string;
}

const HeroOptimized = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const rotatingTexts = [
    'Koel uw woning in Limburg',
    'Professionele airco installatie',
    'Gecertificeerde monteurs',
    'Binnen 24 uur reactie'
  ];

  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsTyping(true);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Airco Bedrijf Limburg',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          service: `Dienst: ${data.service === 'installatie' ? 'Nieuwe airco installeren' : data.service === 'onderhoud' ? 'Airco onderhoud' : 'Airco reparatie'}`,
          city: data.city,
          message: data.message || 'Geen aanvullende informatie',
          to_email: 'info@aircobedrijflimburg.nl'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitMessage('Bedankt! We nemen binnen 24 uur contact met u op.');
      reset();
    } catch (error) {
      setSubmitMessage('Er ging iets mis. Bel ons op 046 202 1430.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium">Binnen 24 uur reactie</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Airco Limburg - Specialist Installatie & Service
            </h1>
            
            <div className="text-xl md:text-2xl text-orange-400 mb-6 h-[1.5em]">
              <span className={`inline-block ${isTyping ? 'typewriter-cursor' : ''}`}>
                {rotatingTexts[currentTextIndex]}
              </span>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              Professionele installatie, onderhoud en reparatie van airconditioners 
              in heel Limburg. Vraag nu uw gratis offerte aan!
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-orange-400" />
                ))}
                <span className="ml-2 font-semibold">4.7/5</span>
                <span className="text-gray-400">(163 reviews)</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Gratis offerte</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Gecertificeerde monteurs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Alle merken</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Garantie op installatie</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0462021430" className="btn-primary flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>046 202 1430</span>
              </a>
              <a href="https://wa.me/31636481054" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Gratis Offerte
              </h2>
              <p className="text-lg text-gray-600">
                Binnen 24 uur reactie
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register('name', { required: true })}
                type="text"
                placeholder="Naam *"
                className="input text-lg"
              />

              <input
                {...register('phone', { required: true })}
                type="tel"
                placeholder="Telefoonnummer *"
                className="input text-lg"
              />

              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="E-mailadres *"
                className="input text-lg"
              />

              <input
                {...register('city', { required: true })}
                type="text"
                placeholder="Woonplaats *"
                className="input text-lg"
              />

              <select
                {...register('service', { required: true })}
                className="input text-lg"
              >
                <option value="">Waar kunnen we u mee helpen? *</option>
                <option value="installatie">Nieuwe airco installeren</option>
                <option value="onderhoud">Airco onderhoud</option>
                <option value="reparatie">Airco reparatie</option>
              </select>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Versturen...' : 'Ja, ik wil een gratis offerte'}
              </button>

              {submitMessage && (
                <p className={`text-center font-semibold ${submitMessage.includes('Bedankt') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-3">Of bel direct:</p>
              <a href="tel:0462021430" className="text-2xl font-bold text-orange-600 hover:text-orange-700">
                046 202 1430
              </a>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <span className="text-xs text-gray-500">✓ Gratis offerte</span>
                <span className="text-xs text-gray-500">✓ Geen verplichtingen</span>
                <span className="text-xs text-gray-500">✓ Direct geholpen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOptimized;