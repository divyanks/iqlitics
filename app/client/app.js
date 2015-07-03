

var app = angular.module('app', ['ui.router', 'ngSanitize', 'ngCookies']);

var apiFactory = require('./factories/api');

app.factory('apiFactory', apiFactory);

