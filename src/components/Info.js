import React from "react";
import PropTypes from "prop-types";
import "../css/Info.css";

class Info extends React.Component {
	render() {
		return (
			<div>
				{this.renderInfo()}
			</div>
		);
	};

	renderInfo = () => {
		return this.props.fish.Info.map((info, i) => {
			return <div key={i}>{info}</div>
		})
	};
}

Info.propTypes = {
	fish: PropTypes.object.isRequired
};

export default Info;