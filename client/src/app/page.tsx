import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Main } from "next/document";
import Image from "next/image";

let serviceCount = 0;

export default function Home() {
  return (

    <>
      <SignedIn>
        { serviceCount < 3 ? "Please register at least 3 services to get verified" : "Welcome to the home page!" }
      </SignedIn>
      <SignedOut>
        Welcome! Please sign in.
      </SignedOut>
    </>
  );
}
