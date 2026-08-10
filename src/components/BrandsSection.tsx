const brands = [
  "KARBOSAN",
  "BOSCH",
  "IZELTAŞ",
  "MITUTOYO",
  "MAKITA",
  "3M",
];

export default function BrandsSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading text-3xl font-extrabold text-brand-navy">
          Güçlü Markalarımız
        </h2>
        <p className="text-slate-600 mt-3">
          Sektörün öncü üreticileri ile kaliteyi işletmenize taşıyoruz.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-slate-400 font-bold text-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-orange-500 hover:shadow-orange-500/10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-24 grayscale hover:grayscale-0"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}