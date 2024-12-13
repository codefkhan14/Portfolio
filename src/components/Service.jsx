import React from "react";

function Service() {
  const Services = [
    {
      title: "Web Development",
      description:
        "We'll work with you to create a website that meets your unique needs and goals.",
      icon: "https://themewagon.github.io/satner/img/services/s1.png",
    },
    {
      title: "UI/UX Design",
      description:
        "We'll craft intuitive, visually stunning interfaces that captivate your audience and drive results.",
      icon: "https://themewagon.github.io/satner/img/services/s2.png",
    },
    {
      title: "SEO",
      description:
        "Boost your online visibility and drive more traffic to your website with our SEO services.",
      icon: "https://themewagon.github.io/satner/img/services/s3.png",
    },
    {
      title: "E-commerce",
      description:
        "Take your online store to the next level with our e-commerce solutions.",
      icon: "https://themewagon.github.io/satner/img/services/s4.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center px-[150px] mt-32">
        <h1 className="font-extrabold text-textThemeColor text-4xl">Services Offer</h1>
        <p className="text-center text-textWhiteColor">
          Is give may shall likeness made yielding spirit a itself togeth
          created after sea
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {Services.map((item) => (
            <ServiceCard key={item.title} service={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col items-center border-2 shadow-md w-[350px] p-4 rounded-xl ">
      <div>
        <img src={service.icon} alt="" />
      </div>

      <h5 className="font-extrabold text-2xl mt-2 text-textThemeColor">{service.title}</h5>
      <p className="text-base text-center text-textWhiteColor">
        We'll work with you to create a website that meets your unique needs and
        goals.
      </p>
    </div>
  );
};
