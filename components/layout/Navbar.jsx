"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md py-4 px-6 z-50">
            <div className="flex justify-between items-center container mx-auto">

                {/* Logo & Title */}
                <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <h1 className="text-xl font-bold">My App</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6">
                    <Link href="/img-crop" className="hover:underline">
                        Image Crop
                    </Link>
                    <Link href="/qr-generator" className="hover:underline">
                        QR Generator
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
