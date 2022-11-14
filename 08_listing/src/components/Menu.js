import React from "react";

export default class Menu extends React.Component{
    state={
        menuItem:[
            "Chicken Soup Udon",
            "Salmon Teriyaki Don",
            "Raw Salmon Slices",
            "Chicken Miso Ramen",
            ]
    }

    render(){
        return(
            <React.Fragment>
                <ul style={{backgroundColor:"black",color:"white",listStyle:"none"}}>
                    {this.state.menuItem.map(each=><li>{each}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}