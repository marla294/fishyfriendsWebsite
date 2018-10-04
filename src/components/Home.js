import React from "react";
import FishTank from "./FishTank";

class Home extends React.Component {
	state = { fishes: [] };

	componentDidMount() {
		fetch("http://127.0.0.1:8080/api/fish").then(res => {
			res.json().then(r => this.setState({ fishes: r }));
		});
	}

	render() {
		return <FishTank fishes={this.state.fishes} />;
	}
}

export default Home;
