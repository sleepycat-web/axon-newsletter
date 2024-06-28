"use client";
import Link from "next/link";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
		
export default function BackgroundBeamsDemo() {
  let placeholders = ["Enter your email"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className=" h-dvh lg:h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 text-center">
          <h1 className="relative z-10 text-3xl md:text-5xl xl:text-5xl bg-clip-text text-transparent font-poppins font-semibold bg-gray-300 ">
            Innovia
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-3 text-m relative z-10 font-poppins">
            Your weekly scoop of tech innovations, trends and insights.
          </p>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <BackgroundBeams />
      </div>
      <footer className=" footer grid grid-flow-col bg-neutral-950 p-6 py-8 gap-4 text-neutral-content">
        <aside>
          <a href="https://axonstudio.tech/" rel="noopener noreferrer">
            <img
              className="h-12 w-auto"
              width="65"
              height="40"
              src="/logo.png"
              alt="Logo"
            />
          </a>
          <Link
            className="font-poppins w-auto"
            href="/privacy"
            style={{ paddingLeft: "2.5px" }}
          >
            Privacy Policy
          </Link>
        </aside>

        <nav className="grid grid-flow-col justify-self-end ">
          <div className="grid grid-flow-col gap-4 p-2">
            <a
              href="https://www.instagram.com/web_axon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              href="https://www.facebook.com/people/Axon-Studio/61557992653296/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/axon-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              href="https://twitter.com/WebAxon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
    
  );
}
