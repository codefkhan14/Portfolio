import React from "react";
import { Link } from "react-router-dom";
function AnyIdea() {
  return (
    <>
      <div className="flex items-center justify-center gap-10 mt-32 px-[150px]">
        {/* left  */}
        <div className="">
          <img
            src="https://themewagon.github.io/satner/img/banner/home-right.png"
            alt=""
            className="w-[500px]"
          />
        </div>
        {/* right  */}
        <div className="">
          <h1 className="font-bold text-4xl">Have Any Project In Your Mind </h1>
          <p className="text-[#252525]">
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
