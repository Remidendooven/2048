angular.module('Grid',[])
.servide('GridService', function(){
	//Initialisation des deux grilles
	//Statique
	this.grid = [];
	//Dynamique
	this.tiles = [];
	//Initialisation dela taille
	this.size =4;
});