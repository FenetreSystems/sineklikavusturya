export default function AustriaCities() {
  const cities = [
    {
      name: "Viyana",
      desc: "Başkent ve en büyük şehir. Tarihi ve modern mimarinin buluşması.",
      population: "1.9 Milyon"
    },
    {
      name: "Graz",
      desc: "İkinci büyük şehir. Üniversite şehri, genç nüfus.",
      population: "290.000"
    },
    {
      name: "Linz",
      desc: "Sanayi ve teknoloji merkezi. Donau nehri kıyısında.",
      population: "205.000"
    },
    {
      name: "Salzburg",
      desc: "Mozart'ın şehri. Turizm ve kültür başkenti.",
      population: "155.000"
    },
    {
      name: "Innsbruck",
      desc: "Kış turizmi merkezi. Alpler'in kalbinde.",
      population: "132.000"
    },
    {
      name: "Klagenfurt",
      desc: "Göl şehri. Doğa ve spor tutkunları için ideal.",
      population: "100.000"
    },
    {
      name: "Villach",
      desc: "İtalya sınırında. Ticaret ve geçiş noktası.",
      population: "65.000"
    },
    {
      name: "Wels",
      desc: "Sanayi şehri. Linz yakınlarında stratejik konum.",
      population: "60.000"
    }
  ];

  return (
    <section id="regions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Avusturya Hizmet Bölgeleri
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> hizmeti tüm eyaletlerde. <em>Viyana'dan</em> 
            <u>Innsbruck'a</u> kadar kapınıza teslim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#83bd81] transition-colors">
              <h3 className="text-xl font-bold text-[#404e5e] mb-2">{city.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{city.desc}</p>
              <p className="text-[#83bd81] font-semibold text-sm">{city.population}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#83bd81]/5 rounded-2xl p-8 border border-[#83bd81]/20">
          <h3 className="text-2xl font-bold text-[#404e5e] mb-4 text-center">
            Tüm Eyaletlere Teslimat
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> sistemleri 9 federal eyalete teslim edilir. 
            <em>Viyana, Aşağı Avusturya, Yukarı Avusturya, Steiermark, Tirol, Kärnten, 
            Salzburg, Vorarlberg, Burgenland</em>. Her bölgeye <strong>4-8 gün</strong> içinde 
            kapıya teslim.
          </p>
        </div>
      </div>
    </section>
  );
}
