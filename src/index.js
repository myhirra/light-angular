class Ng {

	this.$watchers = [];
	this.$scope = {};

	$watch(expression, handler) {
		if (!expression) {
			return false;
		}

		let expressions = this.$watchers.map((item) => {
			return item.expression
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

	detect() {

	}

	digest() {
		this.$watchers.forEach((watcher) => {
			let newValue = this.$scope[watcher.expression];
			let oldValue = watcher.oldValue;
			if (newValue !== oldValue) {
				watcher.handler && watcher.handler(oldValue, newValue);
				watcher.oldValue = newValue;
			}
		});
	}
}

export default Ng;