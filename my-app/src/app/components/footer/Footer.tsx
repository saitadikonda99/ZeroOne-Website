import React from 'react'
import Link from 'next/link'

import './Footer.css'


// import icons here 
import { FaInstagram } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
        <div className="FooterComponent">
            <div className="FooterComponent-in">

                <div className="Footer-one">
                    <div className="Footer-one-in">
                        
                        <div className="Footer-one-one">

                            <div className="Footer-one-one-one">
                                <h1>Official Communication</h1>
                            </div>
                            <div className="Footer-one-one-two">
                                <p>K L Deemed to be University, Admin. Office, 29-36-38, Museum Road, Governorpet, Vijayawada. A.P., India. Pincode: 520 002.</p>
                            </div>

                            <div className="Footer-one-one-three">
                                <h1>Campus</h1>
                            </div>
                            <div className="Footer-one-one-four">
                                <p>K L Deemed to be University, Green Fields, Vaddeswaram, Guntur District, A.P., India. Pincode: 522 502.</p>
                            </div>
                        </div>
                        <div className="Footer-one-two">

                            <div className="Footer-one-two-one">
                                <h1>Quick Links</h1>
                            </div>
                            <div className="Footer-one-two-two">
                                <Link href='/'>Social Immersive Learning</Link>
                                <Link href='/'>Club LeaderShip & Governance</Link>
                                <Link href='/'>Latest News & Announcements</Link>
                                <Link href='/'>Club Projects & Innovations</Link>
                                <Link href='/'>ZeroOne Work Culture</Link>
                                <Link href='/'>ZeroOne Stats</Link>
                            </div>

                        </div>
                        <div className="Footer-one-three">
                                
                            <div className="Footer-one-three-one">
                                <h1>Cells within Club</h1>
                            </div>
                            <div className="Footer-one-three-two">
                                <Link href='/'>Social Immersive Learning</Link>
                                <Link href='/'>Z-Ideas (Innovation and Content Development Team)</Link>
                                <Link href='/'>Z-Outreach (External Relations and Engagement)</Link>
                                <Link href='/'>Z-Speaks (Communications and Public Speaking)</Link>
                                <Link href='/'>Z-Wellness (Health and Well-Being)</Link>
                                <Link href='/'>Z-Sustainability (Sustainability and Environmental Initiatives)</Link>
                                <Link href='/'>Z-Mentors and Guides (Mentorship and Support Crew)</Link>
                            </div>

                        </div>
                        <div className="Footer-one-four">

                            <div className="Footer-one-four-one">
                                <h1>Help & Connect</h1>
                            </div>
                            <div className="Footer-one-four-two">
                                <Link href='/'> <FaInstagram /> Instagram</Link>
                                <Link href='/'> <LiaTelegramPlane /> Telegram</Link>
                                <Link href='/'> <FiTwitter /> Twitter</Link>
                                <Link href='/'> <CiLinkedin /> LinkedIn</Link>
                                <Link href='/'> <FiYoutube /> YouTube</Link>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className="Footer-two">
                    <div className="Footer-two-in">
                        <h1>ZeroOne CodeClub</h1>
                    </div>
                </div>

                <div className="Footer-three">
                    <p> <MdCopyright /> 2023 ZeroOne Code Club, Koneru Lakshmaiah Education Foundation |  Designed & Developed by <span>Deepak Reddy Gathpa </span> & <span> Tadikonda Sai Manikanta</span></p>
                </div>

            </div>
        </div>
  )
}

export default Footer