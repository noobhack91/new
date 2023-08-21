import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const BlogPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mb-[7px] w-full">
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
          <div className="bg-blue_gray-100_5e flex flex-col items-center justify-start mt-8 p-[102px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[120px] items-start justify-between max-w-[1614px] mb-[3px] mx-auto w-full">
              <div className="bg-gray-900_04 flex sm:flex-1 flex-col items-start justify-start rounded-[12px] w-auto sm:w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start w-auto">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                    size="txtInterBold22"
                  >
                    NEWSLETTER
                  </Text>
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700_7a w-auto"
                      size="txtInterRegular16WhiteA7007a"
                    >
                      Your Name
                    </Text>
                    <Img
                      className="h-11 w-[313px]"
                      src="images/img_frame236.svg"
                      alt="frame236"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700_7a w-auto"
                      size="txtInterRegular16WhiteA7007a"
                    >
                      Your Email
                    </Text>
                    <Img
                      className="h-11 w-[313px]"
                      src="images/img_frame236.svg"
                      alt="frame236_One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[135px]">
                    <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[135px]">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtInterSemiBold40"
                >
                  News
                </Text>
                <List
                  className="flex flex-col gap-[47px] items-start w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[30px] items-start justify-start my-0 w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-pink-500 md:text-xl w-auto"
                        size="txtInterBold22Pink500"
                      >
                        Escort Advertising: Tips for Getting a Better Response
                        from your Online Escort Ads
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        Jul 11, 2014
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[1100px] md:max-w-full text-base text-white-A700_7a"
                      size="txtInterRegular16WhiteA7007a"
                    >
                      <>
                        Escorts and strippers, you can be in a very lucrative
                        industry. Unfortunately, your years of marketability are
                        limited because as you advance beyond the ages of 35 to
                        40 you&#39;ll find it more and...
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start my-0 w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[154px] items-start justify-between w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-pink-500 md:text-xl w-auto"
                        size="txtInterBold22Pink500"
                      >
                        Differentiating Yourself from Other Escorts: Beating the
                        Escort Competition
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        Jul 11, 2014
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[1100px] md:max-w-full text-base text-white-A700_7a"
                      size="txtInterRegular16WhiteA7007a"
                    >
                      <>
                        Competition is a fact of life in any business especially
                        for escorts. It&#39;s good for the overall economy.
                        It&#39;s good for any industry. It&#39;s good for
                        customers and believe it or not, ...
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start my-0 w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 gap-[477px] items-start justify-between w-auto md:w-full">
                      <Text
                        className="text-[22px] sm:text-lg text-pink-500 md:text-xl w-auto"
                        size="txtInterBold22Pink500"
                      >
                        Escort Advertising: Getting a Better Response
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        Jul 11, 2014
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[1100px] md:max-w-full text-base text-white-A700_7a"
                      size="txtInterRegular16WhiteA7007a"
                    >
                      <>
                        Escort Directories like Exotics, Eros, and Cityvibe are
                        very popular. They&#39;ve all been around for over 10
                        years now with new comers and copy cat directories
                        showing up almost daily. Their ...
                      </>
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1625px] mt-[148px] mx-auto md:px-5 w-full">
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

export default BlogPage;
