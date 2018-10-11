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
		let fishClasses = "fish";

		fishClasses = this.getFishClassesIsSelected();

		if (fishClasses === "fish")
		{
			fishClasses = this.getFishClassesIsCompatible();
		}

		return fishClasses;
	}

	getFishClassesIsSelected = () => {
		if (this.state.selected)
		{
			return "fish selected";
		}
		return "fish";
	}

	getFishClassesIsCompatible = () => {
		let compatible = this.props.compatible.toLowerCase();
		let hasCompatible = ["yes", "maybe", "no"].findIndex(ans => ans === compatible);

		if (hasCompatible !== -1)
		{
			return "fish compatible-" + compatible;
		}
		return "fish";
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

	componentDidUpdate(prevProps, prevState) {
		if (this.state.selected !== prevState.selected) {
			this.props.fetchFishCompatibility();
		}
	}
	
}

Fish.propTypes = {
	name: PropTypes.string.isRequired,
	compatible: PropTypes.string.isRequired,
	fetchFishCompatibility: PropTypes.func.isRequired
};

export default Fish;