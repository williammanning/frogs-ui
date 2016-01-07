(function () {
    'use strict';

    angular.module('frogs', ['ngAnimate', 'ui.bootstrap'])
        .constant('wsBaseUrl', 'http://172.16.61.131:9000/')
        .factory('frogsService', frogsService)
        .controller('FrogsController', FrogsController);

    FrogsController.$inject = ['frogsService', 'wsBaseUrl'];
    function FrogsController(frogsService, wsBaseUrl) {
        var vm = this;
        vm.wsBaseUrl = wsBaseUrl;
        frogsService.getFrogs().then(function (result) {
            vm.frogs = result.data
        });
    }

    frogsService.$inject = ['$http', 'wsBaseUrl'];
    function frogsService($http, wsBaseUrl) {
        return {
            getFrogs: function () {
                var req = {
                    method: 'GET',
                    url: wsBaseUrl + 'frogs',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                return $http(req);
            }
        }
    }

})();
