'use client';

import { useToggleTask, useDeleteTask } from "@/lib/query/task";
import { FormatDate } from "@/lib/utils/dateFormatter";

export default function TaskItem({task}){
    const toggleM=useToggleTask();
    const deleteM=useDeleteTask();

    return(
        <div className=" border rounded flex items-start justify-between p-3">
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <input type='checkbox' checked={task.completed} onChange={()=>toggleM.mutate({id:task._id,completed:task.completed})}/>
                    <h3 className="font-semibold">
                        {task.title}{' '}
                        <span className="text-xs text-gray-500 ">(urgency:{task.urgency})</span>

                    </h3>
                </div>
                <div className="text-sm text-gray-500 mt-1" >
                    <div>status:{task.completed?'completed':'incomplete'}</div>
                    <div>Due: <FormatDate data={task.dueDate}/>  </div>

                </div>
                {task.description && <p className="text-sm text-gray-500 mt-2">{task.description}</p> }
            </div>

            <button onClick={()=>deleteM.mutate(task._id)} className="text-red-600 border border-red-400 rounded hover:bg-red-200 ml-3">
                Delete
            </button>

        </div>
    );

}