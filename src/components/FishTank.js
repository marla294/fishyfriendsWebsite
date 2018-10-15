import React from "react";
import Fish from "./Fish";
import Compatibility from "./Compatibility";
import "../css/FishTank.css";

class FishTank extends React.Component {
	state = { selectedFishes: [], compatibility: [], selectedFish: null };
	url = "http://127.0.0.1:8080/api/";

	render() {
		return <div className="fishTank">{this.renderFishTank()}</div>;
	}

	renderFishTank = () => {
		return this.state.compatibility.map(f => { 
				let fish = f.MainFish;
				return (<div key={fish.Id} className="fishContainer"> 
							<Fish 
								fish={fish}
								clickFn={() => this.clickOnAFish(fish)}
								showInfoButton={true}
								isSelected={this.isSelectedFish(fish)}
								clickInfoBtnFn={() => this.setSelectedFish(fish)}
								compatible={this.getCompatible(fish)}
								makeSmall={false}
							/>
							<Compatibility 
								compatibility={this.getCompatibility(fish)} 
								show={this.showCompatibility(fish)}
							/>
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

	isSelectedFish = fish => {
		let selectedFishIndex = this.getFishIndexFromSelectedFishArray(fish);

		if (selectedFishIndex !== -1)
		{
			return true;
		}

		return false;
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
		let compatibility = this.getCompatibility(fish);

		if (compatibility !== undefined && compatibility.WorstCompatibility)
		{
			return compatibility.WorstCompatibility;
		}

		return "";
	};

	getCompatibility = fish => {
		return this.state.compatibility.find(c => c.MainFish.Id === fish.Id);
	};

	setSelectedFish = fish => {
		if (this.state.selectedFish && this.state.selectedFish.Id === fish.Id) {
			this.setState({ selectedFish: null });
		} else {
			this.setState({ selectedFish: fish });
		}
	};

	showCompatibility = fish => {
		return fish === this.state.selectedFish;
	};

}

export default FishTank;
