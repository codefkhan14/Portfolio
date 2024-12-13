import React from "react";

function ContactDetail() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-textThemeColor text-center text-4xl font-extrabold">
            Get In Touch
          </h2>
          <p className="text-textWhiteColor text-center">
            If you have any queries feel free to contact us, we will be more tha
            happy to.
          </p>
        </div>
        <form className="flex flex-col gap-6 mt-10 w-[800px]">
          <div className="">
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              className="p-3 w-full bg-inputColor rounded-xl text-textWhiteColor"
            />
          </div>
          <div className="">
            <input
              type="text"
              required
              placeholder="Enter Your Email"
              className="p-3 w-full bg-inputColor rounded-xl text-textWhiteColor"
            />
          </div>
          <div className="">
            <input
              type="text"
              required
              placeholder="Subject"
              className="p-3 w-full bg-inputColor rounded-xl text-textWhiteColor"
            />
          </div>
          <div className="">
            <textarea
              rows="8"
              placeholder="Message"
              required
              className="bg-inputColor p-3 w-full rounded-xl text-textWhiteColor"
            ></textarea>
          </div>
          <button className="all-btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactDetail;
