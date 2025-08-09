'use client';
import Image from "next/image";
import SideBarNav from "@/components/navBars/side";
import TopBarNav from "@/components/navBars/top";
import TaskFilters from "@/components/listTasks/taskFilters";
import TaskList from "@/components/listTasks/taskList";
import { useState } from "react";

export default function Home() {
  const [filters,setFilters]=useState({});



  return (
    <div className="flex h-screen " >
      <div className="w-60">
        <SideBarNav/>
      </div>

      <div className="flex flex-col flex-1">
        <TopBarNav/>

        <main className="flex flex-col flex-1  bg-slate-900">
          <TaskFilters onApply={setFilters}/>
          <TaskList filters={filters}/>

        </main>
      </div>  

    </div>
  );
}
