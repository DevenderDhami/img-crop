"use client"
import Sidebar from "./Sidebar";
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./theme";
import { Toaster } from 'react-hot-toast'
import LoaderOverlay from "@/components/LoaderOverlay";
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
    <ThemeProvider theme={darkTheme}>  
      <CssBaseline /> 
      <LoaderOverlay />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 min-h-screen">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </ThemeProvider>
  );
}
