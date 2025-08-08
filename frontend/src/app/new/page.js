'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from "@/lib/validation/taskSchema";
import { CombineDateTime } from "@/lib/utils/dateParser";
import { useCreateTask } from "@/lib/query/task";
import { useRouter } from "next/navigation";


const defaultValues={
    title:'',
    urgency:'',
    dueDate:'',
    dueTime:'',
    description:'',


}
const urgValues=[1,2,3,4,5];

export default function CreateNewTask(){
    const router=useRouter();
    const createTask=useCreateTask();

    const {register,handleSubmit,formState:{errors}, }=useForm({resolver:zodResolver(taskSchema),defaultValues});
    

    const onSubmit=(data)=>{
        const payload={
            title:data.title,
            description:data.description ||'',
            completed: false,
            urgency:data.urgency?Number(data.urgency):undefined,
            dueDate: CombineDateTime(data.dueDate,data.dueTime),
        };

        createTask.mutate(payload,{
            onSuccess:()=>router.replace('/'),
            onError:(error)=> console.log(error),
        });

    };


    return(

        <div className="bg-white flex items-center justify-center h-screen">
            <div className="p-8 bg-emerald-500 rounded-lg shadow-md  h-auto  w-11/12 sm:w-4/5 md:w-2/5">
                <div className="flex justify-center">
                    <h1 className="text-2xl text-black">Task creation</h1>
                </div>  
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div>
                        <label className="block text-white">Title</label>
                        <input {...register('title')} className="w-full text-black rounded px-3 py-2 border border-fuchsia-700" placeholder="Enter in Task Title"/>
                        {errors.title && <p className="text-red-400">{errors.title.message}</p>}
                    </div>  

                    <div>
                        <label className="block text-white">Urgency (1-5)</label>
                        <select {...register('urgency')} className="w-full rounded px-3 py-2 text-black border border-fuchsia-700">
                            <option value=''>select an option</option>
                            {urgValues.map((n)=>(
                                <option key={n} value={n}>
                                    {n}
                                </option>
                            ))}
                        </select>
                        {errors.urgency && <p className="text-red-400">{errors.urgency.message}</p>}
                    </div>

                    <div>
                        <label className="block text-white">Due Date & Time</label>
                        <div className="flex gap-2 ">
                            <input type='date' {...register('dueDate')} className="w-1/2 rounded px-3 py-2 text-black border border-fuchsia-700"/>
                            <input type='time' {...register('dueTime')} className="w-1/2 rounded px-3 py-2 text-black border border-fuchsia-700"/>
                        
                        </div>
                        {errors.dueDate && <p className="text-red-400">{errors.dueDate.message}</p>}
                        {errors.dueTime && <p className="text-red-400">{errors.dueTime.message}</p>}
                        {errors.timePeriod && <p className="text-red-400">{errors.timePeriod.message}</p>}
                    </div>

                    <div>
                        <label className="block text-white">Description(optional)</label>
                        <textarea {...register('description')} className="w-full rounded px-3 py-2 text-black  border border-fuchsia-700" rows={3} placeholder="Description of Task"/>
                    </div>  
                    <div className="flex flex-row w-full">
                        <button type='button' className="w-1/2 bg-white font-semibold rounded text-amber-700 hover:bg-blue-700 border  border-fuchsia-700" onClick={()=>router.replace('/')} >
                            Go Back
                        </button>

                        <button type='submit' className="w-1/2 bg-white font-semibold rounded text-amber-700 hover:bg-blue-700 border border-fuchsia-700" disabled={createTask.isPending}>
                                {createTask.isPending? 'Submitting....':'Submit Task'}
                        </button>
                        
                    </div>


                </form>
                
            </div>
        </div>
    );
}