'use client';
import Image from "next/image";
import SideBarNav from "@/components/navBars/side";
import TopBarNav from "@/components/navBars/top";
export default function Home() {
  return (
    <div className="flex h-screen" >
      <div className="w-60">
        <SideBarNav/>
      </div>

      <div className="flex flex-col flex-1">
        <TopBarNav/>

        <main>

        </main>
      </div>  

    </div>
  );
}
