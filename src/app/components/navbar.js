import React from "react";
import Link from "next/link";
import { User, Settings } from "lucide-react";
import { Angry } from 'lucide-react';
import { BriefcaseMedical } from 'lucide-react';
import { Frown } from 'lucide-react';

function Navbar() {
    return (
         <nav className = "flex justify-between items-center py-4 px-40 bg-gray-100 border-b border-gray-300 text-black">      
        <Link href="/settings" className="group relative">
            <Settings size={50} className="cursor-pointer"/>
        </Link>
        <div className="font-bold text-2xl">
            <span className="cursor-pointer text-gray-900">NotDevGPA</span>
        </div>
        <Link href="/profile" className="group relative">
            <User size={50} className="cursor-pointer"/>
        </Link>
        </nav>
    );
}

export default Navbar;