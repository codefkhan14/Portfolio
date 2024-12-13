import React from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <>
      <div className="flex justify-between items-start px-[150px] bg-backgroundColor pt-72">
        {/* left  */}
        <div>
          <img
            src="https://i.pinimg.com/736x/7b/20/d5/7b20d5c6cadab61670a2d915263a6b00.jpg"
            alt="load"
            className="w-[450px] h-[400px] rounded-xl"
          />
        </div>
        {/* right  */}
        <div className="w-[60%]">
          <h1 className="font-bold text-white text-6xl text-start">About me</h1>

          <p className="text-start text-textWhiteColor pt-4 pb-6 text-lg">
            I'm an Computer Science Engineering undergrad aspiring to become a
            skilled software developer. I'm an avid learner and always looking
            for oppurtunities to increase my skillset. I'm currently working on
            my skills in the field of Web Development. I'm also a competitive
            programmer and enjoy problem solving. I'm also a big fan of open
            source and I'm looking to collaborate on projects that can help the
            community.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            delectus fugit facere recusandae architecto aliquam consequuntur
            libero dolorum magnam dolores.
          </p>
          <Link to="/Project">
            {" "}
            <button className="all-btn">Get CV</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
