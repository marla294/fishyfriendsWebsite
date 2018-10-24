import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { capitalizeFirstLetter } from '../HelperFunctions';
import "../css/Fish.css";

class Fish extends React.Component {
	render() {
		return (
			<div className={this.getClassName()} >
				<div onClick={this.props.clickFn} className="fishInner">
					<img src={this.getImageSource()} alt="fishPic" />
					<div className="name">
						{capitalizeFirstLetter(this.props.fish.Name)}
					</div>
				</div>
				<Button label="i" show={this.showInfoButton()} clickFn={this.getInfoClickFn()} />
			</div>
		);
	};

	getClassName = () => {
		let className = "fish";

		if (this.fishHasCompatible())
		{
			className = "fish compatible-" + this.props.compatible.toLowerCase();
		}

		if (this.props.isSelected)
		{
			className = "fish selected";
		}

		return className + (this.props.makeSmall ? " small" : "");
	};

	fishHasCompatible = () => {
		let compatible = this.props.compatible.toLowerCase();
		let hasCompatible = ["yes", "maybe", "no"].findIndex(ans => ans === compatible);

		if (hasCompatible !== -1)
		{
			return true;
		}

		return false;
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

	showInfoButton = () => {
		if (this.fishHasCompatible() && !this.props.makeSmall)
		{
			return true;
		}
		return false;
	};

	getInfoClickFn = () => {
		return !this.props.makeSmall ? this.props.clickInfoBtnFn : (() => {});
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