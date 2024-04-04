import React from "react";
import {
  FaYoutube,
  FaGithub,
  FaDiscord,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="about-me" className="bg-transparent text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connect with me section */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h2 className="text-xl font-bold mb-6">Connect with me</h2>
            <div className="flex gap-4 mb-12">
              <a href="#" className="text-2xl">
                <FaYoutube />
              </a>
              <a href="#" className="text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="text-2xl">
                <FaDiscord />
              </a>
              <a
                href="https://www.facebook.com/rahathasan.coder"
                className="text-2xl"
              >
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl">
                <FaInstagram />
              </a>
            </div>
            <h2 className="text-xl font-bold mb-4">Here's My Email :</h2>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:rahathasan2987@gmail.com"
                className="hover:text-white"
              >
                rahathasan2987@gmail.com
              </a>
            </div>
          </div>

          {/* Our Community section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Community</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <a href="#" className="flex items-center text-lg">
                <FaYoutube className="mr-2 text-sm" />
                Youtube 
              </a>
              <a href="#" className="flex items-center text-lg">
                <FaGithub className="mr-2 text-sm" />
                Github 
              </a>
              <a href="#" className="flex items-center text-lg">
                <FaDiscord className="mr-2 text-sm" />
                Discord 
              </a>
              <a href="#" className="flex items-center text-lg">
                <FaLinkedin className="mr-2 text-sm" />
                Linkedin 
              </a>
            </div>
          </div>

          {/* About section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="mb-4">
             Welcome to our developer community!
            </p>
            <p className="mb-4">
             We are a passionate group of developers dedicated to learning and growing together.
            </p>
          </div>

          {/* Copyright section */}
          <div className="md:col-span-3 mx-auto">
            <p className="text-center md:text-left">
              &copy; Design Inspired by WebChain Dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;