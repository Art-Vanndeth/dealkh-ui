"use client";
import { MenuList } from '@/components/seller/component/sidebar/menu';
import { Image, Link } from '@nextui-org/react';
import React, { useState } from 'react';
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";

type MenuItem = {
    name: string;
    path: string;
    icon: React.ElementType;
};

export default function SidebarSellerComponent() {
    const [menuList] = useState<MenuItem[]>(MenuList);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none shadow-md"
                    onClick={toggleSidebar}
                >
                    <HiOutlineMenuAlt1 size={20} />
                </button>
            </div>

            <div className={`fixed inset-0 z-40 lg:z-auto lg:relative lg:translate-x-0 w-[190px] lg:w-[220px] bg-white dark:bg-zinc-900 lg:flex lg:flex-col lg:justify-between h-screen transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:transform-none transition-transform duration-300 ease-in-out shadow-lg`}>
                <div className="lg:hidden absolute top-4 right-4">
                    <button
                        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none shadow-md"
                        onClick={toggleSidebar}
                    >
                        <HiOutlineX size={20} />
                    </button>
                </div>

                <div className={`px-4 py-4 ${sidebarOpen ? 'mt-10 lg:mt-0' : 'mt-4'} lg:mt-0`}>
                    {/* Logo and menu items */}
                    <div className="flex justify-start items-center mb-6">
                        <Image src="/images/logo/logo.png" alt="Logo" className="w-16 h-16 mr-2" />
                        <span className="text-2xl font-bold text-slate-700 dark:text-gray-200">Deal-KH</span>
                    </div>
                    <ul>
                        {menuList.map((item, index) => (
                            <li 
                                key={index} 
                                className={`flex text-gray-900 items-center px-2 mb-2 rounded-md transition-colors duration-200 ${activeIndex === index ? 'bg-amber-500 text-slate-50' : 'hover:bg-amber-500 hover:text-slate-50 text-slate-700 dark:text-gray-200'}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <Link href={item.path} className={`flex items-center w-full ${activeIndex === index ? 'text-slate-50' : 'text-slate-700 hover:text-slate-50'}`}>
                                    <item.icon className="w-7 h-7 mr-3 dark:text-gray-50" />
                                    <span className="block rounded-lg px-2 py-2 text-base font-medium dark:text-gray-50">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
