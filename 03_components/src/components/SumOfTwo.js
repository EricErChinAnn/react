import React from "react";

function SumOfTwo(prop){
    return(
        <h1>
            {prop.num1} + {prop.num2} = {prop.num1+prop.num2}
        </h1>
    )
}

export default SumOfTwo;