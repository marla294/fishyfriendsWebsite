import React from "react";
import PropTypes from "prop-types";
import "../css/Fish.css";

class Fish extends React.Component {
	getImageSource = () => {
		return `/images/fish/${this.props.name}.png`;
	};

	render() {
		return (
			<div className="fish">
				<img src={this.getImageSource()} alt="fishPic" />
				<div className="name">{this.props.name}</div>
			</div>
		);
	}
}

Fish.propTypes = {
	name: PropTypes.string.isRequired
};

export default Fish;
