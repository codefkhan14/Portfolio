import React from "react";

function Subscribe() {
  return (
    <>
      <div className="bg-custom-gradient py-16 px-[150px] mt-32">
        <div className="flex justify-between items-center ">
          {/* left   */}
          <div>
            <h1 className="font-bold text-4xl text-white">Stay Connected!</h1>
            <p className="text-white">
              Stay connected and receive updates from anywhere
            </p>
          </div>
          {/* right  */}
          <div>
            <form className="flex justify-center items-center gap-2">
              <div className="">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="p-2 rounded-md w-[300px]"
                />
              </div>
              <div>
                <button className="all-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
