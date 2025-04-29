"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function LogoPreloader() {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timeout);
    }, [pathname]);

    if (!loading) return null;

    return (
        <>
            {/* Global style works in client components */}
            <style global jsx>{`
        @keyframes zoomPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .zoom-anim {
          animation: zoomPulse 1s ease-in-out infinite;
        }
      `}</style>

            <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center  bg-white text-black dark:bg-gray-800 dark:text-white transition-opacity duration-500 ">
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute animate-spin m-3 rounded-full w-full h-full border-t-4 dark:border-white border-orange-500" />
                    <>
                    <Logo/>
                    </>
                </div>
            </div>
        </>
    );
}