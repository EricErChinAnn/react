import React from 'react';

class Counter extends React.Component {
    state = {
        number:this.props.initialValue
    }

    render() {
        return (
            <div style={{
                border: "red solid 4px"
            }}>
                <h1>props.initialValue = {this.props.initialValue}</h1>
                <p>state.number = {this.state.number}</p>
            </div>
        )
    }
}

export default Counter;