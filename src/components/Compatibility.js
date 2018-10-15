import React from "react";
import Fish from "./Fish";
import PropTypes from "prop-types";
import "../css/Compatibility.css";

class Compatibility extends React.Component {
	state = {show:false};

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
		this.setState({show: this.props.show});
	}

	componentDidUpdate(prevProps) {
		if (this.props.show !== prevProps.show) {
			this.setState({show: this.props.show});
		}
	}

	showCompatibility = () => {
		return "compatibility" + (this.state.show ? " showCompatibility" : "");
	};

}

Compatibility.propTypes = {
	compatibility: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired
};

export default Compatibility;