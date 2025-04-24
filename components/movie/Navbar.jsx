'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { FiMenu, FiX, FiSun, FiMoon, FiSearch } from "react-icons/fi"
import { InputAdornment, InputBase, TextField } from "@mui/material"
// import { navmenu } from "../data/navmenu"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const [searchQuery, setSearchQuery] = useState('')

  const navmenu = [
    { title: 'Anime', link: '/movies' },
    { title: 'Hollywood', link: '/genres' },
    { title: 'Web Series', link: '/web-series' },
    { title: 'Bollywood', link: '/tv-shows' },
  ]

  // Auto-close sidebar on md and up
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Hydrate theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle('dark', storedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    // <header className="bg-white dark:bg-black w-full shadow-md sticky top-0 z-50 min-h-[80px] flex items-center transition-colors">
    //   <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
    //     <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-white lg:pl-4">
    //       🎬 Filmwale
    //     </Link>

    //     {/* Desktop Navigation */}
    //     <nav className="hidden md:flex gap-6 items-center">
    //       {navmenu
    //         .filter(item => item.title && item.link)
    //         .map((item, index) => (
    //           <Link
    //             key={index}
    //             href={item.link}
    //             className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
    //           >
    //             {item.title}
    //           </Link>
    //         ))}

    //       {/* Theme Toggle */}
    //       <button
    //         onClick={toggleTheme}
    //         className="text-gray-700 dark:text-gray-300  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    //       >
    //         {theme === 'light' ? <FiMoon size={25} /> : <FiSun size={25} />}
    //       </button>
    //     </nav>

    //     {/* Mobile Menu Toggle */}
    //     <div className="md:hidden flex flex-row items-center gap-4 my-auto">
    //       {/* Theme Toggle */}
    //       <div
    //         onClick={toggleTheme}
    //         className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
    //       >
    //         {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
    //       </div>

    //       {/* Menu Toggle */}
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         className="text-gray-700 dark:text-gray-300"
    //       >
    //         {!isOpen && <FiMenu size={24} />}
    //       </button>
    //     </div>
    //   </div>

    //   <div
    //     className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    //     onClick={() => setIsOpen(false)}
    //   />

    //   {/* Sidebar */}
    //   <aside
    //     className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    //   >
    //     <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
    //       <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">Menu</span>
    //       <button onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300">
    //         <FiX size={24} />
    //       </button>
    //     </div>

    //     <nav className="flex flex-col p-4 gap-4">
    //       {navmenu
    //         .filter(item => item.title && item.link)
    //         .map((item, index) => (
    //           <Link
    //             key={index}
    //             href={item.link}
    //             className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    //             onClick={() => setIsOpen(false)}
    //           >
    //             {item.title}
    //           </Link>
    //         ))}


    //     </nav>
    //   </aside>

    // </header>
    <header className="bg-white dark:bg-black w-full shadow-md sticky top-0 z-50 min-h-[80px] flex items-center transition-colors">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-white lg:pl-4">
          🎬 Filmwale
        </Link>

        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          
          {navmenu
            .filter(item => item.title && item.link)
            .map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
              >
                {item.title}
              </Link>
            ))}
          {/* Search Bar */}
          <div className="relative">
            <InputBase
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Movies..."
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <FiSearch className="text-gray-500 dark:text-gray-300" size={20} />
                </InputAdornment>
              }
              className="dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-blue-400 transition-colors"
            />
          </div>


          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {theme === 'light' ? <FiMoon size={25} /> : <FiSun size={25} />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex flex-row items-center gap-4 my-auto">
          {/* Theme Toggle */}
          <div
            onClick={toggleTheme}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </div>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300"
          >
            {!isOpen && <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          {/* <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">FilmWale</span> */}
          {/* Search Bar */}
          <div className="relative">
            <InputBase
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Movies..."
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <FiSearch className="text-gray-500 dark:text-gray-300" size={20} />
                </InputAdornment>
              }
              className="dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md py-2 pl-2 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-blue-400 transition-colors"
            />
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300">
            <FiX size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {navmenu
            .filter(item => item.title && item.link)
            .map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
        </nav>
      </aside>
    </header>
  )
}
