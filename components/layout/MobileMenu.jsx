"use client";
import { menuItems } from "@/data/NavMenus";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Logo from "../common/Logo";


const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-200 dark:bg-gray-900 dark:text-white transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
                    <div className="logo">
                        <Logo />
                    </div>
                    <button onClick={onClose}>
                        <IoClose className="text-2xl" />
                    </button>
                </div>

                <nav className="flex flex-col p-4 space-y-4">
                    {menuItems?.map((item) => (
                        <Link
                            key={item.label}
                            href={item.link}
                            className="flex items-center gap-3 text-base hover:text-blue-400"
                            onClick={onClose}
                        >
                            <item.icon className="text-xl" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
