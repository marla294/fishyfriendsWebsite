import React from "react";

class Home extends React.Component {
	state = { fish: [] };

	componentDidMount() {
		fetch("http://127.0.0.1:8080/api/fish").then(res => {
			res.json().then(r => this.setState({ fish: r }));
		});
	}

	renderFish = () => {
		const names = this.state.fish.map(fish => fish.Name);

		return names.map(name => <div>{name}</div>);
	};

	render() {
		return <div>{this.renderFish()}</div>;
	}
}

export default Home;
