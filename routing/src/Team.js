import React, { Component } from "react";
import Contacts from "./Components/Contacts";
import "./App.css";

class Team extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <br />
        <h1>Team Members</h1>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Team;
