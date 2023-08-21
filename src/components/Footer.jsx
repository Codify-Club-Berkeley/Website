import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import { footerLinks, lowercaseFooterLinks } from "../data/navBarLinks";

export default function Footer() {
  return (
    <div class="flex flex-col sm:flex-row bg-footer-dark-purple justify-between p-4">
      {/**Codify Berkeley Logo and Icon Links */}
      <div class="flex flex-col">
        <div class="text-left">
          <h2 className="text-white text-xl">Codify Berkeley</h2>
          <p className="text-white text-base">A UC Berkeley Student Organization</p>
        </div>
        {/**Link Icons */}
        <div class="flex flex-row place-content-evenly">
          <a
            href="https://github.com/Codify-Club-Berkeley"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >
            <BsGithub size="30"></BsGithub>
          </a>
          <a
            href="https://www.instagram.com/codifyberkeley/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >
            <BsInstagram size="30"></BsInstagram>
          </a>
          <a
            href="https://www.linkedin.com/company/codify-berkeley/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >
            <BsLinkedin size="30"></BsLinkedin>
          </a>
          <a
            href="https://discord.gg/mBEnPjDSQG"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >
            <BsDiscord size="30"></BsDiscord>
          </a>
        </div>
      </div>

      {/**Footer Links */}
      <div class="flex flex-wrap space-x-3 place-content-around py-5 sm:py-0">
        {footerLinks.map((link, index) => {
          // link.replace(/\s/g, "") removes all whitespace for the routing to work
          return (
            <Link
              to={"/" + lowercaseFooterLinks[index]}
              class="no-underline hover:underline text-black hover:text-link-blue"
            >
              <h4 className="text-base font-normal">{link}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
