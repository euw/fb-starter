'use strict';

require('angular');

var app = angular.module('myApp', []);
app.run(['$rootScope', '$window', 'authService', require('./facebook')]);
require('./bootstrap')(app);