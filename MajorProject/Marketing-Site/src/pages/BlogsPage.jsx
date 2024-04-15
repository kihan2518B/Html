import Cart from "../components/Carts";
import "./home.css";

const BlogsPage = () => {
  return (
    <div>
      <div>
        <div className=" h-[20vh] bg-gray-100">
          <div className="h-[20vh] flex justify-center items-center">
            <p className=" text-5xl font-bold">Blogs</p>
          </div>
        </div>
        <div className=" h-[140vh] w-full bg-gray-100">
          <div className=" h-[140vh] overflow-hidden pt-14 mx-auto w-[80vw] flex flex-wrap justify-around z-10">
            <Cart
              id="cart1"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6539e9edf1b0c2065c194fce_unnamed-p-500.png"
              description=" Why Bother with Employer Branding?"
            />

            <Cart
              id="cart2"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/653076085ed4d5673b98f142_BLOGBANNER%20-01-p-500.png"
              description="Can Blogs Still Attract an Audience? Their Impact on Brands Today"
            />

            <Cart
              id="cart3"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/65648d559b9c633aa2aa28df_6555dc7a528495a528486fd2_3-p-500.png"
              description="#SparkSocialNodePad Ep. 1 - What goes into building a
                  Marketplace?"
            />

            <Cart
              id="cart4"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/651f99829de38d298ea17418_Tech-Blog-website-p-500.png"
              description="Why Your Brand Needs to Start Repurposing Content"
            />

            <Cart
              id="cart5"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a8b6fa8d05e4478580d6_3-p-500.png"
              description="Let Me Be Ur Girl | The Making Of A Music Video"
            />

            <Cart
              id="cart6"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a8c33afdd871f254c2d1_4-p-500.png"
              description="Pralhad: The Rags-to-Riches Story that Will Leave You in Awe"
            />

            <Cart
              id="cart7"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a904e0efda06ad962c19_9-p-500.png"
              description="India’s first-ever plant parenting brand got influencers to
                  announce “I’m expecting” to launch the brand"
            />

            <Cart
              id="cart8"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a954a0ad83b2776aba38_15-p-500.png"
              description="From Legacy to #Trending: How Mia By Tanishq is Winning Over
                  Gen Z"
            />

            <Cart
              id="cart9"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a983eb7bfed0698d6f39_22-p-500.png"
              description="Content May Be King, But Meet The Jesters Who Run The Show"
            />

            <Cart
              id="cart10"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a8533afdd871f2545907_18-p-500.png"
              description="A TATA Brand Connects With Gen Z In A New Way"
            />

            <Cart
              id="cart11"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a57ce0efda06ad92be85_21-p-500.png"
              description="Two Strangers And The Last Slice Of Pizza"
            />

            <Cart
              id="cart12"
              url="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6475a5718661e084c5196806_20-p-500.png"
              description="Creating 130000 Personalised Videos As Castrol For Retailers"
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

export default BlogsPage;
