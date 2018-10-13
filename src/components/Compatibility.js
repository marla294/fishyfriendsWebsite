import React from "react";
import Fish from "./Fish";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	render() {
		return (<div className={this.showCompatibility()}>{this.renderFish()}</div>);
	}

	renderFish = () => {
		if (this.props.compatibility) {
			return this.props.compatibility.CompatibilityList.map(C => {
				let fish = C.SelectedFish;
				return (<Fish
						key={fish.Id}
						name={fish.Name}
						fishClassName={this.getFishClassName(C)}
						clickFn={()=>{}}
				/>);
			});
		} else {
			return <div></div>
		}
		
	};

	showCompatibility = () => {
		if (this.props.show) {
			return "compatibility show";
		} else {
			return "compatibility";
		}
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