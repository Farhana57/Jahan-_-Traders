import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import FloatingButtons from "./components/FloatingButtons";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Export from "./pages/Export";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"; // ProductDetails পেজ ইম্পোর্ট করা হলো
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white relative">

      {/* ================= CUSTOM CURSOR ================= */}
      <CustomCursor />

      {/* ================= NAVBAR + TOP BAR ================= */}
      <Navbar />

      {/* ================= MAIN PAGE CONTENT ================= */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/export" element={<Export />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} /> {/* ডাইনামিক প্রোডাক্ট রাউট */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ================= FLOATING BUTTONS ================= */}
      <FloatingButtons />

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}