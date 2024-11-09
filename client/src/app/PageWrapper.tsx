"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar/page";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Link } from "lucide-react";

const auth = true;

if (auth) {
  console.log("User is signed in");

} else {

}
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"
        } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >

      <SignedIn>
        <Sidebar />
      </SignedIn>
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
          }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <PageLayout>{children}</PageLayout>
    </StoreProvider>
  );
};

export default PageWrapper;