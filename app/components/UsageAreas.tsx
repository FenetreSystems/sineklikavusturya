export default function UsageAreas() {
  const areas = [
    { name: "Ev", desc: "Tüm odalar için ideal çözüm.", icon: "🏠" },
    { name: "Ofis", desc: "Çalışma ortamları için.", icon: "🏢" },
    { name: "Hotel", desc: "Konaklama tesisleri için.", icon: "🏨" },
    { name: "Restoran", desc: "Açık alanlar için.", icon: "🍽️" },
    { name: "Cafe", desc: "Balkon ve teraslar.", icon: "☕" },
    { name: "Villa", desc: "Geniş pencereler için.", icon: "🏡" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Kullanım Alanları
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> sistemleri her mekana uyar. 
            <em>Evden ofise</em>, <u>her alanda</u> kullanılır.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-[#404e5e] mb-2">{area.name}</h3>
              <p className="text-gray-600">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
