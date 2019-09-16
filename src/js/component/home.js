import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: null
		};
	}

	render() {
		let alpha = "";
		if (this.state.clicked == "red") alpha = "selected";
		let bravo = "";
		if (this.state.clicked == "yellow") bravo = "selected";
		let charlie = "";
		if (this.state.clicked == "green") charlie = "selected";
		return (
			<div className="text-center mt-5" id="wrapper">
				<div id="wire" />
				<div id="box">
					<div
						className="light"
						id={"red" + alpha}
						onClick={() => this.setState({ clicked: "red" })}
					/>
					<div
						className="light"
						id={"yellow" + bravo}
						onClick={() => this.setState({ clicked: "yellow" })}
					/>
					<div
						className="light"
						id={"green" + charlie}
						onClick={() => this.setState({ clicked: "green" })}
					/>
				</div>
			</div>
		);
	}
}
