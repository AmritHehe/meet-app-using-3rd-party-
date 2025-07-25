"use client"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function MobileNav(){ 
	const pathname = usePathname();
    return <>
    <section className="w-full max-w-[264px] text-white">
        <Sheet>
  				<SheetTrigger asChild >
						<Image
							src ="/favicon.ico"
							width = {20}
							height = {20}
							alt = "bruh"
							className = "cursor-pointer sm:hidden" 
						/>
					</SheetTrigger>
  				<SheetContent  side = "left" className="border-none bg-dark-1">
   					 <Link href = "/" className="flex items-center gap-1">
                <p className="text-[26px] font-extrabold text-white">Yoom</p>
            </Link>
						<div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
							<SheetClose asChild>
								<section className="flex h-full flex-col gap-6 pt-16 text-white">
									{sidebarLinks.map((link) => { 
											const isActive = pathname === link.route ;
											return (
											<SheetClose asChild key={link.route}>
												<Link
													href={link.route}
													key = {link.label}
													className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {
														'bg-blue-1' : isActive,
													})}>
													<p className="font-semibold">{link.label}</p>
													
													</Link>
											</SheetClose>
												
											)
									})}
								</section>
							</SheetClose>
						</div>
  				</SheetContent>
				</Sheet>
    </section>
    </>
}
export default MobileNav