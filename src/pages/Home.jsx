import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Globe, Truck, Award, 
  ChevronDown, MapPin, Phone, Mail, Send 
} from "lucide-react";
import aboutImg from "../assets/about.jpeg";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [hero1, hero2, hero3];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  // Intersection Observer hook for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0", "translate-y-0");
            entry.target.classList.remove("opacity-0", "-translate-x-20", "translate-x-20", "translate-y-10");
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ================= AUTO HERO SLIDER =================
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        if (current >= slides.length - 1) {
          return 0;
        }
        return current + 1;
      });
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden">
        {slides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Jahan Traders ${index + 1}`}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-1000 ease-in-out
              ${activeSlide === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/25 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
          <div className="inline-flex items-center gap-2 bg-emerald-950/90 border border-emerald-500 text-emerald-200 text-xs sm:text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm shadow-md mb-6">
            <Award size={16} className="text-emerald-400" />
            Leading Jute Manufacturer & Exporter
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg max-w-4xl">
            Jahan <span className="text-emerald-400">Traders</span>
          </h1>

          <p className="max-w-2xl text-slate-100 text-base sm:text-lg lg:text-xl leading-relaxed mt-6 drop-shadow">
            Jahan Traders is a trusted Bangladeshi manufacturer and exporter of premium quality jute products. We supply eco-friendly products worldwide with international quality standards.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
  <Link
    to="/products"
    className="relative overflow-hidden group bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
  >
    <span className="absolute inset-y-0 left-0 w-0 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
    <span className="relative z-10 flex items-center gap-2 font-semibold group-hover:text-slate-950 transition-colors">
      Explore Products <ArrowRight size={16} />
    </span>
  </Link>

  <Link
    to="/contact"
    className="relative overflow-hidden group bg-slate-900/40 text-white border-2 border-white/80 font-medium px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm shadow-md"
  >
    <span className="absolute inset-x-0 top-0 h-0 bg-amber-300 transition-all duration-300 group-hover:h-full"></span>
    <span className="relative z-10 group-hover:text-slate-950 font-bold transition-colors">
      Contact Us
    </span>
  </Link>
</div>

          <div className="flex gap-2 pt-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-full transition-all duration-500 ${
                  activeSlide === index ? "bg-emerald-400 w-7" : "bg-white/60 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4 FEATURE CARDS OVERLAY ================= */}
<div className="max-w-7xl mx-auto px-6 -mt-24 sm:-mt-28 relative z-20 mb-20 overflow-hidden">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Card 1: Slide from Left */}
    <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in">
      <div className="w-18 h-18 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
        <ShieldCheck size={40} />
      </div>
      <div>
        <h4 className="font-extrabold text-slate-900 text-xl tracking-tight">Verified Quality</h4>
        <p className="text-base font-medium text-slate-600 mt-1.5">100% premium quality jute</p>
      </div>
    </div>

    {/* Card 2: Slide from Left / Top */}
    <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-20 h-20 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
        <Globe size={40} />
      </div>
      <div>
        <h4 className="font-extrabold text-slate-900 text-xl tracking-tight">Global Export</h4>
        <p className="text-base font-medium text-slate-600 mt-1.5">Trusted worldwide delivery</p>
      </div>
    </div>

    {/* Card 3: Slide from Right / Top */}
    <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-20 h-20 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
        <CheckCircle2 size={40} />
      </div>
      <div>
        <h4 className="font-extrabold text-slate-900 text-xl tracking-tight">Quality Standard</h4>
        <p className="text-base font-medium text-slate-600 mt-1.5">Strict testing policy</p>
      </div>
    </div>

    {/* Card 4: Slide from Right */}
    <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-20 h-20 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
        <Truck size={40} />
      </div>
      <div>
        <h4 className="font-extrabold text-slate-900 text-xl tracking-tight">Fast Delivery</h4>
        <p className="text-base font-medium text-slate-600 mt-1.5">Prompt shipment handling</p>
      </div>
    </div>

  </div>
</div>

      {/* ================= ABOUT / DIRECTOR MESSAGE SECTION (Animated) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Slide from Left */}
          <div className="space-y-6 animate-on-scroll opacity-0 -translate-x-20 transition-all duration-1000 ease-out">
            <span className="text-emerald-900 font-semibold text-sm uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              WELCOME TO JAHAN TRADERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              JAHAN TRADERS is a leading Bangladeshi jute exporter and manufacturer...
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              With over 3 decades of experience, we have earned a reputation as a trusted global provider, exporting all kinds of quality jute and jute products worldwide. Our commitment to excellence guarantees premium solutions for our clients.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-3xl font-extrabold text-emerald-600">50+</h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">Years Experience</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-3xl font-extrabold text-emerald-600">40+</h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">Countries Exported</p>
              </div>
            </div>
          </div>

         {/* Image Slide from Right */}
<div className="relative animate-on-scroll opacity-0 translate-x-20 transition-all duration-1000 ease-out overflow-hidden rounded-3xl group">
  <div className="bg-emerald-600/10 absolute -inset-4 rounded-3xl transform -rotate-1 transition-transform duration-500 group-hover:rotate-0"></div>
  <img 
    src={aboutImg} 
    alt="Director" 
    className="relative rounded-3xl shadow-xl w-full object-cover h-[400px] transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:shadow-2xl"
  />
</div>

        </div>
      </section>

      {/* ================= TRUSTED JUTE EXPORT PARTNER (Animated) ================= */}
      <section className="bg-slate-50 py-20 my-16 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
           {/* Image Slide from Left */}
<div className="animate-on-scroll opacity-0 -translate-x-20 transition-all duration-1000 ease-out overflow-hidden rounded-3xl group">
  <img 
    src="https://images.unsplash.com/photo-1763219732147-36c54e2f4ecd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anV0ZSUyMEV4cG9ydCUyMCUyNiUyMFNoaXBtZW50fGVufDB8fDB8fHww" 
    alt="Jute Transport" 
    className="rounded-3xl shadow-xl w-full object-cover h-[380px] transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:shadow-2xl"
  />
</div>

            {/* Text & Cards Slide from Right */}
            <div className="space-y-6 animate-on-scroll opacity-0 translate-x-20 transition-all duration-1000 ease-out">
              <span className="text-emerald-900 font-semibold text-sm uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Trusted Jute Export Partner
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Delivering top-tier jute products worldwide with strict international standards and eco-friendly commitments.
              </p>
              {/* Cards with staggered slide / hover effect */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
  
  {/* Card 1 */}
  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600">
      <CheckCircle2 size={24} />
    </div>
    <div>
      <h5 className="font-bold text-slate-900 group-hover:text-white text-base transition-colors duration-300">Verified Quality</h5>
      <p className="text-sm text-slate-700 group-hover:text-emerald-50 mt-1 transition-colors duration-300">Rigorous quality control processes</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600">
      <Globe size={24} />
    </div>
    <div>
      <h5 className="font-bold text-slate-900 group-hover:text-white text-base transition-colors duration-300">Global Export</h5>
      <p className="text-sm text-slate-700 group-hover:text-emerald-50 mt-1 transition-colors duration-300">Secure worldwide shipment</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600">
      <ShieldCheck size={24} />
    </div>
    <div>
      <h5 className="font-bold text-slate-900 group-hover:text-white text-base transition-colors duration-300">100% Eco-Friendly</h5>
      <p className="text-sm text-slate-700 group-hover:text-emerald-50 mt-1 transition-colors duration-300">Sustainable natural fibers</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600">
      <Award size={24} />
    </div>
    <div>
      <h5 className="font-bold text-slate-900 group-hover:text-white text-base transition-colors duration-300">Dedicated Support</h5>
      <p className="text-sm text-slate-700 group-hover:text-emerald-50 mt-1 transition-colors duration-300">24/7 customer assistance</p>
    </div>
  </div>

</div>
              </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM COLLECTION ================= */}
<section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
  <div className="text-center max-w-2xl mx-auto mb-14 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
    <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500">
      OUR PRODUCTS
    </span>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
      Our Premium Jute Collection
    </h2>
    <p className="text-slate-900 mt-2">
      Explore our wide range of eco-friendly, durable, and biodegradable jute products crafted for global markets.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { title: "Jute Sacks & Bags", desc: "Durable packaging bags for agricultural and industrial use.", img: "https://images.unsplash.com/photo-1465176728568-7da7e336b1e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SnV0ZSUyMFNhY2tzJTIwJTI2JTIwQmFnc3xlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Jute Yarn & Twine", desc: "High tensile strength yarn suitable for diverse industries.", img: "https://images.unsplash.com/photo-1642693252450-a249b8dcaae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SnV0ZSUyMFlhcm4lMjAlMjYlMjBUd2luZXxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Jute Geotextiles", desc: "Eco-friendly technical textiles for soil erosion control.", img: "https://images.unsplash.com/photo-1610428011552-734764c290ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SnV0ZXxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Jute Hessian Cloth", desc: "Finely woven light fabric used for wrapping and décor.", img: "https://images.unsplash.com/photo-1560026234-3174f4958ce7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEp1dGUlMjBIZXNzaWFuJTIwQ2xvdGh8ZW58MHx8MHx8fDA%3D" },
      { title: "Jute Handicrafts", desc: "Customized aesthetic handmade products and home decors.", img: "https://images.unsplash.com/photo-1549057049-7bee8a1c41f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SnV0ZSUyMFlhcm4lMjAlMjYlMjBUd2luZXxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Custom Jute Bulk", desc: "Bulk orders tailored with custom packaging for international export.", img: "https://plus.unsplash.com/premium_photo-1670044659304-644b17897a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VzdG9tJTIwSnV0ZSUyMEJ1bGt8ZW58MHx8MHx8fDA%3D" },
    ].map((item, idx) => {
      // জোড় কার্ডগুলো বাম দিক থেকে (-translate-x-20) এবং বেজোড় কার্ডগুলো ডান দিক থেকে (translate-x-20) স্লাইড করবে
      const slideDirectionClass = idx % 2 === 0 ? "-translate-x-20" : "translate-x-20";
      
      return (
        <div 
          key={idx} 
          className={`animate-on-scroll opacity-0 ${slideDirectionClass} transition-all duration-1000 ease-out bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group hover:shadow-2xl hover:border-emerald-300 transition-all duration-300`}
        >
          <div className="h-56 overflow-hidden relative">
            {/* ইমেজ জুমিং ও কালার ওভারলে ইফেক্ট */}
            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" 
            />
            <span className="absolute top-3 left-3 z-20 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Eco-Friendly
            </span>
          </div>
          <div className="p-6 space-y-3 group-hover:bg-emerald-50/30 transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            <Link to="/products" className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-800 pt-2 group-hover:translate-x-1 transition-all duration-300">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      );
    })}
  </div>
</section>
{/* ================= GLOBAL EXPORT MARKETS ================= */}
<section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
    
    <div className="relative z-10 max-w-3xl mx-auto">
      <span className="bg-emerald-900 text-emerald-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
        Global Reach
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
        Exporting to Over 40+ Countries Worldwide
      </h2>
      <p className="text-emerald-100 text-base leading-relaxed mb-8">
        Our high-grade jute sacks, yarn, and geotextiles are trusted and regularly exported to major markets across Europe, North America, Asia, and the Middle East.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { flag: "🇪🇺", name: "Europe" },
          { flag: "🇺🇸", name: "North America" },
          { flag: "🇦🇪", name: "Middle East" },
          { flag: "🌏", name: "Asia Pacific" },
        ].map((item, idx) => (
          <span 
            key={idx} 
            className="bg-emerald-900/80 border border-emerald-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 cursor-pointer"
          >
            {item.flag} {item.name}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
{/* ================= TESTIMONIALS SECTION ================= */}
<section className="py-20 bg-slate-50/50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="inline-block bg-emerald-100/80 text-emerald-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3">
        Client Testimonials
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
        Trusted by Global Partners
      </h2>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "Jahan Traders provides the best quality jute sacks. Their reliability, strict compliance, and on-time international delivery are unmatched.",
          initials: "JD",
          name: "John Doe",
          role: "Managing Director, UK"
        },
        {
          quote: "Exceptional eco-friendly products and professional communication. They handled our bulk order for jute yarn seamlessly.",
          initials: "MS",
          name: "Michael Schmidt",
          role: "Procurement Head, Germany"
        },
        {
          quote: "Their custom jute rolls and geotextiles exceeded our industrial quality standards. Highly recommended supplier from Bangladesh.",
          initials: "AR",
          name: "Ahmed Al-Rashid",
          role: "Supply Chain Manager, UAE"
        }
      ].map((item, idx) => (
        <div 
          key={idx} 
          className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_50px_rgba(16,185,129,0.12)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col justify-between group"
        >
          <div>
            <div className="text-emerald-500 text-2xl mb-4">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 italic">
              "{item.quote}"
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-base shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              {item.initials}
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 text-base">{item.name}</h4>
              <p className="text-xs sm:text-sm text-slate-500">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ================= FAQ SECTION ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="text-emerald-900 font-semibold text-sm uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full border border-emerald-500">
            SUPPORT & INFO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "What is the Minimum Order Quantity (MOQ)?", a: "Our standard minimum order quantity is 1000 pieces or 1 metric ton, though we accommodate flexible terms for trial bulk orders." },
            { q: "What payment methods do you accept?", a: "We accept secure international payment methods including L/C (Letter of Credit) and T/T (Telegraphic Transfer)." },
            { q: "Do you provide customized packaging and branding?", a: "Yes! We offer 100% custom-tailored weaving, packaging, and private label branding to match your export specifications." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown size={20} className={`text-emerald-600 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= INQUIRY FORM & MAP SECTION ================= */}
