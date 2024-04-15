import "./home.css";

const NetworkPage = () => {
  return (
    <div>
      <div>
        <div className="flex h-[90vh] bg-gray-100">
          <div className="w-[50vw] flex flex-col items-center justify-around">
            <p className="text-5xl font-bold h-[12vh] w-[40vw]  ">
              Spark Social Network & Partnerships
            </p>
            <p className="text-xl text-left h-[18vh] w-[40vw] ">
              Our partner companies like Spark 88GB, Spek Digital and Django
              Digital cater to unique market needs.
            </p>
            <div className="w-[39vw] h-[30vh] flex flex-wrap justify-around">
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6464805d5d0d2c49f4b01339_5%20(1)-min.webp"
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6464805d51fa16783155179c_4%20(1)-min.webp"
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6464805e51fa1678315518b6_3%20(2)-min.webp"
                className="w-[10vw] h-[10vh] object-contain"
              />
              <img
                src="https://assets-global.website-files.com/64081b3f2fda69c80b5566e5/6464805d099843d22981d525_2%20(2)-min.webp"
                className="w-[10vw] h-[10vh] object-contain"
              />
            </div>
          </div>

          <div className="w-[50vw] h-[50vh] flex flex-col justify-evenly items-center">
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>SPEK Digital</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>88GB</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>Django Digital</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
            <div className="flex relative w-[40vw] h-[5vh] items-center font-bold text-lg">
              <p>ARtmeTech</p>
              <i className="fa-solid fa-chevron-down absolute right-0 "></i>
            </div>
            <hr className="border-t border-gray-500 w-[40vw]" />
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

export default NetworkPage;
