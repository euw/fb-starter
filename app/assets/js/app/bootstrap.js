'use strict';

module.exports = function(app) {
	// Controllers
	app.controller('AboutController', require('./controllers/about-controller'));
	app.controller('AppController', require('./controllers/app-controller'));
	app.controller('HomeController', require('./controllers/home-controller'));
	// Filters
	app.filter('getById', require('./filters/get-by-id'));
	app.filter('getByProperty', require('./filters/get-by-property'));
	// Services
	app.service('authService', require('./services/auth-service'));
	app.service('invitationService', require('./services/invitation-service'));
};