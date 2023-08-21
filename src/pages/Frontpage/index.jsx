import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const FrontpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-inter h-[1080px] mx-auto pb-1 pl-1 relative w-full">
        <Img
          className="absolute h-[1076px] inset-y-[0] my-auto object-cover right-[0] w-[55%]"
          src="images/img_image2.png"
          alt="imageTwo"
        />
        <Img
          className="absolute h-[100px] left-[13%] object-cover top-[7%] w-[17%]"
          src="images/img_logo1.png"
          alt="logoOne"
        />
        <div className="absolute bottom-[20%] flex flex-col md:gap-10 gap-[120px] items-start justify-start left-[13%] md:px-5 w-auto">
          <div className="flex flex-col gap-[47px] items-start justify-start w-auto md:w-full">
            <Text
              className="md:text-5xl text-6xl text-white-A700 w-auto"
              size="txtInterSemiBold60"
            >
              Hot Content website
            </Text>
            <div className="flex flex-row gap-7 items-start justify-start w-auto">
              <Button
                className="common-pointer bg-pink-500 cursor-pointer font-semibold h-[60px] py-[19px] rounded-[30px] text-center text-lg text-white-A700 w-[149px]"
                onClick={() => navigate("/homepage")}
              >
                Enter
              </Button>
              <Button className="border border-pink-500 border-solid cursor-pointer font-semibold h-[60px] py-[19px] rounded-[30px] text-center text-lg text-pink-500 w-[149px]">
                Exit
              </Button>
            </div>
            <Text
              className="leading-[20.00px] max-w-[900px] md:max-w-full text-lg text-white-A700"
              size="txtInterRegular18"
            >
              Lorem ipsum dolor sit amet consectetur. Vel non nibh blandit
              tortor nibh nam luctus. Luctus ut risus gravida purus.
              Sollicitudin egestas iaculis risus non gravida egestas. Morbi et
              dui suscipit ultricies id risus libero. Blandit volutpat dignissim
              et at venenatis.Viverra at mauris egestas elementum. Amet euismod
              arcu adipiscing tempor sit at. Etiam tortor at scelerisque risus
              habitant nunc eget lorem risus. Nisl lectus purus gravida nulla.
              Purus leo auctor sollicitudin euismod mattis sodales felis orci
              accumsan. Sed ultrices eu ut nisl. Ullamcorper vitae mauris eget
              duis ipsum amet vitae. Netus in gravida quis quis in viverra augue
              tempus. Viverra vulputate.
            </Text>
          </div>
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtInterRegular18"
          >
            © 2023 velbet klub. all rights reserved.
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrontpagePage;
