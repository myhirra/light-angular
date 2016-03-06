'use strict';

import template from './template.js';
import $ from './dom.js';

export default class Ng {

	constructor(){

	}

	init(opt){
		opt = Object.assign({},{
			root: '[ng-app]',
			detect: 'lisenter'
		},opt);
		this.$watchers = [];
		this.$scope = {};

		this.root = $(opt.root);
		this.rootHTML = this.root.innerHTML;

		if(opt.detect === 'interval'){
			this.$detectInterval();
		}else{
			this.$detect();
		}
	}

	/**
	 * 最暴力的死循环检测方式
	 * @return {[type]} [description]
	 */
	$detectInterval(){
		setInterval(() => {
			this.$digest();
		},10);
	}

	/**
	 * 普通的ajax、dom变化等方式
	 * @return {[type]} [description]
	 */
	$detect() {

	}

	$watch(expression, handler) {
		if (!expression) {
			return false;
		}

		let expressions = this.$watchers.map((item) => {
			return item.expression;
		});
		let indexExp = expressions.indexOf(expression);
		if (indexExp > -1) {
			return false;
		}

		this.$watchers.push({
			expression: expression,
			handler: handler,
			oldValue: undefined
		});
	}

	$digest() {
		this.$watchers.forEach((watcher) => {
			let newValue = this.$scope[watcher.expression];
			let oldValue = watcher.oldValue;
			if (newValue !== oldValue) {
				watcher.handler && watcher.handler(oldValue, newValue);
				watcher.oldValue = newValue;
			}
		});

		//render by html & $scope;
		let result = template.render(this.rootHTML,this.$scope);
		this.$watch(result.expression);
		this.root.innerHTML = result.value;
	}
}