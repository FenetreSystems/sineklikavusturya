export default function Footer() {
  return (
    <footer className="bg-[#404e5e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#83bd81]">Sineklik Avusturya</h3>
            <p className="text-gray-300 mb-4">
              Türkiye'den Avusturya'ya üreticiden teslim. 4-8 gün kapınıza sineklik.
            </p>
            <div className="space-y-2">
              <a href="tel:+905403363873" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +90 540 336 3873
              </a>
              <a href="https://wa.me/905403363873" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Ürünler</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Sineklik</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Plise Sineklik</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Plise Perde</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Jaluzi Perde</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Honeycomb Perde</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Zip Perde</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Bölgeler</h4>
            <ul className="space-y-2">
              <li><a href="#regions" className="text-gray-300 hover:text-white transition-colors">Viyana</a></li>
              <li><a href="#regions" className="text-gray-300 hover:text-white transition-colors">Graz</a></li>
              <li><a href="#regions" className="text-gray-300 hover:text-white transition-colors">Linz</a></li>
              <li><a href="#regions" className="text-gray-300 hover:text-white transition-colors">Salzburg</a></li>
              <li><a href="#regions" className="text-gray-300 hover:text-white transition-colors">Innsbruck</a></li>
              <li><a href="#regions" className="text-gray-300 hover:text-white transition-colors">Tüm Eyaletler</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              <li><a href="#why-manufacturer" className="text-gray-300 hover:text-white transition-colors">Üreticiden Al</a></li>
              <li><a href="#production" className="text-gray-300 hover:text-white transition-colors">Ölçüye Özel</a></li>
              <li><a href="#dealership" className="text-gray-300 hover:text-white transition-colors">Bayilik</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Proje Üretim</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">SSS</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Sineklik Avusturya. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Gizlilik Politikası</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
