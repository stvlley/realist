import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "./PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realist",
  description: "Realist - A Real Estate Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <PageWrapper>{children}</PageWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
