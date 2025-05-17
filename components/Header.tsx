'use client';

import React from 'react';
// import { useSession, signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/NavBar';

export const Header = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b border-divider bg-background z-40">
      <div className="flex items-center justify-between h-full px-6">
        <Link href="/">
          <div>
            <Image
              src={
                theme === 'dark'
                  ? '/next.svg'
                  : '/next.svg'
              }
              alt="Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
        </Link>
        <Navbar />

        <div className="flex items-center gap-4">
        </div>
      </div>
    </header>
  );
};
