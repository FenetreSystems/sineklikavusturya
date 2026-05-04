export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404e5e] mb-4">
            Sineklik Modelleri Karşılaştırma
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Avusturya sineklik</strong> modellerini karşılaştırın, size en uygununu seçin. 
            <em>Her model</em> farklı avantajlar sunar.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-[#404e5e] text-white">
                <th className="px-6 py-4 text-left font-bold">Model</th>
                <th className="px-6 py-4 text-left font-bold">Kullanım Alanı</th>
                <th className="px-6 py-4 text-left font-bold">Fiyat Aralığı</th>
                <th className="px-6 py-4 text-left font-bold">Özellik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-[#83bd81]">Sineklik</td>
                <td className="px-6 py-4">Pencere, Kapı</td>
                <td className="px-6 py-4">€€</td>
                <td className="px-6 py-4">Klasik, dayanıklı</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50">
                <td className="px-6 py-4 font-bold text-[#83bd81]">Plise Sineklik</td>
                <td className="px-6 py-4">Pencere, Tavan</td>
                <td className="px-6 py-4">€€€</td>
                <td className="px-6 py-4">Katlanır, estetik</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-[#83bd81]">Plise Perde</td>
                <td className="px-6 py-4">Pencere</td>
                <td className="px-6 py-4">€€€</td>
                <td className="px-6 py-4">Isı yalıtımı</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50">
                <td className="px-6 py-4 font-bold text-[#83bd81]">Jaluzi Perde</td>
                <td className="px-6 py-4">Pencere, Ofis</td>
                <td className="px-6 py-4">€€</td>
                <td className="px-6 py-4">Işık kontrolü</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-[#83bd81]">Honeycomb</td>
                <td className="px-6 py-4">Pencere</td>
                <td className="px-6 py-4">€€€€</td>
                <td className="px-6 py-4">Maksimum yalıtım</td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-50/50">
                <td className="px-6 py-4 font-bold text-[#83bd81]">Zip Perde</td>
                <td className="px-6 py-4">Teras, Balkon</td>
                <td className="px-6 py-4">€€€€</td>
                <td className="px-6 py-4">Sivrisinek kilitli</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
