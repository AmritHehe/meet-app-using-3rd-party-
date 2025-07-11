import { MouseEventHandler } from "react";

export default function HomeCard(props:{color:string , h1:string , h2:string , handleClick:()=>void}){ 
    return<>
    <div className ={`${props.color} px-4 py-6 flex  flex-col justify-between w-full xl:max-w-[270px] min-h-[250px] rounded-[14px] cursor-pointer`} onClick={props.handleClick}>
            <div className="flex-center glassmorphism size-12 rounded-[10px]">
                <p className="text-3xl">+</p>
            </div>
            <div className="flex flex-col gap-1 ">
                <h1 className="text-2xl font-bold">{props.h1}</h1>
                <p className="text-lg font-normal"> {props.h2} </p>            
            </div>
    </div>
    </>
}