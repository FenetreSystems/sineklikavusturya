export default function CustomProduction() {
  const steps = [
    { step: "01", title: "Ölçü Al", desc: "Pencere ve kapı ölçülerinizi cm cinsinden alın. Genişlik ve yükseklik yeterlidir. WhatsApp'tan destek alın." },
    { step: "02", title: "Sipariş Ver", desc: "WhatsApp veya telefon ile ölçüleri gönderin. Model seçimi yapın. Renk belirleyin. 1 saat içinde teklif alın." },
    { step: "03", title: "Üretim", desc: "Ölçülerinize özel üretim başlar. 2-3 gün içinde tamamlanır. Premium malzeme kullanılır. Kalite kontrol yapılır." },
    { step: "04", title: "Paketleme", desc: "Demonte paketlenir, korunaklı kutuya konur. Kurulum ekipmanları dahildir. Kargoya verilir, takip numarası gönderilir." },
    { step: "05", title: "Teslimat", desc: "4-8 gün içinde Avusturya'ya teslim. Kapınıza kadar gelir. Hasar kontrolü yapılır. Memnuniyet garantisi." },
    { step: "06", title: "Kurulum", desc: "Basit kurulum ile kullanıma hazır. Video destek gönderilir. Sorularınızı yanıtlarız. 2 yıl garanti başlar." },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#404e5e] via-[#354252] to-[#2d3a47] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ölçüye Özel Üretim Süreci
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> siparişiniz 6 adımda kapınıza gelir. 
            <em>Basit</em> ve <u>hızlı</u> süreç. <strong>4-8 gün</strong> teslimat, 
            2 yıl garanti, 7/24 destek.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="text-[#83bd81] text-4xl font-bold mb-3">{item.step}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
