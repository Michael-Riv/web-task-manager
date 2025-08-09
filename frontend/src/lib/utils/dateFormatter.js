'use client';
import { useState, useEffect } from "react";
export function FormatDate({data}){
    

    const [text,setText]=useState('-');
    useEffect(() => {
        if (!data) return;

        const d = new Date(data);
        setText(d.toLocaleString()); // runs only on client
    }, [data]);

    return <span>{text}</span>;

    //error with hydration SSR 
    //const d = new Date(data);
    //return d.toLocaleString(); 

}