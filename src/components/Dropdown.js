import React from "react";
import Button from "./Button";
import Compatibility from "./Compatibility";
import PropTypes from "prop-types";
import "../css/Dropdown.css";

class Dropdown extends React.Component {
	state = {show:false};

	render() {
		return (
			<div className={this.showDropdown()}>
				<div className="buttonWrapper"><Button label="&times;" show={true} clickFn={() => {this.setState({show: false})}}/></div>
				<Compatibility show={true} compatibility={this.props.compatibility}/>
			</div>
		);
	}

	componentDidMount() {
		this.setState({show: this.props.show});
	}

	componentDidUpdate(prevProps) {
		if (this.props.show !== prevProps.show) {
			this.setState({show: this.props.show});
		}
	}

	showDropdown = () => {
		return "dropdown" + (this.state.show ? " showDropdown" : "");
	};

}

Dropdown.propTypes = {
	compatibility: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired
};

export default Dropdown;