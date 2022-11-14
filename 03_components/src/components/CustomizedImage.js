import React from "react"; 

function CustomizedImage(prop){
    return(
    <img style={{
      objectFit: "fill",
      width: "100vw"
    }}
      src={prop.img} 
      alt = "Custom Display"/>
    )
}

export default CustomizedImage;