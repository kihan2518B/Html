import Cart from "../components/Carts";
import "./home.css";

const NewscenterPage = () => {
  return (
    <div>
      <div>
        <div className=" h-[40vh] bg-gray-100">
          <div className="h-[29vh] w-[90vw] mx-auto flex justify-center items-center">
            <p className=" text-5xl font-bold">Spark Social In The News</p>
          </div>
          <div className="w-[90vw] mx-auto h-[10vh] flex justify-end items-center ">
            <div className="w-[35vw]  flex justify-between">
              <button className="button w-[17vw] h-8 flex justify-center mr-5 rounded-3xl p-1 font-bold">
                <p className="text-case">Press Releases</p>
              </button>
              <button className="button w-[17vw] h-8 flex justify-center mr-5 rounded-3xl p-1 font-bold">
                <p className="text-case">Media Features</p>
              </button>
            </div>
          </div>
          <hr className="border-t border-gray-500 w-[90vw] mx-auto" />
        </div>
        <div className=" h-[230vh] w-full bg-gray-100">
          <div className=" h-[230vh] overflow-hidden pt-14 mx-auto w-[80vw] flex flex-wrap justify-around z-10">
            <Cart
              id="cart1"
              url="https://github.com/kihan2518B/Html/blob/main/MajorProject/Marketing-Site/src/assets/trending-1.png?raw=true"
              description="Spark Social appoints Jitto George as Executive Vice President - Media Solutions"
            />

            <Cart
              id="cart2"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655723ff21d203904ff86e94_Brittiana.png"
              description="Britannia forays into the Metaverse with the launch of ‘Britannia Coffeeverse’"
            />

            <Cart
              id="cart3"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655720e7f30637f1e8c40481_Kotak%20X%20Yahya-p-500.png"
              description="Kotak811 shares a reminder about ROI on self-care"
            />

            <Cart
              id="cart4"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/65571e84705ca9f670d54394_Sharechat%20(1)-p-500.png"
              description="ShareChat launches ‘Bure Trends ka Dahan’ campaign"
            />

            <Cart
              id="cart5"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/655725c139c4a132db7aaf93_Fem-p-500.png"
              description="Dabur Fem celebrates modern love with new campaign"
            />

            <Cart
              id="cart6"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6557184e419f55170c5b9346_Dabur%20priya%20malik-p-500.png"
              description="Dabur Amla highlights fresh perspective of Karwa Chauth in a new campaign"
            />

            <Cart
              id="cart7"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64cba22aa080bc65bdb02b55_Finolex-High-Res.png"
              description="Finolex takes the humour route to showcase long lasting pipes"
            />

            <Cart
              id="cart8"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64cb7bb1ac85ba1a55a15b23_Bajaj-Almonds-p-500.png"
              description="Bajaj Almond Drops uses AI to create visuals promoting brand features"
            />

            <Cart
              id="cart9"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6481e5ffe2694a642489c78b_Schbang%20in%20the%20News%20Thumbnails-p-500.png"
              description="Britannia Industries features a sweet appraisal"
            />

            <Cart
              id="cart10"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64819041a9f41af6930cea31_CSR-Main-Thumbbb-p-500.png"
              description="Spark Social for Good Foundation organised health camps on Children’s day"
            />

            <Cart
              id="cart11"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64818ec1ed10f43c886fe1ab_Schbang%20in%20the%20News%20Thumbnails-p-500.png"
              description="Cipla’s new campaign aims to drive awareness on the use of inhalers for asthma"
            />

            <Cart
              id="cart12"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64818cdeceaac1f8229bd5d6_Dominos-press-release-p-500.png"
              description="Domino’s celebrates friendship day with ‘The Last Slice’"
            />

            <Cart
              id="cart13"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a89fc9934aa246787e5d_1-p-500.png"
              description="London Dairy launches new summer campaign #LiveTheIndulgence"
            />

            <Cart
              id="cart14"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6477c71d4b982e4b1c4870bb_Schbang%20in%20the%20News%20Thumbnails-p-500.png"
              description="Tata Neu celebrates fan emotions this TATA IPL season with its ‘Mood Hi Badal Diya’ campaign"
            />

            <Cart
              id="cart15"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a8e0c152564955f2e543_6-p-500.png"
              description="Housing.com sheds light on invisible homemakers on Men’s Day"
            />

            <Cart
              id="cart16"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a8737c731810ed8fa491_7-p-500.png"
              description="Sayani Gupta, VJ Bani & Raja Kumari team up for MSD Phramaceuticals' HPV awareness film"
            />

            <Cart
              id="cart17"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a8faeb7bfed0698cdfa3_8-p-500.png"
              description="BTS: How Switch Mobility With Schbang Offered Its Masterpiece With Sustainability And Tech"
            />

            <Cart
              id="cart18"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a91261f63e4571020a1a_10-p-500.png"
              description="Cyrus Broacha turns 'kismatwala' in new HDFC Life campaign"
            />

            <Cart
              id="cart19"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a93dc9934aa246790e75_13-p-500.png"
              description="Network18 & Spark Social's creative partnership delivers new show Vantage"
            />

            <Cart
              id="cart20"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a94910acd004ecc45bff_14-p-500.png"
              description="Kartik Aaryan plays good cop bad cop with Max Protein"
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

export default NewscenterPage;
