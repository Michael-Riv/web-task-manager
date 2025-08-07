'use client';
import Link from 'next/link';





export default function SideBarNav(){


   const handleLogout=()=>{
    //do something here if user logged in,in this case there is no log in
    console.log('user logged out');
    }

    const menuItems=[
        {label: 'Tasks',path:'#'},
        {label: 'Calendar',path:'#'},
        {label: 'Logout',action:handleLogout},
    ]



    return(
        <div className='h-screen w-60 bg-gray-600 text-white flex flex-col justify-between px-8 py-6'>
            <div>
                <h1 className='text-2xl font-bold mb-6 border-b border-amber-400 pb-1'>Task Manager</h1>
                <nav className='space-y-4'>
                    {menuItems.map((item)=>
                    item.action ? (
                    <button key={item.label} onClick={item.action} className='block text-left w-full border border-white rounded hover:bg-blue-600 hover:text-black pl-2'>
                        {item.label}
                    </button>
                    ): (
                    <Link key={item.label} href={item.path} className='block border w-full border-white rounded hover:bg-blue-600 hover:text-black pl-2'>
                        {item.label}
                    </Link>
                    ))}
                </nav>
            </div>

            <div className='text-2xl text-white'>
                    Welcome, User
            </div>

        </div>
    );
}