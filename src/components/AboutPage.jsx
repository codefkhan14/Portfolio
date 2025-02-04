import React from "react";

function AboutPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-backgroundColor pt-16 lg:pt-72">
        {/* left  */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-8 lg:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSSScwrzpbqREQN0ZbDymzs-BPARfUbXzdqLsqa5vFgXg392c"
            alt="load"
            className="w-full max-w-[450px] md:h-[400px] h-[300px] rounded-xl"
          />
        </div>
        {/* right  */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center sm:items-start items-center">
          <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl sm:text-start text-center">
            About me
          </h1>

          <p className="text-center text-textWhiteColor pt-4 pb-6 text-base sm:text-lg sm:text-start">
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
    </>
  );
}

export default AboutPage;
