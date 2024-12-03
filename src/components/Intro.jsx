import React from "react";
import { TypeAnimation } from "react-type-animation";
function Intro() {
  // window.open(Resume)
  return (
    <div className="flex items-center justify-between px-[150px]">
      {/* left  */}
      <div className="w-1/2">
        <h1 className="font-bold text-4xl">Hey 🖐️! MD FURKAN</h1>
        <h1>
          I am a{" "}
          <span>
            <TypeAnimation
              sequence={[
                " Full Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Website Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-[#252525]">
          I'm a passionate Computer Science undergrad aspiring to excel as a
          software developer. With a focus on web development, competitive
          programming, and open source, I'm building a strong foundation. Blend
          technical skills with problem-solving, engage in projects and
          collaboration, and my journey will lead to success.
        </p>
        {/* buttons  */}
        <div className="flex items-center gap-2">
          <div>
            <button className="all-btn">Hire Me</button>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1jv_DHQAhnsyWMOpRmRb30mlncrmOSAoW/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="all-btn">Get CV</button>
            </a>
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="">
        <img
          src="https://themewagon.github.io/satner/img/banner/home-right.png"
          alt="load"
          className="w-[500px]"
        />
      </div>
    </div>
  );
}

export default Intro;
