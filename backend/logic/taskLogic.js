
const Task=require('../models/task');

exports.getTask=async(req, res)=>{
    const hold= await Task.findById(req.params.id);
    if(!hold){
        return res.status(404).json({message:'not found'});
    }
    res.json(hold)
};

exports.createTask=async(req,res)=>{
    const hold=await Task.create(req.body);
    if(!hold){
        return res.status(400).json({message:'failed to create'});
    }
    res.status(201).json(hold);
};

exports.updateTask=async(req,res)=>{
    const hold=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!hold){
        return res.status(404).json({message:'not found'})
    }
    res.json(hold);
};

exports.deleteTask=async(req,res)=>{
    const hold=await Task.findByIdAndDelete(req.params.id);
    if(!hold){
        return res.status(404).json({message:'not found'});
    }
    res.status(204).end()
};

exports.getTasks=async(req,res)=>{
    //user able to search by title and/or search by one filter option
    const {q, completed, urgency, dueDate}=req.query;
    const filter={};

    if(q && q.trim()){
        filter.title=new RegExp(q.trim(),'i');
    }

    const picked = [completed !== undefined, urgency !== undefined, dueDate !== undefined].filter(Boolean).length;
    if(picked>1){
        return res.status(400).json({message:'Only one filter at a time'});
    }

    if(completed!==undefined){
        if(completed !=='true' && completed!=='false'){
            return res.status(400).json({message:'completed must either be true or false'});
        }
        if(completed==='true'){
            filter.completed=true;
        }
        else{
            filter.completed=false;
        }
    }

    if(urgency!==undefined){
        const u=Number(urgency);
        if(!Number.isInteger(u) || u<1 || u>5){
            return res.status(400).json({ message: 'urgency must be an integer 1 through 5' });
        }
        filter.urgency=u;
    }

    if(dueDate!==undefined){
        const day=new Date(dueDate);
        if(isNaN(day)){
            return res.status(400).json({ message: 'dueDate must be YYYY-MM-DD.' });
        }
        const start = new Date(day);
        const end= new Date(day);
        start.setHours(0,0,0,0);
        end.setHours(23,59,59,999);
        filter.dueDate={$gte :start , $lte:end};
        
    }

    let hasQueryOrFilter=false;
    if( (q && q.trim()) || completed!==undefined || urgency!==undefined || dueDate!==undefined){
        hasQueryOrFilter=true;
    }

    let query= Task.find(filter);

    if(!hasQueryOrFilter){
        query=query.sort({updatedAt:-1,createdAt:-1})
    }
    const tasks=await query;
    res.json(tasks);

};