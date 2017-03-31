/******
 * Created by mikhail on 28.03.17.
 */
var app = angular.module('app',[]);
app.controller("myCtrl",function ($scope) {
    $scope.money1 ="1.22$";
    $scope.money2 ="$3.05";
    $scope.money3 ="4.22";

});

app.filter("moneyFilter", function () {
    return function (str) {
        var lastChar = str.slice(-1);
        var firstChar = str.slice(0,1);
        var slicedPart;
         if (lastChar === '$'){
             slicedPart = str.slice(0,str.length-1);
             return '$'+ slicedPart;
         }else if (firstChar ==='$'){
             return str;
         }else {
             return '$'+str;  
         }



    };
});

app.directive("fooBar",function () {
    var bookMarks =[
        {
            id:1,
            name:"AngularJS"
        },
        {
            id:2,
            name:"test2"

        },
        {
            id:3,
            name:"react JS"
        }
    ]
    return{
        template: "<div>HELLO {{name}} </div><div ng-repeat='bookmark in myBookMarks'>{{bookmark.name}}</div>",
        link:function (scope,element,attr) {
            scope.name = "sasha";
            scope.myBookMarks = bookMarks;
            console.log('sdf');
        }
    }
});

app.controller("mainCtrl",function ($scope) {
    this.myLesson = 'Hello Lesson main';
    this.addLesson = function () {
        console.log('test');
    };

    $scope.mainCtrl = this;
});

app.controller("firstCtrl",function () {
    this.myLesson = 'Hello Lesson first';
});

app.controller("secondCtrl",function () {
  this.myLesson = 'Hello Lesson secon';
});

app.directive('foo',function () {
 return{
   link: function (scope,element,attr) {
       element.on('click',function () {
         if(element.text()==="foo"){
element.text("bar");
         }else {
element.text("foo");
         }
       })
   }
 }
})