import React from 'react';
import ReactDOM from 'react-dom';

const init = function(){
	const div = document.createElement('div');
	div.setAttribute('id', 'main');
	document.body.appendChild(div);
};

const render = function(config){
	let rootElement = createElement(config);
	return ReactDOM.render(
		rootElement,
		document.getElementById('main')
	);
};

const createElements = function(childrenConfig){
	let children = [];
	if(childrenConfig){
		children = childrenConfig.map(config => createElement(config));
	}
	return children;
};

const isElementCanHaveChildren = function(config){
	if(config.type == "input"){
		return false;
	}
	return true;
};


const createElement = function(config){
	let children = null;
	if(isElementCanHaveChildren(config)){
		children = createElements(config.children);
		let element = React.createElement(
			config.type,
			config.props,
			...children
		)
	}
	else{
		 element = React.createElement(
			config.type,
			config.props
		)
	}
	return element;
};

init();


render({
	type: "div",
	props: {
		className: "mainDiv",
		key: "0"
	},
	children: [
		{
			type: "input",
			props: {
				className: "child1",
				//key: "1"
			},
		},
		{
			type: "input",
			props: {
				className: "child2",
				//key: "2"
			},
		},
		// {
		// 	type: "input",
		// 	props: {
		// 		className: "child3",
		// 		key: "3"
		// 	},
		// }
	]	
});