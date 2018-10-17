import React from "react";
import Fish from "./Fish";
import DropdownPane from "./DropdownPane";
import PropTypes from "prop-types";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	render() {
		return (
			<DropdownPane title={"Compatibility"} showPane={this.props.showCompatibility} content={this.renderFish()} />
		);
	}

	renderFish = () => {
		return this.props.compatibility.CompatibilityList.map(C => {
			let fish = C.SelectedFish;
			return (<Fish
					key={fish.Id}
					fish={fish}
					clickFn={()=>{}}
					showInfoButton={false}
					isSelected={false}
					compatible={C.Compatible}
					makeSmall={true}
			/>);
		});
	};

}

Compatibility.propTypes = {
	compatibility: PropTypes.object.isRequired,
	showCompatibility: PropTypes.bool.isRequired
};

export default Compatibility;