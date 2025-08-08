'use client';

import { useMutation , useQuery,  useQueryClient } from "@tanstack/react-query";
import { getTask,getTasks,updateTask,createTask,deleteTask } from "@/lib/api/tasks";

const keys={

    all:['tasks'],
    list:(filters)=>['tasks',filters||{}],
    detail:(id)=>['tasks','detail',id],
};

export function useTasks(filters){
    return useQuery({
        queryKey:keys.list(filters),
        queryFn:()=>getTasks(filters||{}),


    });
}

export function useTask(id){
    return useQuery({
        queryKey:keys.detail(id),
        queryFn:()=>getTask(id),
    });
}


export function useCreateTask(){
    const hold=useQueryClient();
    return useMutation({
        mutationFn:(data)=>createTask(data),
        onSuccess:()=>{
            hold.invalidateQueries({queryKey:keys.all});
        },
    }
);
}

export function useUpdateTask(){//for generall updating like title,urgency,due date
    const hold=useQueryClient();
    return useMutation({
        mutationFn:({id,data})=>updateTask(id,data),
        onSuccess:(updated)=>{
            hold.invalidateQueries({queryKey:keys.all});

            if (updated?._id) {
                qc.invalidateQueries({ queryKey: keys.detail(updated._id) });
            }
        },
    });
}
export function useDeleteTask(){
    const hold=useQueryClient();
    return useMutation({
        mutationFn:(id)=>deleteTask(id),
        onSuccess:()=>{
            hold.invalidateQueries({queryKey:keys.all});
        },
    }
);
}

export function useToggleTask() {//for updating complete/incomplete
    const hold = useQueryClient();
    return useMutation({
        mutationFn: ({ id, completed }) => updateTask(id, { completed: !completed }),
        onSuccess: () => {
            hold.invalidateQueries({ queryKey: keys.all });
        },
    });
}