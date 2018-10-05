import React from "react";
import FishTank from "./FishTank";
import "../css/Home.css";

class Home extends React.Component {
	state = { fishes: [] };

	componentDidMount() {
		fetch("http://127.0.0.1:8080/api/fish").then(res => {
			res.json().then(r => this.setState({ fishes: r }));
		});
	}

	render() {
		return (
			<div className="home">
				<h1 className="header">Select fish to compare:</h1>
				<FishTank fishes={this.state.fishes} />
			</div>
		);
	}
}

export default Home;
