import React from "react";
import MongoDb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import RReact from "../../public/reactjs.png";
import Nodejs from "../../public/node.png";
import Tailwind from "../../public/tailwindcss.png";
import Js from "../../public/javascript.png";
import Html from "../../public/html.png";
import Bootstrap from "../../public/bootstap.jpg";
import Next from "../../public/next.png";
import Github from "../../public/github.png";
import Sqlserver from "../../public/sqlserver.jpg";
import Mysql from "../../public/mysql.png";
import Css from "../../public/css.jpg";
import Git from "../../public/git.png";
import Type from "../../public/typescript.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: MongoDb,
      name: "MongoDb",
    },
    {
      id: 2,
      logo: express,
      name: "Expressjs",
    },
    {
      id: 3,
      logo: RReact,
      name: "Reactjs",
    },
    {
      id: 4,
      logo: Nodejs,
      name: "Nodejs",
    },
    {
      id: 5,
      logo: Next,
      name: "Nextjs",
    },
    {
      id: 6,
      logo: Tailwind,
      name: "Tailwind Css",
    },
    {
      id: 7,
      logo: Js,
      name: "Javascript",
    },
    {
      id: 8,
      logo: Html,
      name: "HTML",
    },
    {
      id: 9,
      logo: Bootstrap,
      name: "Bootstrap",
    },
    {
      id: 10,
      logo: Github,
      name: "Github",
    },
    {
      id: 11,
      logo: Sqlserver,
      name: "Sqlserver",
    },
    {
      id: 12,
      logo: Mysql,
      name: "Mysql",
    },
    {
      id: 13,
      logo: Type,
      name: "Typescript",
    },
    {
      id: 14,
      logo: Css,
      name: "Css",
    },
    {
      id: 15,
      logo: Git,
      name: "Git",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
