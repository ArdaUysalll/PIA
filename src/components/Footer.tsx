import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Ürünlerimiz", href: "/urunler" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative z-40">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="px-2 py-1 bg-white/5 rounded-lg border border-slate-800 group-hover:border-orange-500/50 transition-all duration-300">
                <Image src={"/pia_small.png"} height={45} width={45} alt="PIA Logo" className="rounded-md" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white tracking-tight text-base leading-tight group-hover:text-orange-500 transition-colors">
                  TEKNİK HIRDAVAT
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  Endüstriyel Tedarik
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              İzmir Çiğli merkezli firmamız, endüstriyel üretim ve atölyeler için güvenilir kesici takımlar ve hırdavat çözümleri sunar.
            </p>
            {/* Social Media Links Placeholder */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="#" 
                aria-label="Sosyal Medya" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
              <a 
                href="#" 
                aria-label="Sosyal Medya" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a 
                href="#" 
                aria-label="Sosyal Medya" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-orange-500 pl-3">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-orange-500 transition-colors flex items-center gap-2 text-slate-400 hover:translate-x-1 duration-200"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px] text-orange-500"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/#teklif-al" 
                  className="hover:text-orange-500 transition-colors flex items-center gap-2 text-slate-400 hover:translate-x-1 duration-200"
                >
                  <i className="fa-solid fa-chevron-right text-[10px] text-orange-500"></i>
                  Teklif İsteyin
                </Link>
              </li>
            </ul>
          </div>

          {/* PRODUCT CATEGORIES / HIGHLIGHTS */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-orange-500 pl-3">
              Ürün Grupları
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Kesici Takımlar
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Endüstriyel Ekipmanlar
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Ölçü Aletleri
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                El Aletleri ve Sarf Malzemeler
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-orange-500 pl-3">
              İletişim Bilgileri
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-orange-500 mt-1"></i>
                <span>Çiğli / İzmir, Türkiye</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-orange-500"></i>
                <a href="tel:+905376515132" className="hover:text-white transition-colors">
                  +90 537 651 51 32
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-envelope text-orange-500"></i>
                <a href="mailto:piateknikhirdavat@gmail.com" className="hover:text-white transition-colors break-all">
                  piateknikhirdavat@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-clock text-orange-500"></i>
                <span>Hafta İçi: 08:30 - 18:00</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-slate-800 bg-slate-950/60 py-5 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {currentYear} PIA Teknik Hırdavat. Tüm hakları saklıdır.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Gizlilik Politikası</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Kullanım Koşulları</span>
          </div>
        </div>
      </div>
    </footer>
  );
}