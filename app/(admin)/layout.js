import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard of filmwale",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-red-200">
        <Navbar/>
        <div className="flex">
        <Sidebar/>
        {children}
        </div>
    </div>
  );
}
