var cl = function(){ console.log.apply(console, arguments) };

var app = angular.module('app', [
  'ngMap'
]);

// Other configurations...
// app
// .config(function($translateProvider) {
//   $translateProvider.useSanitizeValueStrategy(null);
// });
