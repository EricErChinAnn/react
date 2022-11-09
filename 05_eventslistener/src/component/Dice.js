import React from "react";

class Dice extends React.Component{
    state={
        randomNum:"Click Me ≧◉◡◉≦"
    }

    render(){
        let extra = <span>:D</span>

        let smile = () => {
            let happy = null
            if(this.state.randomNum%2 == 0){
                happy = <span>♣</span>
            }
            return happy;
        }

        let nat1n6 = () => {
            let fontColor = null
            if(this.state.randomNum == 6){
                fontColor = "green"
            }
            if(this.state.randomNum == 1){
                fontColor = "red"
            }
            return fontColor;
        }

        if(this.state.randomNum%2 !== 0){ extra = null }
        return (
            <div 
            style={{margin:"20px", border : "purple solid 5px"}}
            onClick={()=>{
                this.setState({
                    randomNum: Math.floor((Math.random() * 6)+1)
                    })}}>
                <h2
                    style={{color:nat1n6()}}
                >D6 Dice: {this.state.randomNum} {extra} {smile()}</h2>
            </div>
        )
    }
}

export default Dice;