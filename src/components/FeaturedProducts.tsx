
import { createClient } from '@/src/lib/server';
import Link from "next/link";
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


export default function FeaturedProducts() {

  return (
    <section id="urunler" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-bold text-sm uppercase tracking-widest mb-2 block">Vitrin</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy">Öne Çıkan Ürünler</h2>
          </div>
          <Link href="/urunler" className="hidden sm:inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-bold hover:opacity-80 transition-opacity group">
            Tümünü Gör
            <i className="fa-solid fa-arrow-right text-orange-500 group-hover:translate-x-1 transition-transform"></i>
          </Link>
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

        <div className="mt-8 text-center sm:hidden">
          <Link href="/urunler" className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-bold hover:opacity-80 transition-opacity group">
            Tüm Ürünleri Gör
            <i className="fa-solid fa-arrow-right text-orange-500 group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}