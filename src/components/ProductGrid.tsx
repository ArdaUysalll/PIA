import { createClient } from '@/src/lib/server';

export default async function ProductGrid({ name }) { // Destructure 'name' directly from props
  // Initialize Supabase server client
  const supabase = await createClient();

  // Fetch products filtered by brand using Supabase's .eq() method
  let query = supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  // If a brand name is provided, filter by it
  if (name) {
    query = query.eq('brand', name);
  }

  const { data: products = [], error } = await query;

  if (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div>
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
            <div key={product.id} className="bg-white rounded-3xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300">
              <div>
                {/* Product Image / Media */}
                <div className="relative bg-slate-100 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  {product.image ? (
                    <img src={product.image} alt={product.title} className="object-cover h-full w-full rounded-2xl" />
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}