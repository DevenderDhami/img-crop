"use client"
import Sidebar from "./Sidebar";
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'

// export const metadata = {
//   title: "Admin Dashboard",
//   description: "Admin dashboard of filmwale",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    // If using the App Router, you can use event listeners like this
    const observer = () => {
      handleStart()
      handleStop()
    }

    observer()

    return () => {
      NProgress.done()
    }
  }, [pathname])
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 min-h-screen">{children}</main>
    </div>
  );
}
