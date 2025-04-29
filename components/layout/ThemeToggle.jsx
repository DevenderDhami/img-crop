"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    if (theme === null) return null;

    return (
        <button
            onClick={toggleTheme}
            className=" text-yellow-300 dark:text-white hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
    );
};

export default ThemeToggle;
