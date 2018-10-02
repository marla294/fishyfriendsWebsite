import React from "react";

class Home extends React.Component {
	state = { fish: null };

	componentDidMount() {
		fetch("http://127.0.0.1:8080/api/fish").then(res => {
			res.json().then(r => console.log(r));
		});
	}

	render() {
		return <div>{this.state.fish}</div>;
	}
}

export default Home;

