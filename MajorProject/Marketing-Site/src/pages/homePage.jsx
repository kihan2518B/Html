import { useEffect, useRef } from "react";
import image1 from "../assets/image1.png";
import EC_scrollimage1_left from "../assets/EC_scrollimage1_left.png";
import EC_scrollimage1_right from "../assets/EC_scrollimage1_right.png";
import anime from "animejs";
import Typed from "typed.js";
import Cards from "../components/Cards";
import Trending from "../components/Trending";
import "./home.css";
// import ImageSplitAnimation from "./ImageSplitAnimation";
// import "./home.css";

const HomePage = () => {
  useEffect(() => {
    // Check if any spans exist
    anime({
      targets: ".css-prop-demo",
      left: "100px",
      backgroundColor: "",
      borderRadius: ["0%", "50%"],
      easing: "easeInOutQuad",
    });
  }, []);

  const uppertcontainerRef = useRef(null);
  const lowertcontainerRef = useRef(null);

  useEffect(() => {
    const container = uppertcontainerRef.current;
    if (container) {
      // Set the interval and scroll logic here
      const scrollInterval = 50;
      const scrollStep = 1;
      let scrollDirection = -1; // Initial direction: right to left

      const scrollImages = () => {
        // Arrow function
        container.scrollLeft += scrollStep * scrollDirection;
        // Check if we have reached the end of the container
        if (scrollDirection === -1 && container.scrollLeft <= 0) {
          // Change direction to scroll to the left
          scrollDirection = 1;
        } else if (
          scrollDirection === 1 &&
          container.scrollLeft >= container.scrollWidth - container.offsetWidth
        ) {
          // Change direction to scroll to the right
          scrollDirection = -1;
        }
      };

      setInterval(scrollImages, scrollInterval);
    }
  }, []);

  useEffect(() => {
    const container = lowertcontainerRef.current;
    if (container) {
      // Set the interval and scroll logic here
      const scrollInterval = 50;
      const scrollStep = 1;
      let scrollDirection = 1; // Initial direction: left to right

      const scrollImages = () => {
        // Arrow function
        container.scrollLeft += scrollStep * scrollDirection;
        // Check if we have reached the end of the container
        if (
          scrollDirection === 1 &&
          container.scrollLeft >= container.scrollWidth - container.offsetWidth
        ) {
          // Change direction to scroll to the right
          scrollDirection = -1;
        } else if (scrollDirection === -1 && container.scrollLeft <= 0) {
          // Change direction to scroll to the left
          scrollDirection = 1;
        }
      };

      setInterval(scrollImages, scrollInterval);
    }
  }, []);

  const typedElement1 = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedElement1.current, {
      strings: [
        "We're brand builders at heart,creators by design, tech enthusiasts in practice, and integrated at our core.",
      ],
      typeSpeed: 90, // Adjust typing speed (milliseconds)
      // backSpeed: 20, // Adjust backspace speed (milliseconds)
      // loop: true, // Loop the animation
      cursorChar: "",
    });
    // Cleanup function to destroy the typed instance on unmount
    return () => typed.destroy();
  }, []);

  const typedElement2 = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedElement2.current, {
      strings: [
        "We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.",
      ],
      typeSpeed: 50, // Adjust typing speed (milliseconds)
      // backSpeed: 20, // Adjust backspace speed (milliseconds)
      // loop: true, // Loop the animation
      cursorChar: "",
    });
    // Cleanup function to destroy the typed instance on unmount
    return () => typed.destroy();
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="h-[60vh] bg-gray-100 -z-10">
          <div className="mx-auto w-[80vw] h-[60vh] relative flex flex-col justify-center z-0">
            <div className="font-bold text-gray-800 text-5xl w-[70vw] max-[1132px]:text-4xl max-[850px]:text-3xl max-[709px]:text-2xl max-[567px]:text-xl max-[473px]:text-md max-[369px]:text-md">
              <p className="heading">
                Your Creative, Media & Technology Transformation Partner
              </p>
            </div>
            <div className="my-7 text-xl max-[1143px]:text-sm">
              <p>
                We`re a team of 1000+ Specialists delivering award-winning work
                for 300+ brands worldwide, 8 years and counting!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <marquee direction="right">
            <div className="flex gap-7 scrolling-text">
              <div className="flex items-center">
                <div
                  className="css-prop-demo h-5 w-5 max-[304px]:h-3 max-[304px]:w-3  mr-1"
                  style={{ backgroundColor: "rgb(56, 235, 87)" }}
                ></div>
                <div className="max-[767px]:text-sm text-2xl ">
                  <p className="md:inline-block">
                    IT`S TIME TO CREATE A SCHBANG
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="css-prop-demo h-5 w-5 max-[304px]:h-3 max-[304px]:w-3 mr-1"
                  style={{ backgroundColor: "rgb(56, 235, 87)" }}
                ></div>
                <div className="max-[767px]:text-sm text-2xl ">
                  <p className="md:inline-block">
                    IT`S TIME TO CREATE A SCHBANG
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="css-prop-demo h-5 w-5 max-[304px]:h-3 max-[304px]:w-3 mr-1"
                  style={{ backgroundColor: "rgb(56, 235, 87)" }}
                ></div>
                <div className="max-[767px]:text-sm text-2xl ">
                  <p className="md:inline-block">
                    IT`S TIME TO CREATE A SCHBANG
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="css-prop-demo h-5 w-5 max-[304px]:h-3 max-[304px]:w-3 mr-1"
                  style={{ backgroundColor: "rgb(56, 235, 87)" }}
                ></div>
                <div className="max-[767px]:text-sm text-2xl ">
                  <p className="md:inline-block">
                    IT`S TIME TO CREATE A SCHBANG
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="css-prop-demo h-5 w-5 max-[304px]:h-3 max-[304px]:w-3 mr-1"
                  style={{ backgroundColor: "rgb(56, 235, 87)" }}
                ></div>
                <div className="max-[767px]:text-sm text-2xl ">
                  <p className="md:inline-block">
                    IT`S TIME TO CREATE A SCHBANG
                  </p>
                </div>
              </div>
            </div>
          </marquee>
        </div>
        <div className="bg-gray-100">
          <img src={image1} alt="" className="w-[98vw] mx-auto" />
        </div>
        <div className="main flex flex-col h-[35vh] pb-1 bg-gray-100">
          <div className="w-[85vw] h-[15vh] place-self-end ">
            <p
              className="mint text-3xl font-bold mx-5 max-[1132px]:text-4xl max-[850px]:text-3xl max-[709px]:text-2xl max-[567px]:text-xl max-[473px]:text-md max-[369px]:text-md"
              ref={typedElement1}
            ></p>
          </div>
          <div className="w-[85vw] h-[20vh] place-self-end ">
            <p
              className="text-xl font-bold mx-5 max-[1143px]:text-sm"
              ref={typedElement2}
            ></p>
          </div>
          <div className="flex justify-center">
            <button className="button h-[3vh] w-[15.5vw]">
              <p>Dive Into Our Culture</p>
            </button>
          </div>
        </div>
        <div
          id="scrollBar"
          className="flex h-[100vh] w-[100vw] overflow-hidden"
        >
          <img
            id="left_1"
            src={EC_scrollimage1_left}
            className="h-[100vh] w-[50vw] -translate-y-full"
          />
          <img
            id="right_1"
            src={EC_scrollimage1_right}
            className="h-[100vh] w-[50vw] translate-y-full"
          />
        </div>
        <div className="bg-gray-100">
          <Cards />
        </div>
        <div className="h-[40vh] relative bg-gray-100 ">
          <div className="h-[40vh] w-full absolute flex flex-col bg-gradient-to-r from-white via-transparent to-white z-20"></div>
          <div
            id="upperScorell"
            ref={uppertcontainerRef}
            className="h-[20vh] w-full border z-10  flex bg-contain border-transparent image-container overflow-hidden"
          >
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a52e7e03b0faa8614a73_glow_and_lovely_logo%20-%20Prajna%20Anchan-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5033f6ba168314307c3_Logo%202-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a570dac066179044655b_fevicreate_logo_png-01%20-%20Prajna%20Anchan%20(1)-p-500.webp"
              className=" border border-transparent mx-5 filter grayscale w-[7vw] object-contai"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5936194e83c48e76c9b_date%20crown%20logo-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/64817bf4ebfcd0967249b19c_prime-video-logo-prime-video-icon-transparent-logo-free-png-p-500.webp"
              className=" border border-transparent mx-5 filter grayscale w-[7vw] object-contai"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5430076accc9932ee19_final%20logo%20Short%20story%20c2c-01%20-%20Tanaya%20Shirke%20(1)-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a43f9be7214cf9de3678_Xiaomi_logo_(2021-).svg-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a49c3f6ba1683142721c_rio%20sanitary%20pads-02%20-%20Archana%20Goyal-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a57ea93d52282ec5f982_Cordelia-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5aaa1ed9ddfeb688754_Dhampur%20Logo%20Asset%203%402x%20-%20Alankrit%20Johri%20(1)-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5033f6ba168314307c3_Logo%202-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a6ddd221531d22d33d6c_Dominos_Logo_png%20(1)-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a72e66f54a74b2a0d218_Britannia_Industries_logo-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
          </div>
          <div
            id="lowerscrollbar"
            ref={lowertcontainerRef}
            className="h-[20vh] mt-3 w-full border z-10  flex bg-contain border-transparent image-container overflow-hidden "
          >
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a57ea93d52282ec5f982_Cordelia-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/64817bf4ebfcd0967249b19c_prime-video-logo-prime-video-icon-transparent-logo-free-png-p-500.webp"
              className=" border border-transparent mx-5 filter grayscale w-[7vw] object-contai"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a49c3f6ba1683142721c_rio%20sanitary%20pads-02%20-%20Archana%20Goyal-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a6b985072710b1ea7df9_Hershey%E2%80%99s%20(1)-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a57ea93d52282ec5f982_Cordelia-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />

            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a6ddd221531d22d33d6c_Dominos_Logo_png%20(1)-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />

            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a72e66f54a74b2a0d218_Britannia_Industries_logo-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />

            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5aaa1ed9ddfeb688754_Dhampur%20Logo%20Asset%203%402x%20-%20Alankrit%20Johri%20(1)-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a6f2a558edee2439a56e_Cipla%20logo-01.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5430076accc9932ee19_final%20logo%20Short%20story%20c2c-01%20-%20Tanaya%20Shirke%20(1)-p-500.webp"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
            <img
              src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6470a5033f6ba168314307c3_Logo%202-p-500.png"
              className="border border-transparent mx-5 filter grayscale w-[7vw] object-contain"
            />
          </div>
        </div>
        <div className="bg-gray-100">
          <Trending />
        </div>

        <div className="h-[56.5vh] pt-20 relative w-full bg-gray-100">
          <div className="h-[45vh] absolute w-full bg-gradient-to-r from-white via-transparent to-white z-50"></div>
          <div id="partner_scrollbar" className="h-full w-full flex gap-5">
            <div className="h-[45vh] w-[20vw]">
              <div className="flex justify-center items-center ">
                <img
                  src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/648075bda17e7f2920f7c4e2_7%20(Large)-p-500.png"
                  alt=""
                  className=" h-[20vh] w-[15vw] object-contain filter grayscale"
                />
              </div>
              <div className=" w-fit h-fit mx-auto">
                <p className=" max-[1216px]:text-sm max-[1035px]:text-xs font-bold text-base">
                  Shopify Partner
                </p>
              </div>
              <div className="mt-2 ">
                <p className="w-full text-center max-[1216px]:text-sm max-[901px]:text-xs">
                  Build robust and effective online stores with the leading
                  e-commerce plateform.
                </p>
              </div>
            </div>
            <div className="h-[45vh] w-[20vw]">
              <div className="flex justify-center items-center ">
                <img
                  src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64d8f1f21fab27b222a10911_nodejs-1-logo-p-500.png"
                  alt=""
                  className=" h-[20vh] w-[15vw] object-contain filter grayscale"
                />
              </div>
              <div className=" w-fit h-fit mx-auto">
                <p className=" max-[1216px]:text-sm max-[1035px]:text-xs font-bold text-base">
                  Node.js
                </p>
              </div>
              <div className="mt-2 ">
                <p className="w-full text-center max-[1216px]:text-sm max-[901px]:text-xs">
                  Building & deploy web apps,APIs,and other softwere solutions
                  with scalability & high performance at the core.
                </p>
              </div>
            </div>
            <div className="h-[45vh] w-[20vw]">
              <div className="flex justify-center items-center ">
                <img
                  src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6480759dd647777427305c00_5%20(Large)-p-500.png"
                  alt=""
                  className=" h-[20vh] w-[15vw] object-contain filter grayscale"
                />
              </div>
              <div className=" w-fit h-fit mx-auto">
                <p className=" max-[1216px]:text-sm max-[1035px]:text-xs font-bold text-base">
                  Adobe Solution Partner
                </p>
              </div>
              <div className="mt-2 ">
                <p className="w-full text-center max-[1216px]:text-sm max-[901px]:text-xs">
                  Develop sophisticated and personised solutions for enterprices
                  with deeper consumer understanding and bulit-in analytics.
                </p>
              </div>
            </div>
            <div className="h-[45vh] w-[20vw]">
              <div className="flex justify-center items-center ">
                <img
                  src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6480757a6410b57715391921_1%20(Large)-p-500.png"
                  alt=""
                  className=" h-[20vh] w-[15vw] object-contain filter grayscale"
                />
              </div>
              <div className=" w-fit h-fit mx-auto">
                <p className=" max-[1216px]:text-sm max-[1035px]:text-xs font-bold text-base">
                  Google Premier partner
                </p>
              </div>
              <div className="mt-2 ">
                <p className="w-full text-center max-[1216px]:text-sm max-[901px]:text-xs">
                  Leverage the power of Google Ads to scale your business.
                </p>
              </div>
            </div>
            <div className="h-[45vh] w-[20vw] items-center">
              <div className="flex justify-center items-center ">
                <img
                  src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6483768cc3d75ee3ac3fc879_Zoho%20Partner%20Updated.png"
                  alt=""
                  className=" h-[20vh] w-[15vw] object-contain filter grayscale"
                />
              </div>
              <div className=" w-fit h-fit mx-auto">
                <p className=" max-[1216px]:text-sm max-[1035px]:text-xs font-bold text-base">
                  Zoho Premier partner
                </p>
              </div>
              <div className="mt-2 ">
                <p className="w-full text-center max-[1216px]:text-sm max-[901px]:text-xs">
                  Design and implement integrated business architecture and
                  digital transformation solutions.
                </p>
              </div>
            </div>
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

export default HomePage;
