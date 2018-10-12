import React from "react";
import PropTypes from "prop-types";
import "../css/Fish.css";

class Fish extends React.Component {
	render() {
		return (
			<div className={this.props.fishClassName} onClick={this.props.clickFn} onMouseOver={() => {console.log("hi");}}>
				<img src={this.getImageSource()} alt="fishPic" />
				<div className="name">
					{this.capitalizeFirstLetter(this.props.name)}
				</div>
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
	
}

Fish.propTypes = {
	name: PropTypes.string.isRequired,
	fishClassName: PropTypes.string.isRequired
};

export default Fish;