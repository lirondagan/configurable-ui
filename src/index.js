import React from 'react';
import ReactDOM from 'react-dom';

const render = function(config){
	let rootElement = createElementsFromConfig(config);

	return ReactDOM.render(
		rootElement,
		document.getElementById('main')
	);

	// return ReactDOM.render(
	// 	<div>hhh</div>,
	// 	document.getElementById('main')
	// );
};

const getChildren = function(config){
	return null;
};

const getElementType = function(config){
	return config.element;
};

const getProps = function(config){
	return null;
};

const createElementsFromConfig = function(config){
	// Object.keys(config).map(function(elementKey){
	// 	let elementConfig = config[elementKey];
	// 	createElementFromConfig(elementConfig);
	// });
	let elementKey = 'name';
	let elementConfig = config[elementKey];
	elementConfig.key = elementKey;
	return createElementFromConfig(elementConfig);
};

const createElementFromConfig = function(config){
	let elementType = getElementType(config);
	let props = getProps(config);
	let children = getChildren(config);
	
	let element = React.createElement(elementType, props, children);
	return element;
};

var config = {
	name: {
		element: 'input',
		field: 'name',
		type: 'text',
		value: 'myValue'
	},
	// personalDetailsGroup : {
	// 	element: 'div',
	// 	className: 'personalDetailsGroup',
	// 	children: {
	// 		firstName: {
	// 			element: 'firstName',
	// 			field: 'firstName',
	// 			type: 'text',
	// 			value: 'Shula'
	// 		},
	// 		lastName: {
	// 			element: 'lastName',
	// 			field: 'lastName',
	// 			type: 'text',
	// 			value: 'Ajami'
	// 		},
	// 	}
	// }
};

render(config);
