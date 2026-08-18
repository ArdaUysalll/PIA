
import { createClient } from '@/src/lib/server';
import Link from "next/link";
import ProductGrid from './ProductGrid';
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

          <ProductGrid/>

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