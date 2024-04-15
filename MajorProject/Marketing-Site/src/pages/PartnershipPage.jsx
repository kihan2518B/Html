// import Navbar from "./Navbar";
// import Footer from "./Footer";
import "./home.css";

const PartnershipPage = () => {
  return (
    <div>
      <div>
        <div className=" h-[25vh] bg-gray-100">
          <div className="h-[25vh] mx-auto w-[75vw] flex items-center">
            <p className=" text-5xl font-bold">
              Proudly Collaborating With The Most Cutting-Edge Platforms In The
              Industry
            </p>
          </div>
        </div>
        <div className=" h-[110vh] w-full bg-gray-100">
          <div className=" h-[110vh] pt-14 mx-auto w-[80vw] flex flex-wrap justify-around z-10">
            <section id="card1" className="card">
              <img
                src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/648075665ea350dc691d1497_2%20(Large)-p-500.png"
                className="h-full object-contain grayscale mix-blend-multiply"
              ></img>
              <div className="card__content">
                <p className="card__title">ONDC Partner</p>
                <p className="card__description">
                  Complete e-commerce solutions to meet your business goals.
                </p>
              </div>
            </section>
            <section id="card2" className="card">
              <img
                src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6480757a6410b57715391921_1%20(Large)-p-500.png"
                className="h-full w-full object-contain grayscale mix-blend-multiply"
              ></img>
              <div className="card__content">
                <p className="card__title">Google Premier Partner</p>
                <p className="card__description">
                  Leverage the power of Google Ads to scale your business.
                </p>
              </div>
            </section>
            <section id="card3" className="card">
              <img
                src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6483768cc3d75ee3ac3fc879_Zoho%20Partner%20Updated.png"
                className="h-full object-contain grayscale"
              ></img>
              <div className="card__content">
                <p className="card__title">Zoho Premier Partner</p>
                <p className="card__description">
                  Design and implement integrated business architectures and
                  digital transformation solutions.
                </p>
              </div>
            </section>
            <section id="card4" className="card">
              <img
                src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64807591e6895ba2a0e984d3_4%20(Large)-p-500.png"
                className="h-full object-contain grayscale mix-blend-multiply"
              ></img>
              <div className="card__content">
                <p className="card__title">MoEngage Partner</p>
                <p className="card__description">
                  Leverage the marketing automation platform to boost customer
                  engagement and retention.
                </p>
              </div>
            </section>
            <section id="card5" className="card">
              <img
                src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/6480759dd647777427305c00_5%20(Large)-p-500.png"
                className="h-full object-contain grayscale mix-blend-multiply"
              ></img>
              <div className="card__content">
                <p className="card__title">Adobe Solution Partner</p>
                <p className="card__description">
                  Develop sophisticated and personalised solutions for
                  enterprises with deeper consumer understanding and built-in
                  analytics.
                </p>
              </div>
            </section>
            <section id="card6" className="card">
              <img
                src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/64d8f1f21fab27b222a10911_nodejs-1-logo-p-500.png"
                className="h-full object-contain grayscale"
              ></img>
              <div className="card__content">
                <p className="card__title">Node.js</p>
                <p className="card__description">
                  Building & deploy web apps, APIs, and other software solutions
                  with scalability & high performance at the core.
                </p>
              </div>
            </section>
            <section id="card7" className="card">
              <img
                src="https://assets-global.website-files.com/64117da520cdfb7ab62144a5/648075bda17e7f2920f7c4e2_7%20(Large)-p-500.png"
                className="h-full object-contain grayscale mix-blend-multiply"
              ></img>
              <div className="card__content">
                <p className="card__title">Shopify Partner</p>
                <p className="card__description">
                  Build robust and effective online stores with the leading
                  e-commerce platform.
                </p>
              </div>
            </section>
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

export default PartnershipPage;
