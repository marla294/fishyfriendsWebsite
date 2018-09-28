import React, { Component } from "react";
// import axios from "axios";

class App extends Component {
  state = { fish: [] };

  ComponentDidMount() {
    console.log("hi");
    // axios.get("http://127.0.0.1:8080/api/fish").then(res => {
    //   console.log("hi");
    //   const fish = res.data;
    //   this.setState({ fish });
    // });
  }

  render() {
    return (
      <div className="App">
        <ul>{this.state.fish.map(f => <li>f.Name</li>)}</ul>
      </div>
    );
  }
}

export default App;
