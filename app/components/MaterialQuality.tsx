export default function MaterialQuality() {
  const materials = [
    {
      name: 'Alüminyum Profil',
      description: 'Hafif, dayanıklı ve paslanmaz. <strong>Uzun ömürlü</strong> kullanım sağlar.',
    },
    {
      name: 'Fiberglas File',
      description: 'Güneş ışınlarına dayanıklı. <em>Sıkı dokuma</em> ile maksimum koruma.',
    },
    {
      name: 'PVC Kumaş',
      description: 'Kolay temizlenebilir. <u>Suya dayanıklı</u> yapıya sahiptir.',
    },
    {
      name: 'Çelik Mekanizma',
      description: 'Güçlü ve sessiz çalışma. <strong>Sorunsuz</strong> kullanım garantisi.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Malzeme Kalitesi
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Sadece <strong>en kaliteli malzemeler</strong> kullanıyoruz. Ürünlerimiz uzun yıllar dayanır.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#83bd81]">
              <h3 className="text-xl font-bold text-[#404e5e] mb-4" dangerouslySetInnerHTML={{ __html: material.name }} />
              <p className="text-[#404e5e]/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: material.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
