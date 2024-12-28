import React from "react";
import GithubIcon from "../assets/github.svg";
import InstaIcon from "../assets/instagram.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";

function Footer() {
  return (
    <div className="bg-backgroundColor text-textWhiteColor flex justify-center">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 flex flex-col md:flex-row gap-12 md:gap-40">
        {/* Left Side - Contact Information */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg">
            Have a <span className="text-purple-400">Project in mind?</span>
            <br />
            We’d love to hear from you! Reach out to us, and let's turn your{" "}
            <span className="text-purple-400">Ideas into Reality.</span>
          </p>
          <div>
            <h2 className="text-xl font-semibold">Alternate Contact:</h2>
            <p>
              <span className="text-purple-400 font-medium">Email:</span>{" "}
              <a
                href="mailto:work.furkan14@gmail.com"
                className="underline cursor-pointer"
              >
                work.furkan14@gmail.com
              </a>
            </p>
            <p>
              <span className="text-purple-400 font-medium">Whatsapp:</span>{" "}
              +91-9571604650
            </p>
          </div>
          {/* icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/codefkhan14"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="GitHub" className="w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-furkan14/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="LinkedIn" className="w-6" />
            </a>
            <a href="https://x.com/fkfurkan14" target="_blank" rel="noreferrer">
              <img src={XIcon} alt="X" className="w-6" />
            </a>
            <a
              href="https://www.instagram.com/furkan.14_/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstaIcon} alt="Instagram" className="w-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Send Message</h2>
          <form className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 bg-inputColor rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 bg-inputColor rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* Message */}
            <textarea
              placeholder="Type Your Message..."
              rows="4"
              className="w-full p-3 bg-inputColor rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-textThemeColor text-white py-3 hover:bg-purple-500 transition duration-300 rounded-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
