import React from 'react';
import ReactDOM from 'react-dom';
import ConfigUi from './configurable-ui';
import MyComponent from './my-component';

const init = function(){
	const div = document.createElement('div');
	div.setAttribute('id', 'main');
	document.body.appendChild(div);
};
init();

let config = {
	type: "div",
	props: {
		className: "mainDiv"
	},
	children: [
		{
			type: "input",
			props: {
				className: "child1"
			},
		},
		{
			type: "input",
			props: {
				className: "child2"
			},
		},
		{
			type: MyComponent,
			props: {
				value: 1 
			},
		}
	]	
};

let configUi = new ConfigUi(config);
let rootElement = configUi.getRootElement();
ReactDOM.render(
	rootElement,
	document.getElementById('main')
);