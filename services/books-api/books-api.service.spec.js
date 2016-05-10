'use strict'

describe('The `booksApi` Service', () => {
    
    // load and reset module for each test
    beforeEach(module('myApp.booksApi'))
    
    it('should work', () => {
        expect(true).toBe(true)
    })
    
    it('should be defined', inject((booksApi) => {
        expect(booksApi).toBeDefined()
    }))
    
    describe('with a public API', () => {
        it('should have a `loadBook` method', inject((booksApi) => {
            // both equivalent!
            expect(typeof booksApi.loadBook).toBe('function')
            expect(angular.isFunction(booksApi.loadBook)).toBeTruthy()
        }))
    })
    
    describe('with the `loadBook(isbn)` method', () => { 
        
        afterEach(inject($httpBackend => {
            $httpBackend.verifyNoOutstandingExpectation()
            $httpBackend.verifyNoOutstandingRequest()
        }))
        
        it('should send the correct HTTP request', inject((booksApi, $httpBackend) =>  {
            $httpBackend.expectGET('http://bookmonkey-api.angularjs.de/books/123-123')
                        .respond({})
            booksApi.loadBook('123-123')
            
            // triggers the push of responses - just one request will be flushed
            $httpBackend.flush()
        }))
        
        it('should promise to return the loaded book', inject((booksApi, $httpBackend) =>  {
            var testBook = {isbn: "123-123"}
            $httpBackend.whenGET('http://bookmonkey-api.angularjs.de/books/123-123')
                        .respond(testBook)
            var promise = booksApi.loadBook('123-123')
            var book
            promise.then((_book_) => {
                book = _book_ 
            })
            
            // triggers the push of responses - just one request will be flushed
            $httpBackend.flush()
            
            // deep checking `toEqual` 
            expect(book).toEqual(testBook)
        }))
    })
})