import React from "react";

function Subscribe() {
  return (
    <>
      <div className="py-16 px-[150px] mt-32 bg-textThemeColor">
        <div className="flex justify-between items-center">
          {/* left   */}
          <div>
            <h1 className="font-bold text-4xl text-white">Stay Connected!</h1>
            <p className="text-textWhiteColor">
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
                  className="p-3 w-[350px] bg-inputColor rounded-xl"
                />
              </div>
              <div>
                <button className="bg-textWhiteColor p-3 rounded-xl cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
