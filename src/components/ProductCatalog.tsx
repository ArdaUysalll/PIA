import { createClient } from '@/src/lib/server';
import Link from 'next/link';

const brandsList = ["Sandvik", "Mitutoyo", "Bosch", "İzeltaş"];

export default async function ProductCatalog() {
  // Initialize Supabase server client
  const supabase = await createClient();

  // Fetch products directly from the database
  const { data: products = [], error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
  }

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
                {brandsList.map((brand, index) => (
                  <label key={index} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer select-none">
                    <input type="checkbox" className="rounded border-slate-300 text-brand-orange focus:ring-brand-orange w-4 h-4" />
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
              <div className="text-sm text-slate-500 font-medium">
                Toplam <span className="font-bold text-slate-800">{products.length}</span> ürün listeleniyor
              </div>
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

            {/* PRODUCT GRID ("HERE" SECTION) */}
            {products.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-3 text-xl">📦</div>
                <p className="text-slate-700 font-semibold text-base">Henüz ürün bulunmuyor.</p>
                <p className="text-slate-400 text-sm mt-1">Yönetim panelinden yeni öğeler ekleyebilirsiniz.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-3xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      {/* Product Image / Media */}
                      <div className="relative bg-slate-100 rounded-2xl h-48 mb-4 -flex items-center justify-center">
                        {product.image ? (
                          <img src={product.image} alt={product.title} className="object-cover h-full w-full" />
                        ) : (
                          <div className="text-slate-300 text-sm font-medium">Görsel Yok</div>
                        )}
                        {product.completed && (
                          <span className="absolute top-3 right-3 px-2.5 py-1 bg-rose-500 text-white text-xs font-semibold rounded-lg shadow-sm">
                            Tükendi
                          </span>
                        )}
                      </div>

                      {product.brand && (
                        <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">{product.brand}</span>
                      )}
                      
                      <h3 className="font-heading font-bold text-slate-800 text-base mt-1 mb-1 line-clamp-1">{product.title}</h3>
                      
                      {product.description && (
                        <p className="text-xs text-slate-500 line-clamp-2 mb-3">{product.description}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
                      {product.category && (
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                          {product.category}
                        </span>
                      )}
                      
                     {/* <Link 
                        href={`/products/${product.id}`}
                        className="bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors ml-auto"
                      >
                        İncele
                      </Link> 
                      Don't have an actual page for the products yet, but if I do this is the code. May need to change the slug
                      */}
                      


                    </div>
                  </div>
                ))}
              </div>
            )}
            
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