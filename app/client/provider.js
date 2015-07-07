var dont =  angular.module('DonutModule',[]);
 dont.provider('donutProvider', function(){ 
      this.$get = function getDonut(){
	  return new CreateDonut();	  
	  }; 
 })


 angular.module('BarModule',[])
    .provider('barProvider', function(){
        this.$get = function getBar(){
		     return new CreateBar();
	}; 
 });

 angular.module('LineModule',[])
        .provider('lineProvider', function(){
	        this.$get = function getLine(){
			    return new CreateLine();
		};   
   }); 