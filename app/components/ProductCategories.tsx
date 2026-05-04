export default function ProductCategories() {
  const categories = [
    {
      name: 'Sineklik',
      description: 'Pencereleriniz için en iyi koruma',
      subTypes: ['Sabit Sineklik', 'Menteşeli Sineklik', 'Sürmeli Sineklik'],
    },
    {
      name: 'Plise Sineklik',
      description: 'Katlanır tasarım, maksimum alan tasarrufu',
      subTypes: ['Tavan Plise', 'Yatay Plise', 'Dikey Plise'],
    },
    {
      name: 'Plise Perde',
      description: 'Elegan görünüm, mükemmel ısı yalıtımı',
      subTypes: ['Blackout Plise', 'Transparan Plise', 'Yarı Transparan'],
    },
    {
      name: 'Jaluzi Perde',
      description: 'Klasik stil, profesyonel kontrol',
      subTypes: ['Alüminyum Jaluzi', 'Ahşap Jaluzi', 'PVC Jaluzi'],
    },
    {
      name: 'Honeycomb Perde',
      description: 'Bal peteği yapısı, üstün yalıtım',
      subTypes: ['Tek Hücre', 'Çift Hücre', 'Triple Hücre'],
    },
    {
      name: 'Zip Perde',
      description: 'Sıkı bağlantı, tam koruma',
      subTypes: ['Manual Zip', 'Motorlu Zip', 'Akıllı Zip'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Ürün Kategorileri
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Her ihtiyaca uygun çözümler. <strong>Avusturya sineklik</strong> çeşitlerimizle evinizi koruyun.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold text-[#83bd81] mb-3">{category.name}</h3>
              <p className="text-[#404e5e]/70 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.subTypes.map((sub, subIndex) => (
                  <li key={subIndex} className="text-[#404e5e]/60 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#83bd81] rounded-full"></span>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
