import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-start w-auto sm:w-full">
          <div className="flex flex-row gap-[35px] items-start justify-start w-auto">
            <div className="flex flex-row gap-[5px] items-end justify-start w-auto">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                EN
              </Text>
              <Img
                className="h-[5px] w-[11px]"
                src="images/img_vector_pink_500.svg"
                alt="vector"
              />
            </div>
            <div className="flex flex-row gap-[5px] items-end justify-start w-auto">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                $
              </Text>
              <Img
                className="h-[5px] w-[11px]"
                src="images/img_vector_pink_500.svg"
                alt="vector_One"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[42px] items-center justify-center w-auto">
            <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_location.svg"
                alt="location"
              />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                Popular Location
              </Text>
            </div>
            <div className="flex flex-row gap-[5px] items-center justify-center w-auto">
              <Img
                className="h-3 w-[17px]"
                src="images/img_mail.svg"
                alt="mail"
              />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                example@gmail.com
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[33px] items-start justify-start w-auto">
          <div className="border border-solid border-white-A700 flex flex-col h-[60px] md:h-auto items-center justify-center px-4 py-5 rounded-[5px] w-[181px]">
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <div className="h-[34px] relative w-[27%]">
                <div className="absolute bg-white-A700 h-[26px] inset-[0] justify-center m-auto rounded-[50%] w-[26px]"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-max"
                  size="txtInterRegular28"
                >
                  +
                </Text>
              </div>
              <Text
                className="text-lg text-white-A700 w-auto"
                size="txtInterSemiBold18WhiteA700"
              >
                Join Us
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Button
              className="bg-pink-500 cursor-pointer flex items-center justify-center min-w-[149px] px-[30px] py-[17px] rounded-[5px]"
              leftIcon={
                <Img
                  className="h-6 mb-px mr-[5px]"
                  src="images/img_profile.svg"
                  alt="profile"
                />
              }
            >
              <div className="font-inter font-semibold sm:px-5 text-left text-lg text-white-A700">
                Sign in
              </div>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
