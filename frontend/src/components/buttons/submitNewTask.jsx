'use client'
    import { useRouter } from "next/navigation";
export default function SubmitNewTaskButton(){
    const router=useRouter();

    const handleSubmit=async()=>{
        //COMEBACK AFTER CREATING FETCH FUNCTIONS

        router.replace('/');
        
    }

    return(
        <button className="bg-amber-500 text-white hover:bg-emerald-600 rounded-md border border-pink-500">
            Submit Task
        </button>

    );

}