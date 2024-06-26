import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#" className="h-auto w-auto flex flex-row items-center">
          <div className="hidden sm:block">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />
          </div>

          <span className="font-bold ml-[10px] text-nowrap md:block text-gray-300">
            Dev Rahat Hasan
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="hidden lg:flex  items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 text-white text-2xl">
          <a
            href="https://twitter.com/rahatcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/rahat-hasan-coder-365d7w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/rahathasan.coder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
