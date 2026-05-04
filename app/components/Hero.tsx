'use client';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#83bd81]/10 to-[#404e5e]/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#404e5e] mb-6 leading-tight">
            Avusturya Sineklik
          </h1>
          <p className="text-xl md:text-2xl text-[#404e5e]/80 mb-8 leading-relaxed">
            Üreticiden doğrudan kapınıza. <strong>4-8 gün</strong> içinde teslim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905403363873"
              className="bg-[#83bd81] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6fa86d] transition-colors"
            >
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905403363873"
              className="bg-[#404e5e] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#323d4a] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
