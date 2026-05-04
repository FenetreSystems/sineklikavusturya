export default function Footer() {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: 'Sineklik', href: '#products' },
    { name: 'Plise Sineklik', href: '#products' },
    { name: 'Plise Perde', href: '#products' },
    { name: 'Jaluzi Perde', href: '#products' },
    { name: 'Honeycomb Perde', href: '#products' },
    { name: 'Zip Perde', href: '#products' },
  ];

  const regions = [
    { name: 'Viyana', href: '#regions' },
    { name: 'Graz', href: '#regions' },
    { name: 'Linz', href: '#regions' },
    { name: 'Salzburg', href: '#regions' },
    { name: 'Innsbruck', href: '#regions' },
    { name: 'Klagenfurt', href: '#regions' },
  ];

  return (
    <footer className="bg-[#2a333f] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#83bd81] mb-4">Avusturya Sineklik</h3>
            <p className="text-white/70 mb-4 text-sm">
              Üreticiden doğrudan kapınıza. <strong>En kaliteli</strong> sineklik ve perde sistemleri.
            </p>
            <p className="text-white/60 text-sm">
              Mariahilfer Straße 123<br />
              1060 Viyana, Avusturya
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ürünler</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a href={product.href} className="text-white/70 hover:text-[#83bd81] transition-colors text-sm">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmet Bölgeleri</h4>
            <ul className="space-y-2">
              {regions.map((region, index) => (
                <li key={index}>
                  <a href={region.href} className="text-white/70 hover:text-[#83bd81] transition-colors text-sm">
                    {region.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+905403363873" className="text-white/70 hover:text-[#83bd81] transition-colors flex items-center gap-2">
                  <span>📞</span>
                  <span className="text-sm">+90 540 336 3873</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/905403363873" className="text-white/70 hover:text-[#83bd81] transition-colors flex items-center gap-2">
                  <span>💬</span>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/905403363873?text=Bayilik%20hakkında%20bilgi" className="text-white/70 hover:text-[#83bd81] transition-colors flex items-center gap-2">
                  <span>🤝</span>
                  <span className="text-sm">Bayilik</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Avusturya Sineklik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
