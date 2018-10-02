import React from "react";
import Fish from "./Fish";

class Home extends React.Component {
	state = { fish: [] };

	componentDidMount() {
		fetch("http://127.0.0.1:8080/api/fish").then(res => {
			res.json().then(r => this.setState({ fish: r }));
		});
	}

	renderFish = () => {
		return this.state.fish.map(fish => (
			<Fish key={fish.Id} name={fish.Name} />
		));
	};

	render() {
		return <div>{this.renderFish()}</div>;
	}
}

export default Home;
