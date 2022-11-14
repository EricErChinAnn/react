import React from "react";

export default class ComplexList extends React.Component {
    state = {
        searchTerms: "",
        shops: [
            {
                "id": 1,
                "name": "Macdonalds",
                "floor": 1,
                "unit": 202,
                "type": "F&B"
            },
            {
                "id": 2,
                "name": "Coffee Beans",
                "floor": 2,
                "unit": 301,
                "type": "F&B"
            },
            {
                "id": 3,
                "name": "Uniqo",
                "floor": 1,
                "unit": 101,
                "type": "Clothing"
            },
            {
                "id": 4,
                "name": "Don Don Donki",
                "floor": 5,
                "unit": 103,
                "type": "Supermarket"
            }
        ],
    }

    render() {
        return (
            <React.Fragment>
                <label>Search: </label>
                <input type="text" value={this.state.searchTerms}
                    onChange={e => { this.setState({ searchTerms: e.target.value }) }}></input>
                <div>
                    {this.state.shops
                        .filter(eachShop =>
                            eachShop.name.toUpperCase().includes(this.state.searchTerms.toUpperCase()))
                        .map(each =>
                            <div style={{ margin: "10px", border: "black solid 2px" }}>
                                <div>Name: {each.name}</div>
                                <div>Unit: {each.floor}-{each.unit}</div>
                                <div>Type: {each.type}</div>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}