import React from "react";

import { Img, Line, Text } from "components";

const BannerPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 font-inter h-[800px] mx-auto md:pl-10 sm:pl-5 pl-[166px] relative w-full">
        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[92%]">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-start justify-start w-full">
            <Img
              className="h-[169px] md:mt-0 mt-[369px]"
              src="images/img_vector.svg"
              alt="vector"
            />
            <Text
              className="md:mt-0 mt-[460px] md:text-5xl text-[94px] text-white-A700"
              size="txtInterBlack94"
            >
              3 months
            </Text>
            <div className="h-[800px] relative w-[62%] md:w-full">
              <Img
                className="h-[800px] m-auto object-cover w-full"
                src="images/img_image3_800x1076.png"
                alt="imageThree"
              />
              <div className="absolute flex flex-col gap-[17px] h-max inset-y-[0] items-end justify-start left-[9%] my-auto w-[16%]">
                <div className="flex flex-col gap-3.5 items-center justify-start w-[53%] md:w-full">
                  <Line className="bg-pink-500 h-0.5 w-full" />
                  <Line className="bg-pink-500 h-0.5 w-full" />
                  <Line className="bg-pink-500 h-0.5 w-full" />
                  <Line className="bg-pink-500 h-0.5 w-full" />
                  <Line className="bg-pink-500 h-0.5 w-full" />
                </div>
                <Img
                  className="h-[169px] mr-0.5"
                  src="images/img_vector.svg"
                  alt="vector_Six"
                />
              </div>
            </div>
          </div>
        </div>
        <Line className="absolute bg-pink-500 h-0.5 left-[21%] top-[36%] w-[5%]" />
        <Line className="absolute bg-pink-500 h-0.5 left-[21%] top-[38%] w-[5%]" />
        <Line className="absolute bg-pink-500 h-0.5 left-[21%] top-[40%] w-[5%]" />
        <Line className="absolute bg-pink-500 h-0.5 left-[21%] top-[42%] w-[5%]" />
        <Line className="absolute bg-pink-500 h-0.5 left-[21%] top-[44%] w-[5%]" />
        <div className="absolute bg-pink-500 bottom-[41%] h-[9px] left-[11%] md:px-5 w-2/5"></div>
        <div className="absolute bg-pink-500 flex flex-col items-center justify-end left-[14%] p-[21px] md:px-5 top-[35%]">
          <Text
            className="mt-[21px] md:text-5xl text-[86px] text-white-A700"
            size="txtInterBold86"
          >
            Free listing for
          </Text>
        </div>
      </div>
    </>
  );
};

export default BannerPage;
