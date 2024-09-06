import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FDF9F9] text-black py-8 px-4">
      <div className="container mx-12 flex  flex-col  justify-start items-start lg:justify-between lg:items-center lg:flex-row gap-8">
        {/* Logo and Contact Info */}
        <div className="flex flex-col items-start">
          <img
            src="Zymo_header_Logo.png"
            alt="Zymo Logo"
            className="w-28 mb-4"
          />
          <h3 className="font-bold mb-2 text-lg">Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:hello@zymo.app" className="text-blue-500">
              hello@zymo.app
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+919987933348" className="text-blue-500">
              +91 9987933348
            </a>
          </p>
          <div className="flex space-x-3 mt-4">
            {/* Social media icons */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-500"
            >
              <Facebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-pink-500"
            >
              <Instagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-400"
            >
              <Twitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-600 hover:text-red-500"
            >
              <Youtube />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className=" flex flex-row justify-between items-center lg:justify-start lg:items-start gap-10 lg:gap-24">
          <div>
            <h3 className="font-bold mb-0 text-lg">About</h3>
            <ul className="space-y-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Deals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Fleet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div clas>
            <h3 className="font-bold mb-0 text-lg">Features</h3>
            <ul className="space-y-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Install App Section */}
        <div>
          <h3 className="font-bold mb-2 text-lg">Install App</h3>
          <span>From App Store or Google Play</span>
          <div className="flex flex-wrap mt-2 gap-4 mb-4">
            <a href="#" className="w-32 sm:w-40">
              <img
                src="Gplay.png"
                alt="Get it on Google Play"
                className="w-full"
              />
            </a>
            <a href="#" className="w-32 sm:w-40">
              <img
                src="Astore.png"
                alt="Download on the App Store"
                className="w-full"
              />
            </a>
          </div>
          <h3 className="font-bold mb-2 text-lg">Secured Payment Gateway</h3>
          <div className="flex flex-wrap gap-4">
            <img src="paymeny_gateways.png" alt="" />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-600">
          &copy; 2024 Made by
          <a href="https://www.linkedin.com/in/nitintripathi26/" className="font-bold underline underline-offset-8">
            {" "}
            Nitin Tripathi
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
