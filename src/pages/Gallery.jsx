import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "Our Visual Showcase",
      subtitle: "Explore our complete collection of high-quality eco-friendly jute products, manufacturing process, and global export shipments.",
      bg: "https://images.unsplash.com/photo-1567708415513-6ba3822eaec1?w=1600&auto=format&fit=crop&q=80"
    },
    {
      title: "Global Jute Excellence",
      subtitle: "Delivering sustainable golden fiber and handicrafts from Bangladesh to worldwide destinations with international standards.",
      bg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&auto=format&fit=crop&q=80"
    }
  ];

  // Auto Slider for Hero Section
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Scroll Animation Observer for Cards
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

    const elements = document.querySelectorAll('.slide-from-left, .slide-from-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden bg-emerald-950 flex items-center justify-center">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(2, 10, 34, 0.3), rgba(2, 6, 10, 0.3)), url('${slide.bg}')`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white transition-all duration-700">
          <span className="bg-emerald-500/25 border border-emerald-400 text-emerald-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block animate-pulse">
            Our Gallery & Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            {heroSlides[activeSlide].title}
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {heroSlides[activeSlide].subtitle}
          </p>
        </div>

        {/* Hero Slider Dots */}
        <div className="absolute bottom-6 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide ? "w-8 bg-emerald-400" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= GALLERY SECTION (9 Cards) ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3">
            Visual Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight mb-4">
            Jute Products Gallery
          </h2>
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed">
            Explore our curated items ranging from raw materials to finished sustainable lifestyle goods.
          </p>
        </div>

        {/* Gallery Grid (9 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Item 1 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-right flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1567708415513-6ba3822eaec1?w=600&auto=format&fit=crop&q=80" alt="Jute Bags" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Eco Product</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Premium Jute Bags</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Durable and sustainable shopping, promotional, and packaging bags for global retail.</p>
                </div>
            </div>

            {/* Item 2 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-right flex flex-col hover:shadow-2xl transition-shadow duration-300" style={{ transitionDelay: '100ms' }}>
                <div className="h-64 overflow-hidden relative">
                    <img src="https://plus.unsplash.com/premium_photo-1675738774551-cf86de1fd242?w=500&auto=format&fit=crop&q=60" alt="Jute Doormat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Home Decor</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Jute Doormat (Papus)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Handmade braided doormats and rugs providing natural elegance and durability to floors.</p>
                </div>
            </div>

            {/* Item 3 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-right flex flex-col hover:shadow-2xl transition-shadow duration-300" style={{ transitionDelay: '200ms' }}>
                <div className="h-64 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60" alt="Jute Handicrafts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Handicraft</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Jute Handicrafts</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Exquisite handmade decorative items, storage baskets, and artistic lifestyle products.</p>
                </div>
            </div>

            {/* Item 4 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-left flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden relative">
                    <img src="https://plus.unsplash.com/premium_photo-1674624789813-aee3aaa976cb?w=500&auto=format&fit=crop&q=60" alt="Jute Yarn" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Raw Material</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Natural Jute Yarn</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Fine quality golden fiber spun uniformly for diverse industrial weaving applications.</p>
                </div>
            </div>

            {/* Item 5 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-left flex flex-col hover:shadow-2xl transition-shadow duration-300" style={{ transitionDelay: '100ms' }}>
                <div className="h-64 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1568527176115-a1459637c2c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3Ryb25nJTIwSnV0ZSUyMFJvcGV8ZW58MHx8MHx8fDA%3D" alt="Jute Rope" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Industrial</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Strong Jute Rope</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">High tensile strength natural ropes crafted for multi-purpose heavy-duty use.</p>
                </div>
            </div>

            {/* Item 6 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-left flex flex-col hover:shadow-2xl transition-shadow duration-300" style={{ transitionDelay: '200ms' }}>
                <div className="h-64 overflow-hidden relative">
                    <img src="https://plus.unsplash.com/premium_photo-1673637381677-19dbcedd1bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGVzc2lhbiUyMENsb3RoJTIwJTI2JTIwQnVybGFwfGVufDB8fDB8fHww" alt="Hessian Cloth" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Textile</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Hessian Cloth & Burlap</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Woven eco-friendly fabric ideal for agriculture, packaging, and creative decor.</p>
                </div>
            </div>

            {/* Item 7 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-right flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1776164857972-451f796eb0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEp1dGUlMjBUd2luZXxlbnwwfHwwfHx8MA%3D%3D" alt="Jute Twine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Utility</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Jute Twine</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Thin, strong polished and unpolished twines used for gardening, crafting, and bundling.</p>
                </div>
            </div>

            {/* Item 8 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-right flex flex-col hover:shadow-2xl transition-shadow duration-300" style={{ transitionDelay: '100ms' }}>
                <div className="h-64 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1776164909067-c0909966c940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEp1dGUlMjBHZW8lMjBUZXh0aWxlfGVufDB8fDB8fHww" alt="Geo Textile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Eco Engineering</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Geo Textile</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Bio-engineering natural fabric used for soil erosion control and slope protection.</p>
                </div>
            </div>

            {/* Item 9 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 slide-from-right flex flex-col hover:shadow-2xl transition-shadow duration-300" style={{ transitionDelay: '200ms' }}>
                <div className="h-64 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1635352416471-91fdac82ca2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnV0ZSUyMFNoaXBtZW50fGVufDB8fDB8fHww" alt="Export Shipment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Global Shipping</span>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                    <h3 className="text-emerald-950 text-xl font-bold mb-2">Export & Shipment</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Safe container loading and international delivery adhering to global trade standards.</p>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;