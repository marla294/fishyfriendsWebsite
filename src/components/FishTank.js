import React from "react";
import PropTypes from "prop-types";
import Fish from "./Fish";
import "../css/FishTank.css";

class FishTank extends React.Component {
	renderFish = () => {
		return this.props.fishes.map(fish => (
			<Fish key={fish.Id} name={fish.Name} />
		));
	};

	render() {
		return <div className="fishTank">{this.renderFish()}</div>;
	}
}

FishTank.propTypes = {
	fishes: PropTypes.array.isRequired
};

export default FishTank;
