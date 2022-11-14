import React from "react";

class SurveyForm extends React.Component{
    state={
        name:"",
        country:"",
        interest:"",
        email:"",
    }

    updateName = (event)=>{
        this.setState({
            name:event.target.value
        })
    }

    updateEmail = (event)=>{
        this.setState({
            email:event.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <label>Name: </label>
                    <input 
                    type="text" 
                    value={this.state.name}
                    onChange={this.updateName}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                    type="text" 
                    value={this.state.email}
                    onChange={this.updateEmail}/>
                </div>
            </React.Fragment>
        )
    }
}

export default SurveyForm;