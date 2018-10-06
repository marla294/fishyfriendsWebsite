import React from "react";
import PropTypes from "prop-types";
import Fish from "./Fish";
import "../css/FishTank.css";

class FishTank extends React.Component {
	render() {
		return <div className="fishTank">{this.renderFishTank()}</div>;
	}

	renderFishTank = () => {
		return this.props.fishes.map(fish => (
			<div
				key={fish.Id}
				className="fishWrapper"
				onClick={() => this.clickOnAFish(fish)}
			>
				<Fish key={fish.Id} name={fish.Name} />
			</div>
		));
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
			.getSelectedFish()
			.findIndex(f => f.Name === fish.Name);
	};

	addFishToSelectedFishArray = fish => {
		let selectedFish = [...this.props.getSelectedFish()];
		selectedFish.push(fish);
		this.props.setSelectedFish(selectedFish);
	};

	removeIndexFromSelectedFishArray = fishIndex => {
		let selectedFish = [...this.props.getSelectedFish()];
		selectedFish.splice(fishIndex, 1);
		this.props.setSelectedFish(selectedFish);
	};
}

FishTank.propTypes = {
	fishes: PropTypes.array.isRequired
};

export default FishTank;
