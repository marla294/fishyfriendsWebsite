import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../css/Fish.css";

class Fish extends React.Component {
	render() {
		return (
			<div className={this.getFishClassName(this.props.fish)}>
				<div onClick={this.props.clickFn} className="fishInner">
					<img src={this.getImageSource()} alt="fishPic" />
					<div className="name">
						{this.capitalizeFirstLetter(this.props.fish.Name)}
					</div>
				</div>
				<Button label="i" show={this.props.showInfoButton} clickFn={this.getInfoClickFn()} />
			</div>
		);
	}

	getFishClassName = fish => {
		let fishClassName = this.getFishClassNameIsSelected();

		if (fishClassName === "fish")
		{
			fishClassName = this.getFishClassNameIsCompatible(fish);
		}

		return fishClassName + (this.props.makeSmall ? " small" : "");
	};

	getFishClassNameIsSelected = () => {
		if (this.props.isSelected)
		{
			return "fish selected";
		}

		return "fish";
	};

	getFishClassNameIsCompatible = fish => {
		let compatible = this.getCompatible().toLowerCase();
		let hasCompatible = ["yes", "maybe", "no"].findIndex(ans => ans === compatible);

		if (hasCompatible !== -1)
		{
			return "fish compatible-" + compatible;
		}

		return "fish";
	};

	getCompatible = () => {
		let compatible = this.props.compatible;

		if (compatible)
		{
			return compatible;
		}

		return "";
	};

	getImageSource = () => {
		let pictureName = this.props.fish.Name;

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

	getInfoClickFn = () => {
		return this.props.showInfoButton ? this.props.clickInfoBtnFn : (() => {});
	};
	
}

Fish.propTypes = {
	fish: PropTypes.object.isRequired,
	clickFn: PropTypes.func.isRequired,
	showInfoButton: PropTypes.bool.isRequired,
	isSelected: PropTypes.bool.isRequired,
	compatible: PropTypes.string.isRequired,
	makeSmall: PropTypes.bool.isRequired
};

export default Fish;