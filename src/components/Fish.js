import React from "react";
import PropTypes from "prop-types";
import "../css/Fish.css";

class Fish extends React.Component {
	state = {
		selected: false
	};

	render() {
		return (
			<div
				className={this.getFishClasses()}
				onClick={this.selectFish}
			>
				<img src={this.getImageSource()} alt="fishPic" />
				<div className="name">
					{this.capitalizeFirstLetter(this.props.name)}
				</div>
			</div>
		);
	}

	getFishClasses = () => {
		if (this.state.selected)
		{
			return "fish selected";
		}

		switch (this.props.compatible)
		{
			case "Yes":
				return "fish compatible-yes";
			case "Maybe":
				return "fish compatible-maybe";
			case "No":
				return "fish compatible-no";
			default:
				return "fish";
		}
	}

	selectFish = () => {
		this.setState({ selected: !this.state.selected });
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

	
}

Fish.propTypes = {
	name: PropTypes.string.isRequired,
	compatible: PropTypes.string.isRequired
};

export default Fish;