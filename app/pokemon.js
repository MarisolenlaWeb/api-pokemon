(function(){ 
	'use strict';

	angular
	 .module('apiEjercicio')
	 .factory('pokemon', pokemon);

	pokemon.$inject = ['$resource'];

	function pokemon($resource){
		return $resource('http://pokeapi.co/api/v2/pokemon/:numeromagico', {},{});
	} 

})();