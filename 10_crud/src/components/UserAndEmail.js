import React from "react";
import ".././App.css";

export default class UserAndEmail extends React.Component {
  state = {
    users: [
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Jon Snow",
        email: "jonsnow@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Ned Stark",
        email: "nedstark@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Frodo Baggins",
        email: "frodo@bagend.com"
      }
    ],
    newUserName: "",
    newUserEmail: "",
    editingSet: "",
    editName: "",
    editEmail: "",
    deleteSet: ""
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  renderAddUser() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="User name"
          value={this.state.newUserName}
          onChange={this.updateFormField}
          name="newUserName"
        />
        <input
          type="text"
          placeholder="User email"
          value={this.state.newUserEmail}
          onChange={this.updateFormField}
          name="newUserEmail"
        />
        <button onClick={this.addUser}>Add</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          if (this.state.editingSet._id === user._id) {
            return (
              <React.Fragment key={user._id}>
                <div className="box">
                  <h3>
                    <input
                      type="text"
                      name="editName"
                      value={this.state.editName}
                      onChange={this.updateFormField}
                    />
                  </h3>
                  <h4>
                    <input
                      type="text"
                      name="editEmail"
                      value={this.state.editEmail}
                      onChange={this.updateFormField}
                    />
                  </h4>
                  <button
                    onClick={() => {
                      this.confirmEdit(user);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      this.cancelEdit(user);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={user._id}>
                <div className="box">
                  <h3>{user.name}</h3>
                  <h4>{user.email}</h4>
                  <button
                    onClick={() => {
                      this.beginEdit(user);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      this.deleteUser(user);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </React.Fragment>
            );
          }
        })}
        {this.renderAddUser()}
      </div>
    );
  }

  addUser = () => {
    const newUserToAdd = {
      _id: Math.floor(Math.random() * 10000),
      name: this.state.newUserName,
      email: this.state.newUserEmail
    };
    const addingUser = [...this.state.users, newUserToAdd];
    this.setState({
      users: addingUser
    });
  };

  beginEdit = (user) => {
    this.setState({
      editingSet: user,
      editName: user.name,
      editEmail: user.email
    });
  };

  cancelEdit = (user) => {
    this.setState({
      editingSet: "",
      editName: "",
      editEmail: ""
    });
  };

  confirmEdit = (user) => {
    const clone = {
      ...this.state.editingSet,
      name: this.state.editName,
      email: this.state.editEmail
    };

    const index = this.state.users.findIndex((e) => e._id === clone._id);
    const modify = [
      ...this.state.users.slice(0, index),
      clone,
      ...this.state.users.slice(index + 1)
    ];
    this.setState({
      users: modify,
      editingSet: "",
      editName: "",
      editEmail: ""
    });
  };

  deleteUser = (user) => {
    const index = this.state.users.findIndex((e) => e._id === user._id);
    const modify = [
      ...this.state.users.slice(0, index),
      ...this.state.users.slice(index + 1)
    ];
    this.setState({
      users: modify
    });
  };
}
