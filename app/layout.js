import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Image Cropper",
  description: "Developed by Devender Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
        <Navbar />

        <main className="flex-grow bg-white dark:bg-gray-900 dark:text-white  pt-[70px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
