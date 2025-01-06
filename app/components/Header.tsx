"use client"; // Add this directive at the top of the file

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Buttons/PrimaryButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 right-0 left-0 z-50 border-b-2 border-white bg-background sm:px-16 md:px-40 lg:px-64" data-aos="fade-down">
      <div className="flex items-center justify-between py-8 gap-40">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary-600">
          <Image 
            src='/logo.png'
            alt='employ logo'
            width={45}
            height={45}
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="flex-1 hidden lg:flex justify-left space-x-6 gap-40">
          <Link href="/" className="text-gray-600 hover:text-primary-600 font-bold">
            Home
          </Link>
          <Link href="/jobs" className="text-gray-600 hover:text-primary-600 font-bold">
            Jobs
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary-600 font-bold">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary-600 font-bold">
            Contact
          </Link>
        </nav>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden md:flex">
          <Button color="primary" radius="pill" size="large" link="/jobs">Find Jobs</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center text-gray-600 hover:text-primary-600 focus:outline-none ml-4"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="md:w-32 md:h-32 sm:w-32 sm:h-32"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-gray-100 border-t-2 border-white transition-all ease-in-out duration-300 transform translate-y-0">
          <Link href="/" className="block px-6 py-2 text-gray-600 hover:bg-primary-100" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block px-6 py-2 text-gray-600 hover:bg-primary-100" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/jobs" className="block px-6 py-2 text-gray-600 hover:bg-primary-100" onClick={handleLinkClick}>
            Jobs
          </Link>
          <Link href="/contact" className="block px-6 py-2 text-gray-600 hover:bg-primary-100" onClick={handleLinkClick}>
            Contact
          </Link>
          <Link
            href="/get-started"
            className="block px-6 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-lg text-center"
            onClick={handleLinkClick}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
