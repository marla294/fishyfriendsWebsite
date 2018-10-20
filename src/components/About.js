import React from "react";
import "../css/About.css";

class About extends React.Component {
	render() {
		return (
			<div className="About">
				<h1>How This Works</h1>
				<h3>Explanation</h3>
				<p>One of the challenging things about setting up a saltwater aquarium is stocking it with fish.  Not all aquarium fish get along.  Some fish are docile while others are aggressive, even with members of their own species.  If fish don't get along, they can harm and even kill other fish.</p>

				<p>This tool will help you plan and select fish that will be friends.  Select one fish and the others will automatically color in according to how they get along with the selected fish.  A fish colored green will pair well with the selected fish, while a yellow fish may work under some circumstances with the selected fish.  A red fish means it will not work with your selected fish.</p>

				<p>You can select more than one fish.  In the case of multiple fish being selected, the other fish will color in according to their worst compatibility match.  You can see what the individual compatibility with the selected fishes are by clicking the "i" button on any fish.</p>
			</div>
		);
	}
}

export default About;