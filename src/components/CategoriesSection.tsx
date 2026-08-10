import Link from "next/link";

interface Category {
  title: string;
  svgIcon: React.ReactNode;
}

const categories: Category[] = [
  {
    title: "Kesici Takımlar",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Ölçü Aletleri",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    ),
  },
  {
    title: "Elektrikli Aletler",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
  },
  {
    title: "İş Güvenliği",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
  },
  {
    title: "El Aletleri",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
      </svg>
    ),
  },
  {
    title: "Aşındırıcılar",
    svgIcon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    ),
  },
];

export default function CategoriesSection() {
  return (
    <section id="kategoriler" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-bold text-sm uppercase tracking-widest mb-2 block">
          Çözümlerimiz
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy">
          Ürün Kategorileri
        </h2>
        <p className="text-slate-600 text-base mt-4">
          Endüstriyel tesislerin ve atölyelerin ihtiyaç duyduğu tüm teknik ürün grupları.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href="/urunler"
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300 text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-slate-50 text-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 relative z-10 shadow-sm group-hover:scale-110">
              {cat.svgIcon}
            </div>
            <h3 className="font-bold text-sm text-brand-navy group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 transition-all relative z-10">
              {cat.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-bold hover:opacity-80 transition-opacity group"
        >
          Tüm Ürün Kategorilerini İncele
          <i className="fa-solid fa-arrow-right text-orange-500 group-hover:translate-x-1 transition-transform"></i>
        </Link>
      </div>
    </section>
  );
}