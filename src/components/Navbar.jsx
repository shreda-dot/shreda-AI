import React from "react";
import logo from "../assets/logo.png";
import "../index.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-50 top-0 bg-slate-950/20 w-full transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16 md:h-20">
            {/* LOGO IMAGE */}
            <div className="flex items-center space-x-1 group cursor-pointer">
              <div>
                <img
                  src={logo}
                  className="text-white w-6 h-6 sm:h-8 sm:w-8"
                  alt="Mylogo"
                />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Shr</span>
                <span className="text-indigo-400">eda</span>
              </span>
            </div>

            {/* NAV LINKS */}
            <div className="hidden md:flex items-center justify-between space-x-6 lg:space-x-8 md:space-x-10 ml-10">
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg lg:text-base font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg lg:text-base font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg lg:text-base font-medium"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg lg:text-base font-medium"
              >
                Contact
              </a>
            </div>
            <button
              className="md:hidden flex items-center p-2 text-gray-200 hover:text-white"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <X className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-slate-950/90 px-2 backdrop-blur border-t border-slate-800 pt-2 pb-3 space-y-1 sm:px-3 animate-in slide-in-from-top duration-300">
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
