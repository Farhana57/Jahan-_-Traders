import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#071c14] text-slate-300 pt-16 pb-8 px-6 border-t-4 border-emerald-600">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-left">
                
                {/* Column 1: Logo & About */}
                <div>
                    {/* Image Logo with Hover Effect */}
                    <a href="#" className="inline-block overflow-hidden mb-4 group">
                        <img 
                            src={logo} 
                            alt="Jahan Traders Logo" 
                            className="h-10 sm:h-12 w-auto object-contain transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110" 
                        />
                    </a>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        JAHAN Traders is a trusted manufacturer and exporter of premium quality eco-friendly jute products from Bangladesh. We supply Jute Yarn, Rope, Bags, Hessian Cloth, Burlap, Geo Textile and many more products worldwide with international quality standards.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-950 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition shadow border border-emerald-900">
                            <Globe size={18} />
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-950 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition shadow border border-emerald-900">
                            <MessageCircle size={18} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-3 inline-block">Quick Links</h4>
                    <div className="w-12 h-1 bg-emerald-500 rounded mb-4"></div>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Home</a></li>
                        <li><a href="#about" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> About Us</a></li>
                        <li><a href="#products" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Products</a></li>
                        <li><a href="#gallery" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Gallery</a></li>
                        <li><a href="#contact" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Our Products */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-3 inline-block">Our Products</h4>
                    <div className="w-12 h-1 bg-emerald-500 rounded mb-4"></div>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#products" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Jute Yarn</a></li>
                        <li><a href="#products" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Jute Rope</a></li>
                        <li><a href="#products" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Jute Bags</a></li>
                        <li><a href="#products" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Jute Twine</a></li>
                        <li><a href="#products" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Hessian Cloth</a></li>
                        <li><a href="#products" className="hover:text-amber-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2"><span className="text-emerald-500">›</span> Geo Textile</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact Us */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-3 inline-block">Contact Us</h4>
                    <div className="w-12 h-1 bg-emerald-500 rounded mb-4"></div>
                    <div className="space-y-3 text-sm text-slate-300">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center shrink-0 mt-1">
                                <MapPin size={16} />
                            </div>
                            <p className="leading-relaxed">3 R.K Mission Road, Lily Pond Center, Level-10, Motijheel C/A, Dhaka-1203, Bangladesh</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center shrink-0">
                                <Phone size={16} />
                            </div>
                            <div>
                                <p>(+8802) 41054317</p>
                                <p>(+8802) 41054318</p>
                                <p>+880 1711 523825</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center shrink-0">
                                <Mail size={16} />
                            </div>
                            <div className="break-all">
                                <p>Jute83620@gmail.com</p>
                                <p>zzamanjute@gmail.com</p>
                                <p>jahantraders86@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="border-t border-emerald-900/80 pt-6 text-center text-xs text-slate-400">
                <p>&copy; 2026 Jahan Traders. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;