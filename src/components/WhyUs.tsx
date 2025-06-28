import { Gift, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const benefits = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Gratis Offerte',
      description: 'Vrijblijvende offerte op maat. Geen verborgen kosten, altijd transparant.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Gecertificeerde Monteurs',
      description: 'Al onze monteurs zijn F-gassen gecertificeerd en werken volgens de hoogste standaarden.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Snelle Service',
      description: 'Binnen 24 uur reactie en installatie binnen 1 week mogelijk.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantie & Service',
      description: 'Uitgebreide garantie op installatie en onderdeel van onderhoudscontract mogelijk.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Airco Service Limburg - Waarom Kiezen Voor Ons?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Met jarenlange ervaring en een team van experts zijn wij dé specialist 
            voor airconditioning in Limburg.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">163+</div>
              <div className="text-gray-600">Tevreden klanten</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">4.7/5</div>
              <div className="text-gray-600">Google reviews</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-600">Jaar ervaring</div>
            </div>
          </div>

          <Link to="/contact" className="btn-primary inline-flex items-center">
            Start met uw gratis offerte
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;