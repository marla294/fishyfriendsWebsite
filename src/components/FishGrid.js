import React from "react";
import PropTypes from "prop-types";
import Fish from "./Fish";

class FishGrid extends React.Component {
	renderFish = () => {
		return this.props.fishes.map(fish => (
			<Fish key={fish.Id} name={fish.Name} />
		));
	};

	render() {
		return <div>{this.renderFish()}</div>;
	}
}

FishGrid.propTypes = {
	fishes: PropTypes.array.isRequired
};

export default FishGrid;
