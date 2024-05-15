import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Dynamic 3rd-Year Computer Science Student Excels in MERN Stack and
          familiar with SpringBoot, Boasting a 7 CGPA. LeetCode Enthusiast with 500+
          Problems Solved, Ranking in the Top 16% Globally. Proven Expertise in
          Crafting Innovative MERN Projects, Showcasing Web Development Prowess.
          Committed to Excellence and Continuous Learning in the Evolving Tech
          Landscape. A Webmern Specialist with a Passion for Problem-Solving,
          Ready to Contribute to the Next Wave of Technological Advancements
        </p>

        <br />

       
      </div>
    </div>
  );
};

export default About;
