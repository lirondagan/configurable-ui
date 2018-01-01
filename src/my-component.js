import React from 'react';

class MyComponent extends React.Component {

	render() {
		return (
			<div className="myComponentClass">My Component {this.props.value}</div>
		);
	}

}
export default MyComponent;