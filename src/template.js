'use strict';

class Template{
	render(content,data){
		let leftFlag = '{{';
		let rightFlag = '}}';

		content.replace(new RegExp(leftFlag + '(\\w+)' + rightFlag, 'g'), (str,expression) => {
			this.expression = expression;
			this.value = data[expression];
			return data[expression];
		});

		return {
			expression: this.expression,
			value: this.value
		}
	}
}

export default (new Template());