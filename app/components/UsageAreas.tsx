export default function UsageAreas() {
  const areas = [
    {
      name: 'Evler',
      description: 'Konforlu yaşam alanları için ideal.',
      details: ['Yatak Odası', 'Oturma Odası', 'Mutfak', 'Banyo'],
    },
    {
      name: 'Ofisler',
      description: 'Profesyonel çalışma ortamları.',
      details: ['Toplantı Odası', 'Çalışma Alanı', 'Lobi', 'Yönetici Odası'],
    },
    {
      name: 'Oteller',
      description: 'Misafir memnuniyeti için.',
      details: ['Oda', 'Lobi', 'Restoran', 'Spor Salonu'],
    },
    {
      name: 'Restoranlar',
      description: 'Hijyenik ve şık ortamlar.',
      details: ['Salon', 'Teras', 'Kapı', 'Pencere'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Kullanım Alanları
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Her mekan için uygun çözümler. <strong>Avusturya sineklik</strong> sistemleri geniş kullanım alanına sahiptir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-[#83bd81]/10 to-[#83bd81]/5 rounded-2xl p-6 border border-[#83bd81]/20">
              <h3 className="text-xl font-bold text-[#404e5e] mb-3">{area.name}</h3>
              <p className="text-[#404e5e]/70 mb-4">{area.description}</p>
              <ul className="space-y-2">
                {area.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-[#404e5e]/60 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#83bd81] rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
