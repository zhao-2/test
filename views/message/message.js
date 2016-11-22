
angular.module("myApp") .controller('MessageCtrl',function ($scope, $timeout,$sce,$rootScope) {

        var messageOptions = [
            {content: '<p>最近书荒，有什么好推荐吗？</p>'},
            {content: '<p>推荐《金色梦乡》</p><img src="images/jinse.jpg">'},
            {content: '<p>谢谢！</p>'},
            {content: '<p>刚刚读完这本书，很棒哦，推荐你。</p>'},
            {content: '<p>还有其他推荐吗？</p>'},
            {content: '<p>《愿无岁月可回头》</p><img src="images/yuanwu.jpg"> '},
            {content: '<p>什么内容呢？</p>'},
            {content: '<p>我也还没有读过，是回忆专用小马甲首部短篇故事集。</p>'},
            {content: '<p>那一起看吧，谢谢推荐哦！</p>'}
        ];

        var messageIter = 0;
        $scope.messages = messageOptions.slice(0, messageOptions.length);

        $scope.add = function () {
            var nextMessage = messageOptions[messageIter++ % messageOptions.length];
            $scope.messages.push(angular.extend({}, nextMessage));
        };
    })