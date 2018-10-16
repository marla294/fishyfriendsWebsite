import React from "react";
import Fish from "./Fish";
import PropTypes from "prop-types";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	state = {showCompatibility:false};

	render() {
		return (
			<div className={this.showCompatibility()}>
				<div className="compatibilityTitle">Compatibility</div>
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

	componentDidMount() {
		this.setState({showCompatibility: this.props.showCompatibility});
	}

	componentDidUpdate(prevProps) {
		if (this.props.showCompatibility !== prevProps.showCompatibility) {
			this.setState({showCompatibility: this.props.showCompatibility});
		}
	}

	showCompatibility = () => {
		return "compatibility" + (this.state.showCompatibility ? " showCompatibility" : "");
	};

}

Compatibility.propTypes = {
	compatibility: PropTypes.object.isRequired,
	showCompatibility: PropTypes.bool.isRequired
};

export default Compatibility;