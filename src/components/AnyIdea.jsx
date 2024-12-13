import React from "react";
import { Link } from "react-router-dom";
function AnyIdea() {
  return (
    <>
      <div className="flex items-center justify-center gap-40 mt-36 px-[150px]">
        {/* left  */}
        <div className="">
          <img
            src="https://i.pinimg.com/736x/7b/20/d5/7b20d5c6cadab61670a2d915263a6b00.jpg"
            alt="load"
            className="w-[450px] h-[400px] rounded-xl"
          />
        </div>
        {/* right  */}
        <div className="">
          <h1 className="font-extrabold text-textThemeColor text-4xl">
            Have Any Project In Your Mind{" "}
          </h1>
          <p className="text-textWhiteColor">
            If You have any interesting projects idea in your mind please feel
            free to contact us.
          </p>
          <Link to="/Contact">
            <button className="all-btn">Contact Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AnyIdea;
