import React from "react";

const sizeClasses = {
  txtInterBold20Pink500: "font-bold font-inter",
  txtInterSemiBold18WhiteA700: "font-inter font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold129: "font-bold font-inter",
  txtInterBlack94: "font-black font-inter",
  txtInterMedium24: "font-inter font-medium",
  txtInterBold22: "font-bold font-inter",
  txtInterRegular22WhiteA70066: "font-inter font-normal",
  txtInterSemiBold50: "font-inter font-semibold",
  txtInterBold40: "font-bold font-inter",
  txtInterBlack104: "font-black font-inter",
  txtInterBlack104WhiteA700: "font-black font-inter",
  txtInterBold86: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtInterLight58: "font-inter font-light",
  txtInterMedium30: "font-inter font-medium",
  txtInterSemiBold76: "font-inter font-semibold",
  txtInterRegular16WhiteA7007a: "font-inter font-normal",
  txtInterRegular22: "font-inter font-normal",
  txtInterBold22Pink500: "font-bold font-inter",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtInterRegular28: "font-inter font-normal",
  txtInterBold18Pink500: "font-bold font-inter",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtInterRegular16Pink500: "font-inter font-normal",
  txtInterMedium18: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular18Pink500: "font-inter font-normal",
  txtInterRegular22WhiteA700: "font-inter font-normal",
  txtInterRegular18Gray90003: "font-inter font-normal",
  txtInterRegular16WhiteA70099: "font-inter font-normal",
  txtSenBold28: "font-bold font-sen",
  txtIBMPlexSans18: "font-ibmplexsans font-normal",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterRegular18WhiteA7007f: "font-inter font-normal",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterBold30: "font-bold font-inter",
  txtInterSemiBold60: "font-inter font-semibold",
  txtInterRegular18WhiteA7007a: "font-inter font-normal",
  txtInterRegular20Pink500: "font-inter font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular35: "font-inter font-normal",
  txtInterRegular58: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
