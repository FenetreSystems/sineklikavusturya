export default function ProjectProduction() {
  return (
    <section className="py-20 bg-[#404e5e] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Proje ve Toplu Üretim
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Büyük projeler için <strong>özel çözümler</strong> sunuyoruz. Oteller, residence ve iş merkezleri için toplu üretim.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
            <h3 className="text-2xl font-bold mb-4 text-[#83bd81]">Oteller</h3>
            <p className="text-white/70 mb-4">
              Misafir odaları, lobi alanları ve restoranlar için özel üretim. <em>Toplu alımlarda</em> özel fiyatlandırma.
            </p>
            <ul className="space-y-2 text-white/80">
              <li>• 50+ oda için indirim</li>
              <li>• Proje bazlı fiyatlandırma</li>
              <li>• Ücretsiz keşif</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
            <h3 className="text-2xl font-bold mb-4 text-[#83bd81]">Residence</h3>
            <p className="text-white/70 mb-4">
              Apartman ve site projeleri için kapsamlı çözümler. <u>Tüm daireler</u> için eş zamanlı üretim.
            </p>
            <ul className="space-y-2 text-white/80">
              <li>• 100+ daire için özel fiyat</li>
              <li>• Proje yönetimi</li>
              <li>• Kurulum desteği</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
            <h3 className="text-2xl font-bold mb-4 text-[#83bd81]">İş Merkezleri</h3>
            <p className="text-white/70 mb-4">
              Ofis binaları ve plazalar için profesyonel çözümler. <strong>Kurumsal</strong> anlaşmalar.
            </p>
            <ul className="space-y-2 text-white/80">
              <li>• Kat bazlı planlama</li>
              <li>• Bakım anlaşması</li>
              <li>• Garanti süresi uzatma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
