import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div id="wire">
                </div>
                <div id="box">
                    <div className="light">
                    </div>
                    <div className="light">
                    </div>
                    <div className="light">
                    </div>
                </div>
			</div>
		);
	}
}
