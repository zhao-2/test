
angular.module("myApp").controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    //控制导航栏“进入”按钮显示或隐藏
    $scope.config = {enter:false};

    //引导页切换、滑动引发的事件处理函数
    $scope.slidesChanged = function(){
        //判断当前是不是最后一个引导页，是则将config.enter=true;不是则相反.
        //获得当前引导页的序号，基于0
        var currentIndex = $ionicSlideBoxDelegate.currentIndex();

        //获得总引导页的数量
        var slidesCount = $ionicSlideBoxDelegate.slidesCount();

        if (currentIndex == slidesCount-1){
            //是最后一个引导页
            $scope.config.enter = true;
        }else{
            $scope.config.enter = false;
        }
    }
});
