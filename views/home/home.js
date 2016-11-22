angular.module("myApp").controller("homeCtrl", function ($scope, $http, DataFactory, $ionicScrollDelegate) {
    //调用query方法
    $scope.data = DataFactory.query();

    $scope.top = function () {
        $ionicScrollDelegate.scrollTop(true);
    }
});
