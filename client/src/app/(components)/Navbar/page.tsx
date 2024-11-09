"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Bell, Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">


      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">

        {/* TOGGLE SIDEBAR  */}
        <SignedIn>
          <button
            className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
            onClick={toggleSidebar}
          >
            <Menu className="w-4 h-4" />
          </button>
        </SignedIn>


      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>

            {/* TOGGLE THEME */}
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          
          <SignedOut>
            <Link href="/sign-in">
              <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
                Sign In
              </button>
            </Link>
          </SignedOut>
          {/* NOTIFICATION ICON */}
          <div className="relative">
            {/*<Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">

              NOTIFICATION COUNT WILL BE DISPLAYED HERE
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer"> */}

            <UserButton />
          </div>
        </div>
        {/* <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;