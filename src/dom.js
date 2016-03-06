'use strict';

let $ = (selector) => {
	return document.querySelector(selector);
};

window.$ = $;

export default $;