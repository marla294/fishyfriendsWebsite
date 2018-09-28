import React from "react";

class Home extends React.Component {
	state = { fish: null };

	ComponentDidMount() {
		fetch("http://127.0.0.1:8080/api/fish").then(res => {
			const fish = res.data;
			this.setState({ fish });
		});
	}

	render() {
		return <div>{console.log(this.state.fish)}</div>;
	}
}

export default Home;
