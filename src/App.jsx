import { useState } from "react";
import "./App.css";
// import bg from "./assets/images/background-pattern-mobile.svg";
import bgp from "./assets/images/background-pattern-desktop.svg";
import open from "./assets/images/icon-plus.svg";
import close from "./assets/images/icon-minus.svg";
import avatar from "./assets/images/icon-star.svg";
function App() {
  const [active, setActive] = useState(0);

  const data = [
    {
      heading: "What is frontend mentor and how will it help me",
      paragraph:
        "Frontend mentor offers realistic coding challenges to help developers improve their frontend coding skills in HTML,CSS and JavaScript. It is suitable for all levels and even for beginners",
      id: 1,
    },
    {
      heading: "Is Frontend mentor free ?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro vel ad totam distinctio sit delectus quibusdam dolorem quasi eos?",
      id: 2,
    },
    {
      heading: "Can I use Frontend Mentor projects in my portfolio ?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem itaque sequi consequatur explicabo laudantium dolore eveniet in quod praesentium.",
      id: 3,
    },
    {
      heading: "Can I get help if I am stuck in a challenge ?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veniam, sit soluta perferendis sapiente accusantium eius repellat maiores, nemo, aut quis error placeat iste expedita.",
      id: 4,
    },
  ];
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-Light_pink font-work_sans">
      <img
        src={bgp}
        alt="Pattern in purple"
        className="h-[250px] object-cover w-[100vw] absolute z-0 top-0"
      />
      <div className="w-[400px] md:max-w-[600px] md:w-auto z-10 rounded-lg flex flex-col p-3 text-Dark_purple bg-white">
        <div className="flex items-center my-4">
          <img src={avatar} alt="" className="w-[1.6em] mr-6 md:w-[2em]" />
          <h1 className="text-3xl text-Dark_purple font-bold md:text-4xl">
            FAQs
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div className="">
              <div className="flex justify-between p-2 hover:text-purple-600 items-center">
                <h1 className="text-lg font-bold w-[75%] md:w-[90%] leading-6 tracking-wide mb-2  cursor-pointer">
                  {item.heading}
                </h1>
                <img
                  src={active === item.id ? close : open}
                  alt="open or close"
                  className="cursor-pointer w-[2.3em] md:w-[2.8em]"
                  onClick={() =>
                    active === item.id ? setActive(0) : setActive(item.id)
                  }
                />
              </div>
              {active === item.id ? (
                <p className="text-Grayish_purple p-2 text-[15px] duration-300 md:text-[16px] animate-fadeIn">
                  {item.paragraph}
                </p>
              ) : (
                <p></p>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
