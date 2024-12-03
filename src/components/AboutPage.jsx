import React from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <>
      <div className="flex justify-between items-center px-[150px]">
        {/* left  */}
        <div className="">
          <div className="About-page-img-stack">
            <img
              src="https://themewagon.github.io/satner/img/about-us.png"
              alt=""
              width="450px"
              height="450px"
              className="About-page-img"
            />
          </div>
        </div>
        {/* right  */}
        <div className="w-1/2">
          <h1 className="font-bold text-4xl">About me</h1>

          <p className="text-[#252525]">
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
