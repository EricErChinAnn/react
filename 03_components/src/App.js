import React from "react";
import BorderedImageFrame from "./components/BorderedImageFrame";
import CustomizedImage from "./components/CustomizedImage";
import SumOfTwo from "./components/SumOfTwo";

function Main() {
  return (
  <React.Fragment>
    <div>
      <BorderedImageFrame/>
      <CustomizedImage img={require("./img_temp2.jpg")}/>
      <SumOfTwo num1={10} num2={15}/>
    </div>
  </React.Fragment>
  );
}

export default Main;
