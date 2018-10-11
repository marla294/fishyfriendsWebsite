import React from "react";
import FishTank from "./FishTank";
import "../css/Home.css";

class Home extends React.Component {
	state = { selectedFishes: [], compatibility: [] };
	url = "http://127.0.0.1:8080/api/";

	render() {
		return (
			<div className="home">
				<div className="headerWrapper">
					<h1>Select fish to compare:</h1>
				</div>
				<FishTank
					setSelectedFishes={this.setSelectedFishes}
					getSelectedFishes={this.getSelectedFishes}
					compatibility={this.state.compatibility}
					fetchFishCompatibility={this.fetchFishCompatibility}
				/>
			</div>
		);
	}

	componentDidMount() {
		this.fetchFishCompatibility();
	}

	fetchFishCompatibility = () => {
		fetch(this.getFishCompatibilityURL()).then(res => {
			res.json().then(r => this.setState({ compatibility: r }));
		});
	};

	getFishCompatibilityURL = () => {
		let compatibilityURLString = "Compatibility?";

		this.state.selectedFishes.forEach(fish => {
			compatibilityURLString =
				compatibilityURLString + `fishNames=${fish.Name}&`;
		});

		return this.url + compatibilityURLString.slice(0, -1);
	};

	setSelectedFishes = selectedFishes => {
		this.setState({ selectedFishes });
	};

	getSelectedFishes = () => {
		return this.state.selectedFishes;
	};

	
}

export default Home;
