import React from "react";

class NumberBox extends React.Component {
  state = {
    count: 0,
    name: "John"
  }

  clickPlus = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1,
        name: "Sarah"
      })
    }
  }

  clickMinus = () => {
    if (this.state.count > -10) {
      this.setState({
        count: this.state.count - 1,
        name: "I'm HuNgRy JoN"
      })
    }
  }

  clickReset = () => {
    this.setState({
      count: 0,
      name: "John"
    })
  }

  render() {
    return (
      <div
        style={{ border: "black solid 4px"}}>
        <div>
          <h1>Hello {this.state.name} No.{this.state.count}</h1>
        </div>
        <div onClick={this.clickPlus} style={{ border: "green solid 2px" }}>
          <h4> +1 </h4>
        </div>
        <div onClick={this.clickMinus} style={{ border: "red solid 2px" }}>
          <h4> -1 </h4>
        </div>
        <div onClick={this.clickReset} style={{ border: "blue solid 2px" }}>
          <h4> Reset </h4>
        </div>
      </div>
    )
  }
}

export default NumberBox;