import '../pages/home.css';

const Trending = () => {
    return (
        <div className='mx-5 w-[95vw]'>
            <div id='Title' className="flex h-20 w-full">
                <h1 className='text-4xl font-bold'>Trending</h1>
            </div>
            <div className="flex trending-content ">
                <div id='Left' className="cursor-pointer w-[60vw] h-[18vh] relative">
                    <div className="border-2 border-black rounded-3xl flex justify-center items-center h-[5vh] w-[10vw] max-[768px]:w-[15vw] max-[500px]:w-[20vw] max-[375px]:w-[25vw] max-[1024px]:text-sm max-[900px]:text-xs">Press Release</div>
                    <div className="font-bold w-[60vw] flex">
                        <div className="w-[40vw] text-xl max-[1024px]:text-base max-[800px]:text-sm">
                            Schbang appoints Jitto George as Executive Vice President - Media Solutions
                        </div>
                        <p className='flex items-center w-[20vw] justify-center'>3 min</p>
                    </div>
                    <hr className='border-t border-black' />
                </div>
                <div id='Right' className="right-0 h-[15vh] max-[1024px]: overflow-hidden w-[40vw] flex justify-center items-center absolute">
                    <img className='trending-img h-full object-cover ' src="https://github.com/kihan2518B/Html/blob/main/MajorProject/Marketing-Site/src/assets/trending-1.png?raw=true" alt="" />
                </div>
            </div>

            <div className="flex trending-content">
                <div id='Left' className="cursor-pointer w-[60vw] h-[18vh] relative">
                    <div className="border-2 border-black rounded-3xl flex justify-center items-center h-[5vh] w-[10vw] max-[768px]:w-[15vw] max-[500px]:w-[20vw] max-[1024px]:text-sm max-[900px]:text-xs">Press Release</div>
                    <div className="font-bold w-[60vw] flex">
                        <div className="w-[40vw] text-xl max-[1024px]:text-base max-[800px]:text-sm">
                            Britannia forays into the Metaverse with the launch of 'Britannia Coffeeverse'
                        </div>
                        <p className='flex items-center w-[20vw] justify-center'>2.5 min</p>
                    </div>
                    <hr className='border-t border-black' />
                </div>
                <div id='Right' className="right-0 h-[15vh] overflow-hidden w-[40vw] flex justify-center items-center absolute">
                    <img className='trending-img h-[15vh] object-cover max-[860px]:w-[10vw]' src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6557247d770dca61e0c887be_Untitled%20design%20(9)-p-500.png" alt="" />
                </div>
            </div>

            <div className="flex trending-content h-fit">
                <div id='Left' className="cursor-pointer w-[60vw] h-28 relative">
                    <div className="border-2 border-black rounded-3xl flex justify-center items-center h-[5vh] w-[10vw] max-[768px]:w-[15vw] max-[500px]:w-[20vw] max-[1024px]:text-sm max-[900px]:text-xs">Press Release</div>
                    <div className="font-bold w-[60vw] flex">
                        <div className="w-[40vw] text-xl max-[1024px]:text-base max-[800px]:text-sm">
                            Kotak811 shares a reminder about ROI on self-care
                        </div>
                        <p className='flex items-center w-[20vw] justify-center'>2 min</p>
                    </div>
                    <hr className='border-t border-black' />
                </div>
                <div id='Right' className="right-0 z-10 h-20 overflow-hidden w-[40vw] flex justify-center items-center absolute">
                    <img className='trending-img h-28 object-cover' src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655721aca38b966c46b74a5c_Untitled%20design%20(8)-p-500.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Trending