"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  desc: string;
  sku: string;
  category: string;
  brand: string;
  status: boolean;
  image: string;
}

const defaultProducts: Product[] = [
  { id: 1, name: "Karbür Freze ve Tornalama Uçları", desc: "Yüksek performanslı CNC işleme merkezleri için hassas kesici uçlar.", sku: "SND-R390-11T", category: "Kesici Takımlar", brand: "SANDVIK", status: true, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Dijital Kumpas 150mm", desc: "Kalite kontrol süreçleri için mikron hassasiyetinde IP67 korumalı.", sku: "MIT-150-D", category: "Ölçü Aletleri", brand: "MITUTOYO", status: true, image: "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "GWS 9-115 S Avuç Taşlama", desc: "900W motor, ağır sanayi koşullarına dayanıklı.", sku: "BSC-GWS-9115", category: "Elektrikli Aletler", brand: "BOSCH", status: false, image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
];

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let storedProducts = localStorage.getItem("pia_products");
    let parsedProducts: Product[];

    if (!storedProducts) {
      parsedProducts = defaultProducts;
      localStorage.setItem("pia_products", JSON.stringify(parsedProducts));
    } else {
      parsedProducts = JSON.parse(storedProducts);
    }

    const active = parsedProducts.filter((p) => p.status === true).slice(0, 3);
    setProducts(active);
  }, []);

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length === 0 ? (
            <p className="text-slate-500 col-span-full text-center py-8">Şu an gösterilecek aktif ürün bulunmuyor.</p>
          ) : (
            products.map((p) => {
              const imgUrl = p.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80";
              return (
                <div key={p.id} className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col h-full">
                  <div className="h-64 bg-slate-100 flex items-center justify-center relative overflow-hidden shrink-0">
                    <img src={imgUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-3 py-1.5 rounded-lg z-10 shadow-md uppercase">{p.category}</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-bold bg-orange-50 px-2 py-1 rounded-md">{p.brand || 'STANDART'}</div>
                    </div>
                    <h4 className="font-bold text-brand-navy text-lg mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 transition-all">{p.name}</h4>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2 flex-1">{p.desc}</p>
                    <a href="#teklif-al" className="w-full bg-slate-100 hover:bg-gradient-to-r hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-brand-navy hover:text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm mt-auto">
                      <i className="fa-solid fa-file-invoice"></i> Teklif Al
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

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