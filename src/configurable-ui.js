import React from 'react';
import ReactDOM from 'react-dom';

class ConfigUi {
    constructor(config) {
        this.rootElement = this.createElement(config);
    }

    getRootElement(){
    	return this.rootElement;
    }

    createElements(childrenConfig){
		let children = [];
		let self = this;
		if(childrenConfig){
			children = childrenConfig.map(config => self.createElement(config));
		}
		return children;
	};

	canHaveChildren(config){
		if(config.type == "input"){
			return false;
		}
		return true;
	};

	createElement(config){
		let element;
		if(config.children && this.canHaveChildren(config)){
			let children = this.createElements(config.children);
			element = React.createElement(
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
}

export default ConfigUi;