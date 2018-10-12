import React from "react";
import Fish from "./Fish";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	render() {
		return (<div className="compatibility">{this.renderFish()}</div>);
	}

	renderFish = () => {
		return this.props.selected.map(fish => {
			return (<Fish
					key={fish.Id}
					name={fish.Name}
					fishClassName={"fish compatible-yes small"}
					clickFn={()=>{}}
			/>);
		});
	}

}

export default Compatibility;

// <Fish name="Clown" fishClassName="fish compatible-yes small" clickFn=""/>