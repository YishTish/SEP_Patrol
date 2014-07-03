/**
 * 
 */

var FileController = function(fileName){
	
	this.file = window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(){alert("got fs")}, function(){alert("Failure")});
};