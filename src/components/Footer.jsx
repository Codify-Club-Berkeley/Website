import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";

export default function Footer() {
  const footerLinks = [
    "About",
    "Join",
    "Projects",
    "Education",
    "Work With Us",
  ];

  return (
    <div class="flex flex-col sm:flex-row bg-codify-purple justify-between p-4">
      {/**Codify Berkeley Logo and Icon Links */}
      <div class="flex flex-col">
        <div class="text-center">
          <h2>Codify Berkeley</h2>
          <p>An UC Berkeley Student Organization</p>
        </div>
        {/**Link Icons */}
        <div class="flex flex-row place-content-evenly">
          <a
            href="https://github.com/Codify-Club-Berkeley"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black"
          >
            <BsGithub size="40"></BsGithub>
          </a>
          <a
            href="https://www.instagram.com/codifyberkeley/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black"
          >
            <BsInstagram size="40"></BsInstagram>
          </a>
          <a
            href="https://www.linkedin.com/company/codify-berkeley/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black"
          >
            <BsLinkedin size="40"></BsLinkedin>
          </a>
          <a
            href="https://discord.gg/mBEnPjDSQG"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black"
          >
            <BsDiscord size="40"></BsDiscord>
          </a>
        </div>
      </div>

      {/**Footer Links */}
      <div class="flex flex-wrap space-x-3 place-content-around py-5 sm:py-0">
        {footerLinks.map((link) => {
          // link.replace(/\s/g, "") removes all whitespace for the routing to work
          return (
            <Link
              to={"/" + link.replace(/\s/g, "")}
              class="no-underline hover:underline text-black hover:text-link-blue"
            >
              <h4>{link}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}