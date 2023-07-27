import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="flex space-x-3">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[100px] h-24 md:w-[120px] md:h-[120px]"
        src={item?.image}
      />
      <div>
        <p className="uppercase text-xl">{item?.name}--------</p>
        <p className="text-[#737373]">{item?.recipe}</p>
      </div>
      <p className="text-[#BB8506]">${item?.price}</p>
    </div>
  );
};

export default MenuItem;
