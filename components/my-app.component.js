'use strict'

angular.module('myApp')
    .component('myApp', {
        // Convention? Extract template if longer than 5 lines.
        template: `
            <h1>My App</h1>
            <ng-outlet></ng-outlet>
        `,
        $routeConfig: [
            { path: '/books/...', component: 'book', useAsDefault: true},
        ]
    })