import React from 'react';
import './styles.css';

const Trending = () => {
    return (
        <div className='z-50 bg-white rounded-b-2xl px-5 pt-3 w-[100vw]'>
            <div id='Title' className="flex h-20 w-full">
                <h1 className='text-4xl font-bold'>Trending</h1>
            </div>
            <div className="flex trending-content">
                <div id='Left' className="cursor-pointer w-[60vw] h-28 relative">
                    <div className="border-2 border-black rounded-3xl p-2 h-fit w-fit">Press Release</div>
                    <div className="font-bold w-[60vw] flex">
                        <div className="w-[40vw] text-xl">
                            Schbang appoints Jitto George as Executive Vice President - Media Solutions
                        </div>
                        <p className='flex items-center w-[20vw] justify-center'>3 min</p>
                    </div>
                    <hr className='border-t border-black' />
                </div>
                <div id='Right' className="right-0 h-20 overflow-hidden w-[40vw] flex justify-center items-center absolute">
                    <img className='trending-img h-full object-cover ' src="https://github.com/kihan2518B/Html/blob/main/MajorProject/Marketing-Site/src/assets/trending-1.png?raw=true" alt="" />
                </div>
            </div>

            <div className="flex trending-content">
                <div id='Left' className="cursor-pointer w-[60vw] h-28 relative">
                    <div className="border-2 border-black rounded-3xl p-2 h-fit w-fit">Press Release</div>
                    <div className="font-bold w-[60vw] flex">
                        <div className="w-[40vw] text-xl">
                            Schbang appoints Jitto George as Executive Vice President - Media Solutions
                        </div>
                        <p className='flex items-center w-[20vw] justify-center'>3 min</p>
                    </div>
                    <hr className='border-t border-black' />
                </div>
                <div id='Right' className="right-0 h-20 overflow-hidden w-[40vw] flex justify-center items-center absolute">
                    <img className='trending-img h-28 object-cover ' src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6557247d770dca61e0c887be_Untitled%20design%20(9)-p-500.png" alt="" />
                </div>
            </div>

            <div className="flex trending-content h-fit">
                <div id='Left' className="cursor-pointer w-[60vw] h-28 relative">
                    <div className="border-2 border-black rounded-3xl p-2 h-fit w-fit">Press Release</div>
                    <div className="font-bold w-[60vw] flex">
                        <div className="w-[40vw] text-xl">
                            Schbang appoints Jitto George as Executive Vice President - Media Solutions
                        </div>
                        <p className='flex items-center w-[20vw] justify-center'>3 min</p>
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
