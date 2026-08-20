import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Products() {
  // স্ক্রল করার সময় ডান ও বাম দিক থেকে স্লাইড অ্যানিমেশন ট্রিগার করার জন্য
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-x-[-100px]", "translate-x-[100px]");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".slide-animation-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // মোট ৯টি প্রোডাক্টের ডাটা (জোড়-বিজোড় অনুযায়ী বাম বা ডান থেকে স্লাইড সেট করা)
  const products = [
    {
      title: "Jute Sacks & Bags",
      category: "BEST SELLER",
      image: "https://images.unsplash.com/photo-1530496216518-a53d24e99c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SnV0ZSUyMFNhY2tzJTIwJTI2JTIwQmFnc3xlbnwwfHwwfHx8MA%3D%3D",
      desc: "Durable, heavy-duty, and eco-friendly packaging solutions tailored precisely for agricultural and industrial usage.",
      slideFrom: "translate-x-[-100px]", // বাম দিক থেকে
    },
    {
      title: "Jute Yarn & Twine",
      category: "HIGH STRENGTH",
      image: "https://images.unsplash.com/photo-1720264858018-7d00de96c8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEp1dGUlMjBZYXJuJTIwJTI2JTIwVHdpbmV8ZW58MHx8MHx8fDA%3D",
      desc: "Fine quality spun yarn and twine known for high tensile strength, perfect for diverse weaving and industrial packaging.",
      slideFrom: "translate-x-[100px]", // ডান দিক থেকে
    },
    {
      title: "Jute Geotextiles",
      category: "ECO FRIENDLY",
      image: "https://media.istockphoto.com/id/488853097/photo/sacks-of-rice-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=GEU91z8H5oHlPKHi_hEBIZaU6p1d6qxYFT2Tfcy4Kqc=",
      desc: "Eco-friendly woven fabric ideal for soil erosion control, riverbank protection, and extensive agricultural applications.",
      slideFrom: "translate-x-[-100px]", // বাম দিক থেকে
    },
    {
      title: "Jute Hessian Cloth",
      category: "VERSATILE WEAVE",
      image: "https://plus.unsplash.com/premium_photo-1723652586579-20bc9ed5d807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SnV0ZSUyMEhlc3NpYW4lMjBDbG90aHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Lightweight and flexible tracker-woven fabric widely used for wrapping, decoration, and general utility purposes.",
      slideFrom: "translate-x-[100px]", // ডান দিক থেকে
    },
    {
      title: "Jute Handicrafts",
      category: "HANDCRAFTED",
      image: "https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SnV0ZSUyMEhhbmRpY3JhZnRzfGVufDB8fDB8fHww",
      desc: "Artistic and stylish home decor items, mats, and trendy shopping bags crafted by skilled local artisans.",
      slideFrom: "translate-x-[-100px]", // বাম দিক থেকে
    },
    {
      title: "Custom Jute Rolls",
      category: "CUSTOMIZED",
      image: "https://images.unsplash.com/photo-1738965662183-92c467c9422f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VzdG9tJTIwSnV0ZSUyMFJvbGxzfGVufDB8fDB8fHww",
      desc: "Custom-sized industrial jute rolls manufactured according to buyer specifications for international export standards.",
      slideFrom: "translate-x-[100px]", // ডান দিক থেকে
    },
    {
      title: "Organic Jute Fiber",
      category: "RAW MATERIAL",
      image: "https://images.unsplash.com/photo-1748169207012-6ed2f64aedf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE9yZ2FuaWMlMjBKdXRlJTIwRmliZXJ8ZW58MHx8MHx8fDA%3D",
      desc: "Golden and lustrous raw jute fibers directly sourced from the finest farms for premium spinning and manufacturing.",
      slideFrom: "translate-x-[-100px]", // বাম দিক থেকে
    },
    {
      title: "Jute Carpets & Mats",
      category: "INTERIOR DECOR",
      image: "https://images.unsplash.com/photo-1728113790074-99260675fdd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEp1dGUlMjBDYXJwZXRzJTIwJTI2JTIwTWF0c3xlbnwwfHwwfHx8MA%3D%3D",
      desc: "Naturally textured and durable floor coverings that bring an earthy, elegant aesthetic to modern homes and offices.",
      slideFrom: "translate-x-[100px]", // ডান দিক থেকে
    },
    {
      title: "Jute Shopping Totes",
      category: "TRENDING",
      image: "https://images.unsplash.com/photo-1768734837394-182f596e84ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnV0ZSUyMFNob3BwaW5nJTIwVG90ZXN8ZW58MHx8MHx8fDA%3D",
      desc: "Stylish, laminated, and spacious everyday tote bags designed for sustainable retail shopping and daily utility.",
      slideFrom: "translate-x-[-100px]", // বাম দিক থেকে
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black py-16 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* উপরের কন্টেন্ট ও হেডার অংশ */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-emerald-900/60 text-emerald-900 border border-emerald-500/30 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-3">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Explore Premium Jute Products
          </h2>
          <p className="text-black text-base sm:text-lg">
            Discover our comprehensive range of sustainable, durable, and eco-friendly industrial solutions designed for global standards.
          </p>
        </div>

        {/* ৯টি কার্ডের গ্রিড (ডান ও বাম থেকে স্লাইড, জুম ও কালার ইফেক্টসহ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className={`slide-animation-item bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all duration-700 ease-out hover:-translate-y-2 group flex flex-col justify-between opacity-0 ${product.slideFrom}`}
            >
              <div>
                <div className="relative overflow-hidden h-64 bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-800 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow">
                    {product.category}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-emerald-800 font-bold text-sm group-hover:text-emerald-600 transition-colors"
                >
                  Enquire Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* নিচের কন্টাক্ট ব্যানার ও বাটন সেকশন */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-[#071c14] rounded-[2.5rem] p-8 sm:p-12 border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Need Custom Jute Solutions or Bulk Order?
            </h3>
            <p className="text-emerald-100 text-base max-w-2xl">
              Get in touch with our team today for custom specifications, competitive pricing, and global shipping inquiries.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-amber-300 shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}