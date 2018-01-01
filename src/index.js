import React from 'react';
import ReactDOM from 'react-dom';
import ConfigUi from './configurable-ui';

const init = function(){
	const div = document.createElement('div');
	div.setAttribute('id', 'main');
	document.body.appendChild(div);
};
init();

let config = {
	type: "div",
	props: {
		className: "mainDiv",
		//key: "0"
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
};

let configUi = new ConfigUi(config);
let rootElement = configUi.getRootElement();
ReactDOM.render(
	rootElement,
	document.getElementById('main')
);