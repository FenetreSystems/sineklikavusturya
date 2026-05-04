export default function PriceFactors() {
  const factors = [
    {
      factor: "Ölçüler",
      desc: "Büyüklük fiyatı etkiler. Daha büyük pencereler daha fazla malzeme gerektirir.",
      impact: "Orta"
    },
    {
      factor: "Model Seçimi",
      desc: "Plise ve zip modelleri klasik sinekliklerden daha pahalıdır.",
      impact: "Yüksek"
    },
    {
      factor: "Malzeme Kalitesi",
      desc: "Premium alüminyum ve fiberglass fiyatı yükseltir ama ömrü uzatır.",
      impact: "Yüksek"
    },
    {
      factor: "Adet",
      desc: "Toplu siparişlerde adet başına fiyat düşer. Proje discount uygulanır.",
      impact: "Düşüş"
    },
    {
      factor: "Renk Seçimi",
      desc: "Standart renkler daha ucuz, özel renkler ek maliyet gerektirir.",
      impact: "Düşük"
    },
    {
      factor: "Teslimat Bölgesi",
      desc: "Avusturya içindeki konuma göre kargo ücreti değişebilir.",
      impact: "Düşük"
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Fiyatı Etkileyen Faktörler
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> fiyatları birçok faktöre göre belirlenir. 
            <em>Bilinçli</em> karar verin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {factors.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#83bd81] transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[#404e5e]">{item.factor}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  item.impact === "Yüksek" ? "bg-red-100 text-red-700" :
                  item.impact === "Orta" ? "bg-yellow-100 text-yellow-700" :
                  item.impact === "Düşüş" ? "bg-green-100 text-green-700" :
                  "bg-gray-100 text-gray-700"
                }`}>
                  {item.impact}
                </span>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#83bd81]/5 rounded-2xl p-8 border border-[#83bd81]/20">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-4 text-center">
            Ücretsiz Fiyat Teklifi
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
            <strong>Avusturya sineklik</strong> için net fiyat almak istiyorsanız, 
            <em>ölçülerinizi</em> WhatsApp'tan gönderin. <u>1 saat içinde</u> teklif verilir.
          </p>
          <div className="text-center">
            <a href="https://wa.me/905403363873" className="inline-flex items-center px-8 py-4 bg-[#83bd81] text-[#404e5e] font-bold rounded-lg hover:bg-[#72a870] transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp'tan Teklif Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
