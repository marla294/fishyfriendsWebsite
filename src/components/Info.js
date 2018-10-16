import React from "react";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from '../HelperFunctions';
import "../css/Info.css";

class Info extends React.Component {
	render() {
		return (
			<div className="info">
				<div className="title">{capitalizeFirstLetter(this.props.fish.Name)}</div>
				<ul>
					{this.renderInfo()}
				</ul>
			</div>
		);
	};

	renderInfo = () => {
		return this.props.fish.Info.map((info, i) => {
			return <li key={i}>{info}</li>
		})
	};
}

Info.propTypes = {
	fish: PropTypes.object.isRequired
};

export default Info;

