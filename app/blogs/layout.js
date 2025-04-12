import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Tech Keeda",
  description: "Stay tuned to get latest tech updated",
};

export default function RootLayout({ children }) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  );
}
