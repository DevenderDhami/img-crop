import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { CMP_NAME } from "../constant";

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-black py-6 dark:bg-gray-900 dark:text-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} {CMP_NAME}. All Rights Reserved.
                </p>

                <div className="flex gap-6 text-sm">
                    <Link href="/" className="hover:underline">
                        About
                    </Link>
                    <Link href="/" className="hover:underline">
                        Contact
                    </Link>
                    <Link href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                    </Link>
                </div>

                <div className="flex gap-4">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="text-xl hover:text-blue-500 dark:hover:text-blue-400" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="text-xl hover:text-blue-400 dark:hover:text-blue-300" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-xl hover:text-pink-500 dark:hover:text-pink-400" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
