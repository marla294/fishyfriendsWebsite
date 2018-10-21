import React from "react";
import FishTank from "./FishTank";
import "../css/Home.css";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<a onClick={this.goToAbout} className="homeGoToAbout">Help Using This Page</a>
				<h1 className="homeTitle">Fish Friends</h1>
				<h3 className="homeSubTitle"><i>Select up to ten fish and see how they get along with the others!</i></h3>
				<FishTank/>
			</div>
		);
	}

	goToAbout = event => {
		event.preventDefault();
		this.props.history.push("/About");
	};
}

export default Home;
