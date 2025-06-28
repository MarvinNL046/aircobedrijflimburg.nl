const BrandLogos = () => {
  const brands = [
    { name: 'Daikin', models: ['Comfora', 'Emura', 'Stylish', 'Perfera', 'Ururu Sarara'] },
    { name: 'LG', models: ['ArtCool', 'DualCool Premium'] },
    { name: 'Samsung', models: ['WindFree series', 'Luzon'] },
    { name: 'Mitsubishi', models: ['Heavy Industries'] },
    { name: 'Toshiba', models: ['Haori', 'Daiseikai', 'Kazumi', 'Seiya'] },
    { name: 'Tosot', models: ['Pular', 'Clivia', 'Cosmo'] }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Airco Merken Limburg - Daikin, LG, Samsung & Meer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als onafhankelijk installateur werken wij met alle A-merken airconditioners. 
            Wij adviseren het merk dat het beste bij uw situatie past.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  {brand.name}
                </div>
              </div>
              <div className="text-xs text-gray-500 text-center">
                {brand.models.length > 2 
                  ? `${brand.models.slice(0, 2).join(', ')}...`
                  : brand.models.join(', ')
                }
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ook installatie van mobiele airco's van LG en Tosot • 
            Airco covers verkrijgbaar in wit en antraciet
          </p>
          <a href="/contact" className="text-orange-500 font-semibold hover:text-orange-600">
            Hulp bij het kiezen van het juiste merk? →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;