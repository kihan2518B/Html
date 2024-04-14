import "./styles.css";
import Cart from "./Carts";

const MediaSolution = () => {
  return (
    <div>
      <div>
        <div className="flex h-[100vh] bg-gray-100">
          <div className="w-[50vw] flex flex-col items-center justify-around">
            <p className="text-5xl font-bold h-[8vh] w-[40vw]  ">
              Media Solutions
            </p>
            <p className="text-xl text-left h-[24vh] w-[40vw] ">
              Our Media Sciences department specializes in implementing and
              managing paid marketing strategies to increase your brand
              awareness, market share and business revenue.
              <hr className="border border-gray-800 mt-5 w-[10vw]" />
            </p>
            <p className="h-[10vh] w-[40vw] text-xl font-bold items-center">
              Proud to be collaborating with media industry leaders to power
              growth for brands!
            </p>
            <div className="w-[39vw] h-[40vh] flex flex-wrap justify-around">
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6477c05f6f9e81c9d0f82322_62691149902f536a63a89ae2_Brigade-Web-Meta-Business-Partner-1-1.png"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646742411d41344dd4fe9e4f_6.webp"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/64674240ce6535840fe75043_3.webp"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/646742411d41344dd4fe9e5a_7.webp"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6477bd521f0ee28256a9fcd2_HubSpot-certified-partner-2-p-500.webp"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6477c0fb107ad31b724643eb_629a40dc3e59ee069da94c82-p-500.png"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6477bdd4ebdcee2b99b714e2_download-removebg-preview%20(1).png"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6477c190c05b4c36d20363b0_SimilarWeb_logo.svg-p-500.webp"
                alt=""
                className="w-[10vw] h-[10vh] object-contain"
              />
            </div>
          </div>

          <div className="w-[50vw] flex flex-col h-[40vh] justify-evenly items-center">
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>Media Buying</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>Media Planning</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>Performance Marketing</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>MarTech for Media</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
          </div>
        </div>
        <div className=" h-[250vh] w-full bg-gray-100">
          <div className=" h-[250vh] pt-14 mx-auto w-[80vw] flex flex-wrap justify-around z-10">
            <Cart id="cart1" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655da88f5ebcb0f7d393b360_madmix%20WEBSITE%20CS-01-p-500.png" title="Madmix" description="Designing a masaledar brand identity for India's newest
                  snacking brand"/>
            <Cart id="cart2" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655da828b0404cc1bd2d3476_mia%20by%20tanshiq%20WEBSITE%20CS-01-p-500.png" title="Mia by Tanishq" description="Creating a nationwide buzz for a jewellery brand's new range
                  launch"/>
            <Cart id="cart3" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655da6aed14f9d6e2cd82f61_coffeeverse%20WEBSITE%20CS-01-p-500.png" title="Britannia" description="Building a Metaverse for India's most beloved Snacking Brand" />
            <Cart id="cart4" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64f5cf447cc78915f5749938_FEVICOL%20WEBSITE%20CS%203-01-p-500.png" title="Fevicol" description="Roping in an adhesive brand's fans with a sticky Reels Remix
                  campaign"/>
            <Cart id="cart5" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64f5bcc5894fd5f2d344b9d8_JIO%20VIP%20BOX%20WEBSITE%20CS%2001-p-500.png" title="Jio" description="Winning over cricket fans with an AR/VR Campaign for Jio
"/>
            <Cart id="cart6" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64f5baf3ba8347c71679d608_iqoo%20website%20case%20study-01-p-500.png" title="iQOO" description=" Breaking the internet with our Influencer Campaign for a leading mobile brand
"/>
            <Cart id="cart7" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/647725f396c6376edf86be43_DOMINOS%20WEBSITE%20CASE%20STUDY%20m%20text-01%20(Large)-p-500.png" title="Domino's" description="How we helped Domino's India gain 43,000 followers in just 6
hours"/>
            <Cart id="cart8" url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477260dbbb4647b0057f061_SWIGGY%20CASE%20STUDY%20M%20TEXT-01%20(Large).png" title="WeDeliver UK" description="Branding & launching UK's newest delivery app" />
          </div>
        </div>
        <div className="h-[9vh] flex justify-around bg-gray-100 rounded-b-3xl">
          <button className="timeButton"></button>
          <button className="timeButton"></button>
          <button className="timeButton"></button>
          <button className="timeButton"></button>
        </div>
      </div>
    </div>
  );
};

export default MediaSolution;
