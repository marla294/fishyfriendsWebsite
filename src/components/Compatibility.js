import React from "react";
import Fish from "./Fish";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	render() {
		return (<div className="compatibility">{this.renderFish()}</div>);
	}

	renderFish = () => {
		return this.props.compatibility.CompatibilityList.map(C => {
			let fish = C.SelectedFish;
			return (<Fish
					key={fish.Id}
					name={fish.Name}
					fishClassName={this.getFishClassName(C)}
					clickFn={()=>{}}
			/>);
		});
	};

	getFishClassName = compatibility => {
		let compatible = compatibility.Compatible;
		let className = "fish small compatible-";

		return className + this.getFishClassNameCompatible(compatible);
	};

	getFishClassNameCompatible = compatible => {
		let returnSt = "";

		switch (compatible) {
			case "Yes":
				returnSt = "yes";
				break;
			case "Maybe":
				returnSt = "maybe";
				break;
			case "No":
				returnSt = "no";
				break;
			default:
				returnSt = "";
				break;
		}

		return returnSt;
	}

}

export default Compatibility;