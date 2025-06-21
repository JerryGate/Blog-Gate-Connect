import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata = {
  title: "Blog Gate",
  description: "A simple Website",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <main className="max-w-[1340px] mx-auto">
            <NavBar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
