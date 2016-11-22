
angular.module("myApp").controller("detailCtrl",function($scope,$stateParams,DataFactory,ShopCart,ProFactory){
    // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
    var title = $stateParams.title;
    // 获得所有的商品数据
    var data = DataFactory.query();
    var infor = ProFactory.look();

    // 从商品数组中找出商品名称与传的参数值相同的商品出来
    angular.forEach(data.productList,function(item){
        if(item.title == title){    // 如果找到了
            $scope.product = item;  // 将该商品对象保存到$scope中
            // 替换为大图
            //$scope.product.imgsrc = $scope.product.imgsrc.replace("50x50","400x400");
            return false;   // 终止循环(已经找到了，不需要继续找了)
        }
    });

    angular.forEach(infor.products,function(item){
        if(item.title == title){    // 如果找到了
            $scope.product = item;  // 将该商品对象保存到$scope中
            // 替换为大图
            //$scope.product.imgsrc = $scope.product.imgsrc.replace("50x50","400x400");
            return false;   // 终止循环(已经找到了，不需要继续找了)
        }
    });


    // 加入购物车
    $scope.add = function(product){
        //console.log("加入购物车:" + product.title);
        ShopCart.add(product);
    };

    $scope.starArr = [
        {value: 1, icon: "ion-ios-star-outline"},
        {value: 2, icon: "ion-ios-star-outline"},
        {value: 3, icon: "ion-ios-star-outline"},  // val: 3   index: 2
        {value: 4, icon: "ion-ios-star-outline"},
        {value: 5, icon: "ion-ios-star-outline"}
    ];
    // 响应click事件
    $scope.starArr = [
        {value: 1, icon: "ion-ios-star-outline"},
        {value: 2, icon: "ion-ios-star-outline"},
        {value: 3, icon: "ion-ios-star-outline"},  // val: 3   index: 2
        {value: 4, icon: "ion-ios-star-outline"},
        {value: 5, icon: "ion-ios-star-outline"}
    ];
    // 响应click事件
    $scope.setRating = function (val) {
        var stars = $scope.starArr;
        // 遍历stars数组，设置每一个元素的icon
        for (var index = 0; index < stars.length; index++) {
            if (index < val) {
                stars[index].icon = "ion-ios-star"; // 凡是索引小于val
            } else {
                stars[index].icon = "ion-ios-star-outline";// 凡是索引大于等于val
            }
        }
    };
});