import React from "react";
import FishTank from "./FishTank";
import Button from "./Button";
import "../css/Home.css";

class Home extends React.Component {
	state = { fishes: [], compatibility: [] };

	componentDidMount() {
		this.fetchAllFish();
	}

	fetchAllFish = () => {
		fetch("http://127.0.0.1:8080/api/fish").then(res => {
			res.json().then(r => this.setState({ fishes: r }));
		});
	};

	fetchFishCompatibility = () => {
		fetch(
			"http://127.0.0.1:8080/api/Compatibility?fishNames=clown&fishNames=groupers"
		).then(res => {
			res.json().then(r => this.setState({ compatibility: r }));
		});
	};

	render() {
		return (
			<div className="home">
				<div className="headerWrapper">
					<h1>Select fish to compare:</h1>
				</div>
				<FishTank fishes={this.state.fishes} />
				<div className="buttonWrapper">
					<Button
						label={"Calculate"}
						clickFn={this.fetchFishCompatibility}
					/>
				</div>
			</div>
		);
	}
}

export default Home;
