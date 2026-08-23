import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Search,
} from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP BAR (গাঢ় সবুজ, ফোন, ইমেইল, এক্সপোর্ট ও সোশ্যাল আইকনসহ)
      ====================================================== */}
      <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* LEFT - PHONE & EMAIL */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-emerald-300" />
              +880 1711 523825
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-emerald-300" />
              info@jahantraders.com
            </span>
          </div>

          {/* RIGHT - EXPORT & SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <span className="text-emerald-200 font-medium">Worldwide Export</span>
            <div className="flex items-center gap-3 border-l border-emerald-700 pl-4 ml-1">
              {/* Facebook */}
              <a href="#" className="hover:text-emerald-300 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-emerald-300 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="hover:text-emerald-300 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR (সাদা ব্যাকগ্রাউন্ড, হোভার আন্ডারলাইন অ্যানিমেশনসহ)
      ====================================================== */}
      <nav className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* LOGO & SUBTEXT */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3">
            <img src={logo} alt="Jahan Traders" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
                JAHAN TRADERS
              </span>
              <span className="text-xs text-emerald-700 font-semibold tracking-wider mt-1">
                Premium Jute Exporter
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-semibold">
            
            <Link to="/" className="relative py-2 group hover:text-amber-500 transition-colors duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link to="/about" className="relative py-2 group hover:text-amber-500 transition-colors duration-300">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-amber-500 transition-colors duration-300 focus:outline-none group py-1">
                Products <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 rounded-xl shadow-xl p-2 z-50">
                  <Link to="/products/jute-sacks" className="block px-4 py-2 hover:bg-emerald-100 rounded-lg text-slate-700 hover:text-emerald-900">Jute Sacks & Bags</Link>
                  <Link to="/products/jute-yarn" className="block px-4 py-2 hover:bg-emerald-100 rounded-lg text-slate-700 hover:text-emerald-900">Jute Yarn & Twine</Link>
                  <Link to="/products/geotextiles" className="block px-4 py-2 hover:bg-emerald-100 rounded-lg text-slate-700 hover:text-emerald-900">Jute Geotextiles</Link>
                </div>
              )}
            </div>

            <Link to="/gallery" className="relative py-2 group hover:text-amber-500 transition-colors duration-300">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link to="/export" className="relative py-2 group hover:text-amber-500 transition-colors duration-300">
              Export
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link to="/contact" className="relative py-2 group hover:text-amber-500 transition-colors duration-300">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </div>

          {/* RIGHT SIDE: CONTACT BUTTON & SEARCH */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="relative bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-bold transition shadow-md overflow-hidden group">
              <span className="absolute inset-0 bg-amber-500 transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
              <span className="relative z-10">Contact Us</span>
            </Link>

            {/* SEARCH BUTTON */}
            <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center text-slate-700 hover:text-emerald-700 transition shadow-sm">
              <Search size={18} />
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 shadow-lg">
            <Link to="/" onClick={closeMobileMenu} className="block font-medium hover:text-amber-500 transition">Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className="block font-medium hover:text-amber-500 transition">About Us</Link>
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between font-medium hover:text-amber-500 transition py-1"
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-emerald-700">
                  <Link to="/products/jute-sacks" onClick={closeMobileMenu} className="block text-sm hover:text-amber-500">Jute Sacks & Bags</Link>
                  <Link to="/products/jute-yarn" onClick={closeMobileMenu} className="block text-sm hover:text-amber-500">Jute Yarn & Twine</Link>
                  <Link to="/products/geotextiles" onClick={closeMobileMenu} className="block text-sm hover:text-amber-500">Jute Geotextiles</Link>
                </div>
              )}
            </div>

            <Link to="/gallery" onClick={closeMobileMenu} className="block font-medium hover:text-amber-500 transition">Gallery</Link>
            <Link to="/export" onClick={closeMobileMenu} className="block font-medium hover:text-amber-500 transition">Export</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="block font-medium hover:text-amber-500 transition">Contact</Link>
            
            <div className="pt-2 flex items-center gap-3">
              <Link 
                to="/contact" 
                onClick={closeMobileMenu} 
                className="relative flex-1 bg-emerald-700 text-white text-center py-2.5 rounded-lg font-bold shadow overflow-hidden group"
              >
                <span className="absolute inset-0 bg-amber-500 transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                <span className="relative z-10">Contact Us</span>
              </Link>
              
              <button className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
