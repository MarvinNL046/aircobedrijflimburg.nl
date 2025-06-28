import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

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
          service: `Dienst: ${data.service === 'installatie' ? 'Airco installatie' : data.service === 'onderhoud' ? 'Airco onderhoud' : data.service === 'reparatie' ? 'Airco reparatie' : 'Advies op maat'}`,
          city: data.city,
          message: data.message || 'Geen aanvullende informatie',
          to_email: 'info@aircobedrijflimburg.nl'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitMessage('Bedankt voor uw aanvraag! We nemen binnen 24 uur contact met u op.');
      reset();
    } catch (error) {
      setSubmitMessage('Er ging iets mis. Bel ons direct op 046 202 1430.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Airco Specialist Limburg - Gratis Offerte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vraag een gratis offerte aan of neem contact op voor meer informatie. 
            We reageren binnen 24 uur.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact informatie
              </h3>
              
              <div className="space-y-6">
                <a href="tel:0462021430" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefoon</div>
                    <div className="text-gray-600">046 202 1430</div>
                  </div>
                </a>

                <a href="https://wa.me/31636481054" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">06 3648 1054</div>
                  </div>
                </a>

                <a href="mailto:info@aircobedrijflimburg.nl" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-gray-600">info@aircobedrijflimburg.nl</div>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adres</div>
                    <div className="text-gray-600">
                      Aan de Bogen 11<br />
                      6118 AS Nieuwstadt<br />
                      <span className="text-sm">(geen bezoekadres)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Openingstijden</div>
                    <div className="text-gray-600">
                      Ma-Do: 09:00 - 17:00<br />
                      Vrijdag: 09:00 - 16:00<br />
                      Weekend: Gesloten
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Airco Service Heerlen, Sittard, Geleen & Omgeving
              </h3>
              <p className="text-gray-600 mb-4">
                Wij verzorgen airco installatie, onderhoud en reparatie in heel Limburg, 
                waaronder:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Heerlen</div>
                <div>• Sittard</div>
                <div>• Geleen</div>
                <div>• Maastricht</div>
                <div>• Roermond</div>
                <div>• Kerkrade</div>
                <div>• Brunssum</div>
                <div>• Landgraaf</div>
                <div>• Parkstad</div>
                <div>• Zuid-Limburg</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Vraag gratis offerte aan
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Naam *
                  </label>
                  <input
                    {...register('name', { required: 'Naam is verplicht' })}
                    type="text"
                    className="input"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'E-mail is verplicht',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ongeldig e-mailadres'
                      }
                    })}
                    type="email"
                    className="input"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefoon *
                  </label>
                  <input
                    {...register('phone', { required: 'Telefoonnummer is verplicht' })}
                    type="tel"
                    className="input"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Woonplaats *
                  </label>
                  <input
                    {...register('city', { required: 'Woonplaats is verplicht' })}
                    type="text"
                    placeholder="bijv. Heerlen, Sittard"
                    className="input"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dienst *
                </label>
                <select
                  {...register('service', { required: 'Selecteer een dienst' })}
                  className="input"
                >
                  <option value="">Selecteer dienst</option>
                  <option value="installatie">Airco installatie</option>
                  <option value="onderhoud">Airco onderhoud</option>
                  <option value="reparatie">Airco reparatie</option>
                  <option value="advies">Advies op maat</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Vertel ons meer over uw situatie..."
                  className="input"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Versturen...' : 'Verstuur aanvraag'}
              </button>

              {submitMessage && (
                <p className={`text-center ${submitMessage.includes('Bedankt') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              Door dit formulier te versturen gaat u akkoord met onze privacy policy. 
              We gebruiken uw gegevens alleen om contact met u op te nemen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;