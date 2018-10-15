import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../css/Fish.css";

class Fish extends React.Component {
	render() {
		return (
			<div className={this.props.fishClassName}>
				<div onClick={this.props.clickFn} className="fishInner">
					<img src={this.getImageSource()} alt="fishPic" />
					<div className="name">
						{this.capitalizeFirstLetter(this.props.name)}
					</div>
				</div>
				<Button label="i" show={this.props.showInfoButton} clickFn={this.getInfoClickFn()} />
			</div>
		);
	}

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

	getInfoClickFn = () => {
		return this.props.showInfoButton ? this.props.clickInfoBtnFn : (() => {});
	};
	
}

Fish.propTypes = {
	name: PropTypes.string.isRequired,
	fishClassName: PropTypes.string.isRequired,
	clickFn: PropTypes.func.isRequired,
	showInfoButton: PropTypes.bool.isRequired
};

export default Fish;