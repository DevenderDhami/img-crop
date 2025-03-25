import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Side - Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} My App. All Rights Reserved.</p>

        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            Contact
          </Link>
          {/* <Link href="/" className="hover:underline">
            Privacy Policy
          </Link> */}
        </div>

        {/* Right Side - Social Media Icons */}
        {/* <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
