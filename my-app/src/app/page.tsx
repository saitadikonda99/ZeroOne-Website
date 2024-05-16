"use client"
import React from 'react';
import Image from 'next/image'
import { useState } from 'react';


import './globals.css';

// import starts here 
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { FaqArray } from '../Data/FaqArray'

// import images here 
import Exclusive from './assets/Exclusive.png'
import Event1 from './assets/Events/Event1.png'
import Event2 from './assets/Events/Event2.jpg'
import Event3 from './assets/Events/Event3.png'
import Event4 from './assets/Events/Event4.png'
import Show from './assets/Logos/Show.png'

// import icons here 
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { GoCalendar } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidMessageDetail } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


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

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleQues = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


  return (
    <div className="HomeComponent">
        <div className="HomeComponent-in">

{/* ---------------------------- Navbar ---------------------------- */}
            {/* <Navbar /> */}

{/* ------------------------ Home One ------------------------ */}

            <div className="Home-one">
                <h1>Tadikonda Sai Manikanta</h1>
            </div>

{/* ------------------------ Home Two ------------------------ */}

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
{/* ------------------------ Home Events ------------------------ */}   
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
                        <div className="EventsBox">
                            <EventCard 
                            image={Event1} 
                            eventName="Introduction to Github"
                            date="13th October 2024"
                            venue="Online"
                            />
                        </div>
                        <div className="EventsBox">
                            <EventCard 
                                image={Event3} 
                                eventName="Introduction to Github"
                                date="13th October 2024"
                                venue="Online"
                            />
                        </div>
                        <div className="EventsBox">
                            <EventCard 
                                image={Event4} 
                                eventName="Introduction to Github"
                                date="13th October 2024"
                                venue="Online"
                            />
                        </div>
                        <div className="EventsBox">
                            <EventCard 
                                image={Event2} 
                                eventName="Introduction to Github"
                                date="13th October 2024"
                                venue="Online"
                            />
                        </div>
                        <div className="EventsBox">
                            <EventCard 
                                image={Event3} 
                                eventName="Introduction to Github"
                                date="13th October 2024"
                                venue="Online"
                            />
                        </div>
                        <div className="EventsBox">
                            <EventCard 
                                image={Event4} 
                                eventName="Introduction to Github"
                                date="13th October 2024"
                                venue="Online"
                            />
                        </div>
                        <div className="Events-front"></div>
                    </div>
                    <div className="HomeEvents-four">
                        <div onClick={() => handleScroll(-1000)}> <FaCircleChevronLeft className='scroll' /> </div>
                        <div onClick={() => handleScroll(1000)}> <FaCircleChevronRight className='scroll' /> </div>
                    </div>
                </div>
            </div>
{/* ------------------------ Home Exclusive ------------------------ */}
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

{/* --------------------------- Home Cells ---------------------------  */}

            <div className="HomeCells">
                <div className="HomeCells-in">
                    <div className="HomeCell-one">
                        <div className="HomeCell-one-one">
                            <p>Home / Cells</p>
                        </div>
                        <div className="HomeCell-one-two">
                            <h1>Our Cells with the club</h1>
                        </div>
                    </div>
                    <div className="HomeCell-two"></div>
                </div>
            </div>


{/* ------------------------ Home FAQ's ------------------------ */}
            <div className="HomeFaq">
                <div className="HomeFaq-in">
                   <div className="HomeFaq-in-one">
                        <div className="HomeFaq-in-one-one">
                            <p>Home / FAQ&apos;s</p>
                        </div>
                        <div className="HomeFaq-in-one-two">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                   </div>    
                   <div className="HomeFaq-in-two">
                        <div className="HomeFaq-in-two-in">
                            <div className="HomeFaq-in-two-one">
                                <div className="HomeFaq-find">
                                    <p>Can&apos;t find what you are looking for?</p>
                                    <h1>We would like to chat with you.</h1>
                                </div>
                                <div className="HomeFaq-icon">
                                    <BiSolidMessageDetail className='msg-icon'/>
                                </div>
                            </div>
                            <div className="HomeFaq-in-two-two">
                                <div className="HomeFaq-in-two-two-in">
                                    {FaqArray.map((item, index) => {
                                        const isActive = index === activeIndex;
                                        return (
                                            <div key={index} className="HomeFaq-ques-component">
                                                <div onClick={() => handleQues(index)} className="HomeFaq-ques">
                                                    <h1>{item?.question}</h1>
                                                    {isActive ? <IoMdClose className='icon-close' /> : <AiOutlinePlus className='icon' />}
                                                </div>
                                                <div className={`HomeFaq-ans ${isActive ? 'HomeFaq-ans-show' : 'HomeFaq-ans-hide'}`}>
                                                    <p>{item?.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                   </div>    
                </div>
            </div>
{/* ----------------- NewsLetter ----------------- */}
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
{/* ----------------- Footer ----------------- */}
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
            <div className="EventCard-one">
                <div className="EventCard-one-in">
                    <Image 
                        src={props.image}
                        alt="Event"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="EventCard-two">
                <div className="EventCard-two-in">
                    <h1>{props.eventName}</h1>
                </div>
            </div>
            <div className="EventCard-three">
                <div className="EventCard-three-in">
                    <GoCalendar />
                    <p>{props.date}</p>
                </div>
            </div>
            <div className="EventCard-four">
                <div className="EventCard-four-in">
                    <CiLocationOn />
                    <p>{props.venue}</p>
                </div>
            </div>
            <div className="EventCard-five">
                <div className="EventCard-five-in">
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}