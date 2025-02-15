import { DownloadButton } from "@/components/Button";
import React from "react";

const AboutMeSection = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      {/* About Me Content */}
      <div className="flex-1 text-left border-r-4 border-blue-300 pr-16">
        <h1 className="p-2 flex items-top justify-start text-4xl font-semibold">
          About Me
        </h1>
        <section className="p-2 text-lg">
          <p className="px-2 leading-relaxed border-l-4 border-blue-500 lg:text-justify">
            I am a{" "}
            <span className="font-semibold">
              Full-Stack Software & AI Engineer
            </span>{" "}
            specializing in
            <span className="font-semibold">
              {" "}
              Golang, Python, and JavaScript/TypeScript
            </span>
            , with experience in scalable web applications, AI-powered chatbots,
            and cloud-based systems. My expertise includes
            <span className="font-semibold">
              {" "}
              self-hosted LLMs, API development,
            </span>{" "}
            and
            <span className="font-semibold">
              {" "}
              database optimization (SQL & NoSQL)
            </span>
            . I'm passionate about designing efficient, user-centric solutions,
            tackling complex engineering challenges, and integrating AI-driven
            automation into real-world applications.
          </p>
          <p className="mt-4 leading-relaxed lg:text-justify">
            Currently, I am seeking opportunities to apply my skills in{" "}
            <span className="font-semibold">AI, backend systems,</span>
            and <span className="font-semibold">cloud infrastructure</span>,
            collaborate with dynamic teams, and contribute to innovative
            projects.
          </p>
        </section>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center items-center flex-1">
        <DownloadButton
          href="/resume.pdf"
          label="Download Resume"
          className="p-3 rounded-lg text-xl font-semibold text-green-800 bg-green-300 hover:bg-green-100"
        />
      </div>
    </div>
  );
};

export default AboutMeSection;
