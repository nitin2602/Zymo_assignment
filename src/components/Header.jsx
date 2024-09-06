import { Menu } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Fleet', link: 'https://zymo.app/' },
    { name: 'About Us', link: 'https://zymo.app/about' },
    { name: 'Blogs', link: 'https://zymo.app/blogs' },
    { name: 'Contact Us', link: 'https://zymo.app/contact' },
    { name: 'Career', link: 'https://zymo.app/join-us' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full lg:fixed z-50 ">
      <div className="w-full  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="Zymo_header_Logo.png" alt="Zymo Logo" className="h-10" />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          </div>

          {/* Navigation Links (Hidden on mobile, visible on larger screens) */}

          <nav className="hidden md:flex space-x-6 ">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className=" text-xl relative text-black after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left "
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu (Visible on mobile screens) */}
        {isMenuOpen && (
          <nav className="md:hidden">
            <a
              href="#"
              className="block py-2 text-lg text-black hover:text-purple-600"
            >
              Fleet
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-black hover:text-purple-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-black hover:text-purple-600"
            >
              Blogs
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-black hover:text-purple-600"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-black hover:text-purple-600"
            >
              Career
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
