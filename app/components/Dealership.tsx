export default function Dealership() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Bayilik Alanı
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Avusturya\'nın her yerinde bayilerimiz ile büyüyoruz. <strong>Siz de aramıza katılın.</strong>
        </p>
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#83bd81]/10 to-[#83bd81]/5 rounded-3xl p-8 md:p-12 border-2 border-[#83bd81]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#404e5e] mb-4">Bayilik Avantajları</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#83bd81] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">✓</span>
                  <span className="text-[#404e5e]/70">Özel toptan fiyatlar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#83bd81] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">✓</span>
                  <span className="text-[#404e5e]/70">Bölgesel koruma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#83bd81] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">✓</span>
                  <span className="text-[#404e5e]/70">Pazarlama desteği</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#83bd81] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">✓</span>
                  <span className="text-[#404e5e]/70">Eğitim programları</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#404e5e] mb-4">Gereksinimler</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#404e5e] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">1</span>
                  <span className="text-[#404e5e]/70">Showroom veya mağaza</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#404e5e] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">2</span>
                  <span className="text-[#404e5e]/70">Montaj ekibi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#404e5e] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">3</span>
                  <span className="text-[#404e5e]/70">Müşteri portföyü</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#404e5e] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">4</span>
                  <span className="text-[#404e5e]/70">Yatırım sermayesi</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://wa.me/905403363873?text=Bayilik%20hakkında%20bilgi%20almak%20istiyorum"
              className="inline-block bg-[#83bd81] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#6fa86d] transition-colors"
            >
              Bayilik Başvurusu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
