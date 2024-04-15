import propTypes from "prop-types";
import "../pages/home.css";

const Card = ({ heading, description }) => {
  Card.propTypes = {
    heading: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  };

  return (
    <>
      <div className="relative card w-fit h-[80vh] rounded-2xl flex justify-center z-0">
        <div className="background rounded-2xl bg-gradient-to-t from-green-400  to-primory"></div>
        <div className="contain w-[30vw] h-full bg-gray-300 z-10 text-gray-500 rounded-2xl flex-col items-center justify-center overflow-hidden">
          <div className="pt-20 font-lighter flex justify-center text-5xl max-[1132px]:text-4xl max-[850px]:text-3xl max-[709px]:text-2xl max-[567px]:text-xl max-[473px]:text-md max-[369px]:text-md">
            <h1>{heading}</h1>
          </div>
          <div className="description flex flex-wrap w-full px-20 text-2xl max-[1143px]:text-md items-center h-full ">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <div className="solutions flex h-[100vh] w-[100vw] items-center mx-auto gap-5 justify-center">
      <Card
        heading="Brand Solutions"
        description="We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies &amp; create holistic consumer experiences and fully serve clients."
      />
      <Card
        heading="Tech Solutions"
        description="We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience."
      />
      <Card
        heading="Media Solutions"
        description="Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time."
      />
      <Card
        heading="Reserch Solutions"
        description="We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services to connect research, strategy and implementation."
      />
    </div>
  );
};

export default Cards;
