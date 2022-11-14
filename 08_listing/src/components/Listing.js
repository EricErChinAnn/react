import React from "react";

class Listing extends React.Component{
    state={
        stores:[
        "Macdonalds",
        "Coffee Beans",
        "Uniqo",
        "Don Don Donki",
        "Gaints Supermarket"
    ]
    }

    render(){
        return(
            <React.Fragment>
                <label><h2>Stores in this location: </h2></label>
                <ul>
                    {this.state.stores.map(f=><li>{f}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}

export default Listing;