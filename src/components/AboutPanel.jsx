import React from "react";
function AboutPanel({ title }) {
  return (
    <div className="bg-backgroundColor py-32">
      <div className="flex items-center justify-center rounded-xl text-3xl bg-custom-gradient w-[600px] h-[300px] m-auto">
        <h2 className="text-center font-extrabold text-textWhiteColor text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default AboutPanel;
