export default function TrustBar() {
  const items = [
    { icon: '🏭', text: 'Üreticiden Al' },
    { icon: '🚚', text: 'Kapıya Teslim' },
    { icon: '⭐', text: 'Premium Kalite' },
    { icon: '📏', text: 'Ölçüye Özel' },
  ];

  return (
    <section className="bg-[#404e5e] py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-white">
              <span className="text-3xl">{item.icon}</span>
              <span className="font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
