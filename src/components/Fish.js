import React from "react";
import PropTypes from "prop-types";

class Fish extends React.Component {
	render() {
		return <div>{this.props.name}</div>;
	}
}

Fish.propTypes = {
	name: PropTypes.string.isRequired
};

export default Fish;
