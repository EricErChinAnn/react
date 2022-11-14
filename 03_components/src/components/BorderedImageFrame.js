import React from "react";

function BorderedImageFrame() {
  return (
    <img style={{
      border: "red 4px solid",
      objectFit: "fill",
      width: "100vw"
    }}
      src={require("./../img_temp.jpg")} 
      alt="Color Explosion"/>
        )
}

export default BorderedImageFrame;