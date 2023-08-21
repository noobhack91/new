import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Header from "components/Header";

const DetaliedListingPagePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start mx-auto py-[18px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[753px] items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start mb-[25px] w-full">
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
          <div className="h-[4017px] sm:h-[4149px] md:h-[8130px] mt-[30px] md:px-5 relative w-full">
            <div className="bg-blue_gray-100_5e flex flex-col h-full items-center justify-start m-auto p-[50px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mb-[925px] w-[90%] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterRegular18"
                    >
                      Home / Girl / Lana
                    </Text>
                    <div className="flex flex-row gap-2 items-end justify-start w-auto">
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-auto"
                        size="txtInterSemiBold50"
                      >
                        Lana
                      </Text>
                      <Img
                        className="h-12 w-12"
                        src="images/img_heart_pink_500.svg"
                        alt="heart"
                      />
                    </div>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtInterRegular18"
                    >
                      Neatherland, Geoningen, Appingedam
                    </Text>
                  </div>
                  <Button className="bg-pink-500 cursor-pointer font-semibold h-[60px] mb-9 sm:mt-0 mt-10 py-[19px] rounded-[5px] text-center text-lg text-white-A700 w-48">
                    Conatct Agency
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[68px] w-[77%] md:w-full">
                  <Img
                    className="h-[726px] sm:h-auto object-cover rounded-bl-[12px] rounded-tl-[12px] w-1/2 md:w-full"
                    src="images/img_rectangle27.png"
                    alt="rectangleTwentySeven"
                  />
                  <div className="bg-pink-50 flex flex-col items-center justify-end p-[130px] md:px-10 sm:px-5 rounded-br-[12px] rounded-tr-[12px] w-1/2 md:w-full">
                    <div className="flex flex-col gap-[34px] items-center justify-center w-auto">
                      <Img
                        className="h-[324px] w-[324px]"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <Text
                        className="text-gray-900_03 text-lg w-auto"
                        size="txtInterRegular18Gray90003"
                      >
                        To view the photo Please
                      </Text>
                      <div className="flex flex-row gap-[29px] items-center justify-start w-auto">
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
                            <div className="font-semibold sm:px-5 text-left text-lg text-white-A700">
                              Sign in
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="text-gray-900_03 text-lg w-auto"
                          size="txtInterRegular18Gray90003"
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
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between mt-[49px] w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[64%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-[97%] md:w-full">
                      <div className="flex flex-row gap-[11px] items-center justify-start mb-2 w-auto">
                        <Img
                          className="h-0.5 w-[30px]"
                          src="images/img_arrow1_pink_500.svg"
                          alt="arrowOne"
                        />
                        <Text
                          className="text-pink-500_99 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          Previous Profile
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[11px] items-center justify-start mt-2 w-auto">
                        <Text
                          className="text-pink-500_99 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          Next Profile
                        </Text>
                        <Img
                          className="h-0.5 w-[30px]"
                          src="images/img_arrow1.svg"
                          alt="arrowOne_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[37px] w-[98%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[41px] items-start justify-start w-[31%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Button className="bg-blue_gray-900 cursor-pointer font-semibold h-[60px] py-[19px] rounded-[5px] text-center text-lg text-white-A700 w-[149px]">
                              PROFILE
                            </Button>
                          </div>
                          <Text
                            className="mt-[23px] text-pink-500_99 text-xl"
                            size="txtInterSemiBold20"
                          >
                            COMMENTS
                          </Text>
                        </div>
                        <Line className="bg-white-A700_4f h-px md:ml-[0] ml-[3px] w-full" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[50px] items-start justify-start mt-9 w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[115px] items-start justify-between w-auto md:w-full">
                        <List
                          className="sm:flex-col flex-row md:gap-10 gap-[215px] grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Name:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Nationality:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Sexuality:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Hair Color:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Added:
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Lana
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Latvian
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Bisexual
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Dark Brown
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Aug 12, 2022
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-row gap-[215px] items-start justify-between w-auto">
                          <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Ethnicity:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Age:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Eye color:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Height
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Mixed
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtInterRegular18"
                            >
                              32
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Green
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              170 cm
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[217px] items-end justify-between w-auto md:w-full">
                        <Text
                          className="text-lg text-white-A700_7a w-auto"
                          size="txtInterRegular18WhiteA7007a"
                        >
                          Language:
                        </Text>
                        <div className="flex flex-row gap-[107px] items-start justify-between w-auto">
                          <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                            <Img
                              className="h-[19px] md:h-auto object-cover w-[19px]"
                              src="images/img_maskgroup.png"
                              alt="maskgroup"
                            />
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Bulgarian
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                            <Img
                              className="h-[19px] md:h-auto object-cover w-[19px]"
                              src="images/img_maskgroup.png"
                              alt="maskgroup_One"
                            />
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              English
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                        <Text
                          className="text-lg text-white-A700_7a w-auto"
                          size="txtInterRegular18WhiteA7007a"
                        >
                          Services:
                        </Text>
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtInterBold18"
                        >
                          Extra services offered
                        </Text>
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtInterRegular18"
                        >
                          Costumes. Couples. Cuddling. Dinner Dates Fantasy
                          Kissing Overnight. Overseas Companion. Role Play
                          Sensual Massage
                        </Text>
                      </div>
                      <Text
                        className="text-lg text-pink-500 w-auto"
                        size="txtInterRegular18Pink500"
                      >
                        Extra charges may apply for some of these services,
                        please ask.
                      </Text>
                      <div className="flex flex-col gap-5 items-start justify-start max-w-[1001px] w-full">
                        <Text
                          className="text-lg text-white-A700_7a w-auto"
                          size="txtInterRegular18WhiteA7007a"
                        >
                          About Me:
                        </Text>
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtInterBold18"
                        >
                          GENTLEMEN, LADIES AND COUPLES - WELCOME TO MY
                          PROFILE....
                        </Text>
                        <Text
                          className="leading-[20.00px] max-w-[961px] md:max-w-full text-lg text-white-A700"
                          size="txtInterRegular18"
                        >
                          My name is Lana, I am 26 years old with a stunning
                          size 6 figure, D cup breasts, green eyes and brown
                          hair. I look after my body and will always be
                          immaculately dressed when you arrive. I have a sweet
                          voice and you will find me to be friendly, inviting,
                          sensual and sweet and I love a good conversation.
                        </Text>
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtInterRegular18"
                        >
                          Please, when calling make sure you ask for what you
                          desire so I can cater to your personal requirements.
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-8 items-start justify-between mt-[43px] w-[99%] md:w-full">
                      <div className="flex flex-col gap-[49px] items-start justify-start w-auto sm:w-full">
                        <Input
                          name="price_One"
                          placeholder="CONTACT DETAILS"
                          className="font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-lg text-white-A700 w-full"
                          wrapClassName="bg-blue_gray-900 flex px-[19px] py-[18px] rounded-[5px] w-[47%]"
                          prefix={
                            <div className="mt-[5px] mb-1 mr-6 sm:w-full sm:mx-0 w-[5%] outline-pink-500 outline-[1.5px] outline">
                              <Img
                                className="my-auto"
                                src="images/img_arrowup.svg"
                                alt="arrow_up"
                              />
                            </div>
                          }
                        ></Input>
                        <div className="flex sm:flex-col flex-row gap-[42px] items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Phone number:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              Country:
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              State/Region/Provinc
                            </Text>
                            <Text
                              className="text-lg text-white-A700_7a w-auto"
                              size="txtInterRegular18WhiteA7007a"
                            >
                              City:
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[21px] items-start justify-start w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              <span className="text-white-A700 font-inter text-left font-normal">
                                Phone number is hidden, please{" "}
                              </span>
                              <span className="text-pink-500 font-inter text-left font-normal">
                                sign in
                              </span>
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Netherlands
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Groningen
                            </Text>
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtInterRegular18"
                            >
                              Appingedam
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-[246px] md:h-auto md:mt-0 mt-[109px] object-cover rounded-[12px]"
                        src="images/img_rectangle30.png"
                        alt="rectangleThirty"
                      />
                    </div>
                    <div className="flex flex-col gap-[54px] items-start justify-start ml-0.5 md:ml-[0] mt-16 w-auto md:w-full">
                      <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start w-auto md:w-full">
                        <List
                          className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 grid-cols-4 w-[64%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-indigo-600 flex flex-col items-start justify-start rounded-[10px] w-full">
                            <Img
                              className="h-20 w-20"
                              src="images/img_facebook.svg"
                              alt="facebook"
                            />
                          </div>
                          <div className="bg-blue-400 flex flex-col items-start justify-start rounded-[10px] w-full">
                            <Img
                              className="h-20 w-20"
                              src="images/img_twitter_white_a700.svg"
                              alt="twitter"
                            />
                          </div>
                          <div className="bg-blue_gray-400_01 flex flex-col items-start justify-start rounded-[10px] w-full">
                            <Img
                              className="h-20 w-20"
                              src="images/img_printer.svg"
                              alt="printer"
                            />
                          </div>
                          <div className="bg-blue_gray-400_02 flex flex-col items-start justify-start rounded-[10px] w-full">
                            <Img
                              className="h-20 w-20"
                              src="images/img_mail_white_a700.svg"
                              alt="mail"
                            />
                          </div>
                        </List>
                        <div className="flex flex-row items-start justify-start w-auto">
                          <div className="bg-deep_orange-400 flex flex-col items-start justify-start rounded-[10px] w-[100px]">
                            <Img
                              className="h-20 w-20"
                              src="images/img_plus_white_a700.svg"
                              alt="plus"
                            />
                          </div>
                          <div className="h-[100px] md:h-[79px] relative w-[61%]">
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rounded-[10px] w-[127px]">
                              <div className="flex flex-col h-20 items-center justify-start p-1 w-20">
                                <Text
                                  className="sm:text-[44px] md:text-[50px] text-[58px] text-gray-900"
                                  size="txtInterRegular58"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[37px] inset-y-[0] left-[0] my-auto w-[37px]"
                              src="images/img_volume.svg"
                              alt="volume"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-20 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-[19px] items-start justify-center w-auto">
                          <div className="flex flex-row items-start justify-start w-auto">
                            <RatingBar
                              className="flex justify-between w-[217px]"
                              value={5}
                              starCount={5}
                              size={42}
                            ></RatingBar>
                          </div>
                          <Text
                            className="text-lg text-white-A700_7a w-auto"
                            size="txtInterRegular18WhiteA7007a"
                          >
                            Current rationg: 0
                          </Text>
                          <Text
                            className="text-lg text-white-A700_7a w-auto"
                            size="txtInterRegular18WhiteA7007a"
                          >
                            Total Votes:0
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                          <div className="flex flex-row gap-5 items-center justify-start w-auto">
                            <Text
                              className="text-lg text-pink-500 w-auto"
                              size="txtInterBold18Pink500"
                            >
                              Report broken listing
                            </Text>
                            <Img
                              className="h-[25px] w-[25px]"
                              src="images/img_warning.svg"
                              alt="warning"
                            />
                          </div>
                          <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                            <Text
                              className="text-lg text-pink-500 w-auto"
                              size="txtInterBold18Pink500"
                            >
                              View QR Code
                            </Text>
                            <Img
                              className="h-[25px] w-[25px]"
                              src="images/img_qrcode.svg"
                              alt="qrcode"
                            />
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Text
                              className="text-lg text-pink-500 w-auto"
                              size="txtInterBold18Pink500"
                            >
                              Save as PDF
                            </Text>
                            <Img
                              className="h-[29px] w-[29px]"
                              src="images/img_pdffile.svg"
                              alt="pdffile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[3px] mt-[75px] w-auto md:w-full">
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-auto"
                        size="txtInterSemiBold50"
                      >
                        Other Profiles
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start max-w-[988px] w-full">
                        <Img
                          className="sm:flex-1 h-[301px] md:h-auto object-cover rounded-[10px] w-[225px] sm:w-full"
                          src="images/img_rectangle18.png"
                          alt="rectangleEighteen"
                        />
                        <Img
                          className="sm:flex-1 h-[301px] md:h-auto object-cover rounded-[10px] w-[226px] sm:w-full"
                          src="images/img_rectangle24.png"
                          alt="rectangleTwentyFour"
                        />
                        <Img
                          className="sm:flex-1 h-[301px] md:h-auto object-cover rounded-[10px] w-[225px] sm:w-full"
                          src="images/img_rectangle25.png"
                          alt="rectangleTwentyFive"
                        />
                        <Img
                          className="sm:flex-1 h-[301px] md:h-auto object-cover rounded-[10px] w-[225px] sm:w-full"
                          src="images/img_rectangle26.png"
                          alt="rectangleTwentySix"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-7 items-start justify-start w-auto sm:w-full">
                    <div className="bg-gray-900_04 flex flex-col items-start justify-start rounded-[12px] w-auto sm:w-full">
                      <div className="flex flex-col gap-[52px] items-start justify-start w-auto">
                        <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                          <Img
                            className="h-[143px] md:h-auto object-cover rounded-lg w-[143px]"
                            src="images/img_rectangle31.png"
                            alt="rectangleThirtyOne"
                          />
                          <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
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
                                Are you looking for a beautiful amateur escort
                                for your next business trip or for a relaxing
                                escape? Premium Escape will assist you. Our
                                ladies are magic and turn your stay into a
                                unforgetable time.
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Button className="bg-pink-500 cursor-pointer font-semibold h-[51px] py-3.5 rounded-[5px] text-center text-lg text-white-A700 w-[280px]">
                                AGENCY OTHER PROFILES
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[50px] items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
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
                                      <Text size="txtInterSemiBold18">
                                        Sign up
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[50px] items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
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
                                      <Text size="txtInterSemiBold18">
                                        Sign up
                                      </Text>
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
                      <div className="flex flex-col gap-[34px] items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterBold22"
                        >
                          AVAILABILITY
                        </Text>
                        <div className="h-[113px] relative w-full">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
                                <Text
                                  className="text-base text-white-A700_7a"
                                  size="txtInterRegular16WhiteA7007a"
                                >
                                  Monday
                                </Text>
                                <Text
                                  className="text-base text-white-A700_7a"
                                  size="txtInterRegular16WhiteA7007a"
                                >
                                  05:00 pm - 11:30 pm
                                </Text>
                              </div>
                              <Line className="bg-white-A700_7a h-px mt-2 w-full" />
                              <div className="flex flex-row items-center justify-between mt-3 w-[76%] md:w-full">
                                <Text
                                  className="text-base text-white-A700_7a"
                                  size="txtInterRegular16WhiteA7007a"
                                >
                                  Tuesday
                                </Text>
                                <Text
                                  className="text-base text-white-A700_7a"
                                  size="txtInterRegular16WhiteA7007a"
                                >
                                  011:00 pm - 11:30 pm
                                </Text>
                              </div>
                              <Line className="bg-white-A700_7a h-px mt-3 w-full" />
                              <div className="flex flex-row items-center justify-between mt-2 w-3/4 md:w-full">
                                <Text
                                  className="text-base text-white-A700_7a"
                                  size="txtInterRegular16WhiteA7007a"
                                >
                                  Sunday
                                </Text>
                                <Text
                                  className="text-base text-white-A700_7a"
                                  size="txtInterRegular16WhiteA7007a"
                                >
                                  05:00 pm - 11:30 pm
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Line className="absolute bg-white-A700_7a h-[113px] inset-y-[0] left-[35%] my-auto w-px" />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[568px] sm:w-full">
                      <div className="bg-gray-900_04 h-[174px] mx-auto rounded-[12px] w-full"></div>
                      <div className="absolute bottom-[0] flex flex-col gap-[34px] h-[168px] md:h-auto inset-x-[0] items-start justify-start mx-auto w-auto">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterBold22"
                        >
                          ESCORT RATES
                        </Text>
                        <div className="h-[113px] md:h-[76px] pb-[37px] relative w-full">
                          <Line className="absolute bg-white-A700_7a h-px inset-x-[0] mx-auto top-[32%] w-full" />
                          <Text
                            className="absolute left-[0] text-base text-white-A700_7a top-[2%]"
                            size="txtInterRegular16WhiteA7007a"
                          >
                            Incall (1 hours )
                          </Text>
                          <Text
                            className="absolute inset-x-[0] mx-auto text-base text-white-A700_7a top-[2%] w-max"
                            size="txtInterRegular16WhiteA7007a"
                          >
                            $ 260.62
                          </Text>
                          <Text
                            className="absolute left-[0] text-base text-white-A700_7a top-[39%]"
                            size="txtInterRegular16WhiteA7007a"
                          >
                            30 mins
                          </Text>
                          <Text
                            className="absolute inset-x-[0] mx-auto text-base text-white-A700_7a top-[39%] w-max"
                            size="txtInterRegular16WhiteA7007a"
                          >
                            $ 170.75
                          </Text>
                          <Line className="absolute bg-white-A700_7a h-[76px] left-[35%] top-[0] w-px" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_04 flex flex-col items-start justify-start rounded-[12px] w-auto sm:w-full">
                      <div className="flex flex-col gap-[35px] items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                          size="txtInterBold22"
                        >
                          TOURS
                        </Text>
                        <div className="flex flex-col gap-[17px] items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700_7a w-auto"
                              size="txtInterRegular16WhiteA7007a"
                            >
                              May 29, 2016-jun 30,2016
                            </Text>
                            <Text
                              className="text-base text-white-A700_7a w-auto"
                              size="txtInterRegular16WhiteA7007a"
                            >
                              New York,NY, United States
                            </Text>
                          </div>
                          <Line className="bg-white-A700_7a h-px w-full" />
                          <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700_7a w-auto"
                              size="txtInterRegular16WhiteA7007a"
                            >
                              May 22, 2016-jun 28,2016
                            </Text>
                            <Text
                              className="text-base text-white-A700_7a w-auto"
                              size="txtInterRegular16WhiteA7007a"
                            >
                              Amsterdam, Netherlands
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-pink-500 cursor-pointer font-bold min-w-[484px] sm:min-w-full py-[21px] rounded-[12px] text-center text-lg text-white-A700">
                          Show on map
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[2%] inset-x-[0] mx-auto overflow-auto overflow-x-auto w-full">
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
                    alt="rectangleEighteen_One"
                  />
                  <Img
                    className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                    src="images/img_rectangle24.png"
                    alt="rectangleTwentyFour_One"
                  />
                  <Img
                    className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                    src="images/img_rectangle25.png"
                    alt="rectangleTwentyFive_One"
                  />
                  <Img
                    className="md:flex-1 h-[484px] sm:h-auto object-cover rounded-[10px] w-[362px] md:w-full"
                    src="images/img_rectangle26.png"
                    alt="rectangleTwentySix_One"
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
          <div className="flex flex-col items-center justify-start max-w-[1625px] mt-[119px] mx-auto md:px-5 w-full">
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

export default DetaliedListingPagePage;
