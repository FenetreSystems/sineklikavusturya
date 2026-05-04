export default function MaterialQuality() {
  const materials = [
    {
      name: "Alüminyum Profil",
      desc: "Paslanmaz, dayanıklı, uzun ömürlü.",
      features: ["Antikorozif", "Hafif", "Güçlü"]
    },
    {
      name: "Fiberglass File",
      desc: "Sivrisinek geçirmez, hava alır.",
      features: ["Yırtılmaz", "UV dayanıklı", "Esnek"]
    },
    {
      name: "PVC Kumaş",
      desc: "Plise perdeler için özel kumaş.",
      features: ["Leke tutmaz", "Kolay temizlik", "Renk sabit"]
    },
    {
      name: "Çelik Mekanizma",
      desc: "Sürtünme sistemi için.",
      features: ["Gürültüz", "Akıcı", "Dayanıklı"]
    }
  ];

  return (
    <section id="quality" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Malzeme Kalitesi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> ürünlerinde sadece <em>premium</em> malzemeler 
            kullanılır. <u>Uzun ömürlü</u> çözümler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-gradient-to-br from-[#83bd81]/5 to-transparent rounded-2xl p-6 border border-[#83bd81]/20">
              <h3 className="text-xl font-bold text-[#404e5e] mb-3">{material.name}</h3>
              <p className="text-gray-600 mb-4">{material.desc}</p>
              <ul className="space-y-2">
                {material.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-[#83bd81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
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
