'use strict'

angular.module('myApp.book', [
    'myApp.book.bookList',
    'myApp.book.bookDetail',
    'myApp.book.bookEdit'
])
    .component('book', {
        template: `
        <h2>Books</h2>
        <ng-outlet></ng-outlet>
        `,
        // ng-outlet is need whenever a routeConfig is defined in the same component
        $routeConfig: [
            { path: '/', component: 'bookList', name: 'BookList', useAsDefault: true }, // name for ng-link directives!!!
            { path: '/:isbn', component: 'bookDetail', name: 'BookDetail' },
            { path: '/:isbn/edit', component: 'bookEdit', name: 'BookEdit' }
        ]
    })