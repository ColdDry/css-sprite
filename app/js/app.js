/**
 * Created by HJH on 2016/10/25.
 */
'use strict'

var app = angular.module('cssSprite', []);

app.controller('Ctrl', ['$scope', '$interval', function ($scope, $interval) {
    var imgStyles = [
        {"background-position": "0px 0px"},
        {"background-position": "-750px 0px"},
        {"background-position": "-1500px 0px"},
        {"background-position": "-2250px 0px"},
        {"background-position": "0px -500px"},
        {"background-position": "-750px -500px"},
        {"background-position": "-1500px -500px"},
        {"background-position": "-2250px -500px"}
    ];
    $scope.imgStyle = imgStyles[0];
    $scope.play = function () {
        var count = 0;
        $interval(function () {
            $scope.imgStyle = imgStyles[count];
            count++;
        }, 200, 8);
    };
}]);