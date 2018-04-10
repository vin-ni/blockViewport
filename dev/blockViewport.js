/* eslint-disable */

function BlockViewport(settings) {
	this.settings = settings;
	this.inject();
	this.addEventListeners();
	this.resize();
}

BlockViewport.prototype.inject = function () {
	for (let i = 0; i < this.settings.length; i++) {
		const blocker = this.settings[i];

		//set Settings
		let settings = {};
		settings.color = blocker.color || '#000000';
		settings.fontColor = blocker.fontColor || '#FFFFFF';
		settings.text = blocker.text || 'This viewport is blocked. Please change your browser size';
		settings.widthStart = blocker.widthStart || 0;
		settings.widthEnd = blocker.widthEnd || 9999;

		// prepare div to be injected
		let html = this.generateHTML(settings);
		this.appendHtml(document.body, html);
	}
}

BlockViewport.prototype.generateHTML = function (settings) {
	let html = `<div class="blockViewport" data-start="${settings.widthStart}" data-end="${settings.widthEnd}" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color:${settings.color}; display: flex; align-items: center; justify-content: center;"><p style="font-size: 2rem; color: ${settings.fontColor}; line-height: 1.6 height: auto; text-align: center; width: 75vw; margin-bottom: 5vh;">${settings.text}</p></div>`;
	return html;
}

BlockViewport.prototype.addEventListeners = function () {
	this.resizeEvent = this.resize.bind(this);
	window.addEventListener('resize', this.resizeEvent);
}

BlockViewport.prototype.resize = function () {
	// check if should show or hide elements;
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var array = document.getElementsByClassName('blockViewport');
	for (var i = 0; i < array.length; i++) {

		let start = parseInt(array[i].dataset.start);
		let end = parseInt(array[i].dataset.end);

		if (width >= start && width <= end) {
			array[i].style.display = 'flex';
		} else { array[i].style.display = 'none'; }
	}
}

BlockViewport.prototype.appendHtml = function (el, str) {
	var div = document.createElement('div');
	div.innerHTML = str;
	while (div.children.length > 0) {
		el.appendChild(div.children[0]);
	}
}