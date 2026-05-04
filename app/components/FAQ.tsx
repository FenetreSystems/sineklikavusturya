export default function FAQ() {
  const faqs = [
    {
      q: "Avusturya'ya teslimat süresi nedir?",
      a: "Türkiye'den Avusturya'ya 4-8 gün içinde adrese kapıya teslim ediyoruz. Kargo süresi bölgeye göre değişebilir."
    },
    {
      q: "Sineklikler nasıl paketlenir?",
      a: "Tüm ürünler demonte paketlenmiş şekilde gönderilir. Kurulum için gerekli montaj ekipmanları kutuya dahildir."
    },
    {
      q: "Ölçü nasıl alınır?",
      a: "Pencere veya kapının iç ölçüsünü cm cinsinden alın. Genişlik ve yükseklik yeterlidir. WhatsApp'tan destek alabilirsiniz."
    },
    {
      q: "Garanti süresi nedir?",
      a: "Tüm ürünlerimiz 2 yıl garanti kapsamındadır. Malzeme ve işçilik hataları için geçerlidir."
    },
    {
      q: "Ödeme nasıl yapılır?",
      a: "WhatsApp üzerinden banka havalesi veya kredi kartı ile ödeme kabul ediyoruz. %50 peşin, %50 teslimatta."
    },
    {
      q: "Bayilik şartları nelerdir?",
      a: "Bayilik ücreti yoktur. Minimum sipariş adeti yok. WhatsApp'tan detaylı bilgi alabilirsiniz."
    },
    {
      q: "İade politikası nedir?",
      a: "Özel üretim olduğu için iade kabul edilmez. Ancak hasarlı ürünler değiştirilir."
    },
    {
      q: "Renk seçenekleri nelerdir?",
      a: "Beyaz, gri, kahverengi, antrasit, bej ve siyah renk seçenekleri mevcuttur. Özel renk talep edilebilir."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> hakkında merak edilenler. <em>Cevaplar</em> 
            burada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#404e5e] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#83bd81] text-[#404e5e] rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                {faq.q}
              </h3>
              <p className="text-gray-600 pl-11">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
