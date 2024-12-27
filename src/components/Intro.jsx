import React, { useState, useEffect } from "react";
import MyImg from "../assets/myimage.png";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  let displayProfile = [
    "Full Stack Developer",
    "Web Developer",
    "Website Designer",
  ];

  const [currentText, setCurrentText] = useState(displayProfile[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setFadeIn(false); // Trigger fade-out

      setTimeout(() => {
        // Change the text after fade-out, then fade-in again
        setCurrentText((prevText) => {
          const nextIndex =
            (displayProfile.indexOf(prevText) + 1) % displayProfile.length;
          return displayProfile[nextIndex];
        });
        setFadeIn(true); // Trigger fade-in
      }, 500); // Wait for fade-out to complete (0.5s)
    }, 1500); // Change text every 3 seconds

    return () => clearInterval(textInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative min-h-screen flex justify-between px-[150px] bg-fixed backdrop-blur-[10px] z-0 bg-cover bg-backgroundColor">
      {/* Left */}
      <div className="z-20 flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="font-bold text-6xl text-textWhiteColor mt-4">
            I'm{" "}
            <span className="font-bold text-6xl text-textThemeColor">
              MD FURKAN
            </span>
          </h1>
          <h1 className="text-textWhiteColor mt-2 text-5xl font-bold py-4 h-[10rem]">
            I am a{" "}
            <span className={`!text-textThemeColor`}>
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
                className="text-[3rem] font-bold !text-textThemeColor}"
              />
            </span>
          </h1>

          <p className="text-textWhiteColor [text-shadow:2px_2px_4px_rgba(255,255,255,0.2)] font-medium text-xl">
            I'm a passionate Computer Science undergrad aspiring to excel as a
            software developer. With a focus on web development, competitive
            programming, and open source, I'm building a strong foundation.
            Blend technical skills with problem-solving, engage in projects and
            collaboration, and my journey will lead to success.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-10 mt-8">
            <div>
              <a href="#contacts">
                <button className="all-btn-outline">Hire Me</button>
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1jv_DHQAhnsyWMOpRmRb30mlncrmOSAoW/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <button className="all-btn-outline">Get CV</button>
              </a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <img
            src={MyImg}
            alt="load"
            className="w-[500px] h-[500px] mix-blend-multiply aspect-square object-contain rounded-full border-[5px] outline-dashed outline-textThemeColor border-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
