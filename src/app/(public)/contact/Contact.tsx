import React from "react";
import Image from "next/image";
import { HomePageRouterLink } from "@/components/Link";
import {
  FacebookSVG,
  GitHubSVG,
  InstagramSVG,
  LinkedInSVG,
} from "@/components/SocialIcons/SocialMediasSVG";
import SocialIcon from "@/components/SocialIcons";
import { HomepageRouters } from "@/components/Link/Homepage";
import SubmissionComponent from "./Submission";

const ContactComponent = () => {
  return (
    <div className="flex flex-1 items-center justify-center px-10 text-center pt-16">
      {/* Two-Row Layout */}
      <div className="max-w-5xl w-full">
        <HomepageRouters />
        {/* Second-Row : Two-Column Layout */}
        <div className="grid grid-cols-2 gap-10 items-center ">
          {/* Left Column - Text Content */}
          <div>
            <div className="text-left border-r-4 border-blue-300 pr-10">
              <h2 className="text-2xl font-semibold">Let&apos;s Connect!</h2>
              <p className=" border-l-4 border-blue-500 mt-3 pl-3">
                I&apos;m actively looking for software development
                opportunities.
                <br />
                If you think I&apos;m a good fit, feel free to reach out!
                <br />
                Feel free to reach out for collaborations, job opportunities, or
                just to say hi!
              </p>
              <p className="mt-4 text-lg font-medium">
                📧 Email:{" "}
                <a
                  href="mailto:hwteh1997@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  hwteh1997@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* Right Column - Profile Picture */}
          <div className="flex flex-col space-y-5 pb-5 pt-5">
            <SubmissionComponent />
          </div>
        </div>
        <div className="flex justify-end items-end">
          <section className="flex mx-2 space-x-5">
            <SocialIcon href="https://www.linkedin.com/in/teh-hung-wei-b155b3249/">
              <LinkedInSVG />
            </SocialIcon>

            <SocialIcon href="https://github.com/juxue97">
              <GitHubSVG />
            </SocialIcon>

            <SocialIcon href="https://www.facebook.com/profile.php?id=100072200499713">
              <FacebookSVG />
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/hungwei1997/">
              <InstagramSVG />
            </SocialIcon>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
