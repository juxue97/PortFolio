"use client";

import React from "react";
import Image from "next/image";
import {
  FacebookSVG,
  GitHubSVG,
  InstagramSVG,
  LinkedInSVG,
} from "@/components/SocialIcons/SocialMediasSVG";
import SocialIcon from "@/components/SocialIcons";
import { HomepageRouters } from "@/components/Link/Homepage";
import AboutMeSection from "./AboutMe";

const BiographyComponent = () => {
  return (
    <div className="flex flex-1 items-center justify-center px-10 text-center pt-16">
      <div className="max-w-5xl w-full pt-5 pb-20">
        <HomepageRouters />
        <div className="grid grid-cols-2 gap-10 items-center">
          {/* Left Column - About Me Section */}
          <AboutMeSection />

          {/* Right Column - Profile & Socials */}
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

        {/* Work & Study Sections */}
        <div className="text-start space-y-20 text-2xl mt-16">
          {/* Latest Projects & Contributions */}
          <section>
            <h1 className="text-3xl font-semibold">
              Latest Projects & Contributions
            </h1>
            <ul className="list-disc list-inside px-3 mt-3 space-y-2">
              <li>
                Revamped backend infrastructure by migrating legacy code to
                Golang.
              </li>
              <li>
                Designed and implemented scalable microservices architecture in
                Golang.
              </li>
              <li>
                Optimized database queries for improved performance and
                efficiency.
              </li>
              <li>
                Integrated AI-powered chatbot features into a production-grade
                system.
              </li>
            </ul>
          </section>

          {/* Ongoing Development */}
          <section>
            <h1 className="text-3xl font-semibold">Ongoing Development</h1>
            <ul className="list-disc list-inside px-3 mt-3 space-y-2">
              <li>
                Deploying a full microservices ecosystem using Kubernetes and
                Golang.
              </li>
              <li>
                Exploring advanced deployment strategies with Helm and service
                mesh.
              </li>
              <li>
                Enhancing API gateway security and observability with Prometheus
                and Grafana.
              </li>
            </ul>
          </section>

          {/* Research & Learning Focus */}
          <section>
            <h1 className="text-3xl font-semibold">
              Research & Learning Focus
            </h1>
            <ul className="list-disc list-inside px-3 mt-3 space-y-2">
              <li>
                Understanding Large Concept Models (LCMs) and their real-world
                applications.
              </li>
              <li>
                Exploring Knowledge Augmented Generation (KAG) to improve
                chatbot accuracy.
              </li>
              <li>
                Investigating distributed AI model training with federated
                learning.
              </li>
              <li>
                Continuously researching best practices for scaling AI systems
                in production.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BiographyComponent;
