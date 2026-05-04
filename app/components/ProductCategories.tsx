export default function ProductCategories() {
  const categories = [
    {
      name: "Sineklik",
      desc: "Pencere ve kapılar için yüksek kaliteli sineklik sistemleri. Sivrisineklere karşı tam koruma sağlar, hava sirkülasyonunu engellemez. Dayanıklı alüminyum profiller, yırtılmaz fiberglass file. Her pencere için özel ölçüde üretilir. Kolay kurulum, uzun ömürlü kullanım.",
      icon: "🪟",
      models: ["Yana Kayar", "Sürtünme", "Menteşeli", "Kare"]
    },
    {
      name: "Plise Sineklik",
      desc: "Akıllı katlanır sistem, estetik ve fonksiyonel. Pencereye tam uyum sağlar, kullanılmadığında katlanır. Geniş açıklıklar için idealdir. Tavan pencerelerinde de kullanılabilir. Premium kumaş seçenekleri, renk çeşitliliği. Isı yalıtımı özelliği de mevcuttur.",
      icon: "🎯",
      models: ["Tavan", "Yana", "Köşe", "Panjur"]
    },
    {
      name: "Plise Perde",
      desc: "Modern katlanır perde, ısı yalıtımı sağlar. Güneş ışığını kontrol eder, enerji tasarrufu sağlar. Dayanıklı kumaşlar, kolay temizlik. Dekoratif görünüm, geniş renk paleti. Motorlu seçenekler de mevcuttur. Ofis ve evler için ideal.",
      icon: "🏠",
      models: ["Tek Kat", "Çift Kat", "Daylight", "Blackout"]
    },
    {
      name: "Jaluzi Perde",
      desc: "Klasik alüminyum jaluzi, ışık kontrolü. Paslanmaz alüminyum lameller, uzun ömürlü. Işığı hassas bir şekilde ayarlama imkanı. Farklı genişlik seçenekleri, renk çeşitliliği. Ofisler için profesyonel görünüm. Kolay temizlik ve bakım.",
      icon: "☀️",
      models: ["16mm", "25mm", "35mm", "50mm"]
    },
    {
      name: "Honeycomb Perde",
      desc: "Arı kovanı yapısı, maksimum ısı yalıtımı. Özel hücre yapısı, ısı transferini azaltır. Enerji tasarrufu sağlar, çevre dostudur. Yüksek ses yalıtımı özelliği. Premium kumaşlar, geniş renk seçenekleri. Motorlu ve manuel seçenekler mevcuttur.",
      icon: "🔲",
      models: ["Tek Hücre", "Çift Hücre", "Triple Hücre"]
    },
    {
      name: "Zip Perde",
      desc: "Sivrisinek kilitli sistem, tam koruma. Özel zip mekanizması, sineklerin girmesini engeller. Rüzgarlı bölgeler için idealdir. Teras ve balkonlarda kullanılır. Dayanıklı kumaşlar, uzun ömürlü. Motorlu seçenekler, kolay kullanım.",
      icon: "🔒",
      models: ["Sert Zip", "Yumuşak Zip", "Motorlu"]
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Ürün Kategorilerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> ihtiyacınız için geniş ürün yelpazesi. Her model 
            <em>ölçüye özel</em> üretilir. Premium kalite, uzun ömürlü kullanım. 2 yıl garanti, 
            <u>4-8 gün</u> teslimat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-[#404e5e] mb-3">{cat.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{cat.desc}</p>
              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-[#83bd81] mb-2">Modeller:</p>
                <div className="flex flex-wrap gap-2">
                  {cat.models.map((model, i) => (
                    <span key={i} className="px-3 py-1 bg-[#83bd81]/10 text-[#404e5e] text-sm rounded-full">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
