import React from "react";
import BiographyComponent from "./Biography";

export const metadata = {
  title: "Biography",
  description: "Personal information",
};
const BiographyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BiographyComponent />
    </div>
  );
};

export default BiographyPage;
