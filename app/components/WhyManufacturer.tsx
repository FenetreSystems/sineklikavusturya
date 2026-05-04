export default function WhyManufacturer() {
  const reasons = [
    {
      title: 'Doğrudan Üreticiden',
      description: 'Aracı olmadan doğrudan üreticiden alışveriş yapın. Bu sayede <strong>en uygun fiyat</strong> avantajını yakalayın.',
    },
    {
      title: 'Kalite Kontrolü',
      description: 'Her ürün titizlikle kontrol edilir. <em>Kusursuz işçilik</em> standartlarımızdan ödün vermiyoruz.',
    },
    {
      title: 'Özel Tasarım',
      description: 'Size özel ölçülerde üretim yapıyoruz. <u>Demonte paket</u> şeklinde kolay kurulum sağlıyoruz.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Neden Üreticiden Almalısınız?
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Aracıları ortadan kaldırın. <strong>Avusturya sineklik</strong> ihtiyaçlarınızı doğrudan kaynaktan karşılayın.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#83bd81]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-[#83bd81]">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-[#404e5e] mb-4" dangerouslySetInnerHTML={{ __html: reason.title }} />
              <p className="text-[#404e5e]/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: reason.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
