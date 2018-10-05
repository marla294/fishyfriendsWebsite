import React from "react";
import PropTypes from "prop-types";
import "../css/Button.css";

class Button extends React.Component {
	render() {
		return (
			<div className="button">
				<h2>{this.props.label}</h2>
			</div>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired
};

export default Button;
