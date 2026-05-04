export default function PriceFactors() {
  const factors = [
    {
      title: 'Ölçüler',
      description: 'Büyük boyutlar daha fazla malzeme gerektirir. <strong>Genişlik ve yükseklik</strong> fiyatı belirler.',
    },
    {
      title: 'Model Seçimi',
      description: 'Her modelin üretim maliyeti farklıdır. <em>Zip perde</em> daha pahalıdır.',
    },
    {
      title: 'Malzeme Kalitesi',
      description: 'Premium malzemeler daha dayanıklıdır. <u>Alüminyum profil</u> kaliteyi artırır.',
    },
    {
      title: 'Renk Seçeneği',
      description: 'Standart renkler ekonomiktir. <strong>Özel renkler</strong> ek maliyet gerektirir.',
    },
    {
      title: 'Adet Miktarı',
      description: 'Toplu alımlarda indirim uygulanır. <em>Proje bazlı</em> fiyatlandırma yapılır.',
    },
    {
      title: 'Montaj Hizmeti',
      description: 'Kurulum desteği isteğe bağlıdır. <u>Profesyonel montaj</u> ek ücretlidir.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Fiyatı Etkileyen Faktörler
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Şeffaf fiyatlandırma politikası. <strong>Ne ödediğinizi bilin.</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((factor, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#83bd81]/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#83bd81]">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#404e5e] mb-3" dangerouslySetInnerHTML={{ __html: factor.title }} />
              <p className="text-[#404e5e]/70 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: factor.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
