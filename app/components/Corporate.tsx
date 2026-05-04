export default function Corporate() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#83bd81]/10 to-[#83bd81]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Hakkımızda
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Yılların deneyimi ile <strong>kaliteli üretim</strong>.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-[#404e5e]/80 leading-relaxed mb-6">
              Avusturya sineklik sektöründe lider konumdayız. <strong>Üreticiden tüketiciye</strong> doğrudan satış modeli ile en uygun fiyatları sunuyoruz.
            </p>
            <p className="text-[#404e5e]/80 leading-relaxed mb-6">
              Türkiye\'de modern üretim tesisimizde <em>en son teknoloji</em> ile üretim yapıyoruz. Her ürün kalite kontrolünden geçer.
            </p>
            <p className="text-[#404e5e]/80 leading-relaxed mb-6">
              Müşteri memnuniyeti bizim için <u>en önemli öncelik</u>. Her sipariş özel dikkatle işlenir ve zamanında teslim edilir.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#83bd81]">10+</p>
                <p className="text-[#404e5e]/60 text-sm">Yıllık Deneyim</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#83bd81]">5000+</p>
                <p className="text-[#404e5e]/60 text-sm">Mutlu Müşteri</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#83bd81]">50+</p>
                <p className="text-[#404e5e]/60 text-sm">Bayi</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#83bd81]">100%</p>
                <p className="text-[#404e5e]/60 text-sm">Müşteri Memnuniyeti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
