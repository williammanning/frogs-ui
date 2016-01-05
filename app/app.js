(function () {
    'use strict';

    angular.module('frogs', ['ngAnimate', 'ui.bootstrap'])
        .factory('frogsService', frogsService)
        .controller('FrogsController', FrogsController);

    FrogsController.$inject = ['frogsService'];
    function FrogsController(frogsService) {
        var vm = this;
        frogsService.getFrogs().then(function (result) {
            vm.frogs = result.data
        });
    }

    frogsService.$inject = ['$http'];
    function frogsService($http) {

        return {

            getFrogs: function () {

                var req = {
                    method: 'GET',
                    url: 'http://localhost:9000/frogs',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                return $http(req);
            }


        }
    }

})();