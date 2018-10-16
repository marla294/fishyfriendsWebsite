import React from "react";
import Button from "./Button";
import Compatibility from "./Compatibility";
import PropTypes from "prop-types";
import Info from './Info';
import "../css/Dropdown.css";

class Dropdown extends React.Component {
	state = {showDropdown:false};

	render() {
		return (
			<div className={this.showDropdown()}>
				<div className="buttonWrapper"><Button label="&times;" show={true} clickFn={() => {this.setState({show: false})}}/></div>
				<Info fish={this.props.fish} />
				<Compatibility show={true} compatibility={this.props.compatibility}/>
			</div>
		);
	}

	componentDidMount() {
		this.setState({showDropdown: this.props.showDropdown});
	}

	componentDidUpdate(prevProps) {
		if (this.props.showDropdown !== prevProps.showDropdown) {
			this.setState({showDropdown: this.props.showDropdown});
		}
	}

	showDropdown = () => {
		return "dropdown" + (this.state.showDropdown ? " showDropdown" : "");
	};

}

Dropdown.propTypes = {
	compatibility: PropTypes.object.isRequired,
	showDropdown: PropTypes.bool.isRequired,
	fish: PropTypes.object.isRequired
};

export default Dropdown;