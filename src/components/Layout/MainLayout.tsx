"use client";

import { useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Scroller from "../Scroller";
import Footer from "../Footer";
import StoreProvider from "@/app/StoreProvider";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div
      className={`bg-gray-900 text-gray-300 text-lg min-h-screen flex flex-col ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      {/* <>
        Here is the wrapper for the about page <br /> Modify the navbar here
      </>{" "} */}
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Scroller />
      <Footer />
    </div>
  );
};

const HomepageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <HomepageLayout>{children}</HomepageLayout>
    </StoreProvider>
  );
};

export default HomepageWrapper;
