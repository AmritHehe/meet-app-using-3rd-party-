import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

export function Navbar(){ 
    return <>
        <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
            <Link href = "/" className="flex items-center gap-1">
                <p className="text-[26px] font-extrabold text-white max-sm:hidden">Yoom</p>
            </Link>

            <div className="flex-between gap-5">
                 <SignedIn>
                    <UserButton />
                </SignedIn>
                <MobileNav/>
            </div>
        </nav>
    </>
}
export default Navbar