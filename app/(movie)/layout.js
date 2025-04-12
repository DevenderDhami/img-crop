import Navbar from "@/components/movie/lib/Navbar";

export const metadata = {
  title: "Film Wale",
  description: "Stay updated with the latest movies",
};

export default function RootLayout({ children }) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  );
}
