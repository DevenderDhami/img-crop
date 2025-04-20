import Sidebar from "./Sidebar";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard of filmwale",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 min-h-screen">{children}</main>
    </div>
  );
}
