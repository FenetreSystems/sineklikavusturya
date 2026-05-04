export default function ComparisonTable() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] text-center mb-4">
          Sineklik Modelleri Karşılaştırma
        </h2>
        <p className="text-[#404e5e]/70 text-center mb-12 max-w-2xl mx-auto">
          Her modelin özelliklerini karşılaştırın. <strong>Doğru seçimi</strong> yapın.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
            <thead className="bg-[#404e5e] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Model</th>
                <th className="px-6 py-4 text-left font-semibold">Kullanım Alanı</th>
                <th className="px-6 py-4 text-left font-semibold">Montaj</th>
                <th className="px-6 py-4 text-left font-semibold">Fiyat</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-semibold text-[#83bd81]">Sabit Sineklik</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Pencere</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Kolay</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Ekonomik</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#83bd81]">Plise Sineklik</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Pencere, Kapı</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Orta</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Orta</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-semibold text-[#83bd81]">Jaluzi Perde</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Ofis, Ev</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Profesyonel</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Premium</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#83bd81]">Honeycomb Perde</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Tüm Alanlar</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Orta</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Premium</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-semibold text-[#83bd81]">Zip Perde</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Teras, Balkon</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Profesyonel</td>
                <td className="px-6 py-4 text-[#404e5e]/70">Yüksek</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
