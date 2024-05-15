import React from "react";

import chatAppPhoto from "../assets/chatAppPhoto.jpg";
import news from "../assets/news.png";
import node from "../assets/node.webp";
import textUtils from "../assets/textUtils.png";
import HMS from "../assets/HMS.png";
import c1 from "../assets/c1.jpg";
import seetubepng from "../assets/seetubepng.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatAppPhoto,
      codeLink: "https://github.com/AryanTomar2025/ChatBloom",
      name:"ChatApp",
    },
    {
      id: 2,
      src: news,
      codeLink: "https://github.com/AryanTomar2025/NewsHub",
      name:"NewsHub",
    },
    {
      id: 3,
      src: node,
      codeLink: "https://github.com/AryanTomar2025/civic_craze",
      name:"Voting App"

    },
    {
      id: 4,
      src: seetubepng,
      codeLink: "https://github.com/AryanTomar2025/SeeTube",
      name:"SeeTube"
    },
    {
      id: 5,
      src: HMS,
      codeLink: "https://github.com/AryanTomar2025/Hospital-Management-System",
      name:"Hospital Management System"
    },
    {
      id: 6,
      src: c1,
      codeLink: "https://github.com/AryanTomar2025/MealDash",
      name:"MealDash"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen  "
    >
      <div className="max-w-screen-lg    mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
          {portfolios.map(({ id, src, codeLink ,name}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg w-full">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-60" 
              />
              <div className="flex items-center justify-center">
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
              <div>
                <p className="text-center py-4">{name}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
