import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-orange-400 to-gray-200 px-4 py-3 font-montserrat">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-black font-bold text-xl flex items-center">
          <div className="bg-black text-white p-1 rounded mr-2">Logo</div>
          Relume
        </div>

        {/* Menu Toggle for Mobile */}
        <button
          className="text-black lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:space-x-8 items-center absolute lg:relative bg-gray-200 lg:bg-transparent w-full lg:w-auto left-0 top-16 lg:top-auto transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#how-it-works"
              className="text-black block py-2 px-4 hover:underline"
            >
              HOW IT WORKS
            </a>
          </li>
          <li>
            <a
              href="#our-work"
              className="text-black block py-2 px-4 hover:underline"
            >
              OUR WORK
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-black block py-2 px-4 hover:underline"
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#the-team"
              className="text-black block py-2 px-4 hover:underline"
            >
              THE TEAM
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-black block py-2 px-4 hover:underline"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Get Started Button */}
        <div className="hidden lg:block">
          <a
            href="#get-started"
            className="bg-black text-white py-2 px-6 rounded hover:opacity-80"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
