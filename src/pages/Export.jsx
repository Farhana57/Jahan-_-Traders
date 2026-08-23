import React, { useState, useEffect } from 'react';

const Export = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    'https://plus.unsplash.com/premium_photo-1677695581626-2a75bdece138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anV0ZSUyMFRleHRpbGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1741275271299-a479e24420f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1dGUlMjBUZXh0aWxlJTIwb2ZmaWNlfGVufDB8fDB8fHww'
  ];

  // Hero Image Slider Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Scroll Animation Observer for Cards & Sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      
      {/* ================= HERO SECTION WITH BACKGROUND IMAGE SLIDER ================= */}
      <section className="bg-emerald-900 py-24 px-6 text-center text-white relative overflow-hidden">
        
        {/* Background Slider Images with Lighter Dark Overlay */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(6, 78, 59, 0.45), rgba(2, 44, 34, 0.55)), url('${img}')`,
            }}
          />
        ))}

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-emerald-700/85 backdrop-blur-md text-emerald-100 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-emerald-500 shadow-sm">
            Trusted Jute Exporter Since 1974
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Worldwide Jute Export Services
          </h1>
          <p className="text-emerald-100 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Delivering premium eco-friendly golden fiber products from Bangladesh to global markets with over 3 decades of excellence, strict quality control, and timely shipments.
          </p>
        </div>

        {/* Slider Dots Indicator */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 shadow ${
                activeSlide === index ? 'bg-emerald-400 w-8' : 'w-3 bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

       {/* ================= EXPORT PROCESS SECTION ================= */}
<section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
  <div className="text-center max-w-2xl mx-auto mb-16">
    <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">Our Streamlined Export Process</h2>
    <p className="text-slate-600 text-base">We ensure seamless door-to-port and port-to-port international shipping services.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* Card 1 */}
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">1</div>
      <h3 className="font-bold text-xl text-emerald-950 mb-3">Order & Inquiry</h3>
      <p className="text-slate-600 text-sm">Client specifies requirements, quality, grading, and quantity for custom packaging.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">2</div>
      <h3 className="font-bold text-xl text-emerald-950 mb-3">Quality Control</h3>
      <p className="text-slate-600 text-sm">Rigorous inspection and moisture testing to meet international export benchmarks.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">3</div>
      <h3 className="font-bold text-xl text-emerald-950 mb-3">Secure Packaging</h3>
      <p className="text-slate-600 text-sm">Compressed bales and moisture-proof packing to ensure safe sea or air cargo transit.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">4</div>
      <h3 className="font-bold text-xl text-emerald-950 mb-3">Global Delivery</h3>
      <p className="text-slate-600 text-sm">Customs clearance, documentation handling, and timely container dispatch worldwide.</p>
    </div>

  </div>
</section>

      {/* ================= GLOBAL REACH / MARKETS SECTION ================= */}
      <section className="bg-emerald-950 text-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
          {/* Left Side: Global Footprint */}
          <div>
            <span className="inline-block bg-emerald-800 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">Global Footprint</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Serving Clients Across Continents</h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Jahan Traders has established a robust international shipping network, supplying high-grade raw jute, yarn, sacks, and eco-friendly bags to international buyers.
            </p>
            <ul className="space-y-3 text-emerald-200">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i> 
                <span>Strict adherence to global trade standards and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i> 
                <span>Fast and transparent documentation (Bill of Lading, Certificate of Origin)</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i> 
                <span>Trusted partnerships with leading global shipping liners</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Export Documentation Support */}
          <div className="bg-emerald-900 p-6 sm:p-8 rounded-3xl border border-emerald-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-3 text-white">Export Documentation Support</h3>
            <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
              We provide comprehensive paperwork required by destination customs authorities to ensure hassle-free port clearance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold">
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Commercial Invoice
              </div>
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Packing List
              </div>
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Certificate of Origin
              </div>
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center text-white hover:bg-emerald-800 transition-colors shadow-sm">
                Bill of Lading (B/L)
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Export;