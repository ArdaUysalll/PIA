'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProducts, Product } from '@/src/services/productService'

const categories = [
  "Tüm Ürünler",
  "Kesici Takımlar",
  "Ölçü Aletleri",
  "Elektrikli Aletler",
  "İş Güvenliği",
  "El Aletleri",
];

const brandsList = ["Sandvik", "Mitutoyo", "Bosch", "İzeltaş"];

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Tüm Ürünler");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("Önerilenler");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    // Fetch data asynchronously from CMS service layer
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const activeProducts = products.filter((p) => p.status === true);
  
  const filteredProducts = activeProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "Tüm Ürünler" || p.category === selectedCategory;
    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.some((b) => b.toLowerCase() === p.brand.toLowerCase());
    return matchesCategory && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "A'dan Z'ye") return a.name.localeCompare(b.name);
    if (sortOption === "Z'den A'ya") return b.name.localeCompare(a.name);
    if (sortOption === "En Yeni Eklenenler") return Number(b.id) - Number(a.id);
    return 0;
  });

  return (
    <div className="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-brand-orange selection:text-white min-h-screen">
      
      {/* PAGE HERO */}
      <section className="bg-slate-900 relative text-white py-24 sm:py-28 overflow-hidden">
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
                <h3 className="font-heading font-bold text-brand-navy text-base flex items-center gap-2">
                  <i className="fa-solid fa-filter text-brand-orange text-sm"></i> Kategoriler
                </h3>
              </div>
              
              <ul className="space-y-1.5 text-sm mb-8">
                {categories.map((cat) => {
                  const count = cat === "Tüm Ürünler" 
                    ? activeProducts.length 
                    : activeProducts.filter(p => p.category === cat).length;
                  const isSelected = selectedCategory === cat;

                  return (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left flex justify-between items-center px-3.5 py-2.5 rounded-xl transition-all duration-200 font-medium ${
                          isSelected
                            ? 'text-brand-orange bg-orange-50/80 shadow-xs'
                            : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-lg font-bold transition-colors ${
                          isSelected ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h3 className="font-heading font-bold text-brand-navy text-base flex items-center gap-2">
                  <i className="fa-solid fa-tags text-brand-orange text-sm"></i> Markalar
                </h3>
              </div>

              <div className="space-y-2.5">
                {brandsList.map((brand) => {
                  const isChecked = selectedBrands.includes(brand);
                  return (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group py-1">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleBrandToggle(brand)}
                        className="w-4 h-4 text-brand-orange rounded border-slate-300 focus:ring-brand-orange cursor-pointer"
                      />
                      <span className={`text-sm transition-colors ${isChecked ? 'text-brand-navy font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {brand}
                      </span>
                    </label>
                  );
                })}
              </div>

            </div>
          </aside>
          
          {/* PRODUCT GRID CONTAINER */}
          <div className="flex-1 w-full">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm mb-8 gap-4">
              <div className="text-sm text-slate-500 font-medium">
                Gösterilen: <span className="font-bold text-brand-navy">{sortedProducts.length}</span> ürün
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <label className="text-sm font-medium text-slate-600 hidden sm:block whitespace-nowrap">Sıralama:</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-brand-orange focus:border-brand-orange block px-4 py-2.5 outline-none w-full sm:w-auto font-medium transition-all shadow-2xs"
                >
                  <option>Önerilenler</option>
                  <option>A'dan Z'ye</option>
                  <option>Z'den A'ya</option>
                  <option>En Yeni Eklenenler</option>
                </select>
              </div>
            </div>

            {/* Grid Content */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-slate-500 font-medium">Ürünler yükleniyor...</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.length === 0 ? (
                  <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200/80 shadow-sm p-8">
                    <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                      <i className="fa-solid fa-box-open"></i>
                    </div>
                    <h3 className="font-bold text-brand-navy text-lg mb-1">Ürün Bulunamadı</h3>
                    <p className="text-slate-500 text-sm">Seçtiğiniz kategori veya marka filtrelerine uygun aktif ürün bulunmuyor.</p>
                  </div>
                ) : (
                  sortedProducts.map((p) => (
                    <div
                      key={p.id}
                      className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group flex flex-col h-full"
                    >
                      <div className="h-60 bg-slate-100 flex items-center justify-center relative overflow-hidden shrink-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3.5 py-1.5 rounded-xl z-10 shadow-md uppercase tracking-wider">
                          {p.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2.5">
                          <div className="text-xs text-brand-orange font-bold bg-orange-50 px-2.5 py-1 rounded-lg">
                            {p.brand || 'STANDART'}
                          </div>
                        </div>
                        
                        <h4 className="font-heading font-bold text-brand-navy text-base mb-2.5 leading-snug group-hover:text-brand-orange transition-colors">
                          {p.name}
                        </h4>
                        
                        <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed flex-1">
                          {p.desc}
                        </p>
                        
                        <Link
                          href="#teklif-al"
                          className="w-full bg-slate-100 hover:bg-brand-orange text-brand-navy hover:text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 text-sm mt-auto shadow-2xs"
                        >
                          <i className="fa-solid fa-file-invoice"></i> Fiyat Sor
                        </Link>
                      </div>
                    </div>
                  ))
                )}
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