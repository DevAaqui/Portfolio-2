"use client";

import clsx from "clsx";

import { Providers } from "./providers";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Toaster } from "react-hot-toast";
// import { beVietnamPro } from '@/config/fonts';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="flex-1  h-screen ">
        <Header />
        <MainContent>
          <main className=" flex-1 items-left mx-auto pt-8">
            <Toaster position="top-center" />
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3">
            {/* Footer content */}
          </footer>
        </MainContent>
      </div>
    </Providers>
  );
}
