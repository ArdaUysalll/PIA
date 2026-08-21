"use client";

import { useState, FormEvent } from "react";

export default function QuoteSection() {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build WhatsApp message string cleanly using explicit labels
    let msg = "Merhaba, hızlı fiyat teklifi almak istiyorum.%0A%0A";
    
    const labels: Record<string, string> = {
      firma: "Firma / Kurum Adı",
      adSoyad: "Ad Soyad / Yetkili",
      telefon: "Telefon",
      eposta: "E-Posta",
      aciklama: "Talep Edilen Malzemeler",
    };

    formData.forEach((value, key) => {
      if (value.toString().trim() !== "") {
        const label = labels[key] || key;
        msg += `*${label}:* ${value}%0A`;
      }
    });

    setTimeout(() => {
      // Open WhatsApp chat in a new tab
      window.open(`https://wa.me/905376515132?text=${msg}`, "_blank");

      // Reset form and show success state
      form.reset();
      setLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 800);
  };

  return (
    <section id="teklif-al" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Abstract Decoration Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="white" strokeWidth="0.1" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full">
              B2B Satın Alma Kolaylığı
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-4">
              Malzeme Listenizi İletin, Fiyat Verelim
            </h2>
            <p className="text-slate-400 text-base mt-3">
              İhtiyaç listenizi iletin; teknik ekibimiz en kısa sürede özel teklifinizi hazırlasın.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Firma / Kurum Adı *</label>
                <input
                  type="text"
                  name="firma"
                  required
                  placeholder="Örn: ABC Sanayi A.SH."
                  className="w-full px-4 py-3 text-sm bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Ad Soyad / Yetkili *</label>
                <input
                  type="text"
                  name="adSoyad"
                  required
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-3 text-sm bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Telefon *</label>
                <input
                  type="tel"
                  name="telefon"
                  required
                  placeholder="05XX XXX XX XX"
                  className="w-full px-4 py-3 text-sm bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">E-Posta *</label>
                <input
                  type="email"
                  name="eposta"
                  required
                  placeholder="ornek@firma.com"
                  className="w-full px-4 py-3 text-sm bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Talep Edilen Malzemeler / Açıklama</label>
              <textarea
                name="aciklama"
                rows={4}
                placeholder="Ürün kodları, adetler veya talep ettiğiniz teknik detayları buraya yazabilirsiniz..."
                className="w-full px-4 py-3 text-sm bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent focus:outline-none transition-all placeholder:text-slate-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading || isSuccess}
              className={`w-full font-bold py-4 px-6 rounded-xl text-base sm:text-lg text-white flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isSuccess
                  ? "bg-emerald-600 shadow-lg shadow-emerald-900/40 cursor-default"
                  : "bg-[#f97316] hover:bg-[#c2410c] shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_25px_rgba(194,65,12,0.6)]"
              }`}
            >
              {loading && <i className="fa-solid fa-spinner animate-spin text-lg"></i>}
              {!loading && isSuccess && <i className="fa-solid fa-circle-check text-lg"></i>}
              {!loading && !isSuccess && <i className="fa-solid fa-paper-plane text-sm"></i>}

              <span>
                {loading ? "Gönderiliyor..." : isSuccess ? "Talep İletildi ✓" : "Teklif Talebini Gönder"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}