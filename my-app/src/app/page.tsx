"use client"
import React from 'react';
import Image from 'next/image'


import './globals.css';

// import starts here 
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// import images here 
import Exclusive from './assets/Exclusive.png'

// import icons here 
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


export default function Home() {

    
    const handleScroll = (scrollOffset: number) => {
        const container = document.querySelector('.HomeEvents-three');
        if (container) {
            const currentScrollLeft = container.scrollLeft;
            const targetScrollLeft = currentScrollLeft + scrollOffset;
    
            console.log('currentScrollLeft', currentScrollLeft);
            container.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });
        }
    }


  return (
    <div className="HomeComponent">
        <div className="HomeComponent-in">
            
            <Navbar />

            <div className="Home-one">
                <h1>Tadikonda Sai Manikanta</h1>
            </div>

            <div className="HomeAbout">
                <div className="HomeAbout-in">
                    <div className="HomeAbout-one">
                        <div className="HomeAbout-one-one">
                            <p>Home / About Us</p>
                        </div>
                        <div className="HomeAbout-one-two">
                            <h1>What exactly is <span>ZeroOne Code Club</span> at KLU?</h1>
                        </div>
                    </div>
                    <div className="HomeAbout-two">
                        <div className="HomeAbout-two-in">
                            <div className="HomeAbout-card">
                                <p>A dynamic community of aspiring developers fosters innovation and creativity. This vibrant space connects students, offering guidance for beginners and mentorship for experienced programmers. It&apos;s more than a club—it&apos;s a hub for growth. Here, excellence in coding is celebrated, helping everyone on their journey to mastery and pushing the boundaries of what&apos;s possible in programming.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="HomeEvents">
                <div className="HomeEvents-in">
                    <div className="HomeEvents-one">
                        <p>Home / Events</p>
                    </div>
                    <div className="HomeEvents-two">
                        <h1>Upcoming Events and Activities</h1>
                    </div>
                    <div className="HomeEvents-three">
                        <div className="Events-front"></div>
                        <div className="EventsBox"></div>
                        <div className="EventsBox"></div>
                        <div className="EventsBox"></div>
                        <div className="EventsBox"></div>
                        <div className="EventsBox"></div>
                        <div className="EventsBox"></div>
                        <div className="Events-front"></div>
                    </div>
                    <div className="HomeEvents-four">
                        <div onClick={() => handleScroll(-1000)}> <FaCircleChevronLeft className='scroll' /> </div>
                        <div onClick={() => handleScroll(1000)}> <FaCircleChevronRight className='scroll' /> </div>
                    </div>
                </div>
            </div>


            <div className="HomeExclusive">
                <div className="HomeExclusive-in">
                    <div className="HomeExclusive-in-one">
                        <div className="HomeExclusive-in-one-one">
                            <h1>A Club Exclusively for Coding and <span>Software Development</span></h1>
                        </div>
                        <div className="HomeExclusive-in-one-two">
                            <h1>Transforming lines of code to limitless possibilities</h1>
                        </div>
                    </div>
                    <div className="HomeExclusive-in-two">
                        <Image 
                            src={Exclusive}
                            alt="Exclusive"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>


            <div className="HomeNewsLetter">
                <div className="HomeNewsLetter-in">
                    <div className="HomeNewsLetter-one">
                        <div className="HomeNewsLetter-one-in">
                            <h1>Subscribe To Get The Latest News About Us</h1>
                        </div>
                    </div>
                    <div className="HomeNewsLetter-two">
                        <div className="HomeNewsLetter-two-in">
                            <p>Get the Latest news about digital Marketing to Your Pocket, drop your email below to get daily updates about us</p>
                        </div>
                    </div>
                    <div className="HomeNewsLetter-three">
                        <div className="HomeNewsLetter-three-in">
                            <input type="text" placeholder="Enter Your Email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="HomeFooter">
                <Footer />
            </div>

        </div>
    </div>
  );
}


const EventCard = (props : any) => {

    return (
        <div>
             
        </div>
    )
}