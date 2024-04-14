import { useLayoutEffect } from 'react';
import "./styles.css";
import gsap from "gsap";

const Navbar = () => {

    const handleSolutionMouseEnter = (event) => {
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 1;  // Fade in Up
        chevronDown.style.opacity = 0;  // Fade out Down
    }

    const handleAboutMouseEnter = (event) => {
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 1;  // Fade in Up
        chevronDown.style.opacity = 0; //Fade out Down
        // const aboutOptionsElement = document.querySelector('.AboutOptions');
        // aboutOptionsElement.classList.add('active');
    };

    const handleResourcesMouseEnter = (event) => {
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 1;  // Fade in Up
        chevronDown.style.opacity = 0; //Fade out Down
        // const aboutOptionsElement = document.querySelector('.AboutOptions');
        // aboutOptionsElement.classList.add('active');
    };

    const handleSolutionMouseLeave = (event) => {
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 0;  // Fade out Up 
        // Optionally, uncomment the following if you want the up chevron to be visible when not hovered:
        chevronDown.style.opacity = 1; //Fade in Down
        // const solutionOptionsElement = document.querySelector('.SolutionOptions');
        // solutionOptionsElement.classList.remove('active');
    };

    const handleAboutMouseLeave = (event) => {
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 0;  // Fade out Up
        // Optionally, uncomment the following if you want the up chevron to be visible when not hovered:
        chevronDown.style.opacity = 1; //Fade in Down
        // const aboutOptionsElement = document.querySelector('.AboutOptions');
        // aboutOptionsElement.classList.remove('active');
    };

    const handleResourcesMouseLeave = (event) => {
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 0;  // Fade out Up
        // Optionally, uncomment the following if you want the up chevron to be visible when not hovered:
        chevronDown.style.opacity = 1; //Fade in Down
        // const solutionOptionsElement = document.querySelector('.SolutionOptions');
        // solutionOptionsElement.classList.remove('active');
    };

    useLayoutEffect(() => {
        gsap.from("#nav", {
            delay: 0.4,
            opacity: 0,
            duration: 1,
            y: -50
        })

        gsap.to("#nav", {
            delay: 0.4,
            opacity: 1,
            duration: 1,
            y: 0
        })

        const solutionBtn = document.getElementById('SolutionBtn');
        const solutionOptions = document.querySelector('#SolutionOptions');
        const AboutBtn = document.getElementById('AboutBtn');
        const AboutOptions = document.querySelector('#AboutOptions');
        const ResourceBtn = document.getElementById('ResourceBtn');
        const ResourceOptions = document.querySelector('#ResourceOptions');
        // console.log(solutionOptions)

        solutionBtn.addEventListener('mouseenter', () => {
            console.log("Added")
            solutionOptions.classList.add('active');
            // solutionOptions.classList.remove('hidden');
        });

        solutionOptions.addEventListener('mouseleave', () => {
            console.log("removed")
            solutionOptions.classList.remove('active');
            // solutionOptions.classList.add('hidden');
        });

        AboutBtn.addEventListener('mouseenter', () => {
            // console.log("Class added")
            AboutOptions.classList.add('active');
        });

        AboutOptions.addEventListener('mouseleave', () => {
            // console.log("Class removed")
            AboutOptions.classList.remove('active');
        });

        ResourceBtn.addEventListener('mouseenter', () => {
            // console.log("Class added")
            ResourceOptions.classList.add('active');
        });

        ResourceOptions.addEventListener('mouseleave', () => {
            ResourceOptions.classList.remove('active');
        });

    }, [])

    return (
        <div className="">
            <section className=" h-fit bg-black text-white ">
                <div id='nav' className=" px-4 w-full flex h-24 items-center">

                    <div className=" logo w-1/3 h-fit text-2xl items-center flex">
                        <img className='h-[30vh]' src="https://github.com/kihan2518B/Html/blob/main/MajorProject/Marketing-Site/src/assets/Your%20paragraph%20text.png?raw=true" alt="" />
                    </div>
                    <div id="links" className="gap-10 flex w-1/3 ">
                        <div className='cursor-pointer'>Work</div>
                        <div id="SolutionBtn" className='relative cursor-pointer' onMouseEnter={handleSolutionMouseEnter} onMouseLeave={handleSolutionMouseLeave}>
                            Solution
                            <i className="ml-1 mt-1 fa-solid fa-chevron-down absolute" style={{ opacity: 1, transition: 'opacity 0.3s ease' }}></i>
                            <i className="ml-1 mt-1 fa-solid fa-chevron-up absolute" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}></i>
                        </div>
                        <div id='AboutBtn' className='relative cursor-pointer' onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>About
                            <i className="ml-1 mt-1 fa-solid fa-chevron-down absolute" style={{ opacity: 1, transition: 'opacity 0.3s ease' }}></i>
                            <i className="ml-1 mt-1 fa-solid fa-chevron-up absolute" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}></i>
                        </div>
                        <div id='ResourceBtn' className='relative cursor-pointer' onMouseEnter={handleResourcesMouseEnter} onMouseLeave={handleResourcesMouseLeave}>Resources
                            <i className="ml-1 mt-1 fa-solid fa-chevron-down absolute" style={{ opacity: 1, transition: 'opacity 0.3s ease' }}></i>
                            <i className="ml-1 mt-1 fa-solid fa-chevron-up absolute" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}></i>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-end">
                        <h3 className='contactUs cursor-pointer flex justify-center hover:bg-gradient-to-br from-secondary to-green-400 bg-white text-black w-[10vw] rounded-2xl p-1 font-bold hover:scale-110 duration-300'>Contact Us</h3>
                    </div>
                </div>
                {/*This is Menu */}
                {/* Solution */}
                <div id="SolutionOptions" className='Options w-full h-52 flex justify-center items-center text-secondary'>
                    <div className="bg-gray-200 rounded-b-2xl flex justify-center items-center rounded-2xl h-[60vh] w-[98vw] text-secondary">
                        <div className="w-1/3 h-full rounded-bl-2x text-black flex-col justify-center align-center">
                            <p className=" justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">Brand Solutions</p>
                            <p className=" justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">Tech Solutions</p>
                            <p className=" justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">Media Solutions</p>
                        </div>
                        <div className="w-1/3 h-full flex-col justify-center">
                            <div className="w-full h-fit justify-center items-center flex">
                                <img className="object-contain mt-2 w-[30vw] rounded-lg" src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477272c5e9047a330a89ba3_SWITCH%20MOBILITY%20STUDY%20M%20TEXT-01%20(Large).png" alt="" />
                            </div>
                            <div className="w-full h-1/6 text-xsm text-black justify-center items-center flex">
                                <p className="w-[30vw] h-full overflow-hidden" >Using Tech Gamification To Educate People On The Benefits Of Driving EVs</p>
                            </div>
                        </div>
                        <div className="w-1/3 h-full rounded-br-2xl flex-col justify-center items-center">
                            <div className="w-full mt-2 h-fit justify-center items-center flex">
                                <img className="object-contain w-[30vw] rounded-lg" src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655daa2654a0826a2891bd40_renewables%20WEBSITE%20CS-01.png" alt="" />
                            </div>
                            <div className="w-full h-1/6 text-xsm text-black justify-center items-center flex">
                                <p className="w-[30vw] h-full overflow-hidden" >Delivering A Gorgeous Web Experience For UK’s Top Home Energy Conservation Leader</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About */}
                <div id='AboutOptions' className='Options w-full h-52 hidden justify-center items-center text-secondary'>
                    <div className="bg-gray-200 rounded-b-2xl flex justify-center items-center rounded-2xl h-[60vh] w-[98vw] text-secondary">
                        <div className="w-1/3 h-full rounded-bl-2x text-black flex-col justify-center align-center">
                            <p className=" cursor-pointer justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">How we Work</p>
                            <p className=" cursor-pointer justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">Our Partnerships</p>
                            <p className=" cursor-pointer justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">News Center</p>
                            <p className=" cursor-pointer justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">Meet The Team</p>
                        </div>
                        <div className="w-1/3 h-full flex-col justify-center">
                            <div className="w-full h-fit justify-center items-center flex">
                                <img className="object-contain mt-2 w-[30vw] rounded-lg" src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64774c61a485e13dd8b2a165_VANTAGE%20STUDY%20m%20text%20(Large).png" alt="" />
                            </div>
                            <div className="w-full h-1/6 text-xsm text-black justify-center items-center flex">
                                <p className="w-[30vw] h-full overflow-hidden" >Making Headlines With Our Omnichannel Launch Campaign For A Bold Original News Show</p>
                            </div>
                        </div>
                        <div className="w-1/3 h-full rounded-br-2xl flex-col justify-center items-center">
                            <div className="w-full mt-2 h-fit justify-center items-center flex">
                                <img className="object-contain w-[30vw] rounded-lg" src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477260dbbb4647b0057f061_SWIGGY%20CASE%20STUDY%20M%20TEXT-01%20(Large).png" alt="" />
                            </div>
                            <div className="w-full h-1/6 text-xsm text-black justify-center items-center flex">
                                <p className="w-[30vw] h-full overflow-hidden" >Hyper-Personalized Social Campaign For India’s Biggest Food Delivery Startup</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources */}
                <div id='ResourceOptions' className='Options w-full h-52 hidden justify-center items-center text-secondary'>
                    <div className="bg-gray-200 rounded-b-2xl flex justify-center items-center rounded-2xl h-[60vh] w-[98vw] text-secondary">
                        <div className="w-1/3 h-full rounded-bl-2x text-black flex-col justify-center align-center">
                            <p className=" justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">Blog</p>
                            <p className=" justify-center flex items-center font-thin text-4xl text-left w-full h-1/5">The Edge</p>
                        </div>
                        <div className="w-1/3 h-full flex-col justify-center">
                            <div className="w-full h-fit justify-center items-center flex">
                                <img className="object-contain mt-2 w-[30vw] rounded-lg" src="https://github.com/kihan2518B/Html/blob/main/MajorProject/Marketing-Site/src/assets/trending-1.png?raw=true" alt="" />
                            </div>
                            <div className="w-full h-1/6 text-xsm text-black justify-center items-center flex">
                                <p className="w-[30vw] h-full overflow-hidden" >Schbang appoints Jitto George as Executive Vice President - Media Solutions</p>
                            </div>
                        </div>
                        <div className="w-1/3 h-full rounded-br-2xl flex-col justify-center items-center">
                            <div className="w-full mt-2 h-fit justify-center items-center flex">
                                <img className="object-contain w-[30vw] rounded-lg" src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655723ff21d203904ff86e94_Brittiana.png" alt="" />
                            </div>
                            <div className="w-full h-1/6 text-xsm text-black justify-center items-center flex">
                                <p className="w-[30vw] h-full overflow-hidden" >Britannia forays into the Metaverse with the launch of ‘Britannia Coffeeverse’</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar
