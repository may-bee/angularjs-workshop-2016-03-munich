'use strict'

angular.module('myApp.book.bookList', ['myApp.booksApi'])
    .component('bookList', {
        templateUrl: 'components/book/book-list/book-list.component.html',
        controller: function(booksApi) {
            booksApi.listBooks()
                // BACKPORTED in Angular 1.5 from Angular2 !!! :) 
                .then(books => this.books = books)

            this.resetAllOtherFilter = function(except) {
                for (var property in this.search) {
                    if (this.search.hasOwnProperty(property) && property !== except) {
                        this.search[property] = ''
                    }
                }
            }
        }
    })