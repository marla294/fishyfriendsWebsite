import React from "react";
import PropTypes from "prop-types";
import "../css/Fish.css";

class Fish extends React.Component {
	state = {
		selected: true
	};

	getImageSource = () => {
		let pictureName = this.props.name;

		if (pictureName === "corals/clams") {
			pictureName = "corals and clams";
		}

		if (pictureName === "crabs, shrimps and snails") {
			pictureName = "crabs shrimp and snails";
		}

		return `/images/fish/${pictureName}.png`;
	};

	capitalizeFirstLetter = S => {
		return S[0].toUpperCase() + S.slice(1);
	};

	render() {
		return (
			<div className={`fish ${this.state.selected ? "selected" : ""}`}>
				<img src={this.getImageSource()} alt="fishPic" />
				<div className="name">
					{this.capitalizeFirstLetter(this.props.name)}
				</div>
			</div>
		);
	}
}

Fish.propTypes = {
	name: PropTypes.string.isRequired
};

export default Fish;
