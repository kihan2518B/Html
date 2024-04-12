// import { useEffect, useRef } from 'react';
import './styles.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Footer = () => {

    return (
        <div id='Footer' className='bottom-0 text-white flex-col justify-center items-center sticky w-full -z-10 h-80 bg-black'>
            <div id='Heading' className="h-52 flex justify-center relative items-center">
                <h1 className='bg-gradient-to-b from-white to-gray-900/50 text-9xl text-transparent bg-clip-text font-extrabold ' >Spark Social</h1>
            </div>
            <hr className='mx-auto border-t border-white w-[90vw]' />
            <div id='Footer-Content' className="mx-auto flex justify-between relative items-center w-[90vw]">
                <div className="flex justify-start gap-2h-fit relative">
                    <img src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6465257e5cc570c9ff8fd0f8_icons8-linkedin-50.webp" alt="" />
                    <img src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646524fd1df829c5242be968_icons8-instagram-50.webp" alt="" />
                    <img src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646524a30d7e98dd5c2e0280_icons8-youtube-50%20(1).webp" alt="" />
                    <img src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646524362a6cedd5e606bccc_icons8-facebook-50%20(1).webp" alt="" />
                </div>
                <div id='Footer-Nav' className="flex justify-between w-[35vw] items-center ">
                    <span className='underline'>About</span>
                    <span className='underline'>Contact</span>
                    <span className='underline'>Case study</span>
                    <span className='underline'>Blog</span>
                    <span className='underline'>Privacy</span>
                </div>
                <div className=" flex justify-between items-center">
                    <p className='text-end text-xs font-thin'>Proudly created in India.
                        <br />
                        All Right Reserved, All Wrong Reversed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
