import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

const anyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const fromOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const toOptionsList = [
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

const SearchpagePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mb-2.5 w-full">
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
          <div className="bg-blue_gray-100_5e flex flex-col gap-[59px] items-center justify-end mt-8 p-[75px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1619px] mt-[3px] mx-auto w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[34%] md:w-full">
                  <Button className="bg-blue_gray-900 cursor-pointer font-semibold h-[60px] py-[19px] rounded-[5px] text-center text-lg text-white-A700 uppercase w-44">
                    Girls
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[65px] text-lg text-pink-500"
                    size="txtInterSemiBold18"
                  >
                    GUYS
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[72px] text-lg text-pink-500"
                    size="txtInterSemiBold18"
                  >
                    KEYWORD SEARCH{" "}
                  </Text>
                </div>
                <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[3px] w-full" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1619px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[205px] items-center justify-between ml-0.5 md:ml-[0] w-auto md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtInterRegular22WhiteA700"
                >
                  Ethnicity
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-5 pl-[30px] pr-[34px] pt-[27px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[68%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupTwentyFive"
                  options={anyOptionsList}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[254px] items-center justify-between ml-0.5 md:ml-[0] mt-11 w-auto md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtInterRegular22WhiteA700"
                >
                  Age
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-start justify-start w-auto md:w-full">
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pl-[30px] pr-[35px] pt-[25px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[48%] md:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] mr-[0] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupTwentyFour"
                    options={fromOptionsList}
                    isSearchable={false}
                    placeholder="From"
                  />
                  <SelectBox
                    className="bg-gray-900 sm:px-5 px-[35px] py-[23px] rounded-[5px] text-left text-lg text-pink-500 w-[48%] md:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] mr-[0] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupTwentySix"
                    options={toOptionsList}
                    isSearchable={false}
                    placeholder="To"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[195px] items-center justify-between mt-8 w-auto md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtInterRegular22WhiteA700"
                >
                  Hair color
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-5 pl-[30px] pr-[34px] pt-[27px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[68%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupTwentyThree"
                  options={anyOptionsList1}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[113px] items-center justify-between mt-[31px] w-auto md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtInterRegular22WhiteA700"
                >
                  Cheak Availability
                </Text>
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[70px] items-start justify-start p-[23px] sm:px-5"
                    style={{
                      backgroundImage: "url('images/img_frame236.svg')",
                    }}
                  >
                    <Text
                      className="ml-1.5 md:ml-[0] text-lg text-white-A700_7a"
                      size="txtInterRegular18WhiteA7007a"
                    >
                      Start
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[70px] items-start justify-start p-[23px] sm:px-5"
                    style={{
                      backgroundImage: "url('images/img_frame236.svg')",
                    }}
                  >
                    <Text
                      className="md:ml-[0] ml-[3px] text-lg text-white-A700_7a"
                      size="txtInterRegular18WhiteA7007a"
                    >
                      Finish
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[201px] items-center justify-between mt-[30px] w-auto md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtInterRegular22WhiteA700"
                >
                  Sexuality
                </Text>
                <SelectBox
                  className="bg-gray-900 pb-[19px] pl-[30px] pr-[34px] pt-7 sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[68%] md:w-full"
                  placeholderClassName="text-pink-500"
                  indicator={
                    <Img
                      className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupTwentySeven"
                  options={anyOptionsList2}
                  isSearchable={false}
                  placeholder="-Any-"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[227px] items-center justify-between mt-[22px] w-auto md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtInterRegular22WhiteA700"
                >
                  Height
                </Text>
                <div className="flex md:flex-col flex-row gap-[23px] items-end justify-start w-auto md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[70px] items-start justify-start p-[23px] sm:px-5"
                    style={{
                      backgroundImage: "url('images/img_frame236.svg')",
                    }}
                  >
                    <Text
                      className="ml-1.5 md:ml-[0] text-lg text-white-A700_7a"
                      size="txtInterRegular18WhiteA7007a"
                    >
                      From
                    </Text>
                  </div>
                  <Text
                    className="bg-gray-900 justify-center pl-[27px] pr-[35px] sm:px-5 py-[23px] rounded-[5px] text-lg text-white-A700_7a w-auto"
                    size="txtInterRegular18WhiteA7007a"
                  >
                    To
                  </Text>
                  <SelectBox
                    className="bg-gray-900 pb-[19px] pt-7 px-5 rounded-[5px] text-left text-lg text-pink-500 w-[37%] md:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] mr-[0] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupTwentyEight"
                    options={anyOptionsList3}
                    isSearchable={false}
                    placeholder="-Any-"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[46px] items-start justify-start md:ml-[0] ml-[296px] mt-9 w-auto">
                <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                  <div className="bg-gray-900 border border-solid border-white-A700_4c h-[30px] rounded-md w-[30px]"></div>
                  <Text
                    className="text-lg text-white-A700_7a w-auto"
                    size="txtInterRegular18WhiteA7007a"
                  >
                    with photos only
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[135px]">
                  <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[135px]">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1625px] mt-[98px] mx-auto md:px-5 w-full">
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

export default SearchpagePage;
