import { Wrench, Shield, Settings, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOptimized = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Airco Installatie',
      description: 'Professionele installatie van alle merken airconditioners. Vakkundig geplaatst door gecertificeerde monteurs.',
      features: [
        'Gratis inmeting en advies',
        'Alle topmerken',
        'Binnen 1 week geïnstalleerd',
        'Garantie op montage'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Airco Onderhoud',
      description: 'Regelmatig onderhoud zorgt voor optimale prestaties en langere levensduur van uw airco.',
      features: [
        'Vanaf €11 per maand',
        'Jaarlijkse controle',
        'Filter reiniging',
        'Losse beurt €149'
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Airco Reparatie',
      description: 'Storing aan uw airco? Onze monteurs staan voor u klaar met snelle en vakkundige reparaties.',
      features: [
        'Snelle service',
        'Alle merken',
        'Transparante prijzen',
        'Garantie op reparatie'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Airco Installatie, Onderhoud & Reparatie Limburg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van installatie tot onderhoud en reparatie. Wij zijn uw specialist voor 
            airconditioning in heel Limburg.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Meer informatie →
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Airco Montage Limburg - Professionele Installatie
              </h3>
              <p className="text-gray-600 mb-6">
                Bekijk hoe onze gecertificeerde monteurs vakkundig een airco installeren. 
                Van planning tot oplevering, wij zorgen voor een perfect resultaat.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Gratis inmeting en advies op locatie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Professionele installatie binnen 1 week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Uitleg en demonstratie na installatie</span>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2 mt-6">
                <span>Vraag gratis offerte aan</span>
              </Link>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/9m-jkGgfLog?si=6GTgN4qAxCJ7tMec"
                  title="Airco installatie door Airco Bedrijf Limburg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[315px] rounded-xl"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <PlayCircle className="w-8 h-8 text-orange-500 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOptimized;