import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredProducts = [
    {
      brand: 'Daikin',
      model: 'Perfera FTXM-R',
      year: '2025',
      image: '/images/products/daikin-perfera-wit.webp',
      highlights: [
        'Nieuwste 2025 model',
        'A+++ energie label',
        'Fluisterstil: vanaf 19 dB',
        'Luchtzuivering met Flash Streamer'
      ]
    },
    {
      brand: 'LG',
      model: 'ArtCool Gallery',
      year: '2025',
      image: '/images/products/lg-artcool-mirror.webp',
      highlights: [
        'Verwisselbaar kunstpaneel',
        'ThinQ WiFi bediening',
        'Dual Inverter Compressor',
        'Energie label A+++'
      ]
    },
    {
      brand: 'Toshiba',
      model: 'Haori',
      year: '2024/2025',
      image: '/images/products/Haori-grijs-links_19_11zon.webp',
      highlights: [
        'Uniek textiel design',
        'Keuze uit 5 kleuren',
        'Ultra quiet technologie',
        'Smart home compatible'
      ]
    },
    {
      brand: 'Daikin',
      model: 'Stylish',
      year: '2025',
      image: '/images/products/daikin-stylish-wit.webp',
      highlights: [
        'Red Dot Design Award',
        'Coanda effect',
        'Intelligent thermal sensor',
        'Compact: slechts 189mm diep'
      ]
    },
    {
      brand: 'Tosot',
      model: 'Clivia Pro',
      year: '2025',
      image: '/images/products/724-clivia-wit-vooraanzicht.webp',
      highlights: [
        'Beste prijs-kwaliteit 2025',
        'Golden Fin coating',
        'I-Feel temperatuur sensing',
        'WiFi standaard inbegrepen'
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProducts.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const currentProduct = featuredProducts[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nieuwste 2025 Modellen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek de laatste innovaties in airconditioning. Wij hebben altijd de nieuwste modellen 
            voor u beschikbaar.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100">
              <img 
                src={currentProduct.image}
                alt={`${currentProduct.brand} ${currentProduct.model}`}
                className="absolute inset-0 w-full h-full object-contain p-8"
              />
              
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                aria-label="Vorige product"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                aria-label="Volgende product"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {featuredProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex 
                        ? 'bg-orange-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ga naar product ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                {currentProduct.year} Model
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {currentProduct.brand} {currentProduct.model}
              </h3>
              
              <div className="space-y-3 mb-8">
                {currentProduct.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Actuele productinformatie</p>
                    <p>Voor de meest recente specificaties, energielabels en functies van 2025 modellen, 
                    neem contact met ons op. Wij hebben directe toegang tot de laatste fabrikantsinformatie.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/producten" className="btn-secondary text-center">
                  Bekijk alle modellen
                </Link>
                <Link to="/contact" className="btn-primary text-center">
                  Vraag productinfo aan
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-2">
              2025 Energie Updates
            </h4>
            <p className="text-sm text-gray-600">
              Nieuwe EU energielabels en nog zuinigere modellen. Bespaar tot 60% op energiekosten.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-2">
              Smart Home Integratie
            </h4>
            <p className="text-sm text-gray-600">
              Alle 2025 modellen met WiFi, compatible met Google Home, Alexa en Apple HomeKit.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-2">
              Verbeterde Filters
            </h4>
            <p className="text-sm text-gray-600">
              Nieuwe generatie luchtzuivering met HEPA en plasma technologie voor gezondere lucht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;