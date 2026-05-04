export default function MobileFixedButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
      <div className="grid grid-cols-3 gap-0">
        <a
          href="tel:+905403363873"
          className="flex flex-col items-center justify-center py-3 bg-[#83bd81] text-white"
        >
          <span className="text-xl mb-1">📞</span>
          <span className="text-xs font-semibold">Telefon</span>
        </a>
        <a
          href="https://wa.me/905403363873"
          className="flex flex-col items-center justify-center py-3 bg-[#25D366] text-white"
        >
          <span className="text-xl mb-1">💬</span>
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <a
          href="https://wa.me/905403363873?text=Bayilik%20hakkında%20bilgi%20almak%20istiyorum"
          className="flex flex-col items-center justify-center py-3 bg-[#404e5e] text-white"
        >
          <span className="text-xl mb-1">🤝</span>
          <span className="text-xs font-semibold">Bayilik</span>
        </a>
      </div>
    </div>
  );
}
