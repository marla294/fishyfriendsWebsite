import React from "react";
import FishTank from "./FishTank";
import { Link } from 'react-router-dom';
import "../css/Home.css";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<Link to="/About" className="homeGoToAbout">Help Using This Page</Link>
				<h1 className="homeTitle">Fish Friends</h1>
				<h3 className="homeSubTitle"><i>Select up to ten fish and see how they get along with the others!</i></h3>
				<FishTank/>
			</div>
		);
	}
}

export default Home;