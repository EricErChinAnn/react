import React from "react";

class NumberBox extends React.Component{
  state ={
    count:10,
  }
  render(){
    return(<div>Hello {this.state.count}</div>)
  }
}

export default NumberBox;