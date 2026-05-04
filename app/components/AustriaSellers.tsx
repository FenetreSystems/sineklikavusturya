export default function AustriaSellers() {
  const sellers = [
    {
      company: "Fenster & Türen Meister",
      location: "Viyana",
      description: "Avusturya'nın en büyük pencere ve kapı uzmanları. 25 yıllık deneyim. Sineklik montajı profesyonel ekiple.",
      services: ["Montaj", "Servis", "Yedek Parça"],
      phone: "+43 1 2345678"
    },
    {
      company: "Insektenschutz Austria",
      location: "Graz",
      description: "Sadece sineklik sistemleri üzerine uzmanlaşmış firma. Plise ve zip sistemler konusunda lider.",
      services: ["Sineklik", "Plise", "Zip Sistem"],
      phone: "+43 316 123456"
    },
    {
      company: "Bauzentrum Salzburg",
      location: "Salzburg",
      description: "İnşaat malzemeleri ve sineklik sistemleri. Proje bazlı büyük işler için ideal partner.",
      services: ["Proje", "Toplu Satış", "Montaj"],
      phone: "+43 662 987654"
    },
    {
      company: "Fensterwerk Innsbruck",
      location: "Innsbruck",
      description: "Tirol bölgesinin en güvenilir sineklik tedarikçisi. Turistik oteller için özel çözümler.",
      services: ["Otel Proje", "Montaj", "Bakım"],
      phone: "+43 512 456789"
    },
    {
      company: "Haustech Linz",
      location: "Linz",
      description: "Yüksek teknolojik sineklik sistemleri. Motorlu ve akıllı çözümler uzmanı.",
      services: ["Motorlu Sistem", "Akıllı Kontrol", "Proje"],
      phone: "+43 732 789012"
    },
    {
      company: "Fensterprofi Klagenfurt",
      location: "Klagenfurt",
      description: "Kärnten bölgesinin sineklik lideri. Özel ölçü üretim ve kurulum.",
      services: ["Özel Üretim", "Kurulum", "Servis"],
      phone: "+43 463 345678"
    }
  ];

  return (
    <section id="sellers" className="py-16 bg-gradient-to-br from-[#404e5e] via-[#354252] to-[#2d3a47] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#83bd81]/20 rounded-full border border-[#83bd81]/30 mb-6">
            <span className="text-sm font-semibold text-[#83bd81]">Avusturya İş Ortakları</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Avusturya'da Sineklik Satıcı ve Montajcılar
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> satın almak isteyenler için güvenilir iş ortaklarımız. 
            <em>Profesyonel montaj</em>, <u>uzun ömürlü</u> kullanım. Her bölgede <strong>sertifikalı</strong> 
            satıcı ve montajcılarımız mevcuttur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellers.map((seller, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:border-[#83bd81]/50">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#83bd81] mb-2">{seller.company}</h3>
                <div className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {seller.location}
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{seller.description}</p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-[#83bd81] mb-2">Hizmetler:</p>
                <div className="flex flex-wrap gap-2">
                  {seller.services.map((service, i) => (
                    <span key={i} className="px-2 py-1 bg-[#83bd81]/20 text-white text-xs rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <a href={`tel:${seller.phone}`} className="inline-flex items-center text-[#83bd81] hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {seller.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold mb-4 text-center">Neden İş Ortaklarımızı Seçmelisiniz?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#83bd81] mb-2">25+</div>
              <p className="text-gray-300 text-sm">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#83bd81] mb-2">5000+</div>
              <p className="text-gray-300 text-sm">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#83bd81] mb-2">%98</div>
              <p className="text-gray-300 text-sm">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
