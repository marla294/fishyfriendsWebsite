import React from "react";

class Home extends React.Component {
	state = { fish: null };

	componentDidMount() {
		fetch("http://127.0.0.1:8080/api/fish", { mode: "no-cors" }).then(
			res => {
				const fish = res.data;
				this.setState({ fish });
			}
		);
	}

	render() {
		return <div>{this.state.fish}</div>;
	}
}

export default Home;
