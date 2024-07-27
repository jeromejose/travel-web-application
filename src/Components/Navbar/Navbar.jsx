import React from 'react'
import './navbar.css'
import { MdOutlineCardTravel } from "react-icons/md";

const Navbar = () => {
    return(
        <section className="navSection">
            <header className="header flex">
                <div className="logo">
                    <a href="h" className="logo flex">
                        <h1><MdOutlineCardTravel className="icon"/>Travel</h1>
                    </a>
                </div>
            </header>
        </section>
    )
}

export default Navbar