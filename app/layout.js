import "./globals.css";
export const metadata = {
  title: "Image cropper",
  description: "Developed by Devender Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-100 min-h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
