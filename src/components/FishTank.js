import React from "react";
import PropTypes from "prop-types";
import Fish from "./Fish";
import "../css/FishTank.css";

class FishTank extends React.Component {
	render() {
		return <div className="fishTank">{this.renderFishTank()}</div>;
	}

	renderFishTank = () => {
		return this.props.compatibility.map(f => { 
				let fish = f.MainFish;
				return (
					<div
						key={fish.Id}
						className="fishWrapper"
						onClick={() => this.clickOnAFish(fish)}
					>
						<Fish key={fish.Id} name={fish.Name} compatible={this.getCompatible(fish)} fetchFishCompatibility={this.props.fetchFishCompatibility} />
					</div>
				);
			}
		);
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
		return this.props
			.getSelectedFishes()
			.findIndex(f => f.Name === fish.Name);
	};

	addFishToSelectedFishArray = fish => {
		let selectedFishes = [...this.props.getSelectedFishes()];
		selectedFishes.push(fish);
		this.props.setSelectedFishes(selectedFishes);
	};

	removeIndexFromSelectedFishArray = fishIndex => {
		let selectedFishes = [...this.props.getSelectedFishes()];
		selectedFishes.splice(fishIndex, 1);
		this.props.setSelectedFishes(selectedFishes);
	};

	getCompatible = fish => {
		let compatibility = this.props.compatibility.find(c => c.MainFish.Id === fish.Id);

		if (compatibility !== undefined && compatibility.WorstCompatibility)
		{
			return compatibility.WorstCompatibility;
		}

		return "";
	}
}

FishTank.propTypes = {
	setSelectedFishes: PropTypes.func.isRequired,
	getSelectedFishes: PropTypes.func.isRequired,
	compatibility: PropTypes.array.isRequired,
	fetchFishCompatibility: PropTypes.func.isRequired
};

export default FishTank;
