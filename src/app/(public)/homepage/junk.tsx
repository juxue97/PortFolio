import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollerButton } from "@/components/Button";

const Junk = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen gap-5 flex items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="p-2 text-4xl font-bold">Hi, I'm Teh Hung Wei !</h2>
          <Image
            src="/mypic.jpeg"
            alt="My Profile Picture"
            width={100}
            height={100}
            className="mx-auto my-3"
          />
          {/* Personality */}
          <p className="text-lg text-gray-300 italic">
            Passionate about problem-solving, always eager to learn, and love
            building innovative solutions.
          </p>

          {/* Education */}
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-yellow-400">
              Education
            </h3>
            <p className="text-gray-300">
              <>Master's Degree in Computer Science, Data Science Major</>
            </p>
            <p className="text-gray-400 text-sm">
              Universiti Teknologi Malaysia (UTM), Johor Bahru
            </p>

            <p className="text-gray-300">
              <>Bachelor's Degree in Industrial Physics, Electronic Major</>
            </p>
            <p className="text-gray-400 text-sm">
              Universiti Teknologi Malaysia (UTM), Johor Bahru
            </p>
          </div>

          {/* Technologies & Languages */}
          <div className="mt-5 text-center">
            <h3 className="text-2xl font-semibold text-blue-400">
              Technologies & Languages
            </h3>

            <ul className="mt-3 text-gray-300 text-lg text-left">
              <li>
                <span className="text-yellow-300 font-semibold">
                  Languages:
                </span>{" "}
                Python, JavaScript, TypeScript, Go
              </li>
              <li>
                <span className="text-yellow-300 font-semibold">
                  Frameworks:
                </span>{" "}
                React, NextJS, NestJS, FastAPI
              </li>
              <li>
                <span className="text-yellow-300 font-semibold">
                  Databases:
                </span>{" "}
                MySQL, PostgreSQL, MongoDB, ChromaDB
              </li>
              <li>
                <span className="text-yellow-300 font-semibold">Cloud:</span>{" "}
                AWS, Google Cloud Platform
              </li>
              <li>
                <span className="text-yellow-300 font-semibold">Other:</span>{" "}
                Redis, Docker, CI/CD
              </li>
            </ul>
          </div>
          <ScrollerButton
            id="projects"
            label="View Projects"
            className="px-4 py-2 bg-blue-500 mt-6 text-white rounded hover:bg-blue-600"
          />
        </div>
      </section>

      <hr className="my-5 border-yellow-600" />

      {/* Work Experience */}
      <section id="experience" className="p-10 text-center">
        <h2 className="text-3xl font-semibold text-blue-400">
          Work Experience
        </h2>
        <div className="mt-5 p-5 bg-gray-800 rounded-lg text-left max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-yellow-400">
            AI Software Engineer
          </h3>
          <p className="text-gray-300">
            <span className="font-semibold">Anhsin Technology Sdn. Bhd.</span> |
            Kuala Lumpur, Malaysia
          </p>
          <p className="text-gray-400">April 2024 - Jan 2025</p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
            <li>
              Developed and deployed an AI-powered chatbot using{" "}
              <span className="text-yellow-300">RAG architecture</span>,
              integrating <span className="text-yellow-300">OpenAI</span>,{" "}
              <span className="text-yellow-300">LangChain</span>, and{" "}
              <span className="text-yellow-300">FastAPI</span>, improving
              response accuracy by 40%.
            </li>
            <li>
              Designed and optimized the backend in{" "}
              <span className="text-green-300">Python</span>, reducing API
              response time by 30% through efficient database indexing and
              caching.
            </li>
            <li>
              Implemented scalable infrastructure on{" "}
              <span className="text-yellow-300">AWS</span> (EC2, S3, RDS),
              improving uptime to 99.9% and reducing cloud costs by 15%.
            </li>
            <li>
              Managed and optimized{" "}
              <span className="text-yellow-300">MongoDB</span>, ensuring
              seamless data storage and retrieval for chatbot sessions.
            </li>
            <li>
              Integrated streaming APIs using{" "}
              <span className="text-yellow-300">Server-Sent Events (SSE)</span>{" "}
              for real-time chatbot responses, enhancing user engagement.
            </li>
            <li>
              Developed frontend components using{" "}
              <span className="text-yellow-300">TypeScript</span> and{" "}
              <span className="text-yellow-300">Next.js</span>, building the
              homepage and login page with a responsive design.
            </li>
            <li>
              Implemented authentication middleware for secure access token and
              refresh token mechanisms, ensuring seamless authentication and
              session management.
            </li>
          </ul>
        </div>
      </section>

      <hr className="my-5 border-yellow-400" />

      {/* About Me */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-3 text-gray-300">
          I specialize in AI, Golang, and full-stack development.
        </p>
      </section>

      <hr className="my-5 border-yellow-200" />

      {/* Projects Section */}
      <section id="projects" className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Educational Chatbot</h3>
            <p className="text-gray-400 mt-2">
              Built with RAG, LangChain, and OpenAI.
            </p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Local LLM Setup</h3>
            <p className="text-gray-400 mt-2">
              Self-hosted LLM using Ollama & FastAPI.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <div className="p-5 bg-gray-800 rounded-lg max-w-96 mx-auto">
          <h2 className="text-3xl font-semibold">Contact Me</h2>
          <p className="text-gray-300 mt-3">Email: hwteh1997@gmail.com</p>
          <p className="text-gray-300">
            GitHub:{" "}
            <Link
              href="https://github.com/juxue97"
              className="text-blue-400 hover:underline"
            >
              github.com/juxue97
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Junk;
