import Ng from '../src/index.js';

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
});