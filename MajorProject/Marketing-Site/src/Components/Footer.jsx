import { useEffect, useRef } from 'react';
import './styles.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Footer = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
        const element = document.querySelectorAll("#Animation");
        if (element) {
            const animation = gsap.fromTo(element, {
                // delay: 0.4,
                opacity: 0, // Start with opacity 0
                y: 50, // Add a slight upward translation (optional)
            }, {
                duration: 0.5,
                opacity: 1,
                y: 0, // Animate to full opacity and original position
                scrollTrigger: {
                    trigger: element, // Element to trigger the animation (your sticky element)
                    start: "bottom bottom", // Start animation when element reaches bottom of viewport
                    // toggleClass: "animate", // Add 'animate' class on trigger and remove it on scrub scrubbing
                    // scrub: true, // Link animation progress to scroll position for a smooth effect
                },
            });
        } else {
            console.warn("Element with ID 'Animation' not found");
        }

    }, []);
    return (
        <div id='Footer' className='bottom-0 text-white flex-col justify-center items-center sticky w-full -z-10 h-80 bg-black'>
            <div id='Heading' className="h-52 flex justify-center relative items-center">
                <h1 id='Animation' className='bg-gradient-to-b from-white to-gray-900/50 text-9xl text-transparent bg-clip-text font-extrabold ' >Spark Social</h1>
            </div>
            <hr id='Animation' className='mx-auto border-t border-white w-[90vw]' />
            <div id='Footer-Content' className="mx-auto flex justify-between relative items-center w-[90vw]">
                <div className="flex justify-start gap-2h-fit relative">
                    <img id='Animation' src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6465257e5cc570c9ff8fd0f8_icons8-linkedin-50.webp" alt="" />
                    <img id='Animation' src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646524fd1df829c5242be968_icons8-instagram-50.webp" alt="" />
                    <img id='Animation' src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646524a30d7e98dd5c2e0280_icons8-youtube-50%20(1).webp" alt="" />
                    <img id='Animation' src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646524362a6cedd5e606bccc_icons8-facebook-50%20(1).webp" alt="" />
                </div>
                <div id='Footer-Nav' className="flex justify-between w-[35vw] items-center ">
                    <span id='Animation' className='underline'>About</span>
                    <span id='Animation' className='underline'>Contact</span>
                    <span id='Animation' className='underline'>Case study</span>
                    <span id='Animation' className='underline'>Blog</span>
                    <span id='Animation' className='underline'>Privacy</span>
                </div>
                <div className=" flex justify-between items-center">
                    <p id='Animation' className='text-end text-xs font-thin'>Proudly created in India.
                        <br />
                        All Right Reserved, All Wrong Reversed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
