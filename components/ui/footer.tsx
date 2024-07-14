import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className=" footer grid grid-flow-col bg-neutral-950 p-6 py-8 gap-4 text-neutral-content">
      <aside>
        <a href="https://axonstudio.tech/" rel="noopener noreferrer">
          <Image
            className="h-12 w-auto"
            src="/logo.png"
            alt="Logo"
            width={65}
            height={40}
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
  );
}

export default Footer