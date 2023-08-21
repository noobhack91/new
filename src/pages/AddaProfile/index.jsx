import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

const anyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const anyOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const anyOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const anyOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const anyOptionsList4 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const cmOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const kgOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList4 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList5 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList6 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList7 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList8 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList9 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList10 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList11 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList12 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nAOptionsList13 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const individualEOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddaProfilePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mb-[30px] w-full">
          <Line className="bg-white-A700_4c h-px w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[699px] items-center justify-start max-w-[1618px] mt-[31px] mx-auto md:px-5 w-full">
            <Img
              className="md:flex-1 h-[100px] sm:h-auto object-cover w-[315px] md:w-full"
              src="images/img_logo1.png"
              alt="logoOne"
            />
            <div className="flex md:flex-1 md:flex-col flex-row gap-11 items-center justify-start w-auto md:w-full">
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
          <div className="bg-blue_gray-100_5e flex flex-col items-center justify-start mt-8 p-[73px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1622px] mb-[25px] mx-auto w-full">
              <div className="flex flex-col gap-7 items-start justify-start ml-0.5 md:ml-[0] w-auto sm:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-auto"
                  size="txtInterSemiBold50"
                >
                  Add a Profile
                </Text>
                <div className="flex flex-row gap-[232px] items-start justify-between w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-white-A700_7a w-auto"
                      size="txtInterRegular16WhiteA7007a"
                    >
                      Category
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-pink-500 w-auto"
                      size="txtInterRegular16Pink500"
                    >
                      Girls profiles
                    </Text>
                  </div>
                </div>
              </div>
              <Input
                name="button_One"
                placeholder="ABOUT ME"
                className="font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-lg text-white-A700 w-full"
                wrapClassName="bg-blue_gray-900 flex ml-0.5 md:ml-[0] mt-12 px-[15px] py-[18px] rounded-[5px] w-[11%]"
                prefix={
                  <div className="mt-[5px] mb-1 mr-6 sm:w-full sm:mx-0 w-[2%] outline-pink-500 outline-[1.5px] outline">
                    <Img
                      className="my-auto"
                      src="images/img_arrowup.svg"
                      alt="arrow_up"
                    />
                  </div>
                }
              ></Input>
              <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[5px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[51px] w-3/5 md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Name*
                </Text>
                <div className="bg-gray-900 h-[70px] rounded-[5px] w-3/4"></div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Ethnicity*
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-5 pt-[27px] sm:px-5 px-[30px] rounded-[5px] text-left text-lg text-pink-500 w-[69%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] mr-[0] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupSeventyNine"
                  options={anyOptionsList}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Nationality*
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-[21px] pt-[26px] sm:px-5 px-[30px] rounded-[5px] text-left text-lg text-pink-500 w-[69%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame263"
                  options={anyOptionsList1}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[33px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Age*
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-[21px] pt-[26px] sm:px-5 px-[30px] rounded-[5px] text-left text-lg text-pink-500 w-[69%] sm:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame263_One"
                  options={anyOptionsList2}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Sexulity*
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-[21px] pt-[26px] sm:px-5 px-[30px] rounded-[5px] text-left text-lg text-pink-500 w-[69%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame263_Two"
                  options={anyOptionsList3}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Eye color*
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-[21px] pt-[26px] sm:px-5 px-[30px] rounded-[5px] text-left text-lg text-pink-500 w-[69%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame263_Three"
                  options={anyOptionsList4}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[27px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Height*
                </Text>
                <div className="bg-gray-900 h-[70px] md:ml-[0] ml-[163px] md:mt-0 mt-1.5 rounded-[5px] w-[43%]"></div>
                <SelectBox
                  className="bg-gray-900 mb-1.5 md:ml-[0] ml-[39px] pl-[35px] pr-[29px] sm:px-5 py-[23px] rounded-[5px] text-left text-lg text-pink-500 w-[21%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame264"
                  options={cmOptionsList}
                  isSearchable={false}
                  placeholder="Cm"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[21px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Weight*
                </Text>
                <div className="bg-gray-900 h-[70px] ml-40 md:ml-[0] md:mt-0 mt-3 rounded-[5px] w-[44%]"></div>
                <SelectBox
                  className="bg-gray-900 mb-3 md:ml-[0] ml-[38px] pb-[21px] pl-[35px] pr-[25px] pt-[26px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[21%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame265"
                  options={kgOptionsList}
                  isSearchable={false}
                  placeholder="Kg"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[75px] items-center justify-start mt-[33px] w-[36%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Bust-Waist-Hip*
                </Text>
                <div className="bg-gray-900 h-[70px] rounded-[5px] w-[59%]"></div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[101px] w-[59%] md:w-full">
                <Text
                  className="md:mt-0 mt-2 text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Language
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[107px] items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                    <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                      <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        Bulgarian
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                      <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        French
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                      <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        Japanese
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                      <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        Spanish
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[107px] grid sm:grid-cols-1 grid-cols-2 w-[61%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                      <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                        <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterRegular22WhiteA700"
                        >
                          Chinese
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                        <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterRegular22WhiteA700"
                        >
                          Germen
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                        <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterRegular22WhiteA700"
                        >
                          Portguese
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                      <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                        <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterRegular22WhiteA700"
                        >
                          English
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                        <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterRegular22WhiteA700"
                        >
                          Italian
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[26px] items-center justify-start w-auto">
                        <div className="bg-gray-900 border border-gray-800_01 border-solid h-10 rounded w-10"></div>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterRegular22WhiteA700"
                        >
                          Russian
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[244px] mt-9 text-pink-500 text-xl"
                size="txtInterRegular20Pink500"
              >
                Cheak all / uncheak all
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-[69px] w-3/5 md:w-full">
                <Text
                  className="md:mt-0 mt-[13px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Service
                </Text>
                <div className="bg-gray-900 h-[209px] rounded-[5px] w-[76%]"></div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-9 w-3/5 md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  About me*
                </Text>
                <div className="bg-gray-900 h-[209px] md:mt-0 mt-[5px] rounded-[5px] w-[76%]"></div>
              </div>
              <Input
                name="button_Two"
                placeholder="Escort Rates"
                className="font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto sm:px-5 text-left text-lg text-white-A700 w-full"
                wrapClassName="bg-blue_gray-900 flex ml-0.5 md:ml-[0] mt-[99px] px-7 py-[18px] rounded-[5px] w-[14%]"
                prefix={
                  <div className="mt-1 mb-[5px] mr-6 sm:w-full sm:mx-0 w-[2%] outline-pink-500 outline-[1.5px] outline">
                    <Img
                      className="my-auto"
                      src="images/img_arrowup.svg"
                      alt="arrow_up"
                    />
                  </div>
                }
              ></Input>
              <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[5px] w-full" />
              <Text
                className="md:ml-[0] ml-[244px] mt-[46px] text-pink-500 text-xl"
                size="txtInterRegular20Pink500"
              >
                Add a new escort rate{" "}
              </Text>
              <Input
                name="button_Three"
                placeholder="Availability"
                className="font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto sm:px-5 text-left text-lg text-white-A700 w-full"
                wrapClassName="bg-blue_gray-900 flex ml-0.5 md:ml-[0] mt-[47px] pb-[17px] pt-5 px-[35px] rounded-[5px] w-[14%]"
                prefix={
                  <div className="mt-[3px] mb-1.5 mr-6 sm:w-full sm:mx-0 w-[2%] outline-pink-500 outline-[1.5px] outline">
                    <Img
                      className="my-auto"
                      src="images/img_arrowup.svg"
                      alt="arrow_up"
                    />
                  </div>
                }
              ></Input>
              <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[5px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-11 w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Monday
                </Text>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-auto sm:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame274"
                    options={nAOptionsList}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame276"
                    options={nAOptionsList1}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Tuesday
                </Text>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-auto sm:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame274_One"
                    options={nAOptionsList2}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame276_One"
                    options={nAOptionsList3}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Wednesday
                </Text>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-auto sm:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame274_Two"
                    options={nAOptionsList4}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame276_Two"
                    options={nAOptionsList5}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Thrusday
                </Text>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-auto sm:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame274_Three"
                    options={nAOptionsList6}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame276_Three"
                    options={nAOptionsList7}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[18px] w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Friday
                </Text>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-auto sm:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame274_Four"
                    options={nAOptionsList8}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame276_Four"
                    options={nAOptionsList9}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Saturday
                </Text>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-auto sm:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame274_Five"
                    options={nAOptionsList10}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame276_Five"
                    options={nAOptionsList11}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-[49%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Sunday
                </Text>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start w-auto sm:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame274_Six"
                    options={nAOptionsList12}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[27px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[47%] sm:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame276_Six"
                    options={nAOptionsList13}
                    isSearchable={false}
                    placeholder="N/A"
                  />
                </div>
              </div>
              <div className="bg-blue_gray-900 flex flex-col h-[60px] md:h-auto items-center justify-center ml-0.5 md:ml-[0] mt-[67px] px-4 py-5 rounded-[5px] w-[158px]">
                <div className="flex flex-row gap-6 items-center justify-center w-auto">
                  <Img
                    className="h-3 w-[25px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterSemiBold18WhiteA700"
                    >
                      Tours
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[5px] w-full" />
              <Text
                className="md:ml-[0] ml-[244px] mt-[46px] text-pink-500 text-xl"
                size="txtInterRegular20Pink500"
              >
                Add a new tour
              </Text>
              <Input
                name="button_Four"
                placeholder="Contact details"
                className="font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-lg text-white-A700 w-full"
                wrapClassName="bg-blue_gray-900 flex ml-0.5 md:ml-[0] mt-[67px] px-5 py-[18px] rounded-[5px] w-[14%]"
                prefix={
                  <div className="mt-[5px] mb-1 mr-6 sm:w-full sm:mx-0 w-[2%] outline-pink-500 outline-[1.5px] outline">
                    <Img
                      className="my-auto"
                      src="images/img_arrowup.svg"
                      alt="arrow_up"
                    />
                  </div>
                }
              ></Input>
              <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[5px] w-full" />
              <div className="h-[523px] md:h-[584px] md:ml-[0] ml-[223px] mt-[61px] relative w-[87%] md:w-full">
                <div className="h-[523px] m-auto w-full">
                  <Img
                    className="h-[523px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle78.png"
                    alt="rectangleSeventyEight"
                  />
                  <Button className="absolute bg-white-A700 flex h-11 items-center justify-center p-2.5 right-[1%] rounded-[10px] top-[3%] w-11">
                    <Img
                      className="h-[23px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
                <div className="absolute h-[71px] right-[1%] top-[11%] w-[4%]">
                  <div className="absolute bg-white-A700 h-11 inset-x-[0] mx-auto rounded-[10px] top-[15%] w-11"></div>
                  <Text
                    className="absolute h-full inset-y-[0] left-[23%] my-auto sm:text-[44px] md:text-[50px] text-[58px] text-black-900"
                    size="txtInterLight58"
                  >
                    -
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start ml-0.5 md:ml-[0] mt-[121px] w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Phone number
                  </Text>
                  <Img
                    className="h-[70px] w-[433px]"
                    src="images/img_frame278.svg"
                    alt="frame278"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[126px] items-center justify-between w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Country*
                  </Text>
                  <SelectBox
                    className="bg-gray-900 sm:px-5 px-[29px] py-[23px] rounded-[5px] text-left text-lg text-pink-500 w-[71%] md:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame279"
                    options={selectOptionsList}
                    isSearchable={false}
                    placeholder="-select-"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    State/Region
                  </Text>
                  <SelectBox
                    className="bg-gray-900 sm:px-5 px-[29px] py-[23px] rounded-[5px] text-left text-lg text-white-A700_66 w-[71%] md:w-full"
                    placeholderClassName="text-white-A700_66"
                    indicator={
                      <Img
                        className="h-[7px] outline-white-A700_66 outline-[1px] outline w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame280"
                    options={selectOptionsList1}
                    isSearchable={false}
                    placeholder="-select-"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[179px] items-center justify-between w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    City
                  </Text>
                  <SelectBox
                    className="bg-gray-900 sm:px-5 px-[29px] py-[23px] rounded-[5px] text-left text-lg text-white-A700_66 w-[71%] sm:w-full"
                    placeholderClassName="text-white-A700_66"
                    indicator={
                      <Img
                        className="h-[7px] outline-white-A700_66 outline-[1px] outline w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame281"
                    options={selectOptionsList2}
                    isSearchable={false}
                    placeholder="-select-"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[136px] items-center justify-between w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Address
                  </Text>
                  <div className="bg-gray-900 h-[70px] rounded-[5px] w-[79%]"></div>
                </div>
                <div className="flex flex-row gap-[130px] items-center justify-between w-auto sm:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Zip code
                  </Text>
                  <div className="bg-gray-900 h-[70px] rounded-[5px] w-1/2"></div>
                </div>
              </div>
              <div className="bg-blue_gray-900 flex flex-col h-[60px] md:h-auto items-center justify-center ml-0.5 md:ml-[0] mt-20 px-4 py-5 rounded-[5px] w-[223px]">
                <div className="flex flex-row gap-6 items-center justify-center w-auto">
                  <Img
                    className="h-3 w-[25px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup_One"
                  />
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterSemiBold18WhiteA700"
                    >
                      Booking
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[5px] w-full" />
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start md:ml-[0] ml-[3px] mt-[61px] w-auto sm:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtInterRegular22WhiteA700"
                >
                  Avialable for Booking{" "}
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                  <div className="bg-gray-900 h-[37px] rounded-[18px] w-[37px]"></div>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700_66 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA70066"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row gap-[19px] items-center justify-start w-auto">
                  <div className="bg-gray-900 flex flex-col h-[37px] items-center justify-start p-[9px] rounded-[18px] w-[37px]">
                    <div className="bg-white-A700_66 h-[19px] rounded-[9px] w-[19px]"></div>
                  </div>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700_66 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA70066"
                  >
                    No
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[60px] w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Add media*
                </Text>
                <div className="flex md:flex-1 flex-col gap-[31px] items-center justify-start md:mt-0 mt-[5px] w-auto md:w-full">
                  <div className="bg-blue_gray-900 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[308px] py-[51px] rounded-[12px] w-auto md:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                      size="txtInterSemiBold40"
                    >
                      <span className="text-white-A700 font-inter text-left font-semibold">
                        Drag & Drop Files Here or{" "}
                      </span>
                      <span className="text-pink-500 font-inter text-left font-semibold">
                        Browse Media{" "}
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    <span className="text-white-A700 font-inter text-left font-normal">
                      10 Photos / 2 Videos or{" "}
                    </span>
                    <span className="text-pink-500 font-inter text-left font-normal">
                      Add a youtube link
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-start justify-start md:ml-[0] ml-[5px] mt-[67px] w-[77%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterRegular22WhiteA700"
                >
                  Authorization
                </Text>
                <div className="bg-blue_gray-900 flex flex-col items-center justify-start md:mt-0 mt-[3px] p-11 md:px-10 sm:px-5 rounded-[12px] w-[82%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-14 items-center justify-center mb-1 w-auto md:w-full">
                    <div className="flex flex-col gap-[39px] items-start justify-start w-auto">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                        size="txtInterBold30"
                      >
                        Sign in{" "}
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                        <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700_66 md:text-xl w-auto"
                            size="txtInterRegular22WhiteA70066"
                          >
                            User name
                          </Text>
                          <Input
                            name="rectangleSeventyNine_One"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="bg-gray-900 flex h-[70px] rounded-[5px] w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700_66 md:text-xl w-auto"
                            size="txtInterRegular22WhiteA70066"
                          >
                            Password
                          </Text>
                          <Input
                            name="rectangleSeventyNine_Two"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="bg-gray-900 flex h-[70px] rounded-[5px] w-full"
                          ></Input>
                        </div>
                      </div>
                      <Text
                        className="text-[22px] sm:text-lg text-pink-500 md:text-xl w-auto"
                        size="txtInterRegular22"
                      >
                        Forget your password
                      </Text>
                    </div>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                      size="txtInterBold22"
                    >
                      OR
                    </Text>
                    <div className="flex flex-col gap-[39px] items-start justify-start w-auto">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                        size="txtInterBold30"
                      >
                        Sign up
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                        <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700_66 md:text-xl w-auto"
                            size="txtInterRegular22WhiteA70066"
                          >
                            Email
                          </Text>
                          <Input
                            name="rectangleSeventyNine_Three"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="bg-gray-900 flex h-[70px] rounded-[5px] w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700_66 md:text-xl w-auto"
                            size="txtInterRegular22WhiteA70066"
                          >
                            Account type
                          </Text>
                          <div className="flex flex-row gap-6 items-center justify-start w-auto">
                            <SelectBox
                              className="bg-gray-900 sm:px-5 px-[27px] py-[23px] rounded-[5px] text-left text-lg text-pink-500 w-[76%] sm:w-full"
                              placeholderClassName="text-pink-500"
                              indicator={
                                <Img
                                  className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="frame298"
                              options={individualEOptionsList}
                              isSearchable={false}
                              placeholder="Individual E"
                            />
                            <div className="bg-pink-500 flex flex-col h-[45px] items-center justify-start rounded-[9px] w-[45px]">
                              <Text
                                className="sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                                size="txtInterRegular35"
                              >
                                ?
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                        <div className="bg-gray-900 border border-gray-800_02 border-solid h-[37px] rounded-[18px] w-[37px]"></div>
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700_66 md:text-xl w-auto"
                          size="txtInterRegular22WhiteA70066"
                        >
                          <span className="text-white-A700_66 font-inter text-left font-normal">
                            I Agree with{" "}
                          </span>
                          <span className="text-pink-500 font-inter text-left font-normal">
                            Privacy Policy
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[238px] mt-[39px] w-[135px]">
                <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[135px]">
                  Post An Ad
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1625px] mt-[118px] mx-auto md:px-5 w-full">
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
      </div>
    </>
  );
};

export default AddaProfilePage;
