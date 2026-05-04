export default function ColorOptions() {
  const colors = [
    { name: 'Beyaz', hex: '#FFFFFF', description: 'Klasik ve temiz görünüm.' },
    { name: 'Gri', hex: '#808080', description: 'Modern ve şık tasarım.' },
    { name: 'Kahverengi', hex: '#8B4513', description: 'Doğal ve sıcak ton.' },
    { name: 'Antrasit', hex: '#2F4F4F', description: 'Premium ve etkileyici.' },
    { name: 'Siyah', hex: '#000000', description: 'Güçlü ve karizmatik.' },
    { name: 'Krem', hex: '#FFFDD0', description: 'Yumuşak ve zarif.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Renk Seçenekleri
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Dekorasyonunuza uygun <strong>6 farklı renk</strong> seçeneği.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div
                className="w-full h-32 rounded-xl mb-4 border-2 border-gray-200"
                style={{ backgroundColor: color.hex }}
              ></div>
              <h3 className="text-lg font-bold text-[#404e5e] mb-2">{color.name}</h3>
              <p className="text-[#404e5e]/70 text-sm">{color.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
