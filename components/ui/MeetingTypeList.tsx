 "use client"
 import React, { useReducer, useState } from "react"
import HomeCard from "../homeCard"
import Home from "@/app/(root)/(home)/page"
import { useRouter } from "next/navigation"
import MeetingModal from "../meetingModal"

 export function MeetingTypeList(){ 
    const router = useRouter()
    const [type , setType] = useState<'join' | 'shedule' | 'instant' | undefined>()
    function createMeeting(){ 

    }
    return <>
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <HomeCard color="bg-red-300" h1="New Meeting" h2="Start an instant meeting" handleClick={()=> setType('instant')} />
        <HomeCard color="bg-red-300" h1= "Schedule" h2 = "Schedule a meet for later" handleClick={()=> setType('shedule')} />
        <HomeCard color="bg-red-300" h1= "Previous" h2 = "Previous Meetings" handleClick={()=> setType('join')}/>
        <HomeCard color="bg-red-300" h1 ="Recording" h2="Old meeeting Recordings" handleClick={()=> router.push('/recordings')}/>
        <MeetingModal 
            isOpen = {type ==='instant'} 
            onClose = {()=>setType(undefined)}
            title = "Start an instant meeting"
            className = "text-center"
            buttonText = "start meeting"
            handleClick = {createMeeting}
        />
    </section>
    </>
 }
 export default MeetingTypeList 