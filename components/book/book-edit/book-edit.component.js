'use strict'

angular.module('myApp.book.bookEdit', [
    'myApp.booksApi'
])
    .component('bookEdit', {
        bindings: {
            $router: '<'
        },
        templateUrl: 'components/book/book-edit/book-edit.component.html',
        controller: function(booksApi) {

            this.$routerOnActivate = next => { 
                this.fetch(next.params.isbn)
            }

            this.fetch = function(isbn) {
                booksApi.loadBook(isbn)
                    // ES2015 - keep "this" context (eq. to "then(...).bind(this)")
                    .then(book => this.book = book)
            }
            
            this.handleSubmit = function(book) {
                booksApi.saveBook(book)
                    // only 'then' is standarized in Promise standard! $q implements the rest...
                    // bad for upgrading!
                    .then(
                        () => this.$router.navigate(['BookDetail', {isbn: book.isbn}]),
                        e => window.alert('Hat NICHT geklappt. Fehler \n\n' + JSON.stringify(e))
                    )
            }
        }
    })