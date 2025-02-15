import { Leaf } from "@/components/MovingAnimation";
import { Metadata } from "next";
import React from "react";
import HomepageComponent from "./Homepage";
import HomepageWrapper from "@/components/Layout/MainLayout";

export const metadata: Metadata = {
  title: "About Me",
  description: "Default homepage",
};

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {Array.from({ length: 20 }).map((_, i) => (
        <Leaf
          key={i}
          left={`${Math.random() * 100}vw`} // Random horizontal position
          delay={`${Math.random() * 7}s`} // Random animation delay
          size={`${Math.random() * 20 + 10}px`} // Random size
        />
      ))}
      <HomepageComponent />
    </div>
  );
};

export default Homepage;
