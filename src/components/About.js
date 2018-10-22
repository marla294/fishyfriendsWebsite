import React from "react";
import Footer from "./Footer";
import "../css/About.css";

class About extends React.Component {
	render() {
		return (
			<div className="About">
				<h1>How This Works</h1>
				<h3>Determining Fish Compatibility</h3>
				<p>One of the challenging things about setting up a saltwater aquarium is stocking it with fish.  Not all aquarium fish get along.  Some fish are docile while others are aggressive, even with members of their own species.  If fish don't get along, they can harm and even kill other fish.</p>

				<p>This tool will help you plan and select fish that will be compatible.  Select one fish and the others in the grid will automatically color in according to how they get along with the selected fish.  A fish colored green will pair well with the selected fish, while a yellow fish may work under some circumstances with the selected fish.  A red coloring on a fish means it will not work with the ones you have selected.</p>

				<p>You can select more than one fish.  In the case of multiple fish being selected, the other fish will color in according to their worst compatibility match.  You can see what the individual compatibility with the selected fishes are by clicking the "i" button on any fish.</p>

				<h3>Acknowledgements</h3>

				<p>The data and pictures for this website were gathered from the helpful graphic found here: <a href="https://www.ocellarisclownfish.com/compatibility/">https://www.ocellarisclownfish.com/compatibility/</a>.  Thank you to Petco and Ocellaris Clownfish for supplying this chart!</p>

				<a onClick={this.goToHome} className="aboutGoToHome">Back To Application</a>

				<Footer />
			</div>
		);
	}

	goToHome = event => {
		event.preventDefault();
		this.props.history.push("/Home");
	};
}

export default About;