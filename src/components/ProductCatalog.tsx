import Link from 'next/link';
import ProductGrid from './ProductGrid';

const brandsList = ["Sandvik", "Mitutoyo", "Bosch", "İzeltaş"];

export default async function ProductCatalog() {

  return (
    <div className="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-brand-orange selection:text-white min-h-screen">
      
      {/* PAGE HERO */}
      <section className="bg-slate-900 relative text-white py-24 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 via-transparent to-blue-500/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Ürün Kataloğu</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
            <span className="text-brand-orange">Ürünler</span>
          </div>
        </div>
      </section>

      {/* MAIN CATALOG LAYOUT */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR FILTER PANEL */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 lg:sticky top-28">
              
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                  <i className="fa-solid fa-filter text-brand-orange text-sm"></i> Kategoriler
                </h3>
              </div>
              
              <ul className="space-y-1.5 text-sm mb-8">
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-colors font-medium">
                    Tüm Kategoriler
                  </button>
                </li>
              </ul>

              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                  <i className="fa-solid fa-tags text-brand-orange text-sm"></i> Markalar
                </h3>
              </div>

              <div className="space-y-2.5">
 {brandsList.map((brand) => (
  <label
    key={brand}
    className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer select-none"
  >
    <input
      type="radio"
      name="brand"
      value={brand}
      className="border-slate-300 text-brand-orange focus:ring-brand-orange w-4 h-4"
    />
    <span>{brand}</span>
  </label>
))}

              </div>

            </div>
          </aside>
          
          {/* PRODUCT GRID CONTAINER */}
          <div className="flex-1 w-full">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm mb-8 gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <label htmlFor="sort" className="text-sm text-slate-500 shrink-0 font-medium">Sırala:</label>
                <select 
                  id="sort" 
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 focus:outline-none focus:border-brand-orange w-full sm:w-auto"
                >
                  <option value="featured">Önerilen Sıralama</option>
                  <option value="newest">En Yeniler</option>
                </select>
              </div>
            </div>
            
            <ProductGrid name={"Bosch"}/>      
            
            {/* Pagination Controls */}
            <div className="mt-12 flex justify-center">
              <nav className="flex gap-2">
                <button disabled className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-300 cursor-not-allowed flex items-center justify-center shadow-xs">
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button className="w-11 h-11 rounded-2xl bg-brand-orange text-white font-bold flex items-center justify-center shadow-md shadow-brand-orange/25">1</button>
                <button className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-brand-orange hover:border-brand-orange font-medium flex items-center justify-center shadow-xs transition-colors">
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </nav>
            </div>
            
          </div>
          
        </div>
      </main>
      
    </div>
  );
}