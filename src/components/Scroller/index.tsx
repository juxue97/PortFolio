"use client";

import { scrollToTop } from "@/utils/scrollUtils";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const Scroller = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollButtonClassName = `fixed bottom-5 right-5 p-3 bg-gray-600 hover:bg-gray-400 text-white rounded-full shadow-md transition-opacity duration-300 ${
    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  }`;

  return (
    <div>
      <button onClick={scrollToTop} className={`${scrollButtonClassName}`}>
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Scroller;
