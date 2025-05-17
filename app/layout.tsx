import { Inter } from "next/font/google";
// import { Providers } from "./providers";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LayoutClient from "./LayoutClient";
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Portfolio",
  description: "My professional portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <LayoutClient>{children}</LayoutClient>
        </Providers>
      </body>
    </html>
  );
}
