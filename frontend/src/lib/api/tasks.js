const {api} =require( "./api_Fetcher");




function getTasks(filters={}){
    const query_parameters =new URLSearchParams(filters).toString();
    return api('/tasks' + (query_parameters ? `?${query_parameters}`:''));
}

function getTask(id){
    return api(`/tasks/${id}`);
}
function createTask(data){
    return api(`/tasks/${id}`,{method: 'POST', body:data});
}

function updateTask(id,data){
    return api(`/tasks/${id}`,{method:'PUT',body:data});
}

function deleteTask(id){
return api(`/tasks/${id}`,{method:'DELETE'});
}


module.exports = {getTask,getTasks,deleteTask,updateTask,createTask};