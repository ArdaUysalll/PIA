import Link from 'next/link';

export default function AboutContent() {
  return (
    <div className="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-brand-orange selection:text-white">
       
      {/* PAGE HERO */}
      <section className="bg-slate-700 relative text-white py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4">Hakkımızda</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
            <span className="text-orange-400">Hakkımızda</span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-2 block">Biz Kimiz?</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6">PİA TEKNİK HIRDAVAT</h2>
            <div id="dynamic-about-text">
              <p className="text-slate-600 mb-6 leading-relaxed">
                İzmir Çiğli merkezli PİA TEKNİK HIRDAVAT, endüstriyel üretim yapan firmaların tüm teknik hırdavat, kesici takım, ölçü aleti ve iş güvenliği ekipmanları ihtiyaçlarını tek elden, en hızlı ve güvenilir şekilde karşılamak amacıyla kurulmuştur.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Sektördeki tecrübemiz ve güçlü tedarik ağımız sayesinde, sadece malzeme satışı değil, aynı zamanda üretim süreçlerinizi iyileştirecek teknik danışmanlık hizmeti de sunuyoruz. Amacımız, müşterilerimizin üretimde yaşadığı duruş sürelerini minimize etmek ve en doğru takımı en uygun maliyetle ulaştırmaktır.
              </p>
            </div>
                
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center mb-4">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bullseye" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
                </div>
                <h4 className="font-bold text-brand-navy mb-2">Misyonumuz</h4>
                <p className="text-sm text-slate-500">Müşterilerimize en kaliteli ürünleri, en hızlı sürede ve rekabetçi fiyatlarla sunarak üretim süreçlerine değer katmak.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>
                </div>
                <h4 className="font-bold text-brand-navy mb-2">Vizyonumuz</h4>
                <p className="text-sm text-slate-500">Bölgesinde lider, mühendislik altyapısıyla güven veren ve dijitalleşmeye ayak uyduran öncü tedarikçi olmak.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-blue-500/20 rounded-3xl transform rotate-3"></div>
            <div className="bg-slate-100 rounded-3xl aspect-[4/5] sm:aspect-square relative z-10 overflow-hidden border border-slate-200 shadow-xl flex items-center justify-center">
              {/* Placeholder for actual image */}
              <div className="text-center p-8">
                <i className="fa-solid fa-building text-6xl text-slate-300 mb-4 block"></i>
                <span className="text-slate-400 font-medium">Firma Görseli / Depo Görseli</span>
              </div>
            </div>
                
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4 animate-float">
              <div className="w-14 h-14 bg-brand-navy rounded-full flex items-center justify-center text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M300.9 149.2L184.3 278.8C179.7 283.9 179.9 291.8 184.8 296.7C215.3 327.2 264.8 327.2 295.3 296.7L327.1 264.9C331.3 260.7 336.6 258.4 342 258C348.8 257.4 355.8 259.7 361 264.9L537.6 440L608 384L608 96L496 160L472.2 144.1C456.4 133.6 437.9 128 418.9 128L348.5 128C347.4 128 346.2 128 345.1 128.1C328.2 129 312.3 136.6 300.9 149.2zM148.6 246.7L255.4 128L215.8 128C190.3 128 165.9 138.1 147.9 156.1L144 160L32 96L32 384L188.4 514.3C211.4 533.5 240.4 544 270.3 544L286 544L279 537C269.6 527.6 269.6 512.4 279 503.1C288.4 493.8 303.6 493.7 312.9 503.1L353.9 544.1L362.9 544.1C382 544.1 400.7 539.8 417.7 531.8L391 505C381.6 495.6 381.6 480.4 391 471.1C400.4 461.8 415.6 461.7 424.9 471.1L456.9 503.1L474.4 485.6C483.3 476.7 485.9 463.8 482 452.5L344.1 315.7L329.2 330.6C279.9 379.9 200.1 379.9 150.8 330.6C127.8 307.6 126.9 270.7 148.6 246.6z"/></svg>
              </div>
              <div>
                <div className="font-bold text-2xl text-brand-navy">100%</div>
                <div className="text-sm text-slate-500 font-medium">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}