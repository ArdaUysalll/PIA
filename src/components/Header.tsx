"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NAVIGATION_LINKS = [
  { name: "Ana Sayfa", href: "/", isRoute: true, active: false },
  { name: "Hakkımızda", href: "/hakkimizda", isRoute: true, active: false },
  { name: "Ürünlerimiz", href: "/urunler", isRoute: true, active: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const pathname = usePathname()

NAVIGATION_LINKS.forEach((link) => {
  link.active = link.href === pathname;
});
//Sets the link as active

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <aside className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium relative z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 flex-wrap">
          <span className="inline-block animate-pulse">🔥</span>
          <span>Yıl sonu indirimlerini kaçırmayın! Seçili kesici takımlarda %20&apos;ye varan indirimler.</span>
          <Link 
            href="/urunler" 
            className="underline font-bold hover:text-slate-900 transition-colors ml-1"
          >
            Şimdi İncele
          </Link>
        </div>
      </aside>

      {/* TOP BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-orange-500 animate-bounce"></i> 
              <span>Çiğli / İzmir</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <i className="fa-solid fa-clock text-orange-500"></i> 
              <span>Hafta İçi: 08:30 - 18:00</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+905376515132" 
              className="hover:text-white hover:scale-[1.02] transition-all duration-200 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-phone text-orange-500"></i> 
              <span>+90 537 651 51 32</span>
            </a>
            <a 
              href="mailto:piateknikhirdavat@gmail.com" 
              className="hover:text-white hover:scale-[1.02] transition-all duration-200 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-envelope text-orange-500"></i> 
              <span>piateknikhirdavat@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER & NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/85 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* LOGO AREA */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-slate-900 text-white font-heading font-extrabold text-2xl px-3.5 py-2 rounded-xl shadow-md group-hover:shadow-orange-500/20 group-hover:scale-105 transition-all duration-300 flex items-center gap-1">
                PİA
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse">
                  .
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-slate-900 tracking-tight text-lg leading-tight group-hover:text-orange-600 transition-colors">
                  TEKNİK HIRDAVAT
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  Endüstriyel Tedarik
                </span>
              </div>
            </Link>

            {/* SEARCH BAR */}
            <div className="hidden lg:flex flex-1 max-w-md mx-6 group">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Ürün adı, marka veya teknik kod ara..."
                  className="w-full pl-4 pr-11 py-2.5 text-sm bg-slate-100/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:bg-white focus:border-orange-500 transition-all duration-200 shadow-inner"
                />
                <button 
                  type="button"
                  aria-label="Ara"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500 transition-colors"
                >
                  <i className="fa-solid fa-magnifying-glass text-base"></i>
                </button>
              </div>
            </div>

            {/* NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center space-x-7 font-medium text-sm">
              {NAVIGATION_LINKS.map((link) => {
                const baseClasses = "transition-all duration-200 relative py-1";
                const activeClasses = link.active 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-semibold"
                  : "text-slate-600 hover:text-orange-600";

                return link.isRoute ? (
                  <Link key={link.name} href={link.href} className={`${baseClasses} ${activeClasses}`}>
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} className={`${baseClasses} ${activeClasses}`}>
                    {link.name}
                  </a>
                );
              })}
            </nav>

    {/* CTA BUTTON */}
            <button 
             className="hidden sm:flex items-center"
             onClick={(e) => {
              if (pathname !== "/") {
                 e.preventDefault();
                 window.location.href = "/#teklif-al";
                }
  }}
>
  <a 
    href="#teklif-al" 
    className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:opacity-95 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
  >
    <i className="fa-solid fa-file-invoice text-xs"></i>
    <span>Teklif İsteyin</span>
  </a>
</button>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Menüyü Aç/Kapat"
              className="md:hidden text-slate-700 hover:text-orange-500 text-2xl focus:outline-none transition-colors p-1"
            >
              <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 space-y-3 absolute w-full shadow-xl animate-in slide-in-from-top-2 duration-200">
            {/* Mobile Search */}
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Ürün adı, marka ara..."
                className="w-full pl-4 pr-10 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              />
              <button type="button" aria-label="Ara" className="absolute right-3 top-3 text-slate-400">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            {NAVIGATION_LINKS.map((link) => 
              link.isRoute ? (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-orange-600 font-medium py-2 border-b border-slate-100 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-orange-600 font-medium py-2 border-b border-slate-100 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}

            <div className="pt-2">
              <a 
                href="#teklif-al" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block w-full text-center bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-semibold py-3 rounded-xl shadow-md"
              >
                Teklif İsteyin
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}