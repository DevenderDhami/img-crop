"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logout from './Logout';

const links = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Movies', href: '/admin/movies' },
  { name: 'Categories', href: '/admin/categories' },
  { name: 'Cast', href: '/admin/Cast' },
  { name: 'Genre', href: '/admin/Genre' },
  { name: 'Reviews', href: '/admin/reviews' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        🎬 Movie Admin
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-lg transition-all ${pathname === link.href
                ? 'bg-gray-700 text-white font-semibold'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <Logout/>
      </div>
    </div>
  );
};

export default Sidebar;
