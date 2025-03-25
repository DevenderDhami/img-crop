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
      <body className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content Area (Takes Remaining Space) */}
        <main className="flex-grow bg-gray-100 pt-[5rem] pb-[4rem]">
          {children}
        </main>

        {/* Fixed Footer */}
        <Footer />
      </body>
    </html>
  );
}
