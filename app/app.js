(function () {
    'use strict';

    angular.module('frogs', ['ngAnimate', 'ui.bootstrap'])
        .constant('wsUrl', 'http://localhost:9000/frogs')
        .factory('frogsService', frogsService)
        .controller('FrogsController', FrogsController);

    FrogsController.$inject = ['frogsService'];
    function FrogsController(frogsService) {
        var vm = this;
        frogsService.getFrogs().then(function (result) {
            vm.frogs = result.data
        });
    }

    frogsService.$inject = ['$http', 'wsUrl'];
    function frogsService($http, wsUrl) {

        return {

            getFrogs: function () {

                var req = {
                    method: 'GET',
                    url: wsUrl,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                return $http(req);
            }


        }
    }

})();