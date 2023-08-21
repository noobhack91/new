import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RegistrationPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mb-[31px] w-full">
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
          <div className="bg-blue_gray-100_5e flex flex-col items-center justify-start mt-8 p-[34px] sm:px-5 w-full">
            <div className="flex flex-col gap-[45px] items-start justify-start max-w-[1619px] mb-[55px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-5 h-[107px] md:h-auto items-center justify-start w-[539px] sm:w-full">
                    <Button className="bg-pink-500 flex h-8 items-center justify-center p-1.5 rounded-[50%] w-8">
                      <Img
                        className="h-5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </Button>
                    <Line className="bg-pink-500 h-0.5 w-[95%]" />
                  </div>
                  <Img
                    className="h-[107px] w-[539px]"
                    src="images/img_component3.svg"
                    alt="componentThree"
                  />
                  <Img
                    className="h-[108px] w-[539px]"
                    src="images/img_component3.svg"
                    alt="componentFive"
                  />
                </div>
                <Text
                  className="mt-6 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtInterSemiBold40"
                >
                  Account
                </Text>
                <div className="flex sm:flex-col flex-row gap-[37px] items-start justify-start md:ml-[0] ml-[141px] mt-11 w-auto sm:w-full">
                  <div className="bg-indigo-600 flex flex-col items-start justify-start rounded-[10px] w-[100px]">
                    <Img
                      className="h-20 w-20"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start rounded-[10px] w-[100px]">
                    <Img
                      className="h-[52px] w-[52px]"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  </div>
                  <div className="bg-blue-400 flex flex-col items-start justify-start rounded-[10px] w-[100px]">
                    <Img
                      className="h-20 w-20"
                      src="images/img_twitter_white_a700.svg"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    className="h-[100px] w-[100px]"
                    src="images/img_vk.svg"
                    alt="vk"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[23px] items-center justify-start mt-[57px] w-auto md:w-full">
                  <Line className="bg-white-A700_4f h-px w-[47%]" />
                  <Text
                    className="text-base text-white-A700_7a w-auto"
                    size="txtInterRegular16WhiteA7007a"
                  >
                    OR
                  </Text>
                  <Line className="bg-white-A700_4f h-px w-[47%]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[59%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[205px] items-center justify-between ml-0.5 md:ml-[0] w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    User name
                  </Text>
                  <Input
                    name="groupTwentyFive"
                    placeholder="Jhone dee"
                    className="p-0 placeholder:text-white-A700_7a sm:px-5 text-left text-lg text-white-A700_7a w-full"
                    wrapClassName="bg-gray-900 pb-[22px] pl-[30px] pr-[35px] pt-[25px] rounded-[5px] md:w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[262px] items-center justify-between ml-0.5 md:ml-[0] mt-8 w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Email
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="example@gmail.com"
                    className="p-0 placeholder:text-white-A700_7a sm:px-5 text-left text-lg text-white-A700_7a w-full"
                    wrapClassName="bg-gray-900 pb-[21px] pl-[30px] pr-[35px] pt-[26px] rounded-[5px] md:w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[318px] mt-[34px] w-auto">
                  <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                    <Button className="bg-white-A700_0c border border-solid border-white-A700_d8 flex h-[30px] items-center justify-center p-[5px] rounded-md w-[30px]">
                      <Img
                        className="h-[19px]"
                        src="images/img_maskgroup.png"
                        alt="groupThirtyEight"
                      />
                    </Button>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterRegular18"
                    >
                      Publish my email
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                    <Button className="bg-white-A700_0c border border-solid border-white-A700_d8 flex h-[30px] items-center justify-center p-[5px] rounded-md w-[30px]">
                      <Img
                        className="h-[19px]"
                        src="images/img_maskgroup.png"
                        alt="groupThirtySeven"
                      />
                    </Button>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterRegular18"
                    >
                      Subscribe to Newsletter
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[216px] items-center justify-between mt-[37px] w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Password
                  </Text>
                  <Input
                    name="password"
                    placeholder="**********"
                    className="p-0 placeholder:text-white-A700_7a sm:px-5 text-left text-lg text-white-A700_7a w-full"
                    wrapClassName="bg-gray-900 pb-[22px] pl-[30px] pr-[35px] pt-[25px] rounded-[5px] md:w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-between mt-5 w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Confirm Password
                  </Text>
                  <Input
                    name="password_One"
                    placeholder="**********"
                    className="p-0 placeholder:text-white-A700_7a sm:px-5 text-left text-lg text-white-A700_7a w-full"
                    wrapClassName="bg-gray-900 pb-[22px] pl-[30px] pr-[35px] pt-[25px] rounded-[5px] md:w-full"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[179px] items-center justify-between mt-5 w-auto md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Account type
                  </Text>
                  <SelectBox
                    className="bg-gray-900 pb-[22px] pt-[25px] sm:px-5 px-[29px] rounded-[5px] text-left text-lg text-pink-500 w-[67%] md:w-full"
                    placeholderClassName="text-pink-500"
                    indicator={
                      <Img
                        className="h-[7px] outline-pink-500 outline-[1px] outline w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupTwentyEight"
                    options={selectOptionsList}
                    isSearchable={false}
                    placeholder="Select"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 gap-[230px] items-center justify-between mt-[30px] w-auto sm:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterRegular22WhiteA700"
                  >
                    Captcha
                  </Text>
                  <Img
                    className="h-[70px] md:h-auto object-cover rounded-[7px] w-[259px]"
                    src="images/img_image6.png"
                    alt="imageSix"
                  />
                </div>
                <div className="flex flex-col items-start justify-start ml-80 md:ml-[0] mt-[49px] w-[135px]">
                  <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[135px]">
                    Next
                  </Button>
                </div>
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
                    <Img src="images/img_twitter.svg" alt="twitter_One" />
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

export default RegistrationPage;
