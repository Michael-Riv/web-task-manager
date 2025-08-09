'use client';

import { useState } from "react";

export default function TaskFilters({initial ={}, onApply}){
    const [q,setQ]=useState(initial.q|| '');//default to empty
    const [filterType,setFilterType]=useState(initial.filterType ||'none');
    const [completed,setCompleted]=useState('true');
    const[urgency,setUrgency]=useState('');
    const [dueDate,setDueDate]=useState('');

    const urgVal=[1,2,3,4,5];

    function handleApply(){
        const filters={};
        if(q.trim()){
            filters.q=q.trim();
        
        }
        if(filterType==='completed'){
            filters.completed = completed;
        }
        else if (filterType === 'urgency' && urgency) {
            filters.urgency = urgency;
        } else if (filterType === 'dueDate' && dueDate) {
            filters.dueDate = dueDate;
        }
        onApply(filters);
    }


    return (
        <div className="p-3 bg-gray-400 border-b border-gray-200 flex flex-col gap-3">
            <div className="flex gap-2">
                <input value={q } onChange={(e) => setQ(e.target.value)} placeholder="search by title" className="flex-1 rounded border px-3 py-2"/>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                <label className="font-semibold">Filter: </label>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="rounded border px-3 py-2 ">
                    <option value="none">None</option>
                    <option value="completed">Completed/Incomplete </option>
                    <option value="urgency" >Urgency (1-5)</option>
                    <option value="dueDate">Due date</option>
                </select>
                {filterType === 'completed' && (
                    <select  value={completed} onChange={(e) => setCompleted(e.target.value)} className="rounded border px-3 py-2 ">
                        <option value="true"> Completed </option>
                        <option value="false"> Incomplete</option>
                    </select>
                    )}
                {filterType === 'urgency' && (
                    <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className="rounded border px-3 py-2">
                        <option value="">Select urgency</option>
                        {urgVal.map(n => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                )}

                {filterType === 'dueDate' && (
                <input type= "date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="rounded border px-3 py-2  "/>
                )}

                <button onClick ={handleApply} className="ml-auto bg-emerald-600 text-white rounded px-4 py-2 hover:bg-emerald-700">
                    Apply
                </button>
            </div>
        </div>

    );
}