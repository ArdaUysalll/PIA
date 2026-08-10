export interface Product {
  id: number | string;
  name: string;
  desc: string;
  sku: string;
  category: string;
  brand: string;
  status: boolean;
  image: string;
}

const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Karbür Freze ve Tornalama Uçları",
    desc: "Yüksek performanslı CNC işleme merkezleri için hassas kesici uçlar.",
    sku: "SND-R390-11T",
    category: "Kesici Takımlar",
    brand: "SANDVIK",
    status: true,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Dijital Kumpas 150mm",
    desc: "Kalite kontrol süreçleri için mikron hassasiyetinde IP67 korumalı.",
    sku: "MIT-150-D",
    category: "Ölçü Aletleri",
    brand: "MITUTOYO",
    status: true,
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "GWS 9-115 S Avuç Taşlama",
    desc: "900W motor, ağır sanayi koşullarına dayanıklı.",
    sku: "BSC-GWS-9115",
    category: "Elektrikli Aletler",
    brand: "BOSCH",
    status: false,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export async function getProducts(): Promise<Product[]> {
  try {
    // FUTURE CMS INTEGRATION POINT:
    // const res = await fetch('https://your-cms-api.com/api/products', { cache: 'no-store' });
    // const data = await res.json();
    // return data.map(mappingFunction);

    // Using clean fallback structure for now
    return fallbackProducts;
  } catch (error) {
    console.error("Failed to fetch products from CMS:", error);
    return fallbackProducts;
  }
}