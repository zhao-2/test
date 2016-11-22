// 声明购物车模块
var mycart = angular.module("myCart", []);

// 声明主模块
var myapp = angular.module("myApp", ["ionic", "myCart"]);

//配置路由
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tour", {
            url: "/tour",
            templateUrl: "views/tour/tour.html",
            controller: "tourCtrl"
        })
        .state("home", {
            url: "/home",
            templateUrl: "views/home/home.html",
            controller: "homeCtrl"
        })
        .state("detail", {
            url: "/detail?:title", //传参：参数的名字叫title
            templateUrl: "views/detail/detail.html",
            controller: "detailCtrl"
        })
        .state("cart", {
            url: "/cart", //传参：参数的名字叫title
            templateUrl: "views/cart/cart.html",
            controller: "cartCtrl"
        })
        .state("log", {
            url: "/log",
            templateUrl: "views/log/log.html",
            controller: "logCtrl"
        })
        .state("read", {
            url: "/read",
            abstract: true,
            templateUrl: "views/read/read.html",
            controller: "readCtrl"
        })
        .state('read.classify', {
            url: '/classify',
            views: {
                'tab-classify': {
                    templateUrl: 'views/read/tab-classify.html',
                    controller: 'classifyCtrl'
                }
            }
        })
        .state('read.recommend', {
            url: '/recommend',
            views: {
                'tab-recommend': {
                    templateUrl: 'views/read/tab-recommend.html',
                    controller: 'recommendCtrl'
                }
            }
        })
        .state("person", {
            url: "/person",
            templateUrl: "views/person/person.html",
            controller: "personCtrl"
        })
        .state("message", {
            url: "/message",
            templateUrl: "views/message/message.html",
            controller:"MessageCtrl"
        })
        .state("thank", {
            url: "/thank",
            templateUrl: "views/cart/thankYou.html"
        });
    $urlRouterProvider.otherwise("/tour");
});

//创建单利对象，哪里需要，注入哪里
//在哪个控制器中需要使用商品数据，就注入这个单例对象。
//调用query方法
myapp.factory("DataFactory", function ($http) {
    var data = {productList: []};

    //请求数据
    $http.get("data.json").success(function (_data) {
        data.productList = _data; //保存数据
    });

    //返回单例对象
    return {
        //该对象提供了一个获取所有数据的方法query
        query: function () {
            return data;//返回数据
        }
    }
});
