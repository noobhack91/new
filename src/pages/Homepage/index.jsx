import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import Header from "components/Header";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto py-[18px] w-full">
        <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
          <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
          <Line className="bg-white-A700_4c h-px w-full" />
          <div className="flex flex-col gap-[52px] items-start justify-start max-w-[1618px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[699px] items-center justify-start w-auto md:w-full">
              <Img
                className="h-[100px] sm:h-auto object-cover w-[315px] md:w-full"
                src="images/img_logo1.png"
                alt="logoOne"
              />
              <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-auto md:w-full">
                <div className="flex flex-row gap-10 items-start justify-start w-auto">
                  <div className="md:h-[29px] h-[34px] relative w-[51px]">
                    <div className="absolute border-b-[3px] border-pink-500 border-solid bottom-[2%] h-[29px] inset-x-[0] mx-auto w-full"></div>
                    <Text
                      className="absolute inset-x-[0] mx-auto text-lg text-white-A700 top-[0] w-max"
                      size="txtInterRegular18"
                    >
                      Home
                    </Text>
                  </div>
                  <div className="flex flex-row gap-9 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterRegular18"
                    >
                      Blogs
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterRegular18"
                    >
                      Recently Viewed
                    </Text>
                  </div>
                </div>
                <Input
                  name="button"
                  placeholder="Popular Locations"
                  className="font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-lg text-white-A700 w-full"
                  wrapClassName="border border-solid border-white-A700 flex px-[17px] py-[15px] rounded-[5px] w-[41%] md:w-full"
                  prefix={
                    <Img
                      className="h-[30px] mr-[22px] my-auto"
                      src="images/img_options.svg"
                      alt="options"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[53px] items-start justify-start w-auto md:w-full">
              <Text
                className="text-lg text-pink-500 w-auto"
                size="txtInterBold18Pink500"
              >
                Browse By City
              </Text>
              <div className="flex md:flex-col flex-row gap-[33px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Adelaide
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Brisbane
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Canberra
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Gold Coast
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Melboume
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Perth
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Sunshine Coast
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Sydeny
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Parramatta
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Newcastle
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Geelong
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Darwin
                </Text>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Hobart
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1621px] mt-[68px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-9 items-center justify-between w-full">
              <div className="bg-white-A700 border border-gray-600 border-solid flex sm:flex-1 flex-col items-start justify-start p-3.5 rounded-[5px] sm:w-full">
                <Input
                  name="frameEightyOne"
                  placeholder="Enter a location to find local escorts"
                  className="p-0 placeholder:text-gray-600_01 text-base text-gray-600_01 text-left w-full"
                  wrapClassName="flex md:ml-[0] ml-[9px] w-[64%]"
                  prefix={
                    <Img
                      className="h-6 mr-3.5 my-auto"
                      src="images/img_location_pin.svg"
                      alt="location pin"
                    />
                  }
                ></Input>
              </div>
              <Input
                name="groupFortyTwo"
                placeholder="Suburb"
                className="p-0 placeholder:text-gray-600_01 sm:px-5 text-base text-gray-600_01 text-left w-full"
                wrapClassName="bg-white-A700 border border-gray-600 border-solid md:flex-1 pl-7 pr-[35px] py-[15px] rounded-[5px] md:w-full"
              ></Input>
              <Input
                name="frame111"
                placeholder="Select Sex"
                className="p-0 placeholder:text-gray-600_01 sm:px-5 text-base text-gray-600_01 text-left w-full"
                wrapClassName="bg-white-A700 border border-gray-600 border-solid flex md:flex-1 px-[27px] py-[15px] rounded-[5px] w-auto md:w-full"
                suffix={
                  <div className="ml-[35px] outline-pink-500 outline-[1px] outline my-[7px]">
                    <Img
                      className="my-auto"
                      src="images/img_vector_pink_500.svg"
                      alt="Vector"
                    />
                  </div>
                }
              ></Input>
            </div>
            <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between w-full">
              <div className="bg-white-A700 border border-gray-600 border-solid flex md:flex-1 flex-col items-center justify-end p-3.5 rounded-[5px] w-1/2 md:w-full">
                <RadioGroup
                  className="flex gap-[81px] items-start justify-start w-auto"
                  name="radiogrouplabelTwentythree"
                >
                  <Radio
                    value="All"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentythree"
                    label="All"
                    id="All"
                  ></Radio>
                  <Radio
                    value="Escort"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentythree"
                    label="Escort"
                    id="Escort"
                  ></Radio>
                  <Radio
                    value="BDSM"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentythree"
                    label="BDSM"
                    id="BDSM"
                  ></Radio>
                  <Radio
                    value="BodyRub"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentythree"
                    label="Body Rub"
                    id="BodyRub"
                  ></Radio>
                  <Radio
                    value="StripsDance"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentythree"
                    label="StripsDance"
                    id="StripsDance"
                  ></Radio>
                </RadioGroup>
              </div>
              <div className="bg-white-A700 border border-gray-600 border-solid flex md:flex-1 flex-col items-center justify-end p-3.5 rounded-[5px] w-1/2 md:w-full">
                <RadioGroup
                  className="flex gap-[85px] items-start justify-start w-auto"
                  name="radiogrouplabelTwentyeight"
                >
                  <Radio
                    value="StripsDance"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentyeight"
                    label="StripsDance"
                    id="StripsDance2"
                  ></Radio>
                  <Radio
                    value="Independents"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentyeight"
                    label="Independents"
                    id="Independents"
                  ></Radio>
                  <Radio
                    value="Establishments"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentyeight"
                    label="Establishments"
                    id="Establishments"
                  ></Radio>
                  <Radio
                    value="Agencies"
                    className="text-base text-gray-600_01 text-left"
                    inputClassName="border border-blue_gray-400 border-solid h-[17px] mr-[5px] w-[17px]"
                    checked={false}
                    name="radiogrouplabelTwentyeight"
                    label="Agencies"
                    id="Agencies"
                  ></Radio>
                </RadioGroup>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-between w-full">
              <Button className="border border-solid border-white-A700 cursor-pointer min-w-[514px] sm:min-w-full py-4 rounded-[5px] text-base text-center text-white-A700">
                FInd Ecorts
              </Button>
              <Button className="border border-solid border-white-A700 cursor-pointer min-w-[516px] sm:min-w-full py-4 rounded-[5px] text-base text-center text-white-A700">
                Clear
              </Button>
              <Button className="bg-pink-500 cursor-pointer font-semibold min-w-[514px] sm:min-w-full py-3.5 rounded-[5px] text-center text-lg text-white-A700">
                Advanced Search
              </Button>
            </div>
          </div>
        </div>
        <div className="sm:h-[14838px] h-[5900px] md:h-[8484px] mt-[90px] md:px-5 relative w-full">
          <div className="bg-blue_gray-100_5e flex flex-col h-full items-center justify-start m-auto p-[59px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[1068px] items-center justify-start mb-[68px] w-[91%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-1 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtInterSemiBold50"
                >
                  Featured Girls
                </Text>
                <div className="md:gap-5 gap-[57px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] ml-1 md:ml-[0] mt-[72px] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat bg-white-A700 h-[455px] relative rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame9_2.png')",
                      }}
                    >
                      <Img
                        className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                        src="images/img_image3_455x362.png"
                        alt="imageThree"
                      />
                      <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtPoppinsMedium18"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-white-A700 text-xl w-auto"
                            size="txtInterRegular20"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-11 w-11"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame8.png"
                      alt="frameEight"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame7.png"
                      alt="frameSeven"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame10.png"
                      alt="frameTen"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame9.png"
                      alt="frameNine"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame8_455x362.png"
                      alt="frameEight"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame7_455x362.png"
                      alt="frameSeven"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame10_455x362.png"
                      alt="frameTen"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame9_455x362.png"
                      alt="frameNine"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame8_1.png"
                      alt="frameEight"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame7_1.png"
                      alt="frameSeven"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame10_1.png"
                      alt="frameTen"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame9_1.png"
                      alt="frameNine"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame8_2.png"
                      alt="frameEight"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame7_2.png"
                      alt="frameSeven"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame10_2.png"
                      alt="frameTen"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame63.png"
                      alt="frameSixtyThree"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame65.png"
                      alt="frameSixtyFive"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame67.png"
                      alt="frameSixtySeven"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <div className="h-[455px] relative w-full">
                    <Img
                      className="h-[455px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_frame69.png"
                      alt="frameSixtyNine"
                    />
                    <div className="absolute bottom-[3%] flex flex-row gap-[123px] inset-x-[0] items-center justify-between mx-auto w-auto">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsMedium18"
                        >
                          United kingdom
                        </Text>
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterRegular20"
                        >
                          Lucy
                        </Text>
                      </div>
                      <Img
                        className="h-11 w-11"
                        src="images/img_heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                </div>
                <Button className="bg-pink-500 cursor-pointer font-semibold h-[60px] md:ml-[0] ml-[698px] mt-[99px] py-[19px] rounded-[5px] text-center text-lg text-white-A700 w-[232px]">
                  Load More Listings
                </Button>
                <div className="flex flex-col gap-[50px] items-center justify-start mt-[107px] w-auto md:w-full">
                  <Text
                    className="max-w-[1572px] md:max-w-full sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                    size="txtInterSemiBold50"
                  >
                    <>
                      Find Your 100% Real and Top Modal Escort in Your Area at
                      Velvet Klub | Real and Verified Escort. Best
                      Australia&#39;s Escort Services and 100% Real.
                    </>
                  </Text>
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-auto"
                    size="txtInterMedium30"
                  >
                    where do you go when you need the best independent working
                    escorts in the city?
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[38px] items-start justify-start w-auto md:w-full">
                    <div className="border border-gray-900_02 border-solid flex flex-col gap-[17px] h-[363px] md:h-auto items-center justify-center sm:px-5 px-8 py-[25px] rounded-md w-[516px] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-full"
                        size="txtInterMedium24"
                      >
                        <>You don&#39;t. You come here!</>
                      </Text>
                      <Text
                        className="max-w-[452px] md:max-w-full text-center text-lg text-white-A700_7f"
                        size="txtInterRegular18WhiteA7007f"
                      >
                        <>
                          We&#39;ve got the hottest, sexiest, most beautiful
                          escorts in town. The kind of girls who are so hot they
                          make your eyes water just thinking about them. And not
                          only do they work well, but they&#39;re also
                          independent. You can enjoy our services without having
                          to worry about running into an old friend or family
                          member—they&#39;ll never know where you were last
                          night. All they&#39;ll know is that they had a great
                          time with us at Velvet Klub.
                        </>
                      </Text>
                    </div>
                    <div className="border border-gray-900_02 border-solid flex flex-col gap-[17px] h-[499px] md:h-auto items-center justify-center sm:px-5 px-8 py-[25px] rounded-md w-[516px] sm:w-full">
                      <Text
                        className="max-w-[452px] md:max-w-full text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtInterMedium24"
                      >
                        <>
                          Are you looking for the best independent working
                          escorts? You&#39;ve come to the right place!
                        </>
                      </Text>
                      <Text
                        className="max-w-[452px] md:max-w-full text-center text-lg text-white-A700_7f"
                        size="txtInterRegular18WhiteA7007f"
                      >
                        <>
                          If you&#39;re looking for an unforgettable evening
                          with an escort who knows just what you want and is
                          eager to give it to you, then you need to look no
                          further than VelvetKlub. Our escorts are gorgeous,
                          friendly, and natural. They come from all walks of
                          life, from students to single mothers to people like
                          you and me. They aren&#39;t expensive either. You can
                          get a 2-hour date with us for the same price as a
                          movie ticket! If that isn&#39;t incredible value for
                          money, we don&#39;t know what is.
                        </>
                      </Text>
                      <Text
                        className="max-w-[452px] md:max-w-full text-center text-lg text-white-A700_7f"
                        size="txtInterRegular18WhiteA7007f"
                      >
                        <>
                          The city has so many independent working escorts that
                          it&#39;s hard to keep track. We&#39;ve rounded up the
                          best of the best, so you can find a real pro
                          who&#39;ll deliver the goods at an unbeatable price.
                        </>
                      </Text>
                    </div>
                    <div className="border border-gray-900_02 border-solid flex flex-col gap-[17px] h-[429px] md:h-auto items-center justify-center sm:px-5 px-8 py-[25px] rounded-md w-[516px] sm:w-full">
                      <Text
                        className="max-w-[452px] md:max-w-full text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtInterMedium24"
                      >
                        Looking for a new Escorting service job?
                      </Text>
                      <Text
                        className="max-w-[452px] md:max-w-full text-center text-lg text-white-A700_7f"
                        size="txtInterRegular18WhiteA7007f"
                      >
                        Providers we are looking for you to be our next
                        independent working escort. We are a professional
                        company with years of experience in the industry and we
                        are looking for new faces to join our team. You will be
                        working independently and will have the freedom to work
                        where and when you want. If this sounds like something
                        that interests you, please contact us today! Our mission
                        is to help you find the best independent working
                        escorts. We have a wide range of clients and we have
                        been offering them the best services for many years. Do
                        not hesitate and contact us at any time, our team will
                        answer all your questions.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[50px] items-center justify-center w-auto md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-auto"
                  size="txtInterSemiBold50"
                >
                  Blogs
                </Text>
                <List
                  className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-[375px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[513px] md:w-full"
                      src="images/img_httpswwwpex.png"
                      alt="httpswwwpex"
                    />
                    <div className="flex flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[40.00px] max-w-[513px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-1.00px]"
                        size="txtSenBold28"
                      >
                        How to choose the right Escort in Australia for a
                        memorable experience
                      </Text>
                      <Text
                        className="leading-[28.00px] max-w-[513px] md:max-w-full text-base text-white-A700_99"
                        size="txtInterRegular16WhiteA70099"
                      >
                        Lorem ipsum dolor sit amet consectetur. Vitae pharetra
                        faucibus morbi mattis. Tristique viverra vehicula vel
                        tristique posuere diam mauris. Ipsum condimentum ut
                        aliquam varius molestie. Lobortis.
                      </Text>
                      <div className="flex flex-row font-inter gap-[11px] items-center justify-start w-auto">
                        <Text
                          className="text-pink-500_99 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          Read More
                        </Text>
                        <Img
                          className="h-0.5 w-[30px]"
                          src="images/img_arrow1.svg"
                          alt="arrowOne"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-[375px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[514px] md:w-full"
                      src="images/img_httpswwwpex_375x514.png"
                      alt="httpswwwpex"
                    />
                    <div className="flex flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[40.00px] max-w-[514px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-1.00px]"
                        size="txtSenBold28"
                      >
                        Unveiling the luxury and Elegance of Brisbane Escorts at
                        Velvet Klub
                      </Text>
                      <Text
                        className="leading-[28.00px] max-w-[513px] md:max-w-full text-base text-white-A700_99"
                        size="txtInterRegular16WhiteA70099"
                      >
                        Lorem ipsum dolor sit amet consectetur. Vitae pharetra
                        faucibus morbi mattis. Tristique viverra vehicula vel
                        tristique posuere diam mauris. Ipsum condimentum ut
                        aliquam varius molestie. Lobortis.
                      </Text>
                      <div className="flex flex-row font-inter gap-[11px] items-center justify-start w-auto">
                        <Text
                          className="text-pink-500_99 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          Read More
                        </Text>
                        <Img
                          className="h-0.5 w-[30px]"
                          src="images/img_arrow1.svg"
                          alt="arrowOne"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <Img
                      className="h-[375px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[513px] md:w-full"
                      src="images/img_httpswwwpex_375x513.png"
                      alt="httpswwwpex"
                    />
                    <div className="flex flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[40.00px] max-w-[513px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-1.00px]"
                        size="txtSenBold28"
                      >
                        7 Amazing Health Benefits of having More Sex
                      </Text>
                      <Text
                        className="leading-[28.00px] max-w-[513px] md:max-w-full text-base text-white-A700_99"
                        size="txtInterRegular16WhiteA70099"
                      >
                        Lorem ipsum dolor sit amet consectetur. Vitae pharetra
                        faucibus morbi mattis. Tristique viverra vehicula vel
                        tristique posuere diam mauris. Ipsum condimentum ut
                        aliquam varius molestie. Lobortis.
                      </Text>
                      <div className="flex flex-row font-inter gap-[11px] items-center justify-start w-auto">
                        <Text
                          className="text-pink-500_99 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          Read More
                        </Text>
                        <Img
                          className="h-0.5 w-[30px]"
                          src="images/img_arrow1.svg"
                          alt="arrowOne"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[17%] inset-x-[0] mx-auto overflow-auto overflow-x-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start w-auto">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-auto"
                size="txtInterSemiBold50"
              >
                Your recently Viewed
              </Text>
              <div className="flex md:flex-col flex-row gap-[46px] items-start justify-start max-w-[3625px] w-full">
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle18.png"
                  alt="rectangleEighteen"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle24.png"
                  alt="rectangleTwentyFour"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle25.png"
                  alt="rectangleTwentyFive"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle26.png"
                  alt="rectangleTwentySix"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle19.png"
                  alt="rectangleNineteen"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle20.png"
                  alt="rectangleTwenty"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle21.png"
                  alt="rectangleTwentyOne"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[361px] md:w-full"
                  src="images/img_rectangle22.png"
                  alt="rectangleTwentyTwo"
                />
                <Img
                  className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                  src="images/img_rectangle23.png"
                  alt="rectangleTwentyThree"
                />
              </div>
              <Button className="bg-pink-500 cursor-pointer font-semibold h-[60px] py-[19px] rounded-[5px] text-center text-lg text-white-A700 w-[306px]">
                View Your Browsing History
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1625px] mb-[21px] mt-[91px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[119px] items-start justify-between w-auto md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[119px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[47%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterBold20"
                >
                  About Classifieds
                </Text>
                <Text
                  className="text-lg text-pink-500 w-auto"
                  size="txtInterRegular18Pink500"
                >
                  Home
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  Search
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  About Us
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  Contact Us
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterBold20"
                >
                  Help & Contact
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  News
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  Favorites
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  Terms of Use
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  Privacy Policy
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterBold20"
                >
                  More Helpful Links
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  FAQs
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  Testimonials
                </Text>
                <Text
                  className="text-lg text-white-A700_7f w-auto"
                  size="txtInterRegular18WhiteA7007f"
                >
                  Recently Viewed Listing{" "}
                </Text>
              </div>
            </List>
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterBold20"
              >
                Mobile Apps
              </Text>
              <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                <Img
                  className="h-[61px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-[207px] sm:w-full"
                  src="images/img_pngegg31.png"
                  alt="pngeggThirtyOne"
                />
                <Img
                  className="h-[61px] md:h-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-[207px] sm:w-full"
                  src="images/img_pngegg32.png"
                  alt="pngeggThirtyTwo"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-lg text-white-A700_7f"
                size="txtInterRegular18WhiteA7007f"
              >
                <>
                  Subscribe For our Newsletters and stay updated <br />
                  About the latest news and Special Offers.
                </>
              </Text>
              <div className="bg-white-A700_21 border border-solid border-white-A700 flex flex-row items-center justify-between sm:pl-5 pl-8 rounded-[5px] w-[93%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtInterRegular18"
                >
                  Your Email
                </Text>
                <Text
                  className="bg-pink-500 border border-pink-500 border-solid justify-center sm:pl-5 pl-8 pr-[18px] py-[18px] rounded-br-[5px] rounded-tr-[5px] text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  Your Email
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-white-A700_4f h-px mt-[52px] w-full" />
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[1092px] items-center justify-between mt-[46px] w-auto md:w-full">
            <Text
              className="text-lg text-white-A700_7f w-auto"
              size="txtInterMedium18"
            >
              © 2023 velbet klub. all rights reserved.
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <Button className="border border-pink-500 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                  <Img
                    className="h-5"
                    src="images/img_ggfacebook.svg"
                    alt="ggfacebook"
                  />
                </Button>
                <Button className="border border-pink-500 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                  <Img
                    className="h-5"
                    src="images/img_riinstagramfill.svg"
                    alt="riinstagramfill"
                  />
                </Button>
                <Button className="border border-pink-500 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                  <Img src="images/img_twitter.svg" alt="twitter" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
