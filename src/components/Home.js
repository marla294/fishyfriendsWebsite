import React from "react";
import FishTank from "./FishTank";
import "../css/Home.css";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="headerWrapper">
					<h1>Select fish to compare:</h1>
				</div>
				<FishTank/>
			</div>
		);
	}
}

export default Home;
