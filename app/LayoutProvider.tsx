"use client";

import { ThemeProvider } from "next-themes";
import { Footer, Header } from "~/components";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <div
          className={` flex min-h-[100vh] flex-col justify-between bg-white `}
        >
          <Header />
          <div className="flex container mx-auto py-4 ">
            <div className="w-full">{children}</div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};
