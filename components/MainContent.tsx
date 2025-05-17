'use client';

export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex-1 transition-all duration-300 ml-[50px] pt-16 px-4 sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  );
}
