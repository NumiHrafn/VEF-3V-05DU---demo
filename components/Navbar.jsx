import { link } from "fs";
import Link from "next/link";
import React from 'react'
const Links = [
    {href:"/", text:"heimasíða",key:"1"},
    {href:"/page_2", text:"síða 2",key:"2"},
    {href:"/", text:"heimasíða aftur",key:"3"},
    {href:"/bonus", text:"bónus",key:"4"},
];


const Navbar = () => {
    return (
        <nav className="bg-base-300">
            <div className="navbar">
                <ul>
                    {Links.map((link) => (
                        <li key={link.key}>
                            <Link href={link.href} className="takki capitalize">{link.text}</Link>
                        </li>
                        
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar