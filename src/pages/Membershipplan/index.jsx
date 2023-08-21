import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const MembershipplanPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mb-8 w-full">
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
          <div className="bg-blue_gray-100_5e flex flex-col items-start justify-start mt-8 p-[34px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-px items-start justify-start max-w-[1619px] mx-auto md:px-5 w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex sm:flex-col flex-row sm:gap-5 h-[107px] md:h-auto items-center justify-start w-[539px] sm:w-full">
                  <Button className="bg-pink-500 flex h-8 items-center justify-center p-1.5 rounded-[50%] w-8">
                    <Img
                      className="h-5"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <Line className="bg-pink-500 h-0.5 w-[95%]" />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 h-[107px] md:h-auto items-center justify-start w-[539px] sm:w-full">
                  <Button className="bg-pink-500 flex h-8 items-center justify-center p-1.5 rounded-[50%] w-8">
                    <Img
                      className="h-5"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <Line className="bg-pink-500 h-0.5 w-[95%]" />
                </div>
              </List>
              <Img
                className="h-[108px] w-[539px]"
                src="images/img_component3.svg"
                alt="componentSeven"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[116px] mt-7 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtInterSemiBold40"
            >
              Select a pakage
            </Text>
            <div className="flex flex-col gap-[50px] items-start justify-start max-w-[1622px] mb-[50px] mt-[58px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[43px] items-end justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[43px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-black-900 border-2 border-pink-500 border-solid flex flex-col items-start justify-start p-[47px] md:px-10 sm:px-5 rounded-md w-full">
                    <div className="flex flex-col font-ibmplexsans items-center justify-start ml-0.5 md:ml-[0] mt-[7px]">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtIBMPlexSans18"
                      >
                        Single Profile
                      </Text>
                    </div>
                    <div className="flex flex-col font-inter items-center justify-start mt-[27px]">
                      <Text
                        className="md:text-5xl text-[76px] text-white-A700"
                        size="txtInterSemiBold76"
                      >
                        $0
                      </Text>
                    </div>
                    <Line className="bg-white-A700_7a h-px ml-0.5 md:ml-[0] mt-[30px] w-full" />
                    <div className="flex flex-row font-inter gap-[9px] items-center justify-center ml-0.5 md:ml-[0] mt-[41px] w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_iconsolidcheckcircle.svg"
                        alt="iconsolidcheckc"
                      />
                      <Text
                        className="text-base text-white-A700 w-[138px]"
                        size="txtInterMedium16"
                      >
                        Unlimited 1 Profile
                      </Text>
                    </div>
                    <Button className="bg-pink-500 cursor-pointer font-inter font-semibold h-[51px] mb-14 mt-[307px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[404px]">
                      Get Now
                    </Button>
                  </div>
                  <div className="bg-black-900 flex flex-col items-start justify-start p-[47px] md:px-10 sm:px-5 rounded-md w-full">
                    <div className="flex flex-col font-ibmplexsans items-center justify-start ml-0.5 md:ml-[0] mt-[7px]">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtIBMPlexSans18"
                      >
                        Single Profile
                      </Text>
                    </div>
                    <div className="flex flex-col font-inter items-center justify-start mt-[27px]">
                      <Text
                        className="md:text-5xl text-[76px] text-white-A700"
                        size="txtInterSemiBold76"
                      >
                        $5
                      </Text>
                    </div>
                    <Line className="bg-white-A700_7a h-px ml-0.5 md:ml-[0] mt-[30px] w-full" />
                    <div className="flex flex-row font-inter gap-[9px] items-center justify-center ml-0.5 md:ml-[0] mt-[41px] w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_iconsolidcheckcircle.svg"
                        alt="iconsolidcheckc"
                      />
                      <Text
                        className="text-base text-white-A700 w-[140px]"
                        size="txtInterMedium16"
                      >
                        Unlimited 3 Profile
                      </Text>
                    </div>
                    <Button className="bg-pink-500 cursor-pointer font-inter font-semibold h-[51px] mb-14 mt-[307px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[404px]">
                      Get Now
                    </Button>
                  </div>
                </List>
                <div className="bg-black-900 flex flex-col items-start justify-start p-[47px] md:px-10 sm:px-5 rounded-md w-[32%] md:w-full">
                  <div className="flex flex-col font-ibmplexsans items-center justify-start ml-0.5 md:ml-[0] mt-[7px]">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtIBMPlexSans18"
                    >
                      Single Profile
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter items-center justify-start mt-[27px]">
                    <Text
                      className="md:text-5xl text-[76px] text-white-A700"
                      size="txtInterSemiBold76"
                    >
                      $120
                    </Text>
                  </div>
                  <Line className="bg-white-A700_7a h-px ml-0.5 md:ml-[0] mt-[30px] w-full" />
                  <div className="flex flex-col font-inter gap-5 items-start justify-start mt-[41px] w-auto">
                    <div className="flex flex-row gap-[9px] items-center justify-center w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_iconsolidcheckcircle.svg"
                        alt="iconsolidcheckc"
                      />
                      <Text
                        className="text-base text-white-A700 w-[148px]"
                        size="txtInterMedium16"
                      >
                        Unlimited 10 Profile
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-center justify-center w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_iconsolidcheckcircle.svg"
                        alt="iconsolidcheckc_One"
                      />
                      <Text
                        className="text-base text-white-A700 w-[155px]"
                        size="txtInterMedium16"
                      >
                        View contact details
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-center justify-center w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_iconsolidcheckcircle.svg"
                        alt="iconsolidcheckc_Two"
                      />
                      <Text
                        className="text-base text-white-A700 w-[134px]"
                        size="txtInterMedium16"
                      >
                        Contact agencies
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-center justify-center w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_iconsolidcheckcircle.svg"
                        alt="iconsolidcheckc_Three"
                      />
                      <Text
                        className="text-base text-white-A700 w-[95px]"
                        size="txtInterMedium16"
                      >
                        View photos
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-center justify-center w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_iconsolidcheckcircle.svg"
                        alt="iconsolidcheckc_Four"
                      />
                      <Text
                        className="text-base text-white-A700 w-[130px]"
                        size="txtInterMedium16"
                      >
                        Featuredaccount
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-pink-500 cursor-pointer font-inter font-semibold h-[51px] mb-14 mt-[113px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[404px]">
                    Get Now
                  </Button>
                </div>
              </div>
              <Line className="bg-white-A700_4f h-px w-full" />
              <div className="flex flex-row gap-[34px] items-start justify-start w-auto">
                <div className="bg-white-A700_28 flex flex-col items-start justify-start rotate-[180deg] rounded-[5px] w-auto">
                  <Img
                    className="h-[23px] w-2.5"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
                <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[135px]">
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1625px] mt-[89px] mx-auto md:px-5 w-full">
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

export default MembershipplanPage;
