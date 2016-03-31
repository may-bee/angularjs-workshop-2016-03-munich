'use strict';

angular.module('myApp', [
    // External Deps
    'ngComponentRouter',
    
    // Internal Deps
    'myApp.book',
    'myApp.colorpicker' 
 ])
    .value('$routerRootComponent', 'myApp')
