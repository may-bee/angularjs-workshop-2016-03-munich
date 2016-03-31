'use restrict'

// module names in camel case!
// each service a folder. Tests, next to it for TDD.
angular.module('myApp.booksApi', [])
    .factory('booksApi', function($http) {
        
        var baseUrl = 'http://bookmonkey-api.angularjs.de/books'

        function loadBook(isbn) {
            return $http.get(baseUrl + `/${isbn}`)
                .then(function(response) {
                    //console.log('Response from loadBook():', response)
                    return response.data
                })
        }
        
        function listBooks() {
            return $http.get(baseUrl)
                .then(function(response) {
                    return response.data
                })
        }
        
        function saveBook(book) {
            return $http.put(baseUrl + `/${book.isbn}`, book)
                .then(response => response.data)
        }
        
        // convention to be discussed. JohnPapa would see this block as the first expression
        return {
            listBooks: listBooks,
            loadBook: loadBook,
            saveBook: saveBook
        }
    })