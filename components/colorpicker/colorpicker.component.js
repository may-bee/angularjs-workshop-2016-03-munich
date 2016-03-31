'use strict'

// Naming conventions! 
// Prefixing!
// No expression without a dot! (especially for templates & scope access)

angular.module('myApp.colorpicker', [])
    .component('colorpicker', {
        bindings: {
            r: '@red',
            a: '=alpha' // two-way binding as 'alpha' as external API parameter 
        },
        // import the template from a systemjs module directly if deployed 
        templateUrl: 'components/colorpicker/colorpicker.component.html',
        controller: function() {
            // this binds on controllerAs (by default "$ctrl")
            // you should not use $scope directly
            this.r = 255
            this.g = 30
            this.b = 0
            this.a = 0.5
        }
    })
