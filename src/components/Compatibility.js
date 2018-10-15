import React from "react";
import Fish from "./Fish";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	render() {
		return (
				<div className={this.showCompatibility()}>
					<div>Compatibility</div>
					<div className="compatibilityContainer">
						{this.renderFish()}
					</div>
				</div>
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

	showCompatibility = () => {
		let show = this.props.show ? " show" : "";

		return "compatibility" + show;
	};

}

export default Compatibility;