<section id="contact" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
    <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_90px_rgba(16,185,129,0.15)] border border-slate-100 transition-all duration-500 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Inquiry Form with Clear Background Image (বাম দিক থেকে স্লাইড হয়ে আসবে) */}
        <div 
            className="relative rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-2xl border border-slate-200 bg-cover bg-center bg-no-repeat transform transition-all duration-1000 ease-out opacity-0 -translate-x-20 animate-on-scroll"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(11, 20, 38, 0.4), rgba(11, 20, 38, 0.4)), url('https://plus.unsplash.com/premium_photo-1675738774450-0831cf002f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q3VzdG9tJTIwSnV0ZSUyMEJ1bGt8ZW58MHx8MHx8fDA%3D')` }}>
            <div className="relative z-10">
                <span className="inline-block bg-emerald-100/90 text-emerald-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-4">
                    Get in Touch
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                    Send Us Your Inquiry
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                    Ready to discuss your requirements? Our team is here to provide competitive quotes and sustainable jute solutions.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully!"); }} className="space-y-4">
                    <div>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required
                            className="w-full p-4 rounded-2xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-300 shadow-sm"
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            required
                            className="w-full p-4 rounded-2xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-300 shadow-sm"
                        />
                    </div>
                    <div>
                        <textarea 
                            placeholder="Your Message / Product Needs" 
                            rows="4" 
                            required
                            className="w-full p-4 rounded-2xl bg-white/90 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-300 shadow-sm resize-none"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="relative overflow-hidden group w-full bg-emerald-500 text-slate-950 py-4 rounded-2xl font-bold text-base shadow-lg hover:bg-emerald-400 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                    >
                         <span className="absolute inset-x-0 top-0 h-0 bg-amber-400 transition-all duration-300 ease-in-out group-hover:h-full z-0"></span>
                         <span className="relative z-10 text-slate-950 font-bold transition-colors duration-300 flex items-center justify-center gap-2">
                             Send Inquiry <i className="fa-solid fa-paper-plane"></i>
                         </span>
                    </button>
                </form>
            </div>
        </div>

        {/* Right Side: Google Map & Location Details (ডান দিক থেকে স্লাইড হয়ে আসবে) */}
        <div className="space-y-4 transform transition-all duration-1000 ease-out opacity-0 translate-x-20 animate-on-scroll delay-200">
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.1)] border border-slate-200 h-[380px] md:h-[450px] relative group">
                <iframe 
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.889311654394!2d90.3912534!3d23.7509797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd566cef75%3A0xcfe34440aa1192eb!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
            </div>
            
            {/* Quick Info Badge under Map */}
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center text-lg shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                    <h4 className="font-bold text-emerald-950 text-sm">Corporate Office</h4>
                    <p className="text-xs text-slate-500">Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>

    </div>
</section>

    </main>
  );
}