'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Teslimat süresi ne kadar?',
      answer: 'Türkiye\'den Avusturya\'ya <strong>4-8 gün</strong> içinde teslimat yapıyoruz. Siparişiniz hazırlanır hazırlanmaz kargoya verilir.',
    },
    {
      question: 'Montaj hizmeti veriyor musunuz?',
      answer: 'Ürünlerimiz <em>demonte paket</em> olarak gelir. Montajı kendiniz yapabilir veya yerel ustalardan destek alabilirsinız.',
    },
    {
      question: 'Ölçü nasıl alınır?',
      answer: 'Pencere çerçevesinin <u>iç ve dış</u> ölçüsünü almanız gerekir. Detaylı ölçü alma rehberi sipariş formunda mevcuttur.',
    },
    {
      question: 'Garanti süresi nedir?',
      answer: 'Tüm ürünlerimiz <strong>2 yıl</strong> garanti kapsamındadır. Malzeme ve işçilik hatalarına karşı koruma sağlıyoruz.',
    },
    {
      question: 'İade politikası nedir?',
      answer: 'Özel üretim olduğu için iade kabul edilmemektedir. <em>Ölçülerinizi dikkatli</em> almanız önemlidir.',
    },
    {
      question: 'Ödeme seçenekleri nelerdir?',
      answer: 'Kredi kartı, banka havalesi ve <u>kapıda ödeme</u> seçeneklerimiz mevcuttur. Güvenli ödeme altyapısı kullanıyoruz.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Merak ettiğiniz her şey burada. <strong>Cevapları bulun.</strong>
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="font-semibold text-[#404e5e]">{faq.question}</span>
                <span className="text-[#83bd81] text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-[#404e5e]/70" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
