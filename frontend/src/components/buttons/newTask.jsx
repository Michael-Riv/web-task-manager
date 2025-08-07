'use client';
import { useRouter } from "next/navigation";

export default function NewTaskButton(){
    const router=useRouter();

    return(
        <button className="bg-amber-700 text-white border border-amber-400 rounded-md hover:bg-blue-600" onClick={()=>router.push('/new')}>
            Add New Task 
        </button>
    );
}