import React from "react";
import Fish from "./Fish";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	render() {
		return (<div className="compatibility"><Fish name="Clown" fishClassName="fish compatible-yes small" clickFn={()=>{}}/></div>);
	}

}

export default Compatibility;

// <Fish name="Clown" fishClassName="fish compatible-yes small" clickFn=""/>