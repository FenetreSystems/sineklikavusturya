export default function NeighborCountries() {
  const countries = [
    {
      name: "Almanya",
      description: "Avusturya'nın kuzey komşusu. Avrupa'nın en büyük pazarı. Berlin, Münih, Hamburg, Frankfurt, Köln, Stuttgart, Düsseldorf gibi büyük şehirlerde sineklik ihtiyacı yüksek. Oteller, evler ve ofisler için ideal çözümler. 4-8 gün teslimat.",
      cities: ["Berlin", "Münih", "Hamburg", "Frankfurt", "Köln", "Stuttgart", "Düsseldorf"],
      population: "83 Milyon"
    },
    {
      name: "Hollanda",
      description: "Kuzeybatı komşu. Amsterdam, Rotterdam, Lahey, Utrecht, Eindhoven gibi şehirler. Turistik bölgelerde yoğun sineklik talebi. Kanal evleri ve modern mimari için özel çözümler. 4-6 gün teslimat.",
      cities: ["Amsterdam", "Rotterdam", "Lahey", "Utrecht", "Eindhoven"],
      population: "17 Milyon"
    },
    {
      name: "Fransa",
      description: "Batı komşu. Paris, Lyon, Marsilya, Nice, Strasbourg gibi büyük şehirler. Turistik destinasyonlarda sineklik ihtacı yüksek. Chateau ve villalar için özel ölçü üretim. 5-7 gün teslimat.",
      cities: ["Paris", "Lyon", "Marsilya", "Nice", "Strasbourg"],
      population: "67 Milyon"
    },
    {
      name: "Belçika",
      description: "Kuzeybatı komşu. Brüksel, Antwerp, Gent, Liège, Bruges gibi şehirler. Avrupa Birliği merkezi Brüksel'de ofisler için ideal. Tarihi binalar için özel çözümler. 4-6 gün teslimat.",
      cities: ["Brüksel", "Antwerp", "Gent", "Liège", "Bruges"],
      population: "11.5 Milyon"
    },
    {
      name: "Lihtenştayn",
      description: "Küçük batı komşu. Vaduz şehri. Zengin müşteri kitlesi için premium sineklik sistemleri. Villa ve lüks konutlar için özel üretim. 3-5 gün teslimat.",
      cities: ["Vaduz", "Schaan", "Balzers"],
      population: "39.000"
    },
    {
      name: "Lüksemburg",
      description: "Batı komşu. Lüksemburg şehri. Finans merkezi, ofis binaları için ideal. Yüksek standartlarda sineklik sistemleri. Proje bazlı toplu üretim. 4-6 gün teslimat.",
      cities: ["Lüksemburg", "Esch-sur-Alzette", "Differdange"],
      population: "634.000"
    },
    {
      name: "İsviçre",
      description: "Güney komşu. Zürih, Cenevre, Basel, Bern, Lausanne gibi şehirler. Turistik dağ evleri ve chalet'ler için ideal. Özel ölçü üretim, kurulum desteği. 5-7 gün teslimat.",
      cities: ["Zürih", "Cenevre", "Basel", "Bern", "Lausanne"],
      population: "8.7 Milyon"
    }
  ];

  return (
    <section id="countries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#83bd81]/20 rounded-full border border-[#83bd81]/30 mb-6">
            <span className="text-sm font-semibold text-[#83bd81]">Avrupa Hizmet Ağı</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Komşu Ülkeler Hizmet Bölgeleri
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> hizmeti komşu ülkelerde de mevcut. <em>Almanya'dan</em> 
            <u>İsviçre'ye</u> kadar tüm Avrupa'ya teslimat. Her ülkenin <strong>şehirlerine</strong> özel hizmet.
            Premium kalite, hızlı teslimat, profesyonel destek.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:border-[#83bd81]/30">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-[#404e5e]">{country.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{country.description}</p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-[#83bd81] mb-2">Şehirler:</p>
                <div className="flex flex-wrap gap-2">
                  {country.cities.map((city, i) => (
                    <span key={i} className="px-2 py-1 bg-[#83bd81]/10 text-[#404e5e] text-xs rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 001 3 0 11-6 0 3 001 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {country.population}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#404e5e] to-[#354252] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Avrupa Geneli Hizmet Avantajları</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#83bd81] mb-2">7</div>
              <p className="text-gray-300 text-sm">Ülke</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#83bd81] mb-2">50+</div>
              <p className="text-gray-300 text-sm">Şehir</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#83bd81] mb-2">4-8</div>
              <p className="text-gray-300 text-sm">Gün Teslimat</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#83bd81] mb-2">2 Yıl</div>
              <p className="text-gray-300 text-sm">Garanti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
