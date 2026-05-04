export default function CustomerReviews() {
  const reviews = [
    {
      name: "Müller Ailesi",
      city: "Viyana",
      rating: 5,
      text: "Mükemmel kalite, hızlı teslimat. Viyana'daki evimiz için ideal oldu."
    },
    {
      name: "Schmidt GmbH",
      city: "Graz",
      rating: 5,
      text: "Ofis projemiz için toplu sipariş verdik. Profesyonel hizmet."
    },
    {
      name: "Weber Anna",
      city: "Salzburg",
      rating: 5,
      text: "Kurulum çok kolaydı. WhatsApp desteği harika çalıştı."
    },
    {
      name: "Huber Thomas",
      city: "Innsbruck",
      rating: 5,
      text: "Kış turizmi otelimiz için perfect çözüm. Tavsiye ederim."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Müşteri Yorumları
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> müşterilerimiz ne diyor? <em>Gerçek</em> 
            deneyimler, <u>gerçek</u> memnuniyet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#83bd81]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#83bd81] rounded-full flex items-center justify-center text-[#404e5e] font-bold mr-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#404e5e]">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
