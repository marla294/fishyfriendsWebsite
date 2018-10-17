import React from "react";
import PropTypes from "prop-types";
import "../css/DropdownPane.css";

class DropdownPane extends React.Component {
	state = {showPane:false};

	render() {
		return (
			<div className={this.showPane()}>
				<div className="title">{this.props.title}</div>
				<div className="contentContainer">
					{this.props.content}
				</div>
			</div>
		);
	};

	componentDidMount() {
		this.setState({showPane: this.props.showPane});
	};

	componentDidUpdate(prevProps) {
		if (this.props.showPane !== prevProps.showPane) {
			this.setState({showPane: this.props.showPane});
		}
	};

	showPane = () => {
		return "pane" + (this.state.showPane ? " showPane" : "");
	};

}

DropdownPane.propTypes = {
	title: PropTypes.string.isRequired,
	showPane: PropTypes.bool.isRequired,
	content: PropTypes.array.isRequired
};

export default DropdownPane;