import React from "react";

class ContactUs extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        enquiryType: "",
        country: "",
        howYouKnow: "",
        buttonPressed: false,
        contactOptions:[],
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
    editForAll = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editCheckbox = (e)=>{
        let clone = this.state.contactOptions.slice();
        if(!(clone.includes(e.target.value))){
            this.setState({
                contactOptions:[...clone,e.target.value]
            })
        } else {
            let indexRemove = clone.findIndex((ele)=>{
                return ele === e.target.value})
            this.setState({
                contactOptions:[...clone.slice(0,indexRemove),...clone.slice(indexRemove+1)]
            })
        }
    }

    summaryInfo = () => {
        if (this.state.buttonPressed) {
            return (
                <ul>
                    <li>First Name: {this.state.firstName}</li>
                    <li>Last Name: {this.state.lastName}</li>
                    <li>Enquiry Type: {this.state.enquiryType}</li>
                    <li>Country: {this.state.country}</li>
                    <li>Known By: {this.state.howYouKnow}</li>
                </ul>
            )
        } else { return null}
    }

    render() {
        return (
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
                        value="sales"
                        checked={this.state.enquiryType === "sales"}
                        onChange={this.editForAll}
                    ></input>
                    <label>Sales</label>

                    <input
                        type="radio"
                        name="enquiryType"
                        value="support"
                        checked={this.state.enquiryType === "support"}
                        onChange={this.editForAll}
                    ></input>
                    <label>Support</label>

                    <input
                        type="radio"
                        name="enquiryType"
                        value="marketing"
                        checked={this.state.enquiryType === "marketing"}
                        onChange={this.editForAll}
                    ></input>
                    <label>Marketing</label>
                </div>
                <div>
                    <label>Country: </label>
                    <select name="country" value={this.state.country} onChange={this.editForAll}>
                        <option value="">--Select a Country--</option>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="thailand">Thailand</option>
                    </select>
                </div>
                <div>
                    <label>How did you hear about us: </label>
                    <select name="howYouKnow" value={this.state.howYouKnow} onChange={this.editForAll}>
                        <option value="">--Select an Option--</option>
                        <option value="wordOfMouth">Word of Mouth</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="socialMedia">Social Media</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div>
                    <label>Contact Options: </label>
                    <input 
                    type="checkbox" 
                    name="contactOptions" 
                    value="email"
                    checked={this.state.contactOptions.includes("email")}
                    onChange={this.editCheckbox}
                    />
                    <label>Email</label>

                    <input 
                    type="checkbox" 
                    name="contactOptions" 
                    value="phone"
                    checked={this.state.contactOptions.includes("phone")}
                    onChange={this.editCheckbox}
                    />
                    <label>Phone</label>

                    <input 
                    type="checkbox" 
                    name="contactOptions" 
                    value="slowMail"
                    checked={this.state.contactOptions.includes("slowMail")}
                    onChange={this.editCheckbox}
                    />
                    <label>Slow Mail</label>
                </div>
                <div>
                    <input type="submit"
                    disabled={!(this.state.firstName&&this.state.lastName&&this.state.country&&this.state.enquiryType&&this.state.howYouKnow)}
                        onClick={() => {this.setState({buttonPressed:true})}}></input>
                </div>
                {this.summaryInfo()}
            </React.Fragment>
        )
    }
}

export default ContactUs