import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Main } from "next/document";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
// select count(*) from services where user_id = user_id;
let serviceCount = 2;

export default function Home() {
  return (

    <>
      <SignedIn>
        { serviceCount < 3 ? `You have registerd ${serviceCount} services. Please register at least 3 services to get verified` : "Welcome to the home page!" }
      </SignedIn>
      <SignedOut>
        Welcome! Please sign in.
      </SignedOut>
    </>
  );
}
