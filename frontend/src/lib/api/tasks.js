import { api } from "./api_Fetcher";




export function getTasks(filters={}){
    const query_parameters =new URLSearchParams(filters).toString();
    return api('/tasks' + (query_parameters ? `?${query_parameters}`:''));
}

export function getTask(id){
    return api(`/tasks/${id}`);
}
export function createTask(data){
    return api('/tasks',{method: 'POST', body:data});
}

export function updateTask(id,data){
    return api(`/tasks/${id}`,{method:'PUT',body:data});
}

export function deleteTask(id){
return api(`/tasks/${id}`,{method:'DELETE'});
}


