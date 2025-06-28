import { ArrowRight, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  variant?: 'primary' | 'secondary';
}

const CTABanner = ({ variant = 'primary' }: CTABannerProps) => {
  if (variant === 'primary') {
    return (
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Klaar voor een koel zomer in Limburg?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Vraag nu uw gratis offerte aan en ontvang binnen 24 uur reactie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl inline-flex items-center space-x-2">
                <span>Gratis offerte aanvragen</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:0462021430" className="bg-orange-700 hover:bg-orange-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>046 202 1430</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-2 text-orange-100">
              <Clock className="w-5 h-5" />
              <span>Ma-Do: 09:00-17:00 | Vr: 09:00-16:00</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-blue-900">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Onderhoud vanaf €11 per maand
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Met een onderhoudscontract bent u verzekerd van een optimaal werkende airco. 
                Inclusief jaarlijkse controle en filterreiniging.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Jaarlijkse inspectie en reiniging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Voorrang bij storingen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Langere levensduur airco</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Behoud van garantie</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="bg-orange-50 rounded-xl p-6 inline-block">
                <div className="text-sm text-gray-600 mb-2">Onderhoudscontract vanaf</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">€11,-</div>
                <div className="text-gray-600 mb-6">per maand</div>
                <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Meer informatie</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="mt-4 text-sm text-gray-600">
                  Of eenmalig onderhoud voor €149,-
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;