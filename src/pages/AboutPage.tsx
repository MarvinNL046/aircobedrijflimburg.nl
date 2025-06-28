import { Helmet } from 'react-helmet-async';
import { Award, Users, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Over Ons - Airco Specialist Limburg | Airco Bedrijf Limburg</title>
        <meta name="description" content="Airco Bedrijf Limburg is dé specialist voor airconditioning in heel Limburg. Met 10+ jaar ervaring, gecertificeerde monteurs en 163+ tevreden klanten." />
        <link rel="canonical" href="https://aircobedrijflimburg.nl/over-ons" />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Airco Installateur Limburg - Over Ons
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 text-center">
              Al meer dan 10 jaar dé specialist voor airconditioning in heel Limburg
            </p>

            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Airco Bedrijf Limburg is uw betrouwbare partner voor alles op het gebied van 
                airconditioning. Met een team van gecertificeerde monteurs en jarenlange ervaring 
                zorgen wij voor een perfect binnenklimaat in uw woning of bedrijfspand.
              </p>
              
              <p>
                Vanuit onze centrale locatie in Nieuwstadt bedienen we heel Limburg. Of u nu in 
                Heerlen, Sittard, Geleen, Maastricht of Roermond woont, wij staan voor u klaar 
                met professionele service en vakmanschap.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Waarom kiezen voor ons?
              </h2>
              
              <p>
                Bij Airco Bedrijf Limburg staat kwaliteit voorop. Al onze monteurs zijn F-gassen 
                gecertificeerd en werken volgens de laatste richtlijnen. We zijn onafhankelijk, 
                wat betekent dat we u objectief kunnen adviseren over het beste merk en model 
                voor uw situatie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <Award className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Gecertificeerd & Verzekerd
                </h3>
                <p className="text-gray-600">
                  Alle monteurs F-gassen gecertificeerd. Volledig verzekerd voor uw zekerheid.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  163+ Tevreden Klanten
                </h3>
                <p className="text-gray-600">
                  Met een score van 4.7/5 op Google reviews behoren we tot de best beoordeelde 
                  airco specialisten.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <MapPin className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Heel Limburg
                </h3>
                <p className="text-gray-600">
                  Van Noord tot Zuid-Limburg, wij komen overal voor installatie, onderhoud 
                  en reparatie.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Clock className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Snelle Service
                </h3>
                <p className="text-gray-600">
                  Binnen 24 uur reactie op uw aanvraag. Installatie meestal binnen 1 week mogelijk.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Onze diensten
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Installatie</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Split airco systemen</li>
                    <li>• Multi-split systemen</li>
                    <li>• Mobiele airco's</li>
                    <li>• Warmtepompen</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Onderhoud</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Jaarlijkse controle</li>
                    <li>• Filter reiniging</li>
                    <li>• Koudemiddel check</li>
                    <li>• Onderhoudscontracten</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Storingen verhelpen</li>
                    <li>• Reparaties</li>
                    <li>• Vervanging onderdelen</li>
                    <li>• Advies op maat</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Klaar om kennis te maken?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Vraag vrijblijvend een offerte aan en ervaar zelf onze professionele service.
              </p>
              <Link to="/contact" className="btn-primary">
                Gratis offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;