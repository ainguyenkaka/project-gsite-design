(function() {
    'use strict';

    angular
        .module('gsiteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('configuration', {
            parent: 'admin',
            url: '/configuration',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'configuration.title'
            },
            views: {
                'admin-content@admin': {
                    templateUrl: 'app/admin/configuration/configuration.html',
                    controller: 'ConfigurationController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                
            }
        });
    }
})();
