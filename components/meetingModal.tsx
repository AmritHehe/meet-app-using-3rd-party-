import { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface meetingModalProps { 
    isOpen : boolean ;
    onClose : ()=>void ; 
    title: string ;
    className?: string ;
    children?: ReactNode ; 
    handleClick?: ()=> void ;
    buttonText?: string ;
    image?: string;
    buttonIcon?: string ; 

}
export default function MeetingModal(
    {isOpen , onClose , title , className , children , handleClick , buttonText , image , buttonIcon } : meetingModalProps
){
    return<>
        <Dialog open={isOpen} onOpenChange={onClose}>   
            <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
                 <div className="flex flex-col gap-6 ">
                    <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
                        {title}
                    </h1>
                    {children}
                    <Button className="bg-blue-1 focus-visible:right-0 focus-visible:ring-offset-0" onClick={handleClick} >
                        {buttonText || 'Schedule Meeting' } 
                    </Button>
                 </div>
            </DialogContent>
        </Dialog>
    </>
}
