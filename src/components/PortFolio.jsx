import React from "react";
import java from "../../public/CIR.png";
import python from "../../public/alaqar.png";
import mongoDB from "../../public/Nuxes.png";
import express from "../../public/Chatapp.png";
import reactjs from "../../public/encoderbytes.png";
import nodejs from "../../public/institue.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "NEXUS",
      title:
        "Developed a responsive website for NUXES using HTML, CSS, Bootstrap, and JavaScript. Designed and implemented a user-friendly interface to effectively showcase the startup's services and projects. Integrated interactive features.",
    },
    {
      id: 2,
      logo: express,
      name: "ChatApp",
      title:
        "Built a real-time chat application using the MERN stack and Socket.IO. Styled with Tailwind CSS for a sleek, responsive interface. The application supports group and private chat, user registration, and emoji integration. (MongoDB, Express.js, React.js, Node.js).",
    },

    {
      id: 3,
      logo: reactjs,
      name: "Encoderbytes",
      title:
        "I am developing a project for our company’s official website using the Next.js framework, along with Node.js and sExpress.js. The database used is MongoDB.",
    },

    {
      id: 4,
      logo: nodejs,
      name: "Institute",
      title: "I have developed a project for institute using MERN stack.",
    },

    {
      id: 5,
      logo: python,
      name: "Property",
      title:
        "I have developed a project for a property dealing company using the MERN stack.",
    },

    {
      id: 6,
      logo: java,
      name: "CIR",
      title:
        "I have developed a project for the government to publish the Climate Impact Information Resource (CIR) using the MERNstack.",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, title }) => (
            <div
              className="md:w-[300px] md:h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 overflow-y-hidden">{title}</p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
