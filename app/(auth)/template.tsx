"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css';
import { useState } from "react";

const navLinks=[
    { href :"/login", name : "Login"},
    { href :"/register", name : "Register"},
    { href :"/forgot-password", name : "Forgot Password"}
];

export default function AuthLayout({
    children,
} : {
    children : React.ReactNode;
}) {
    const pathname = usePathname();
    const [input,setInput] = useState("");

    const changeText = (e : any) =>{
        setInput(e.target.value);
    }
    return (

        <div>
            <div>
                <input type="text"  onChange={changeText} value={input}/>
            </div>
            {navLinks.map ((link) =>{
                const isActive = pathname.startsWith(link.href)
                return(
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{link.name}</Link>
                );
            })}
            {children}
        </div>
    )
}