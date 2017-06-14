(function (ng) {  
	var app = ng.module('ngLoadScript', []);  
	app.directive('keScript', function() {  
	    return {  
	        restrict: 'AE',  
	        scope: false,  
	        link: function(scope, elem, attr)  
	        {  
	            if (attr.type==='text/javascript')  
	            {  
	                var s = document.createElement("script");  
	                s.type = "text/javascript";  
	                var src = elem.attr('src');  
	                if(src!==undefined)  
	                {  
	                    s.src = src;  
	                }  
	                else  
	                {  
	                    var code = elem.text();  
	                    s.text = code;  
	                }  
	                document.head.appendChild(s);  
	                elem.remove(); //解析完毕把删掉
	            }  
	        }  
	    };  
	});  
}(angular));  