import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Info, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductsPage = () => {
  const [selectedImages, setSelectedImages] = useState<{[key: string]: number}>({});

  const products = [
    {
      brand: 'Daikin',
      logo: '/images/brands/DAIKIN_logo.svg',
      description: 'Wereldleider in airconditioning met innovatieve technologie',
      models: [
        { 
          name: 'Comfora', 
          features: ['Fluisterstil', 'Energiezuinig A+++', '2D luchtstroom'],
          images: ['/images/products/daikin-comfora-left.webp', '/images/products/daikin-comfora-right.webp']
        },
        { 
          name: 'Emura', 
          features: ['Design model', 'WiFi bediening', 'Zelfreinigend'],
          images: ['/images/products/daikin-emura-wit.webp', '/images/products/daikin-emura-zilver.webp', '/images/products/daikin-emura-zwart.webp']
        },
        { 
          name: 'Stylish', 
          features: ['Compact design', 'Coanda effect', 'Intelligent eye'],
          images: ['/images/products/daikin-stylish-wit.webp', '/images/products/daikin-stylish-zwart.webp', '/images/products/daikin-stylish-silver.webp']
        },
        { 
          name: 'Perfera', 
          features: ['Luchtzuivering', 'Vochtigheidscontrole', 'Warmtepomp'],
          images: ['/images/products/daikin-perfera-wit.webp']
        },
        { 
          name: 'Ururu Sarara', 
          features: ['Luchtbevochtiger', '5-zone luchtzuivering', 'Premium model'],
          images: ['/images/products/Ururu-Sarara-left.webp', '/images/products/Ururu-Sarara-right.webp']
        }
      ]
    },
    {
      brand: 'LG',
      logo: '/images/brands/LG_logo_(2014).svg',
      description: 'Koreaanse kwaliteit met innovatieve functies',
      models: [
        { 
          name: 'ArtCool', 
          features: ['Kunstwerk design', 'Dual Inverter', 'ThinQ app'],
          images: ['/images/products/lg-artcool-mirror.webp', '/images/products/rac-eu-lg-artcool-black.webp']
        },
        { 
          name: 'DualCool Premium', 
          features: ['Snelle koeling', 'Energiezuinig', 'Plasmaster ionizer'],
          images: ['/images/products/LG-dualcool-indoor-premium.webp', '/images/products/LG-dualcool-indoor-premium-1.webp']
        }
      ]
    },
    {
      brand: 'Samsung',
      logo: '/images/brands/Samsung_Logo.svg',
      description: 'Smart airconditioning met WindFree technologie',
      models: [
        { 
          name: 'WindFree Elite', 
          features: ['WindFree koeling', 'AI Auto Cooling', 'PM1.0 filter'],
          images: []
        },
        { 
          name: 'Luzon', 
          features: ['Betaalbaar', 'Betrouwbaar', 'Eenvoudige installatie'],
          images: []
        }
      ]
    },
    {
      brand: 'Mitsubishi Heavy Industries',
      description: 'Japanse precisie en betrouwbaarheid',
      models: [
        { 
          name: 'SRK/SRC series', 
          features: ['Silent operation', 'Weekly timer', 'Auto restart'],
          images: [
            '/images/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp',
            '/images/products/Mitsubishi heavy indus/srk50zs-wf-wit-single-split-airco-wandmodel-2.5-3.5-5kw-1.webp'
          ]
        }
      ]
    },
    {
      brand: 'Toshiba',
      logo: '/images/brands/Toshiba_logo.svg',
      description: 'Innovatieve technologie voor optimaal comfort',
      models: [
        { 
          name: 'Haori', 
          features: ['Textiel front', 'Ultra quiet', 'WiFi ready'],
          images: [
            '/images/products/Haori-zwart-vooraanzicht_3_11zon.webp',
            '/images/products/Haori-grijs-links_19_11zon.webp',
            '/images/products/Haori-blauw-links_16_11zon.webp'
          ]
        },
        { 
          name: 'Daiseikai', 
          features: ['Plasma filter', 'Magic coil', 'Eco mode'],
          images: [
            '/images/products/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp',
            '/images/products/Daiseikai 10-Hout-vooraanzicht_2_11zon.webp'
          ]
        },
        { 
          name: 'Kazumi', 
          features: ['Compact size', 'High efficiency', 'Self-cleaning'],
          images: [
            '/images/products/Kazumi-plus-white-vooraanzicht_8_11zon.webp',
            '/images/products/Kazumi-plus-Black-vooraanzicht_6_11zon.webp'
          ]
        },
        { 
          name: 'Seiya', 
          features: ['Budget-friendly', 'Reliable', 'Easy maintenance'],
          images: ['/images/products/Seiya-plus-wit-vooraanzicht_12_11zon.webp']
        }
      ]
    },
    {
      brand: 'Tosot',
      description: 'Uitstekende prijs-kwaliteitverhouding',
      models: [
        { 
          name: 'Pular', 
          features: ['WiFi control', 'I-Feel functie', 'Turbo mode'],
          images: ['/images/products/568-Pular-indoor-vooraanzicht.webp', '/images/products/570-Pular-indoor-right.webp']
        },
        { 
          name: 'Clivia', 
          features: ['Golden fin', 'Sleep mode', '4-way airflow'],
          images: [
            '/images/products/724-clivia-wit-vooraanzicht.webp',
            '/images/products/712-clivia-zwart-vooraanzicht.webp'
          ]
        },
        { 
          name: 'Cosmo', 
          features: ['Elegant design', 'Quiet operation', 'Energy saving'],
          images: ['/images/products/787-cosmo-indoor-vooraanzicht.webp', '/images/products/788-cosmo-indoor.webp']
        }
      ]
    }
  ];

  const getImageIndex = (brand: string, modelName: string) => {
    const key = `${brand}-${modelName}`;
    return selectedImages[key] || 0;
  };

  const setImageIndex = (brand: string, modelName: string, index: number) => {
    setSelectedImages(prev => ({
      ...prev,
      [`${brand}-${modelName}`]: index
    }));
  };

  const goToPrevious = (brand: string, modelName: string, imagesLength: number) => {
    const currentIndex = getImageIndex(brand, modelName);
    const newIndex = currentIndex === 0 ? imagesLength - 1 : currentIndex - 1;
    setImageIndex(brand, modelName, newIndex);
  };

  const goToNext = (brand: string, modelName: string, imagesLength: number) => {
    const currentIndex = getImageIndex(brand, modelName);
    const newIndex = (currentIndex + 1) % imagesLength;
    setImageIndex(brand, modelName, newIndex);
  };

  return (
    <>
      <Helmet>
        <title>Airco Merken & Modellen - Daikin, LG, Samsung | Airco Bedrijf Limburg</title>
        <meta name="description" content="Overzicht van alle airco merken die wij installeren: Daikin, LG, Samsung, Mitsubishi, Toshiba, Tosot. Split airco & mobiele airco's voor heel Limburg." />
        <meta name="keywords" content="daikin airco limburg, lg airco limburg, samsung airco limburg, mitsubishi airco limburg, toshiba airco limburg, tosot airco limburg, split airco limburg, mobiele airco limburg" />
        <link rel="canonical" href="https://aircobedrijflimburg.nl/producten" />
      </Helmet>

      <div className="pt-24 pb-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Airco Merken Limburg - Daikin, LG, Samsung, Toshiba
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij installeren alle topmerken airconditioners. Onze experts adviseren u graag 
              welk model het beste bij uw situatie past.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Actuele 2025 Productinformatie & Prijzen
                </h3>
                <p className="text-blue-800 text-sm md:text-base">
                  Voor de meest recente specificaties, prijzen en beschikbaarheid neem contact met ons op. 
                  Wij hebben realtime toegang tot voorraad en actuele prijzen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a href="tel:0462021430" className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Bel direct</span>
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg border border-blue-300 transition-colors">
                  <span>Online advies</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 md:p-8">
                  <div className="flex items-center space-x-4">
                    {product.logo && (
                      <img 
                        src={product.logo} 
                        alt={`${product.brand} logo`}
                        className="h-12 md:h-16 object-contain"
                      />
                    )}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{product.brand}</h2>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.models.map((model, idx) => {
                      const currentImageIndex = getImageIndex(product.brand, model.name);
                      return (
                        <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                          {model.images && model.images.length > 0 ? (
                            <div className="relative h-64 bg-white group">
                              <img 
                                src={model.images[currentImageIndex]} 
                                alt={`${product.brand} ${model.name}`}
                                className="w-full h-full object-contain p-4"
                              />
                              {model.images.length > 1 && (
                                <>
                                  <button
                                    onClick={() => goToPrevious(product.brand, model.name, model.images.length)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Vorige afbeelding"
                                  >
                                    <ChevronLeft className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => goToNext(product.brand, model.name, model.images.length)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Volgende afbeelding"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </button>
                                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                                    {model.images.map((_, imgIdx) => (
                                      <button
                                        key={imgIdx}
                                        onClick={() => setImageIndex(product.brand, model.name, imgIdx)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                          imgIdx === currentImageIndex 
                                            ? 'bg-orange-500 w-6' 
                                            : 'bg-gray-400 hover:bg-gray-600'
                                        }`}
                                        aria-label={`Ga naar afbeelding ${imgIdx + 1}`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          ) : (
                            <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <div className="text-center p-4">
                                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                                  <Info className="w-8 h-8 text-gray-500" />
                                </div>
                                <p className="text-gray-500 text-sm">Afbeelding volgt</p>
                              </div>
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {product.brand} {model.name}
                            </h3>
                            <ul className="space-y-2 mb-4">
                              {model.features.map((feature, fidx) => (
                                <li key={fidx} className="flex items-start space-x-2">
                                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Link 
                              to="/contact" 
                              className="text-orange-500 hover:text-orange-600 font-medium text-sm inline-flex items-center space-x-1"
                            >
                              <span>Meer info & prijzen</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mobiele Airco's
              </h2>
              <p className="text-gray-600 mb-6">
                Voor flexibele koeling zonder vaste installatie. Wij leveren mobiele 
                airco's van LG en Tosot, perfect voor huurwoningen of tijdelijke oplossingen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Direct inzetbaar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Verplaatsbaar tussen ruimtes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Geen installatie nodig</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Bekijk mobiele airco's</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Airco Covers
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img 
                  src="/images/products/airco-covers/aircocover-wit.webp" 
                  alt="Airco cover wit"
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/images/products/airco-covers/aircocover-antraciet.webp" 
                  alt="Airco cover antraciet"
                  className="rounded-lg shadow-md"
                />
              </div>
              <p className="text-gray-600 mb-6">
                Bescherm uw buitenunit tegen weersinvloeden met onze hoogwaardige 
                airco covers, verkrijgbaar in wit en antraciet.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Weerbestendig materiaal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Verlengt levensduur unit</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-secondary inline-flex items-center space-x-2">
                <span>Bestel airco cover</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
              Onze experts helpen u graag met het selecteren van de perfecte airco voor uw situatie. 
              Krijg persoonlijk advies en een offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0462021430" className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-4 px-8 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors">
                <Phone className="w-5 h-5" />
                <span>046 202 1430</span>
              </a>
              <Link to="/contact" className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center justify-center space-x-2 transition-colors">
                <span>Gratis adviesgesprek</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;