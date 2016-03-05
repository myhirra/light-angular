var Ng = require('../src/index.js');

describe("ng", function() {
	it("watchers length add", function() {
		var ng = new Ng();
		var oldWatchers = ng.$watchers;
		ng.$watch('test');
		var newWatchers = ng.$watchers;
		expect(newWatchers.length).toBe(1);
	});

	it("watchers not change", function() {
		var ng = new Ng();
		var oldWatchers = ng.$watchers;
		ng.$watch('test');
		var newWatchers = ng.$watchers;
		ng.$watch('test');
		expect(newWatchers.length).toBe(1);
	});

	it("handler should work", function() {
		var ng = new Ng();
		var oldWatchers = ng.$watchers;
		var testObject = 1;
		ng.$scope.test = 100;
		ng.$digest();
		ng.$watch('test',function(){
			testObject = 2;
		});
		ng.$scope.test = 200;
		ng.$digest();
		expect(testObject).toBe(2);
	})
});