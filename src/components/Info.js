import React from "react";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from '../HelperFunctions';
import DropdownPane from "./DropdownPane";

class Info extends React.Component {
	render() {
		return (
			<DropdownPane title={capitalizeFirstLetter(this.props.fish.Name)} showPane={true} content={this.renderInfo()} />
		);
	};

	renderInfo = () => {
		return this.props.fish.Info.map((info, i) => {
			return <p key={i}>{info}</p>
		})
	};
}

Info.propTypes = {
	fish: PropTypes.object.isRequired
};

export default Info;