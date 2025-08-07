'use client';
import { useEffect,useState } from "react";
import NewTaskButton from "../buttons/newTask";
export default function TopBarNav(){
    const [date,setDate]=useState('');

    useEffect(()=>{
        const today= new Date();
        const option={year:'numeric',month:'short',day:'numeric'};
        setDate(today.toLocaleDateString('en-US',option));


    },[]);


    return(
        <div className="flex items-center justify-between bg-gray-100 w-full shadow h-16 px-10">
            <span className="text-gray-600 font-medium ">{date} </span>
            <NewTaskButton/>
        </div>

    );
}