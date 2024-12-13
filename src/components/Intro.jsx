import React from "react";
import { TypeAnimation } from "react-type-animation";
function Intro() {
  // window.open(Resume)
  return (
    <div className="flex justify-between px-[150px] pt-16">
      {/* left  */}
      <div className="w-1/2">
        <h1 className="font-extrabold text-5xl text-textWhiteColor">
          Hey 🖐️! MD FURKAN
        </h1>
        <h1 className="text-textWhiteColor text-5xl font-extrabold">
          I am a{" "}
          <span className="text-textThemeColor">
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
        <p className="text-textWhiteColor">
          I'm a passionate Computer Science undergrad aspiring to excel as a
          software developer. With a focus on web development, competitive
          programming, and open source, I'm building a strong foundation. Blend
          technical skills with problem-solving, engage in projects and
          collaboration, and my journey will lead to success.
        </p>
        {/* buttons  */}
        <div className="flex items-center gap-3 mt-8">
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
          src="https://i.pinimg.com/736x/7b/20/d5/7b20d5c6cadab61670a2d915263a6b00.jpg"
          alt="load"
          className="w-[450px] h-[400px] rounded-xl"
        />
      </div>
    </div>
  );
}

export default Intro;
