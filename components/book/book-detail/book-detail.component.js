'use strict'

angular.module('myApp.book.bookDetail', [
    'myApp.booksApi'
])
    .component('bookDetail', {
        templateUrl: 'components/book/book-detail/book-detail.component.html',
        controller: function(booksApi) {

            this.$routerOnActivate = next => { 
                this.fetch(next.params.isbn)
            }

            this.fetch = function(isbn) {
                booksApi.loadBook(isbn)
                    // ES2015 - keep "this" context (eq. to "then(...).bind(this)")
                    .then(book => this.book = book)
            }
        }
    })