import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MyprofilesidebaarPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mb-5 w-full">
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
          <div className="bg-blue_gray-100_5e flex flex-col items-center justify-end mt-8 p-[75px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[120px] items-start justify-between max-w-[1622px] mt-[27px] mx-auto w-full">
              <div className="bg-gray-900_04 flex md:flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded-[12px] w-1/4 md:w-full">
                <div className="flex flex-col gap-5 h-[351px] md:h-auto items-start justify-start mb-2 ml-1 md:ml-[0] py-[54px] w-[260px]">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterBold22"
                  >
                    MY PROFILE SIDEBAAR
                  </Text>
                  <Img
                    className="h-[101px] w-[101px]"
                    src="images/img_profile_white_a700.svg"
                    alt="profile"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Text
                      className="text-[22px] sm:text-lg text-pink-500 md:text-xl w-auto"
                      size="txtInterBold22Pink500"
                    >
                      MANAGE
                    </Text>
                    <div className="flex flex-row gap-[66px] items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700_7a w-auto"
                        size="txtInterRegular16WhiteA7007a"
                      >
                        User name
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        Jhon Dee
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[47px] items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700_7a w-auto"
                        size="txtInterRegular16WhiteA7007a"
                      >
                        Account type
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        Client
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[189px]">
                    <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[189px]">
                      Remove Account
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-11 items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtInterSemiBold40"
                >
                  My Account
                </Text>
                <div className="flex flex-col md:gap-10 gap-[61px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[45px] items-center justify-start w-[34%] md:w-full">
                        <Button className="bg-blue_gray-900 cursor-pointer font-semibold h-[60px] py-[19px] rounded-[5px] text-center text-lg text-white-A700 uppercase w-[204px]">
                          profile settings
                        </Button>
                        <Text
                          className="text-lg text-pink-500"
                          size="txtInterSemiBold18"
                        >
                          {" "}
                          MEMBERSHIP
                        </Text>
                      </div>
                      <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[3px] w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[205px] items-center justify-between w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        User name
                      </Text>
                      <Input
                        name="email_One"
                        placeholder="example@gmail.com"
                        className="p-0 placeholder:text-white-A700_7a sm:px-5 text-left text-lg text-white-A700_7a w-full"
                        wrapClassName="bg-gray-900 pb-[21px] pl-[30px] pr-[35px] pt-[26px] rounded-[5px] md:w-full"
                        type="email"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[318px] mt-5 w-auto sm:w-full">
                      <Text
                        className="text-lg text-pink-500 w-auto"
                        size="txtInterSemiBold18"
                      >
                        Note: please confirm the change of your email address my
                        email.
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
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
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-8 w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                        size="txtInterRegular22WhiteA700"
                      >
                        Prefeerd language
                      </Text>
                      <SelectBox
                        className="bg-gray-900 sm:flex-1 pb-5 pl-[30px] pr-6 pt-[27px] sm:px-5 rounded-[5px] text-left text-lg text-pink-500 w-[72%] sm:w-full"
                        placeholderClassName="text-pink-500"
                        indicator={
                          <Img
                            className="h-[7px] mr-[0] outline-pink-500 outline-[1px] outline w-4"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="language_One"
                        options={languageOneOptionsList}
                        isSearchable={false}
                        placeholder="English"
                      />
                    </div>
                    <div className="flex flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[318px] mt-8 w-auto">
                      <Button className="bg-white-A700_0c border border-solid border-white-A700_d8 flex h-[30px] items-center justify-center p-[5px] rounded-md w-[30px]">
                        <Img
                          className="h-[19px]"
                          src="images/img_maskgroup.png"
                          alt="groupThirtySeven_One"
                        />
                      </Button>
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18"
                      >
                        <span className="text-white-A700 font-inter text-left font-normal">
                          I agree with{" "}
                        </span>
                        <span className="text-pink-500 font-inter text-left font-normal">
                          Privacy Policy
                        </span>
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-36 items-start justify-between mt-[46px] w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        Push notification
                      </Text>
                      <Text
                        className="text-lg text-pink-500 w-auto"
                        size="txtInterSemiBold18"
                      >
                        Push notification blocked by the browser
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[318px] mt-[46px] w-[132px]">
                      <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[132px]">
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Input
                      name="button_One"
                      placeholder="Manage Password"
                      className="font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto sm:px-5 text-left text-lg text-white-A700 uppercase w-full"
                      wrapClassName="bg-blue_gray-900 flex px-6 py-[18px] rounded-[5px] w-1/4"
                      type="password"
                      prefix={
                        <div className="mt-[5px] mb-1 mr-3.5 sm:w-full sm:mx-0 w-[3%] outline-pink-500 outline-[1.5px] outline">
                          <Img
                            className="my-auto"
                            src="images/img_arrowup.svg"
                            alt="arrow_up"
                          />
                        </div>
                      }
                    ></Input>
                    <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[3px] w-full" />
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[133px] items-center justify-between mt-[49px] w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        Current Password
                      </Text>
                      <Img
                        className="h-[70px] w-[781px]"
                        src="images/img_frame236.svg"
                        alt="groupTwentySeven"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[163px] items-center justify-between mt-5 w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        New Password
                      </Text>
                      <Img
                        className="h-[70px] w-[780px]"
                        src="images/img_frame236.svg"
                        alt="groupTwentyEight"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-between mt-[29px] w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                        size="txtInterRegular22WhiteA700"
                      >
                        Confirm Password
                      </Text>
                      <Img
                        className="h-[70px] w-[780px]"
                        src="images/img_frame236.svg"
                        alt="groupTwentyNine"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[321px] mt-[60px] w-[132px]">
                      <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[132px]">
                        Change{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1625px] mt-[99px] mx-auto md:px-5 w-full">
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

export default MyprofilesidebaarPage;
