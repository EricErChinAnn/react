import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class FoodPriceIngredients extends React.Component {
    state = {
        searchTerms: "",
        searchIngTerms: "",
        dataLoaded: false,
        menuList: [],
    }

    async componentDidMount() {
        const res = await axios.get("FoodIngredPrice.json");

        this.setState({
            "menuList": res.data,
            dataLoaded: true,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div>
                        <label>Search Food Name:</label>
                        <input type="text" value={this.state.searchTerms}
                            onChange={(e) => { this.setState({ searchTerms: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label>Search Ingredients:</label>
                        <input type="text" value={this.state.searchIngTerms}
                            onChange={(e) => { this.setState({ searchIngTerms: e.target.value }) }}></input>
                    </div>
                    {
                        this.state.dataLoaded ?

                            (this.state.menuList
                                .filter(eachSearch =>
                                    eachSearch.name.toUpperCase().includes(this.state.searchTerms.toUpperCase())
                                    //  && eachSearch.ingredients.toUpperCase().includes(this.state.searchIngTerms.toUpperCase())
                                )
                                .map((eachFood, foodKey) => {
                                    return (
                                        <div key={foodKey} style={{ backgroundColor: "black", color: "white", padding: "20px", margin: "10px", border: "royalblue solid 3px" }}>
                                            <h4>{eachFood.name}</h4>
                                            <h5 style={{ color: "goldenrod" }}>${eachFood.price}</h5>
                                            <h5>Ingredients: </h5>
                                            <ul>
                                                {eachFood.ingredients
                                                    .map((eachIngred, ingredKey) => <li key={ingredKey}>{eachIngred}</li>)}
                                            </ul>
                                        </div>
                                    )
                                }))

                            :

                            (<div style={{ height: "230px", backgroundColor: "black", color: "white", padding: "20px", margin: "10px", border: "royalblue solid 3px" }}>
                                <h4>████████████</h4>
                                <h5 style={{ color: "goldenrod" }}>$██.██</h5>
                                <h5>████████████</h5>
                                <ul>
                                    <li>███████</li>
                                    <li>███████</li>
                                    <li>███████</li>
                                </ul>
                            </div>)}
                </div>
            </React.Fragment>
        )
    }
}