import React from "react";

import { Img, Text } from "components";

const BannerOnePage = () => {
  return (
    <>
      <div className="bg-gray-900_01 font-inter h-[800px] mx-auto relative w-full">
        <div className="absolute h-[800px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex md:h-[183px] h-[800px] justify-end m-auto p-[190px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group82.png')" }}
          >
            <div className="bg-white-A700 h-[7px] mb-44 ml-[7px] mt-auto w-[21%]"></div>
            <Text
              className="absolute h-max inset-y-[0] left-[24%] my-auto md:text-5xl text-[104px] text-pink-500"
              size="txtInterBlack104"
            >
              Free for
            </Text>
          </div>
          <Img
            className="absolute h-[800px] inset-y-[0] my-auto object-cover right-[0] w-1/2"
            src="images/img_image3.png"
            alt="imageThree"
          />
        </div>
        <div className="absolute bg-pink-500 bottom-[46%] h-[7px] left-[33%] md:px-5 w-[26%]"></div>
        <Text
          className="absolute h-max inset-y-[0] left-[32%] my-auto md:text-5xl text-[104px] text-white-A700"
          size="txtInterBlack104WhiteA700"
        >
          3 months
        </Text>
      </div>
    </>
  );
};

export default BannerOnePage;
