angular.module('Game',[])
.service('GameManager', function(){
	//Crée une nouvelle partie
	this.newGame = function(){};
	//Capacité de faire un mouvement
	this.move = function{};
	//Mettre à jour le score
	this.updateScore = function(NewScore){};
	//Voir si la partie n'est pas finie
	this.movesAvailable = function(){
		return GridService.anyCellsAvailable() || GridService.tileMatchesAvailable();
	};

});