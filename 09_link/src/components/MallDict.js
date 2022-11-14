import React from 'react';

// import in axios
import axios from 'axios';

export default class MallDict extends React.Component {
    state = {
        shops: [],
        events:[]
    }

    async componentDidMount() {
        const response = await axios.get("shop.json");      
        const eventResponse = await axios.get("event.json");
        
        this.setState({
            'shops': response.data,
            'events': eventResponse.data
        })  
    }

    loadData = async () => {
           
    }
    
    renderEvents() {
        let jsxElements = [];
        for (let eachEvent of this.state.events) {
            jsxElements.push((<li className="list-group-item" key={eachEvent}>{eachEvent}</li>))
        }

        return (<ul className="list-group">
            {jsxElements}
        </ul>)
    }

    render(){
        return (
            <React.Fragment>
                <h1>GenericMall Directory</h1>
                <button onClick={this.loadData}>Load Data</button>

                <h2 className="mt-3">All Shops</h2>
                {
                    this.state.shops.map(function(eachShop){
                        return (
                            <div className="card mt-3" key={eachShop.id}>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {eachShop.name}
                                    </h3>
                                    <ul>
                                        <li>Floor: {eachShop.floor}</li>
                                        <li>Unit: {eachShop.unit}</li>
                                        <li>Type: {eachShop.type}</li>
                                    </ul>
                                </div>

                            </div>
                        )
                    })
                }

                <h2>Events</h2>
                {this.renderEvents()}

            </React.Fragment>
        )
    }
}