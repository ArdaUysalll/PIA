import Link from 'next/link';
import ProductGrid from './ProductGrid';
import { createClient } from '@/src/lib/server';

export default async function ProductCatalog({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const selectedBrand = resolvedSearchParams?.brand || "";
  const selectedCategory = resolvedSearchParams?.category || "";

  // Initialize Supabase server client
  const supabase = await createClient();

  // Fetch unique brands
  const { data: brandData } = await supabase
    .from('brand_unique')
    .select('*');
  const brandsList = brandData ? brandData.map((item) => item.brand).filter(Boolean) : [];

  // Fetch unique categories
  const { data: categoryData } = await supabase
    .from('category_unique')
    .select('*');
  const categoryList = categoryData ? categoryData.map((item) => item.category).filter(Boolean) : [];

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
              
              {/* Native GET Form to trigger server re-fetch */}
              <form method="GET" className="space-y-6">

                {/* Categories Section */}
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                      <i className="fa-solid fa-filter text-brand-orange text-sm"></i> Kategoriler
                    </h3>
                  </div>
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="category"
                        value=""
                        defaultChecked={!selectedCategory}
                        className="border-slate-300 text-brand-orange focus:ring-brand-orange w-4 h-4"
                      />
                      <span>Tüm Kategoriler</span>
                    </label>
                    {categoryList.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer select-none"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          defaultChecked={selectedCategory === category}
                          className="border-slate-300 text-brand-orange focus:ring-brand-orange w-4 h-4"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brands Section */}
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                      <i className="fa-solid fa-tags text-brand-orange text-sm"></i> Markalar
                    </h3>
                  </div>
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="brand"
                        value=""
                        defaultChecked={!selectedBrand}
                        className="border-slate-300 text-brand-orange focus:ring-brand-orange w-4 h-4"
                      />
                      <span>Tüm Markalar</span>
                    </label>
                    {brandsList.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer select-none"
                      >
                        <input
                          type="radio"
                          name="brand"
                          value={brand}
                          defaultChecked={selectedBrand === brand}
                          className="border-slate-300 text-brand-orange focus:ring-brand-orange w-4 h-4"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="mt-4 w-full bg-slate-900 hover:bg-brand-orange text-white text-sm font-medium py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Filtrele
                </button>
              </form>

            </div>
          </aside>
          
          {/* PRODUCT GRID CONTAINER */}
          <div className="flex-1 w-full">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm mb-8 gap-4">
              <div className="flex items-center gap-6 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 font-medium">Aktif Kategori:</span>
                  <span className="text-sm font-bold text-brand-orange">{selectedCategory || "Tümü"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 font-medium">Aktif Marka:</span>
                  <span className="text-sm font-bold text-brand-orange">{selectedBrand || "Tümü"}</span>
                </div>
              </div>
            </div>
            
            {/* Pass both brand (name) and category down to ProductGrid */}
            <ProductGrid name={selectedBrand} category={selectedCategory} />      
            
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