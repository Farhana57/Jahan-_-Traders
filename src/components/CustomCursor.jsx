import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const dot = document.querySelector(".cursor-dot");

    const handleMouseMove = (e) => {
      if (cursor && dot) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        dot.style.left = `${e.clientX}px`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.closest("a") || e.target.closest("button")) {
        document.body.classList.add("hovered");
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.closest("a") || e.target.closest("button")) {
        document.body.classList.remove("hovered");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="cursor-dot"></div>
    </>
  );
}