import Cart from "../components/Carts";
import "./home.css";

const WorkBar = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <div className=" h-[35vh] bg-gray-100 ">
          <div className="h-[25vh] w-[90vw] mx-auto flex items-center">
            <p className=" text-5xl font-bold">Explore Our Lastest Work</p>
          </div>
          <hr className="border-t border-gray-500 w-[90vw] mx-auto" />
          <div className="w-[90vw] mx-auto h-[10vh] flex justify-end items-center ">
            <div className="w-[30vw]  flex justify-between">
              <button className="button w-[14vw] h-8 flex justify-center mr-5 rounded-3xl p-1 font-bold">
                <p className="text-case">Case Study</p>
              </button>
              <button className="button w-[19vw] h-8 flex justify-center mr-5 rounded-3xl p-1 font-bold">
                <p className="text-case">Daily Creativity</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" h-[300vh] w-full bg-gray-100">
          <div className=" h-[300vh] pt-14 mx-auto w-[80vw] flex flex-wrap justify-around z-10">
            <Cart
              id="cart1"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655daa2654a0826a2891bd40_renewables%20WEBSITE%20CS-01.png"
              title="The Renewables People UK"
              description="Delivering a gorgeous web experience for UK's top Home Energy Conservation Leader"
            />

            <Cart
              id="cart2"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655da828b0404cc1bd2d3476_mia%20by%20tanshiq%20WEBSITE%20CS-01-p-500.png"
              title="Mia by Tanishq"
              description="Creating a nationwide buzz for a jewellery brand's new range
              launch"
            />

            <Cart
              id="cart3"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655da74ca1a394efa1d6fbcf_centerfruit%20WEBSITE%20CS-01-p-500.png"
              title="Centerfruit"
              description="Creating a zesty gamified website for a popular candy brand!"
            />

            <Cart
              id="cart4"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655da6aed14f9d6e2cd82f61_coffeeverse%20WEBSITE%20CS-01-p-500.png"
              title="Britannia"
              description="Building a Metaverse for India's most beloved Snacking Brand"
            />

            <Cart
              id="cart5"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655da88f5ebcb0f7d393b360_madmix%20WEBSITE%20CS-01-p-500.png"
              title="Madmix"
              description="Designing a masaledar brand identity for India's newest
              snacking brand"
            />

            <Cart
              id="cart6"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64f5bcc5894fd5f2d344b9d8_JIO%20VIP%20BOX%20WEBSITE%20CS%2001-p-500.png"
              title="Jio"
              description="Winning over cricket fans with an AR/VR Campaign for Jio"
            />

            <Cart
              id="cart7"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64f5baf3ba8347c71679d608_iqoo%20website%20case%20study-01-p-500.png"
              title="iQOO"
              description="Breaking the internet with our Influencer Campaign for a
              leading mobile brand"
            />

            <Cart
              id="cart8"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64f5b616a3b8835d0fa68766_finolex%20website%20case%20study-01-p-500.png"
              title="Finolex"
              description="Winning hearts across generations for India's beloved pipe
              brand"
            />

            <Cart
              id="cart9"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64f5cf447cc78915f5749938_FEVICOL%20WEBSITE%20CS%203-01-p-500.png"
              title="Fevicol"
              description="Roping in an adhesive brand's fans with a sticky Reels Remix
              campaign"
            />

            <Cart
              id="cart10"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/647f2e5fc82a9016c4a0c3db_KOTAK%20811%20CS-01%20(Large)-p-500.png"
              title="Kotak811"
              description="Crafting a new-age website experience for India's most trusted
              large bank"
            />

            <Cart
              id="cart11"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/647725f396c6376edf86be43_DOMINOS%20WEBSITE%20CASE%20STUDY%20m%20text-01%20(Large)-p-500.png"
              title="Domino's"
              description="How we helped Domino's India gain 43,000 followers in just 6
              hours"
            />

            <Cart
              id="cart12"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/647726b6bbb4647b00589d78_FEVICOL%20WEBSITE%20CASE%20STUDY%20M%20TEXT%20(Large)-p-1600.png"
              title="Fevicol"
              description="The stickiest Social Distancing Campaign for a global adhesive
              products brand"
            />

            <Cart
              id="cart13"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477266468810cea11c95a7e_JUST%20ONE%20HEAD%20CASE%20STUDY%20M%20TEXT-01%20(Large)-p-500.png"
              title="Mumbai Police"
              description="Raising public awareness on Road Safety Measures with Mumbai
              City's Police Department"
            />

            <Cart
              id="cart14"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6470329994a07b3f73a75acf_PRALHAD%20STUDY-01%20(Large)-p-500.png"
              title="Finolex"
              description="Creating our first ever feature-length brand film for Finolex
              Pipes"
            />

            <Cart
              id="cart15"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477262de0f4dc148b14b786_WE%20DELIVER%20CS-01%20(Large)-p-500.png"
              title="WeDeliver UK"
              description="Branding & launching UK's newest delivery app"
            />

            <Cart
              id="cart16"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/646b110fe6c2b20c089dec8d_H%26M%20WEBSITE%20CS-01%20(Large).png"
              title="H&M"
              description="Launching H&M's Brighter Than Ever Collection with a twist"
            />

            <Cart
              id="cart17"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64774d604b84e8686197ebeb_MSD%20CASE%20STUDY%20M%20TEXT-01%20(Large)-p-500.png"
              title="MSD Pharamceuticals"
              description="How we caught India's attention with our #DontGetCaught
              Campaign on HPV Awareness and Prevention"
            />

            <Cart
              id="cart18"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64774eb8a0df3323433e2e83_J%26J%20WEBSITE%20CASE%20STUDY%20M%20TEXT-01%20(Large)-p-500.png"
              title="Johnson & Johnson"
              description="How we raised awareness about Tuberculosis for healthcare
              brand Johnson & Johnson"
            />

            <Cart
              id="cart19"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6479b47f8b1ce4afa333683e_wellness%20forever%20CASE%20STUDY-01%20(Large)-p-500.png"
              title="Wellness Forever"
              description="How our Segmentation Strategy for Paid Media helped a medical
              brand achieve business objectives"
            />

            <Cart
              id="cart20"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/647e7032f708de4885531a8e_CROMPTON%20CS%20SLIDE%201%20(Large)-p-500.png"
              title="Crompton"
              description="Our four-pillar SEM Strategy helped India's fastest growing
              Electronics Brand stay ahead of the curve"
            />

            <Cart
              id="cart21"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/646b1097318b59aa1eec5646_TATA%20COMMS%20WEBSITE%20CS-01%20(Large)-p-500.png"
              title="TATA Communications"
              description="Creating a Tailored Website Experience for visitors of India's
              biggest telecom. brands"
            />

            <Cart
              id="cart22"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/647031c8c0c41a05b7bb50b3_BLACK%20AND%20DECKER%20CASE%20STUDY-01%20(Large)-p-1600.png"
              title="Black+Decker"
              description="Celebrating tough women on Women's Day for a global tools
              manufacturing brand"
            />

            <Cart
              id="cart23"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/646b0999ea58181a345f7e73_BRITANNIA%20BISCAFE%20CS-01-p-500.png"
              title="Britannia Biscafe"
              description="Finding Coffee's snacking soulmate for one of India's most
              loved FMCG brand"
            />

            <Cart
              id="cart24"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477260dbbb4647b0057f061_SWIGGY%20CASE%20STUDY%20M%20TEXT-01%20(Large).png"
              title="Swiggy"
              description="Hyper-personalized social campaign for India's biggest food
              delivery startup"
            />

            <Cart
              id="cart25"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64774c61a485e13dd8b2a165_VANTAGE%20STUDY%20m%20text%20(Large).png"
              title="Network 18"
              description="Making Headlines with our omnichannel launch campaign for a
              bold original News Show"
            />

            <Cart
              id="cart26"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477272c5e9047a330a89ba3_SWITCH%20MOBILITY%20STUDY%20M%20TEXT-01%20(Large).png"
              title="Switch Mobility"
              description="Using Tech Gamification to educate people on the Benefits of
              Driving EVs"
            />

            <Cart
              id="cart27"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64774cb69983a2137ad4433e_IMAGINE%20MEATS%20CASE%20%20STUDY%20M%20TEXT-01%20(Large)-p-500.png"
              title="Imagine Meats"
              description="Creating a delicious Brand Identity for India's newest
              plant-based meat cuisine startup"
            />
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

export default WorkBar;
