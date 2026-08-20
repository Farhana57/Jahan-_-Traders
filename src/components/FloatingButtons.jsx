import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8801700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollTop}
          className="w-12 h-12 bg-amber-500 hover:bg-emerald-800 text-black  border border-black- rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          title="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}