export default function TrustBar() {
  const items = [
    { icon: "🏭", title: "Üreticiden", desc: "Doğrudan fabrikadan" },
    { icon: "🚚", title: "Kapıya Teslim", desc: "Avusturya'ya 4-8 gün" },
    { icon: "📏", title: "Ölçüye Özel", desc: "Tam ölçü üretim" },
    { icon: "✅", title: "2 Yıl Garanti", desc: "Güvenilir kalite" },
    { icon: "💰", title: "Uygun Fiyat", desc: "Aracı yok" },
    { icon: "📦", title: "Demonte Paket", desc: "Kolay kurulum" },
  ];

  return (
    <section className="bg-white border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-[#404e5e] text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
