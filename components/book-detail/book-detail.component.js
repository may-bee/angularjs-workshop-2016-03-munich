'use strict'

angular.module('myApp.bookDetail', ['myApp.booksApi'])
    .component('bookDetail', {
        templateUrl: 'components/book-detail/book-detail.component.html',
        controller: function() {
            this.book = {
                title: 'JS Rockz',
                author: 'Ironman',
                abstract: 'Why JS is so cool and how to rock AngularJS',
                isbn: '123-123-55523422-3'
            }
        }
    })