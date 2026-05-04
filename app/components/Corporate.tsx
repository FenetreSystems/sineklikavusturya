export default function Corporate() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Avusturya sineklik</strong> üreticisi olarak kalite ve güven önceliğimiz.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Avusturya sineklik</strong> sektöründe yılların deneyimiyle hizmet veriyoruz. 
              Türkiye'den <em>Avusturya'ya</em> doğrudan üreticiden teslimat yapıyoruz. 
              <u>Aracılar olmadan</u>, fabrika fiyatı avantajı sunuyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Her bir <strong>sineklik sistemi</strong> ölçüye özel üretilir. Standart boyutlarla 
              sınırlı kalmayın. <em>Pencerenizin</em> tam ölçüsünde, kusursuz uyum sağlayan 
              <u>premium kaliteli</u> ürünler gönderiyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Müşteri memnuniyeti bizim için <strong>en önemli</strong> önceliktir. 
              <em>7/24 WhatsApp</em> desteği ile sorularınızı yanıtlıyoruz. 
              <u>4-8 gün</u> içinde kapınıza teslim garantisi veriyoruz.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-[#83bd81]/5 rounded-2xl border border-[#83bd81]/20">
                <div className="text-4xl font-bold text-[#83bd81] mb-2">500+</div>
                <p className="text-gray-600">Mutlu Müşteri</p>
              </div>
              <div className="text-center p-6 bg-[#83bd81]/5 rounded-2xl border border-[#83bd81]/20">
                <div className="text-4xl font-bold text-[#83bd81] mb-2">2 Yıl</div>
                <p className="text-gray-600">Garanti</p>
              </div>
              <div className="text-center p-6 bg-[#83bd81]/5 rounded-2xl border border-[#83bd81]/20">
                <div className="text-4xl font-bold text-[#83bd81] mb-2">7/24</div>
                <p className="text-gray-600">Destek</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
