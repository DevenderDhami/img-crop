"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { MdMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import { menuItems } from "@/data/NavMenus";
import Logo from "../common/Logo";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-50 text-black dark:bg-gray-900 dark:text-white shadow-md py-4 px-6 z-50">
            <div className="flex justify-between items-center container mx-auto">
                <div className="logo">
                    <Logo />
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {menuItems?.map((item) => (
                        <Link
                            key={item.label}
                            href={item.link}
                            className="flex items-center gap-2 hover:font-bold min-w-[70px]"
                        >
                            {/* <item.icon className="text-xl" /> */}
                            {item.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                <div className="md:hidden">
                    <div className="flex flex-row gap-4">
                        <ThemeToggle />

                        <button onClick={() => setSidebarOpen(true)}>
                            <MdMenu className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            <MobileMenu isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </nav>
    );
};

export default Navbar;
