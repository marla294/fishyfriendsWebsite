import React from "react";
import PropTypes from "prop-types";
import "../css/Button.css";

class Button extends React.Component {
	render() {
		return (
			<div className={this.getClassName()} onClick={this.props.clickFn}>
				<h2>{this.props.label}</h2>
			</div>
		);
	}

	getClassName = () => {
		let className = "button";

		return className + (this.props.show ? " showButton" : "");
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	clickFn: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};

export default Button;
