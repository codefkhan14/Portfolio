import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      id: 1,
      que: "How can I contact you?",
      ans: "You can reach me through the contact form on this website or via email at work.furkan14@gmail.com",
    },
    {
      id: 2,
      que: "Can I hire you for a project?",
      ans: "Yes, I'm available for freelance work and collaborations. Please get in touch with me to discuss your project requirements.",
    }, 
    {
      id: 3,
      que: "Are you available for remote work?",
      ans: "Yes, I can work remotely and collaborate with clients from anywhere in the world.",
    },
  ];

  return (
    <div className="bg-backgroundColor py-32 px-40">
      <h1 className="font-extrabold text-textThemeColor text-center text-4xl">
        FAQ
      </h1>
      <p className="text-textWhiteColor text-center">
        Explore my portfolio, learn about my skills, and get answers to
        frequently asked questions about my work, collaborations, and more
      </p>

      <div className="mt-20 space-y-4">
        {faq.map((item, index) => (
          <div
            key={item.id}
            className="border-[1px] border-textWhiteColor rounded-xl"
          >
            <h2>
              <button
                className={`w-full text-left px-4 py-2 text-textWhiteColor font-semibold ${
                  activeIndex === index ? "rounded-t-lg" : "rounded-lg"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.que}
              </button>
            </h2>
            {activeIndex === index && (
              <div className="px-4 py-2 text-textWhiteColor"> • {item.ans}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
