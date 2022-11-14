import React from "react";
import NumberBox from "./component/NumberBox";
import AlertBox from "./component/AlertBox";
import Counter from "./component/Counter";

function App() {
  return (
    <React.Fragment>
      <NumberBox/>
      <AlertBox/>
      <Counter initialValue={420}/>
    </React.Fragment>
  );
}

export default App;
