export default function Dealership() {
  const steps = [
    {
      step: "01",
      title: "Başvuru",
      desc: "WhatsApp üzerinden iletişime geçin, kısa form doldurun. 24 saat içinde yanıt alırsınız."
    },
    {
      step: "02",
      title: "Görüşme",
      desc: "Detaylı görüşme yapılır. Bölge, hedefler ve beklentiler konuşulur. Özel teklif sunulur."
    },
    {
      step: "03",
      title: "Sözleşme",
      desc: "Basit bayilik sözleşmesi imzalanır. Ücretsizdir, gizli maliyet yoktur. Anında başlayın."
    },
    {
      step: "04",
      title: "Eğitim",
      desc: "Ürün eğitimi verilir. Teknik detaylar, satış teknikleri anlatılır. Destek sağlanır."
    },
    {
      step: "05",
      title: "Satış",
      desc: "Sipariş almaya başlayın. WhatsApp üzerinden kolay sipariş. Hızlı teslimat."
    },
    {
      step: "06",
      title: "Kazanç",
      desc: "%40 kâr marjı ile kazanın. Esnek çalışma saatleri. Kendi patronunuz olun."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#404e5e] via-[#354252] to-[#2d3a47] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#83bd81]/20 rounded-full border border-[#83bd81]/30 mb-6">
            <span className="text-sm font-semibold text-[#83bd81]">0€ Bayilik Ücreti</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bayilik Verme Süreci
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> distribütörü olmak 6 adımda. <em>Ücretsiz</em> 
            bayilik, <u>%40 kâr marjı</u>, esnek çalışma. Giriş bariyeri yok, hemen başlayın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
            <div className="text-6xl font-bold text-[#83bd81] mb-3">%40</div>
            <p className="text-xl text-gray-300 font-semibold">Kâr Marjı</p>
            <p className="text-sm text-gray-400 mt-2">Her satıştan yüksek kazanç</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
            <div className="text-6xl font-bold text-[#83bd81] mb-3">0€</div>
            <p className="text-xl text-gray-300 font-semibold">Bayilik Ücreti</p>
            <p className="text-sm text-gray-400 mt-2">Giriş bariyeri yok</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
            <div className="text-6xl font-bold text-[#83bd81] mb-3">7/24</div>
            <p className="text-xl text-gray-300 font-semibold">Destek</p>
            <p className="text-sm text-gray-400 mt-2">WhatsApp üzerinden ulaşın</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Bayilik Süreci Adımları</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#83bd81]/50 transition-all">
                <div className="text-[#83bd81] text-4xl font-bold mb-3">{item.step}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-[#83bd81]">Bayilik Avantajları</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Ücretsiz Bayilik</strong>
                  <p className="text-gray-300 text-sm">Giriş ücreti yok, gizli maliyet yok. Hemen başlayın.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Düşük Stok Maliyeti</strong>
                  <p className="text-gray-300 text-sm">Sipariş üzerine üretim, stok tutma zorunluluğu yok.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Pazarlama Desteği</strong>
                  <p className="text-gray-300 text-sm">Ücretsiz katalog, broşür ve dijital materyaller.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Ürün Eğitimi</strong>
                  <p className="text-gray-300 text-sm">Kapsamlı eğitim, teknik destek, satış danışmanlığı.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-[#83bd81]">Bölge ve Destek</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Bölge Koruması</strong>
                  <p className="text-gray-300 text-sm">Avusturya genelinde ayrıcalıklı bölge ataması.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Hızlı Teslimat</strong>
                  <p className="text-gray-300 text-sm">4-8 gün içinde müşteriye teslimat garantisi.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Esnek Çalışma</strong>
                  <p className="text-gray-300 text-sm">Kendi saatlerinizi belirleyin, tam zamanlı veya yarı zamanlı.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3 flex-shrink-0 mt-1">✓</div>
                <div>
                  <strong className="text-white block">Sınırsız Kazanç</strong>
                  <p className="text-gray-300 text-sm">Satış limiti yok, ne kadar satar, o kadar kazanırsın.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="https://wa.me/905403363873?text=Bayilik%20hakkında%20detaylı%20bilgi%20almak%20istiyorum.%20Süreç%20nedir?" className="inline-flex items-center px-10 py-5 bg-[#83bd81] text-[#404e5e] font-bold text-lg rounded-lg hover:bg-[#72a870] transition-all transform hover:scale-105 shadow-lg shadow-[#83bd81]/30">
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Bayilik Başvurusu İçin WhatsApp
          </a>
          <p className="text-gray-400 text-sm mt-4">24 saat içinde yanıt alırsınız</p>
        </div>
      </div>
    </section>
  );
}
