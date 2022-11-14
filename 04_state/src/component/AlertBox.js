import React from 'react';

class AlertBox extends React.Component {
    state = {
        message: "Thou hast wondered over yonder"
    }

    render() {
        return (
            <div style={{
                border: "black solid 4px"
            }}>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default AlertBox;