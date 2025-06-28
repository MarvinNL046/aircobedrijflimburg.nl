import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    'Heerlen', 'Sittard', 'Geleen', 'Maastricht', 'Roermond',
    'Kerkrade', 'Brunssum', 'Landgraaf', 'Hoensbroek', 'Voerendaal',
    'Parkstad', 'Zuid-Limburg'
  ];

  const services = [
    'Airco installatie',
    'Airco onderhoud',
    'Airco reparatie',
    'Airco service',
    'Split airco',
    'Mobiele airco'
  ];

  const brands = [
    'Daikin', 'LG', 'Samsung', 'Mitsubishi',
    'Toshiba', 'Tosot'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <span className="font-bold text-xl">Airco Bedrijf Limburg</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professionele airconditioning installatie, onderhoud en reparatie in heel Limburg.
            </p>
            <div className="flex items-center space-x-1 text-orange-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-white">4.7/5</span>
              <span className="text-gray-400">(163 reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <a href="tel:0462021430" className="flex items-center space-x-2 hover:text-orange-400">
                <Phone className="w-4 h-4" />
                <span>046 202 1430</span>
              </a>
              <a href="https://wa.me/31636481054" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-orange-400">
                <Phone className="w-4 h-4" />
                <span>06 3648 1054 (WhatsApp)</span>
              </a>
              <a href="mailto:info@aircobedrijflimburg.nl" className="flex items-center space-x-2 hover:text-orange-400">
                <Mail className="w-4 h-4" />
                <span>info@aircobedrijflimburg.nl</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Aan de Bogen 11, 6118 AS Nieuwstadt<br />(geen bezoekadres)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Openingstijden</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Maandag - Donderdag: 09:00 - 17:00</span>
              </div>
              <div className="pl-6">Vrijdag: 09:00 - 16:00</div>
              <div className="pl-6">Weekend: Gesloten</div>
            </div>
            
            <h3 className="font-semibold text-lg mt-6 mb-4">Diensten</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service} className="hover:text-orange-400">
                  <Link to="/producten">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Werkgebied</h3>
            <div className="text-gray-400">
              <p className="mb-2">Wij werken in heel Limburg, waaronder:</p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="text-sm hover:text-orange-400">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mt-6 mb-4">Merken</h3>
            <div className="flex flex-wrap gap-2 text-gray-400">
              {brands.map((brand) => (
                <span key={brand} className="text-sm hover:text-orange-400">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Airco Bedrijf Limburg. Alle rechten voorbehouden.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link>
              <Link to="/algemene-voorwaarden" className="hover:text-orange-400">Algemene Voorwaarden</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;