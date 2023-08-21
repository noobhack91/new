import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const PremiumEscapePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <Line className="bg-white-A700_4c h-px mt-8 w-full" />
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
        <div className="bg-blue_gray-100_5e flex flex-col items-center justify-start max-w-[1912px] mt-8 mx-auto p-8 md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start mb-[88px] w-[88%] md:w-full">
            <div className="flex flex-col gap-7 items-center justify-start w-[35%] md:w-full">
              <div className="bg-gray-900_04 flex flex-col items-start justify-start rounded-[12px] w-auto sm:w-full">
                <div className="flex flex-col gap-[52px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase w-auto"
                      size="txtInterBold22"
                    >
                      Agency Details
                    </Text>
                    <Img
                      className="h-[143px] md:h-auto object-cover rounded-lg w-[143px]"
                      src="images/img_rectangle31.png"
                      alt="rectangleThirtyOne"
                    />
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-pink-500 md:text-xl w-auto"
                          size="txtInterRegular22"
                        >
                          Premium Escape
                        </Text>
                        <Text
                          className="text-base text-white-A700_7a w-auto"
                          size="txtInterRegular16WhiteA7007a"
                        >
                          Agency since Nov 16, 2012
                        </Text>
                        <Text
                          className="leading-[20.00px] max-w-[485px] md:max-w-full text-lg text-white-A700"
                          size="txtInterRegular18"
                        >
                          Are you looking for a beautiful amateur escort for
                          your next business trip or for a relaxing escape?
                          Premium Escape will assist you. Our ladies are magic
                          and turn your stay into a unforgetable time.
                        </Text>
                        <Text
                          className="text-[22px] sm:text-lg text-pink-500 md:text-xl w-auto"
                          size="txtInterRegular22"
                        >
                          33 Profiles
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[50px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase w-auto"
                      size="txtInterBold22"
                    >
                      Contact Details
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <div className="bg-gray-900_05 flex flex-col items-start justify-start p-[29px] sm:px-5 rounded-[12px] w-full">
                        <div className="flex flex-row items-center justify-start mb-0.5 ml-1.5 md:ml-[0] w-[82%] md:w-full">
                          <div className="flex flex-col gap-[18px] items-center justify-start">
                            <Text
                              className="text-lg text-white-A700"
                              size="txtInterRegular18"
                            >
                              Are you
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtInterRegular18"
                            >
                              Are you
                            </Text>
                          </div>
                          <div className="flex flex-col gap-6 items-center justify-center w-auto">
                            <Text
                              className="text-center text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              To see the contact details please
                            </Text>
                            <div className="flex flex-row gap-[29px] items-center justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Button className="bg-pink-500 cursor-pointer font-semibold h-[39px] py-2 rounded-[5px] text-center text-lg text-white-A700 w-[111px]">
                                  Sign in
                                </Button>
                              </div>
                              <Text
                                className="text-lg text-white-A700 w-auto"
                                size="txtInterRegular18"
                              >
                                OR
                              </Text>
                              <a
                                href="javascript:"
                                className="text-lg text-pink-500 w-auto"
                              >
                                <Text size="txtInterSemiBold18">Sign up</Text>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[50px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase w-auto"
                      size="txtInterBold22"
                    >
                      Contact Agency
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                        <Input
                          name="frame179"
                          placeholder="Are you"
                          className="p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                          wrapClassName="bg-gray-900_05 flex pl-[30px] pr-[35px] py-[13px] rounded-[12px] w-full"
                          prefix={
                            <Img
                              className="h-[38px] mr-3.5 my-auto"
                              src="images/img_heart.svg"
                              alt="Heart"
                            />
                          }
                        ></Input>
                        <div className="h-[185px] md:h-[90px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <List
                              className="flex flex-col gap-3.5 items-center w-full"
                              orientation="vertical"
                            >
                              <div className="bg-gray-900_05 flex sm:flex-1 flex-col items-start justify-start my-0 rounded-[12px] w-auto sm:w-full">
                                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                                  <Img
                                    className="h-[38px] w-[38px]"
                                    src="images/img_heart.svg"
                                    alt="heart"
                                  />
                                  <Text
                                    className="text-lg text-white-A700 w-auto"
                                    size="txtInterRegular18"
                                  >
                                    Are you
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-gray-900_05 flex sm:flex-1 flex-col items-start justify-start my-0 rounded-[12px] w-auto sm:w-full">
                                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                                  <Img
                                    className="h-[38px] w-[38px]"
                                    src="images/img_heart.svg"
                                    alt="heart"
                                  />
                                  <Text
                                    className="text-lg text-white-A700 w-auto"
                                    size="txtInterRegular18"
                                  >
                                    Are you
                                  </Text>
                                </div>
                              </div>
                            </List>
                          </div>
                          <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-center mx-auto top-[13%] w-auto">
                            <Text
                              className="text-center text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              To see the contact details please
                            </Text>
                            <div className="flex flex-row gap-[29px] items-center justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Button className="bg-pink-500 cursor-pointer font-semibold h-[39px] py-2 rounded-[5px] text-center text-lg text-white-A700 w-[111px]">
                                  Sign in
                                </Button>
                              </div>
                              <Text
                                className="text-lg text-white-A700 w-auto"
                                size="txtInterRegular18"
                              >
                                OR
                              </Text>
                              <a
                                href="javascript:"
                                className="text-lg text-pink-500 w-auto"
                              >
                                <Text size="txtInterSemiBold18">Sign up</Text>
                              </a>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-pink-500 cursor-pointer min-w-[484px] sm:min-w-full py-[21px] rounded-[12px] text-center text-lg text-white-A700">
                          Contact Agency
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_04 flex flex-col items-start justify-start rounded-[12px] w-auto sm:w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl uppercase w-auto"
                    size="txtInterBold22"
                  >
                    Location
                  </Text>
                  <div className="flex flex-row gap-[158px] items-start justify-between w-auto">
                    <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-auto">
                      <Text
                        className="text-base text-white-A700_7a w-auto"
                        size="txtInterRegular16WhiteA7007a"
                      >
                        Country:
                      </Text>
                      <Text
                        className="text-base text-white-A700_7a w-auto"
                        size="txtInterRegular16WhiteA7007a"
                      >
                        Address:
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[19px] items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        Geremany
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        10 Downing Street
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[246px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-[486px] md:w-full"
                    src="images/img_rectangle30.png"
                    alt="rectangleThirty"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[22px] w-[61%] md:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[516px] items-center justify-between w-auto md:w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-auto"
                    size="txtInterSemiBold50"
                  >
                    Premium Escape
                  </Text>
                  <Img
                    className="h-[30px] w-16"
                    src="images/img_cart.svg"
                    alt="cart"
                  />
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start w-auto">
                  <Text
                    className="text-base text-white-A700_7a w-auto"
                    size="txtInterRegular16WhiteA7007a"
                  >
                    <span className="text-white-A700_7a font-inter text-left font-normal">
                      Sort by:{" "}
                    </span>
                    <span className="text-pink-500 font-inter text-left font-normal">
                      Registration Date
                    </span>
                  </Text>
                  <Img
                    className="h-[7px] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[39px] items-start justify-start mt-12 w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="md:gap-5 gap-[46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat bg-white-A700 h-[373px] relative rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_frame9_2.png')",
                        }}
                      >
                        <Img
                          className="h-[373px] m-auto object-cover rounded-[12px] w-full"
                          src="images/img_image3_373x295.png"
                          alt="imageThree"
                        />
                        <div className="absolute bottom-[5%] flex flex-row gap-[98px] inset-x-[0] items-center justify-between mx-auto w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsMedium16"
                            >
                              United kingdom
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtInterRegular16"
                            >
                              Lucy
                            </Text>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_heart.svg"
                            alt="heart"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-2.5 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame8_373x295.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mt-[310px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-start p-4 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame7_373x295.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mb-0.5 mt-[297px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat bg-white-A700 h-[373px] relative rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_frame9_2.png')",
                        }}
                      >
                        <Img
                          className="h-[373px] m-auto object-cover rounded-[12px] w-full"
                          src="images/img_image3_1.png"
                          alt="imageThree"
                        />
                        <div className="absolute bottom-[5%] flex flex-row gap-[98px] inset-x-[0] items-center justify-between mx-auto w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsMedium16"
                            >
                              United kingdom
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtInterRegular16"
                            >
                              Lucy
                            </Text>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_heart.svg"
                            alt="heart"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-2.5 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame241.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mt-[310px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-start p-4 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame242.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mb-0.5 mt-[297px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat bg-white-A700 h-[373px] relative rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_frame9_2.png')",
                        }}
                      >
                        <Img
                          className="h-[373px] m-auto object-cover w-full"
                          src="images/img_image3_373x294.png"
                          alt="imageThree"
                        />
                        <div className="absolute bottom-[5%] flex flex-row gap-[98px] inset-x-[0] items-center justify-between mx-auto w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsMedium16"
                            >
                              United kingdom
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtInterRegular16"
                            >
                              Lucy
                            </Text>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_heart.svg"
                            alt="heart"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-2.5 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame243.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mt-[310px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-4 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame244.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mb-0.5 mt-[297px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="border border-solid border-white-A700_66 cursor-pointer font-bold min-w-[977px] md:min-w-full py-[35px] rounded-[12px] text-[22px] text-center sm:text-lg text-white-A700_66 md:text-xl uppercase">
                  BAnner Space
                </Button>
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="md:gap-5 gap-[46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat bg-white-A700 h-[373px] relative rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_frame9_2.png')",
                        }}
                      >
                        <Img
                          className="h-[373px] m-auto object-cover rounded-[12px] w-full"
                          src="images/img_image3_2.png"
                          alt="imageThree"
                        />
                        <div className="absolute bottom-[5%] flex flex-row gap-[98px] inset-x-[0] items-center justify-between mx-auto w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsMedium16"
                            >
                              United kingdom
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtInterRegular16"
                            >
                              Lucy
                            </Text>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_heart.svg"
                            alt="heart"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-2.5 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame8_3.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mt-[310px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-start p-4 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_frame7_3.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mb-0.5 mt-[297px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat bg-white-A700 h-[373px] relative rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_frame9_2.png')",
                        }}
                      >
                        <Img
                          className="h-[373px] m-auto object-cover rounded-[12px] w-full"
                          src="images/img_image3_3.png"
                          alt="imageThree"
                        />
                        <div className="absolute bottom-[5%] flex flex-row gap-[98px] inset-x-[0] items-center justify-between mx-auto w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsMedium16"
                            >
                              United kingdom
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtInterRegular16"
                            >
                              Lucy
                            </Text>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_heart.svg"
                            alt="heart"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-2.5 rounded-[12px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame241_373x295.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mt-[310px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-start p-4 rounded-[12px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame242_373x295.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mb-0.5 mt-[297px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat bg-white-A700 h-[373px] relative rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_frame9_2.png')",
                        }}
                      >
                        <Img
                          className="h-[373px] m-auto object-cover rounded-[12px] w-full"
                          src="images/img_image3_4.png"
                          alt="imageThree"
                        />
                        <div className="absolute bottom-[5%] flex flex-row gap-[98px] inset-x-[0] items-center justify-between mx-auto w-auto">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPoppinsMedium16"
                            >
                              United kingdom
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtInterRegular16"
                            >
                              Lucy
                            </Text>
                          </div>
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_heart.svg"
                            alt="heart"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-2.5 rounded-[12px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame243_373x295.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mt-[310px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-gray-400 bg-no-repeat flex flex-1 flex-col h-[373px] items-center justify-end p-4 rounded-[12px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame244_373x295.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[98px] items-center justify-start mb-0.5 mt-[297px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtPoppinsMedium16"
                          >
                            United kingdom
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16"
                          >
                            Lucy
                          </Text>
                        </div>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_heart.svg"
                          alt="heart"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-poppins gap-3.5 items-center justify-start md:ml-[0] ml-[753px] mt-[55px] w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtPoppinsMedium18"
                >
                  Page
                </Text>
                <Button className="bg-black-900 border border-solid border-white-A700_66 cursor-pointer font-medium leading-[normal] min-w-[53px] py-3 rounded-[5px] text-center text-lg text-white-A700">
                  1
                </Button>
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtPoppinsMedium18"
                >
                  of 2
                </Text>
                <div className="bg-pink-500 flex flex-col items-start justify-start rounded-[5px] w-auto">
                  <Img
                    className="h-[23px] w-2.5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1625px] mb-[23px] mt-[148px] mx-auto md:px-5 w-full">
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

export default PremiumEscapePage;
