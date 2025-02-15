import React from "react";
import ContactComponent from "./Contact";

export const metadata = {
  title: "Contact",
  description: "Contact me",
};
const BiographyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ContactComponent />
    </div>
  );
};

export default BiographyPage;
