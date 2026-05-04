export default function AustrianRegions() {
  const regions = [
    {
      name: 'Viyana',
      description: 'Avusturya\'nın başkenti ve en büyük şehri. <strong>2 milyonun üzerinde</strong> nüfus.',
      details: 'Tüm ilçelere hizmet veriyoruz. Innere Stadt, Leopoldstadt, Landstraße dahil.',
    },
    {
      name: 'Graz',
      description: 'Styria eyaletinin başkenti. <em>Öğrenci şehri</em> olarak bilinir.',
      details: 'Historik merkez ve yeni bölgelere hızlı teslimat.',
    },
    {
      name: 'Linz',
      description: 'Upper Austria eyaletinin başkenti. <u>Sanat ve kültür</u> merkezi.',
      details: 'Endüstriyel bölgeye yakın bölgelere özel hizmet.',
    },
    {
      name: 'Salzburg',
      description: 'Mozart\'ın doğum yeri. <strong>Turistik</strong> bir şehir.',
      details: 'Altstadt ve çevre bölgelere kapıya teslim.',
    },
    {
      name: 'Innsbruck',
      description: 'Tirol eyaletinin başkenti. <em>Dağ şehri</em> olarak ünlü.',
      details: 'Alpler eteklerindeki tüm bölgelere hizmet.',
    },
    {
      name: 'Klagenfurt',
      description: 'Carinthia eyaletinin başkenti. <u>Göl şehri</u> olarak bilinir.',
      details: 'Wörthersee çevresindeki bölgelere özel teslimat.',
    },
    {
      name: 'Villach',
      description: 'Carinthia\'nın ikinci büyük şehri. <strong>Ticaret</strong> merkezi.',
      details: 'İtalya sınırına yakın bölgelere hızlı kargo.',
    },
    {
      name: 'Wels',
      description: 'Upper Austria\'nın ikinci büyük şehri. <em>Endüstriyel</em> önem taşıyor.',
      details: 'Fabrika ve sanayi bölgelerine özel çözümler.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Hizmet Bölgeleri
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Avusturya\'nın <strong>tüm eyaletlerine</strong> hizmet veriyoruz. 4-8 gün içinde kapınıza teslim.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#83bd81] mb-3" dangerouslySetInnerHTML={{ __html: region.name }} />
              <p className="text-[#404e5e]/70 mb-3 text-sm" dangerouslySetInnerHTML={{ __html: region.description }} />
              <p className="text-[#404e5e]/60 text-xs leading-relaxed">{region.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
