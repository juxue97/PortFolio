import React from "react";
import { HomePageRouterLink } from ".";

export const HomepageRouters = () => {
  return (
    <div className="w-full max-w-3xl space-y-6 rounded-lg shadow mx-auto">
      <hr className="mt-5 border-yellow-600" />
      {/* buttons for routing different page: */}
      <div className="space-x-16 justify-center items-center">
        {/* Home */}
        <HomePageRouterLink
          href="/homepage"
          label="Home"
          className="text-4xl hover:text-blue-400 hover:underline"
        />
        {/* Biography */}
        <HomePageRouterLink
          href="/biography"
          label="Biography"
          className="text-4xl hover:text-blue-400 hover:underline"
        />

        {/* Contact */}
        <HomePageRouterLink
          href="/contact"
          label="Contact"
          className="text-4xl hover:text-blue-400 hover:underline"
        />
      </div>
      <hr className="py-5 border-yellow-600" />
    </div>
  );
};
