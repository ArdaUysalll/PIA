"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="ana-sayfa"
      className="relative text-white overflow-hidden py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url('https://images.pexels.com/photos/19582317/pexels-photo-19582317.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      }}
    >
      {/* Decorative Gradient Glow Background Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Main Title & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-orange-500/30 backdrop-blur-md text-orange-400 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg shadow-orange-500/10">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 animate-ping"></span>
              İzmir & Ege Bölgesi Endüstriyel Tedarikçi
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
              Endüstrinin Güvenilir <br className="hidden sm:block" /> Malzeme ve{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">Teknik Destek</span> Ortağı
            </h1>
            
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed font-light drop-shadow">
              PİA Teknik Hırdavat; kesici takımlardan ölçü aletlerine, sanayi ekipmanlarından iş güvenliğine kadar işletmenizin tüm teknik hırdavat ihtiyacını hızlı sevkiyat ve mühendislik altyapısıyla karşılar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#teklif-al"
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-semibold px-8 py-4 rounded-xl text-center shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg border border-orange-400/30"
              >
                <i className="fa-solid fa-list-check"></i>
                Hızlı Fiyat Teklifi Al
              </a>
              <a
                href="https://wa.me/905376515132"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/70 hover:bg-slate-900/90 border border-slate-700 hover:border-orange-500/50 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl text-center shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:-translate-y-1"
              >
                <i className="fa-brands fa-whatsapp text-xl text-emerald-400"></i>
                WhatsApp Danışma Hattı
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Glassmorphism Card with Gentle Automatic Floating Effect */}
          <div className="lg:col-span-5 relative">
            {/* Subtle Gradient Ring Behind Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur-md opacity-60 animate-pulse pointer-events-none"></div>
            
            {/* Card with a soft, smooth, slow floating animation that runs on its own */}
            <div 
              className="bg-slate-900/80 border border-orange-500/40 backdrop-blur-xl rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl shadow-orange-500/20 relative z-10"
              style={{
                animation: 'gentleFloat 6s ease-in-out infinite',
              }}
            >
              <h3 className="font-heading font-bold text-2xl text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center shadow-inner shrink-0">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                Neden PİA Teknik Hırdavat?
              </h3>
              
              <ul className="space-y-6 text-base text-slate-200">
                <li className="flex items-start gap-4 group/item">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mt-1 group-hover/item:border-orange-500/50 group-hover/item:bg-orange-500/10 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Mühendislik Desteği</strong>
                    <span className="text-slate-300">Yalnızca ürün satmıyoruz; fabrikanız için doğru teknik ürün tespitini yapıyoruz.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 group/item">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mt-1 group-hover/item:border-orange-500/50 group-hover/item:bg-orange-500/10 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Çiğli / AOSB Stratejik Konum</strong>
                    <span className="text-slate-300">İzmir içi sanayi tesislerine aynı gün/hızlı teslimat.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 group/item">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mt-1 group-hover/item:border-orange-500/50 group-hover/item:bg-orange-500/10 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Saha Uygulamaları & Demo</strong>
                    <span className="text-slate-300">İşletmenizde canlı ürün tanıtımı ve saha eğitim imkanı.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded CSS for a subtle, elegant floating animation that doesn't trigger on mouseover */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}} />
    </section>
  );
}