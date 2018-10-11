import React from "react";
import FishTank from "./FishTank";
import "../css/Home.css";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<FishTank/>
			</div>
		);
	}
}

export default Home;
