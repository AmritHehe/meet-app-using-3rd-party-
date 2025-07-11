import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "PinkBox",
  description: "pookie solution for your storage needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
        className={`${poppins.variable} bg-dark-2 font-poppins antialiased`}
      >
        {children}
      </body>
      </ClerkProvider>
      
    </html>
  );
}
