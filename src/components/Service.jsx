import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../components/styles/Service.css";
import WebService from "../assets/webservice.png";
import Cyber from "../assets/cybersecurity.png";
import Website from "../assets/website.png";
import Ecommerce from "../assets/ecommerce.png";
import SEO from "../assets/seo.png";
import UIUX from "../assets/uiux.png";

function Service() {
  const Services = [
    {
      title: "Web Development",
      description:
        "We'll work with you to create a website that meets your unique needs and goals.",
      icon: Website,
    },
    {
      title: "UI/UX Design",
      description:
        "We'll craft intuitive, visually stunning interfaces that captivate your audience and drive results.",
      icon: UIUX,
    },
    {
      title: "SEO",
      description:
        "Boost your online visibility and drive more traffic to your website with our SEO services.",
      icon: SEO,
    },
    {
      title: "Web Hosting and Maintenance",
      description:
        "Offer reliable web hosting and ensure regular maintenance for smooth website performance.",
      icon: WebService,
    },
    {
      title: "Cybersecurity Services",
      description:
        "Enhance website security by implementing secure authentication, encryption, and protection against cyber threats.",
      icon: Cyber,
    },
    {
      title: "E-commerce",
      description:
        "Take your online store to the next level with our e-commerce solutions.",
      icon: Ecommerce,
    },
  ];

  // State to check screen size
  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsWebView(window.innerWidth >= 768); // Set web view for screens >= 768px
    };

    // Check screen size on load and on resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-backgroundColor flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-[150px] pt-20 pb-16">
      <h1 className="font-bold text-white text-4xl md:text-6xl text-center">
        Services Offer
      </h1>
      <p className="text-center text-textWhiteColor mt-4 max-w-3xl">
        I help businesses and individuals bring their ideas to life with
        professional, custom-built web solutions tailored to meet your goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 justify-center items-center mx-auto">
        {Services.map((item, index) => (
          <ServiceCard key={index} service={item} isWebView={isWebView} />
        ))}
      </div>
    </div>
  );
}

export default Service;

// ServiceCard Component with Hover Transition
const ServiceCard = ({ service, isWebView }) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-600 shadow-lg w-full max-w-sm h-full p-6 rounded-2xl bg-gray-800 text-center service-bounce mx-auto">
      <img
        src={service.icon}
        alt={service.title}
        className="py-4 object-contain w-[80px]"
      />
      <motion.h5 className="font-extrabold text-2xl mt-2 text-textThemeColor">
        {service.title}
      </motion.h5>
      <motion.p
        initial={{ opacity: isWebView ? 0 : 1 }}
        className="text-base text-textWhiteColor mt-2"
      >
        {service.description}
      </motion.p>
    </div>
  );
};