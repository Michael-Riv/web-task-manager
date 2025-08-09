'use client';

import { useTasks } from "@/lib/query/task";

import TaskItem from "./taskItem";

export default function TaskList({filters}){
    const {data,isLoading, error}=useTasks(filters);

    if(isLoading || data===undefined){
        return <div className="p-4">Loading...........</div>;

    }
    if(error){
        return <div> {error.message}</div>;

    }

    if(Array.isArray(data) && data.length===0){
        return <div className="p-4">no tasks found. Create a task!!!</div>;
    }
    return(
        <div className="overflow-y-auto p-4 ">
            <div className="grid grid-3">
                {data.map((item) =>(
                    <TaskItem key={item._id} task={item}/>
                ))}
            </div>
        </div>
    );
}