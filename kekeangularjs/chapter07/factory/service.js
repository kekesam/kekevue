var m1 = angular.module('module1',[]);
m1.factory('myService',function(){
    return {
        name : 'hello',
        show : function(){
            return this.name + ':angular';
        }
    };
});