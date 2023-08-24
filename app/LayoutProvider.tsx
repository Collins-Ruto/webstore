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
          <div className="flex py-4 border">
            <div className="w-full">{children}</div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};
