
angular.module("myApp").controller("readCtrl",function($scope){

});

angular.module("myApp").controller("classifyCtrl",function($scope,$http,DataFactory,ProFactory){
    $scope.data = DataFactory.query();
    $scope.infor = ProFactory.look();
});
angular.module("myApp").controller("recommendCtrl",function($scope,$http,DataFactory,ProFactory){
    $scope.data = ProFactory.look();
});
angular.module("myApp").factory("ProFactory", function ($http) {
    var infor = {products: []};

    //请求数据
    $http.get("products.json").success(function (_data) {
        infor.products = _data; //保存数据
    });

    //返回单例对象
    return {
        //该对象提供了一个获取所有数据的方法query
        look: function () {
            return infor;//返回数据
        }
    }
});


