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
		settings.textDesktop = blocker.textDesktop || 'This viewport is blocked. Please change your browser size';
		settings.textMobile = blocker.textMobile || settings.textDesktop;
		settings.widthStart = blocker.widthStart || 0;
		settings.widthEnd = blocker.widthEnd || 9999;

		// prepare div to be injected
		console.log(settings);
	}
}

BlockViewport.prototype.addEventListeners = function () {

}

BlockViewport.prototype.resize = function () {

}