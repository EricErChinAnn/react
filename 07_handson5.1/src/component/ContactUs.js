import React from "react";

class ContactUs extends React.Component{
    state={
        firstName:"",
        lastName:"",
        enquiryType:"",
        country:"",
    }

    // editFirstName = (e)=>{
    //     console.log(e);
    //     this.setState({
    //         firstName:e.target.value
    //     })
    // }
    // editLastName = (e)=>{
    //     this.setState({
    //         lastName:e.target.value
    //     })
    // }

    // editQType = (e)=>{
    //     this.setState({
    //         enquiryType:e.target.value
    //     })
    // }
// this vvv can replace all the above ^^^
    editForAll = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <label>First Name: </label>
                    <input 
                    type="text"
                    value={this.state.firstName}
                    onChange={this.editForAll}
                    name="firstName"
                    ></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input 
                    type="text"
                    value={this.state.lastName}
                    onChange={this.editForAll}
                    name="lastName"
                    ></input>
                </div>
                <div>
                    <label>Query Type: </label>
                        <input 
                        type="radio" 
                        name="enquiryType"
                        value="Sales"
                        checked={this.state.enquiryType==="Sales"}
                        onChange={this.editForAll}
                        ></input>
                        <label>Sales</label>

                        <input 
                        type="radio" 
                        name="enquiryType"
                        value="Support"
                        checked={this.state.enquiryType==="Support"}
                        onChange={this.editForAll}
                        ></input>
                        <label>Support</label>

                        <input 
                        type="radio" 
                        name="enquiryType"
                        value="Marketing"
                        checked={this.state.enquiryType==="Marketing"}
                        onChange={this.editForAll}
                        ></input>
                        <label>Marketing</label>
                </div>
                <div>
                    <label>Country: </label>
                    <select name="country" value={this.state.country} onChange={this.editForAll}>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Thailand">Thailand</option>
                    </select>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactUs