import React from "react";
// import PropTypes from "prop-types";
import Fish from "./Fish";
import "../css/FishTank.css";

class FishTank extends React.Component {
	state = { selectedFishes: [], compatibility: [] };
	url = "http://127.0.0.1:8080/api/";

	render() {
		return <div className="fishTank">{this.renderFishTank()}</div>;
	}

	renderFishTank = () => {
		return this.state.compatibility.map(f => { 
				let fish = f.MainFish;
				return (
					<div
						key={fish.Id}
						className="fishWrapper"
						onClick={() => this.clickOnAFish(fish)}
					>
						<Fish key={fish.Id} name={fish.Name} compatible={this.getCompatible(fish)}/>
					</div>
				);
			}
		);
	};

	componentDidMount() {
		this.fetchFishCompatibility();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.selectedFishes !== prevState.selectedFishes) {
			this.fetchFishCompatibility();
		}
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

	clickOnAFish = fish => {
		const fishIndex = this.getFishIndexFromSelectedFishArray(fish);

		if (fishIndex === -1) {
			this.addFishToSelectedFishArray(fish);
		} else {
			this.removeIndexFromSelectedFishArray(fishIndex);
		}
	};

	getFishIndexFromSelectedFishArray = fish => {
		return this.state
			.selectedFishes
			.findIndex(f => f.Name === fish.Name);
	};

	addFishToSelectedFishArray = fish => {
		let selectedFishes = [...this.state.selectedFishes];
		selectedFishes.push(fish);
		this.setState({ selectedFishes });
	};

	removeIndexFromSelectedFishArray = fishIndex => {
		let selectedFishes = [...this.state.selectedFishes];
		selectedFishes.splice(fishIndex, 1);
		this.setState({ selectedFishes });
	};

	getCompatible = fish => {
		let compatibility = this.state.compatibility.find(c => c.MainFish.Id === fish.Id);

		if (compatibility !== undefined && compatibility.WorstCompatibility)
		{
			return compatibility.WorstCompatibility;
		}

		return "";
	}
}

// FishTank.propTypes = {
// 	setSelectedFishes: PropTypes.func.isRequired,
// 	getSelectedFishes: PropTypes.func.isRequired,
// 	compatibility: PropTypes.array.isRequired,
// 	fetchFishCompatibility: PropTypes.func.isRequired
// };

export default FishTank;
