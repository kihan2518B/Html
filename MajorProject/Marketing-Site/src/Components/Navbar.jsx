import { useState, } from 'react';
import "./styles.css"

const SolutionOptions = () => {
    return (
        <div className='SolutionOptions z-50 absolute top-20 bg-gray-500 w-full h-52 left-0 text-secondary'>Solutions</div>
    )
};
const AboutOptions = () => {
    return (
        <div className='AboutOptions absolute top-20 bg-gray-500 w-full h-52 left-0 z-50 text-secondary'>This is the content displayed on hover in about.</div>
    )
}

const ResourcesOption = () => {
    return (
        <div className="ResourcesOptions absolute top-20 bg-gray-500 w-full h-52 left-0 z-50 text-secondary">This is Resources page</div>
    )

}


const Navbar = () => {
    const [isHoveringSolution, setIsHoveringSolution] = useState(false);
    const [isHoveringAbout, setIsHoveringAbout] = useState(false);
    const [isHoveringResources, setIsHoveringResources] = useState(false);

    const handleSolutionMouseEnter = (event) => {
        setIsHoveringSolution(true);
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 1;  // Fade in Up
        chevronDown.style.opacity = 0;  // Fade out Down
    }

    const handleAboutMouseEnter = (event) => {
        setIsHoveringAbout(true);
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 1;  // Fade in Up
        chevronDown.style.opacity = 0; //Fade out Down
        // const aboutOptionsElement = document.querySelector('.AboutOptions');
        // aboutOptionsElement.classList.add('active');
    };

    const handleResourcesMouseEnter = (event) => {
        setIsHoveringResources(true);
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 1;  // Fade in Up
        chevronDown.style.opacity = 0; //Fade out Down
        // const aboutOptionsElement = document.querySelector('.AboutOptions');
        // aboutOptionsElement.classList.add('active');
    };

    const handleSolutionMouseLeave = (event) => {
        setIsHoveringSolution(false);
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 0;  // Fade out Up 
        // Optionally, uncomment the following if you want the up chevron to be visible when not hovered:
        chevronDown.style.opacity = 1; //Fade in Down
        // const solutionOptionsElement = document.querySelector('.SolutionOptions');
        // solutionOptionsElement.classList.remove('active');
    };

    const handleAboutMouseLeave = (event) => {
        setIsHoveringAbout(false);
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 0;  // Fade out Up
        // Optionally, uncomment the following if you want the up chevron to be visible when not hovered:
        chevronDown.style.opacity = 1; //Fade in Down
        // const aboutOptionsElement = document.querySelector('.AboutOptions');
        // aboutOptionsElement.classList.remove('active');
    };

    const handleResourcesMouseLeave = (event) => {
        setIsHoveringResources(false);
        const chevronDown = event.target.querySelector('.fa-chevron-down');
        const chevronUp = event.target.querySelector('.fa-chevron-up');

        chevronUp.style.opacity = 0;  // Fade out Up
        // Optionally, uncomment the following if you want the up chevron to be visible when not hovered:
        chevronDown.style.opacity = 1; //Fade in Down
        // const solutionOptionsElement = document.querySelector('.SolutionOptions');
        // solutionOptionsElement.classList.remove('active');
    };

    return (
        <section className=" bg-black w-full text-white h-24">
            <div className="px-4 w-full flex h-full items-center">

                <div className=" logo w-1/3 h-fit text-2xl ">
                    <h1 className="">Logo</h1>
                </div>
                <div id="links" className="gap-10 flex w-1/3 ">
                    <div className='cursor-pointer'>Work</div>
                    <div className='relative cursor-pointer' onMouseEnter={handleSolutionMouseEnter} onMouseLeave={handleSolutionMouseLeave}>
                        Solution
                        <i className="ml-1 mt-1 fa-solid fa-chevron-down absolute" style={{ opacity: 1, transition: 'opacity 0.3s ease' }}></i>
                        <i className="ml-1 mt-1 fa-solid fa-chevron-up absolute" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}></i>
                    </div>
                    {isHoveringSolution && <SolutionOptions className='active' />}
                    <div className='relative cursor-pointer' onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>About
                        <i className="ml-1 mt-1 fa-solid fa-chevron-down absolute" style={{ opacity: 1, transition: 'opacity 0.3s ease' }}></i>
                        <i className="ml-1 mt-1 fa-solid fa-chevron-up absolute" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}></i>
                    </div>
                    {isHoveringAbout && <AboutOptions className='active' />}
                    <div className='relative cursor-pointer' onMouseEnter={handleResourcesMouseEnter} onMouseLeave={handleResourcesMouseLeave}>Resources
                        <i className="ml-1 mt-1 fa-solid fa-chevron-down absolute" style={{ opacity: 1, transition: 'opacity 0.3s ease' }}></i>
                        <i className="ml-1 mt-1 fa-solid fa-chevron-up absolute" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}></i>
                    </div>
                    {isHoveringResources && <ResourcesOption className='active' />}

                </div>
                <div className="w-1/3 flex justify-end">
                    <h3 className='contactUs cursor-pointer flex justify-center hover:bg-gradient-to-br from-secondary to-green-400 bg-white text-black w-[10vw] rounded-2xl p-1 font-bold hover:scale-110 duration-300'>Contact Us</h3>
                </div>
            </div>
        </section>
    )
}

export default Navbar
