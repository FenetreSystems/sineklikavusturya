export default function CustomProduction() {
  const steps = [
    { step: '1', title: 'Ölçü Alma', description: 'Pencere ölçülerinizi hassas şekilde alın.' },
    { step: '2', title: 'Sipariş Verme', description: 'Ölçülerinizle siparişinizi oluşturun.' },
    { step: '3', title: 'Üretim', description: 'Özel olarak sizin için üretiyoruz.' },
    { step: '4', title: 'Paketleme', description: 'Demonte şekilde güvenli paketleme.' },
    { step: '5', title: 'Kargo', description: 'Türkiye\'den Avusturya\'ya gönderim.' },
    { step: '6', title: 'Teslimat', description: '4-8 gün içinde kapınıza teslim.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Ölçüye Özel Üretim Süreci
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Siparişten teslimata kadar <strong>6 adımlı</strong> profesyonel süreç.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-[#83bd81]/10 rounded-2xl p-6 border-2 border-[#83bd81]">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-12 h-12 bg-[#83bd81] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#404e5e]">{item.title}</h3>
                </div>
                <p className="text-[#404e5e]/70">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-[#83bd81]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
