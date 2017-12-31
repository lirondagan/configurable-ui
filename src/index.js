import React from 'react';
import ReactDOM from 'react-dom';

const init = function(){
	const div = document.createElement('div');
	div.setAttribute('id', 'main');
	document.body.appendChild(div);
};

const render = function(config){
	let rootElement = createElements(config);
	return ReactDOM.render(
		rootElement,
		document.getElementById('main')
	);
};

const createElements = function(config){
	// for(){

	// }
	let rootElement = createElement(config);
	return rootElement;
};

const createElement = function(config){
// React.createElement(
//   type,
//   [props],
//   [...children]
// )
	let element = React.createElement(
		config.type,
		config.props,
		config.children
	)
	return element;
};

init();
render({
	type: "div",
	props: {
		className: "mainDiv"
	},
	children: []
});