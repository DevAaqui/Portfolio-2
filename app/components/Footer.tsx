"use client";
import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com" isExternal color="foreground">
              GitHub
            </Link>
            <Link href="https://linkedin.com" isExternal color="foreground">
              LinkedIn
            </Link>
            <Link href="https://twitter.com" isExternal color="foreground">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}