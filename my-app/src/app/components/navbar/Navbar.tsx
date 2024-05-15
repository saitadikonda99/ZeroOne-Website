import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import './Navbar.css'

// import images here
import ClubLogo from '../../assets/Logos/ClubLogo.png'

const Navbar = () => {
  return (
        <div className="NavbarComponent">
            <div className="NavbarComponent-in">
                <div className="Navbar-one">
                    <div className="Navbar-one-in">
                        <h1>ZeroOne</h1>
                    </div>
                </div>
                <div className="Navbar-two">
                    <div className="Navbar-two-in">
                        <Link href='/'>About</Link>
                        <Link href='/'>Events</Link>
                        <Link href='/'>Projects</Link>
                        <Link href='/'>Blogs</Link>
                        <Link href='/'>Socials</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar