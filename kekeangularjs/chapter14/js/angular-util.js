/**
 * @license AngularJS v1.6.4
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */




(function(window, angular) {
	var kekeUtil = angular.module('ngKekeCookie', ['ng']);
	kekeUtil.factory("$kekeCookie",function(){
		return {
			setCookie : function(name, value,time,option){
			    var str=name+'='+escape(value); 
			    var date = new Date();
			    date.setTime(date.getTime()+this.getCookieTime(time)); 
			    str += "; expires=" + date.toGMTString();
			    if(option){ 
			        if(option.path) str+='; path='+option.path; 
			        if(option.domain) str+='; domain='+option.domain; 
			        if(option.secure) str+='; true'; 
			    } 
			    document.cookie=str; 
			},
			getCookie : function(name){
				var arr = document.cookie.split('; '); 
			    if(arr.length==0) return ''; 
			    for(var i=0; i <arr.length; i++){ 
			        tmp = arr[i].split('='); 
			        if(tmp[0]==name) return unescape(tmp[1]); 
			    } 
			    return ''; 
			},
			delCookie : function(name){
				tmCookie.setCookie(name,'',-1); 
				var date=new Date();
		        date.setTime(date.getTime()-10000);
				document.cookie=name+"=; expires="+date.toGMTString()+"; path=/";
			},
			
			getCookieTime : function(time){
			   if(time<=0)return time;
			   var str1=time.substring(1,time.length)*1;
			   var str2=time.substring(0,1);
			   if (str2=="s"){
			        return str1*1000;
			   }
			   else if (str2=="m"){
			       return str1*60*1000;
			   }
			   else if (str2=="h"){
				   return str1*60*60*1000;
			   }
			   else if (str2=="d"){
			       return str1*24*60*60*1000;
			   }
			}
			
		}
	});
	
})(window, window.angular);
