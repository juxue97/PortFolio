import React from "react";
import Image from "next/image";
import SocialIcon from "@/components/SocialIcons";
import {
  FacebookSVG,
  GitHubSVG,
  InstagramSVG,
  LinkedInSVG,
} from "@/components/SocialIcons/SocialMediasSVG";
import { HomepageRouters } from "@/components/Link/Homepage";

const HomepageComponent = () => {
  return (
    <div className="flex flex-1 items-center justify-center px-10 text-center pt-16">
      {/* Two-Row Layout */}
      <div className="max-w-5xl w-full pt-5 pb-20">
        <HomepageRouters />
        {/* Second-Row : Two-Column Layout */}
        <div className="grid grid-cols-2 gap-10 items-center ">
          {/* Left Column - Text Content */}
          <div className="text-left border-r-4 border-blue-300 pr-16">
            <h1 className="text-4xl font-bold">
              Hello, I&apos;m Teh Hung Wei!
              <p className="text-lg text-gray-600">
                Full Stack Developer | AI Engineer
              </p>
            </h1>

            <h2 className="text-2xl font-semibold mt-6">
              A Journey to Build and Create
            </h2>

            {/* Poem Start */}
            <div className="mt-4 space-y-4 border-l-4 border-blue-500 pl-4">
              <p className="text-lg">
                I seek a place to learn and grow, <br />
                Where skills can shine, where ideas flow. <br />
                A space to build, to craft, to dream, <br />
                To work within a driven team.
              </p>

              <p className="text-lg text-right">
                Through challenges, I&apos;ll stand my ground, <br />
                In code and data, truth is found. <br />
                With passion strong and vision bright, <br />
                I&apos;ll solve, I&apos;ll shape, I&apos;ll bring to light.
              </p>

              <p className="text-lg">
                A role where purpose finds its way, <br />
                To innovate and pave the way. <br />
                With every line and every test, <br />
                I&apos;ll give my all, I&apos;ll do my best.
              </p>

              <p className="text-lg text-right">
                So here I stand, prepared, aware, <br />
                To make a mark, to prove, to share. <br />
                For in this path, I find my call, <br />
                To grow, to thrive, to give my all.
              </p>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex flex-col space-y-5 pb-5 pt-5">
            <div className="flex items-center justify-center">
              <Image
                src="/mypic.jpeg"
                alt="My Profile Picture"
                width={350}
                height={350}
                className="rounded-full border-4 border-gray-300 shadow-lg"
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <div className="flex-1 text-left text-2xl font-semibold">
                <p className="underline">More About Me :</p>
              </div>
              <div>
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
        </div>
        {/* Third Row : Single Column Layout */}
        <div className="flex items-center justify-end"></div>
        <p className="text-lg mt-16">
          Passionate about AI, software development, and building scalable
          solutions. Constantly learning and improving to deliver the best tech
          solutions.
        </p>
      </div>
    </div>
  );
};

export default HomepageComponent;
