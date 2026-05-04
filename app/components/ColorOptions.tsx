export default function ColorOptions() {
  const colors = [
    { name: "Beyaz", hex: "#FFFFFF", desc: "Klasik, temiz görünüm." },
    { name: "Gri", hex: "#808080", desc: "Modern, şık." },
    { name: "Kahverengi", hex: "#8B4513", desc: "Doğal, sıcak." },
    { name: "Antrasit", hex: "#2F4F4F", desc: "Premium, güçlü." },
    { name: "Bej", hex: "#F5F5DC", desc: "Yumuşak, huzurlu." },
    { name: "Siyah", hex: "#000000", desc: "Bold, etkileyici." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Renk Seçenekleri
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> ürünleri dekorasyonunuza uyar. 
            <em>Geniş renk</em> paleti mevcuttur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div 
                className="w-full h-24 rounded-lg mb-4 border border-gray-200"
                style={{ backgroundColor: color.hex }}
              ></div>
              <h3 className="text-xl font-bold text-[#404e5e] mb-2">{color.name}</h3>
              <p className="text-gray-600">{color.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
