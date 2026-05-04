export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#404e5e] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Hemen Sipariş Verin
          </h2>
          <p className="text-white/70 text-xl mb-8 leading-relaxed">
            Avusturya sineklik ihtiyaçlarınız için <strong>en doğru adres</strong>. Üreticiden doğrudan alışveriş yapın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905403363873"
              className="bg-[#83bd81] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#6fa86d] transition-colors"
            >
              📞 Hemen Ara
            </a>
            <a
              href="https://wa.me/905403363873"
              className="bg-white text-[#404e5e] px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
          <p className="text-white/60 mt-8 text-sm">
            4-8 gün içinde kapınıza teslim • Ücretsiz kargo • 2 yıl garanti
          </p>
        </div>
      </div>
    </section>
  );
}
