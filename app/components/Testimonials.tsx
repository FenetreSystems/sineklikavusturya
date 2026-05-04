export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anna Schmidt',
      location: 'Viyana',
      text: 'Plise sineklik sipariş ettim. <strong>Harika kalite</strong> ve hızlı teslimat. Montaj çok kolaydı.',
      rating: 5,
    },
    {
      name: 'Thomas Müller',
      location: 'Graz',
      text: 'Jaluzi perdeler ofisim için mükemmel. <em>Profesyonel</em> hizmet ve uygun fiyat.',
      rating: 5,
    },
    {
      name: 'Maria Wagner',
      location: 'Salzburg',
      text: 'Honeycomb perdeler ısı yalıtımı için harika. <u>Kesinlikle tavsiye</u> ediyorum.',
      rating: 5,
    },
    {
      name: 'Peter Huber',
      location: 'Innsbruck',
      text: 'Zip perde terasım için ideal. <strong>Güvenilir</strong> üretici ve kaliteli ürün.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Müşteri Yorumları
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Binlerce mutlu müşteri. <strong>Siz de aramıza katılın.</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#83bd81]/10 to-[#83bd81]/5 rounded-2xl p-6 border border-[#83bd81]/20">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-[#404e5e]/70 mb-4 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
              <div>
                <p className="font-semibold text-[#404e5e]">{testimonial.name}</p>
                <p className="text-[#404e5e]/60 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
