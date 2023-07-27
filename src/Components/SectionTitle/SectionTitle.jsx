import React from "react";

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center md:w-3/12 mx-auto ">
      <p className="text-[#D99904] pb-4 text-xl">---{subtitle}---</p>
      <h3 className="text-3xl font-semibold uppercase border-y-4 py-4 mb-8">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
