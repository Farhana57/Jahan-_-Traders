import React, { useState, useEffect, useRef } from "react";

export default function AboutContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // অ্যানিমেশনের জন্য স্টেট এবং রেফারেন্স
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const heroSlides = [
    {
      title: "About JAHAN Traders",
      subtitle: "Global excellence in sustainable jute and eco-friendly products since 1974.",
      bg: "https://images.unsplash.com/photo-1741176504904-63c5b54d35e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGp1dGUlMjBUZXh0aWxlJTIwb2ZmaWNlfGVufDB8fDB8fHww",
    },
    {
      title: "3 Decades of Unmatched Trust",
      subtitle: "Delivering premium quality jute sacks, yarn, and geotextiles worldwide.",
      bg: "https://images.unsplash.com/photo-1741275271764-71261e3dc0b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGp1dGUlMjBUZXh0aWxlJTIwb2ZmaWNlfGVufDB8fDB8fHww",
    },
  ];

  // হিরো সেকশনের অটো স্লাইডার
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // স্ক্রল অ্যানিমেশন (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800">
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
          <span className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block animate-pulse">
            Our Legacy & Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            {heroSlides[activeSlide].title}
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {heroSlides[activeSlide].subtitle}
          </p>
        </div>

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
      {/* ================= ABOUT US CONTENT ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-emerald-100 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3">
  About <span style={{ color: '#047857 !important' }} className="text-emerald-900">Jahan Traders</span>
</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-emerald-950 tracking-tight mb-6">
            Your Trusted Partner in Premium Jute Export
          </h2>
          <p className="text-slate-900 text-base sm:text-lg leading-relaxed">
            Based in Bangladesh, the heart of the golden fiber, Jahan Traders is committed to delivering top-quality eco-friendly jute products worldwide. With years of expertise and rigorous quality control, we ensure sustainable solutions for global industries.
          </p>
        </div>

        {/* এই ডিভে ref যুক্ত করা হয়েছে যাতে এটি স্ক্রিনে আসলে ট্র্যাক করা যায় */}
        <div ref={aboutRef} className="grid md:grid-cols-2 gap-12 items-center overflow-hidden">
          
          {/* Left Side: Image (বাম দিক থেকে স্লাইড হবে) */}
          <div
            className={`rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-emerald-800/40 bg-white relative group transition-all duration-1000 ease-out transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1748169207012-6ed2f64aedf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGp1dGV8ZW58MHx8MHx8fDA%3D"
              alt="Jahan Traders Office"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Right Side: Text Content (ডান দিক থেকে স্লাইড হবে) */}
          <div
            className={`space-y-6 transition-all duration-1000 ease-out delay-200 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-950">
              Committed to Global Excellence & Sustainability
            </h3>
            <p className="text-slate-800 leading-relaxed">
              Our production capacity is about 1500 m ton per month. We are very much careful about our product quality and customer satisfaction and well-known for the timely shipments.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you have any inquiry / requirements about us and our products, please feel free to contact us.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <h4 className="text-3xl font-extrabold text-emerald-700 mb-1">50+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <h4 className="text-3xl font-extrabold text-emerald-700 mb-1">40+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Export Countries</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}