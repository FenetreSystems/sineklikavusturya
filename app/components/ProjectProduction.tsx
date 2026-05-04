export default function ProjectProduction() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Proje ve Toplu Üretim
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> için büyük projelerde <em>özel fiyat</em> 
            ve <u>hızlı üretim</u> imkanı.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#83bd81]/10 to-transparent rounded-2xl p-8 border border-[#83bd81]/30">
            <h3 className="text-2xl font-bold text-[#404e5e] mb-4">Otel Projeleri</h3>
            <p className="text-gray-600 mb-4">
              Oteller için <strong>toplu üretim</strong>. Her oda için özel ölçü. 
              <em>Kurulum desteği</em> sağlanır.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#83bd81] rounded-full mr-3"></span>
                Minimum 50 adet sipariş
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#83bd81] rounded-full mr-3"></span>
                Özel fiyatlandırma
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#83bd81] rounded-full mr-3"></span>
                Ücretsiz kurulum danışmanlığı
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#83bd81]/10 to-transparent rounded-2xl p-8 border border-[#83bd81]/30">
            <h3 className="text-2xl font-bold text-[#404e5e] mb-4">Konut Projeleri</h3>
            <p className="text-gray-600 mb-4">
              Site ve apartman projeleri için <strong>hazır çözümler</strong>. 
              <u>Tek noktadan</u> tedarik.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#83bd81] rounded-full mr-3"></span>
                Minimum 20 daire
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#83bd81] rounded-full mr-3"></span>
                Proje discount
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#83bd81] rounded-full mr-3"></span>
                Aynı gün sevkiyat
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
