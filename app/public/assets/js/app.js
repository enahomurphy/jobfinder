angular.module('app', ['ngResource'])
    .controller('testController', function ($scope, $resource) {

        $scope.jobs = $resource('/api/jobs').query()

        console.log($scope.jobs)
    })