function Animal(hp, nameAnimal, strength, resistance) {
	this.hp = hp;
	this.nameAnimal = nameAnimal;
	this.strength = strength;
	this.resistance = resistance;
}

Animal.prototype.isAlive = function () {
	return this.hp > 0 ? true : false;
}

Animal.prototype.fight = function (enemy) {

	var hit_power= randInterval(this.strength - 5,this.strength + 5);

	if (Math.round(Math.random() * 10) == 1 ){
		hit_power *= 1.7;
		console.log(this.nameAnimal + " made critical Hit!!!");

		

	}
	 console.log (hit_power);
	  console.log (this.resistance);
	enemy.resist(Math.round(hit_power)/**/);
}

// here should be all my computing
Animal.prototype.resist = function(hit_power) {
	
	console.log (hit_power);
	console.log (this.resistance);
	console.log(this.nameAnimal + "["+this.hp+"/100] got hit on " + (hit_power- this.resistance) + " points. hp left [" + (this.hp -= hit_power - this.resistance) +"/100]" );
	if (this.resistance > hit_power) {
			hit_power = 0;
		// console.log (hit_power);
		}
}

function Snake() {
	Animal.apply(this,arguments);
}
Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Animal;


function Ratatu() {
	Animal.apply(this,arguments);
}

Ratatu.prototype = Object.create(Animal.prototype);
Ratatu.prototype.constructor = Animal;

function Lion() {
	Animal.apply(this.arguments);
}

Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.constructor = Animal;

function Pinguin() {
	Animal.apply(this, arguments);
}

Pinguin.prototype = Object.create(Animal.prototype);
Pinguin.prototype.constructor = Animal;



function randInterval (min, max) {
	rand = Math.round(Math.random() * (max - min) + min);
	return rand;
}

console.log("");

var snake = new Snake(100, "Snake", 20, 4);
var rat = new Ratatu(100, "Cookrat", 10, 4);
var pinguin = new Pinguin(100, "Pinguin", 40, 20);
var lion = new Lion(100, "Lion", 30, 5)

var animals_mas = [snake, rat, pinguin, lion];
var countEnemy = 4;

function randEnemy (countEnemy) {
	rand = Math.round(Math.random() * (countEnemy - 0) + 0);
	return rand;
}

function play(enemy1, enemy2) {
	var timer = setInterval(function() {

	if (enemy1.isAlive() && enemy2.isAlive()) {
		enemy1.fight(enemy2);
		enemy2.fight(enemy1);
		console.log("\n")
	} else {
		clearInterval(timer);

		var winner = enemy1.isAlive() ? enemy1 : enemy2;
		console.log("The winner is  " + winner.nameAnimal); 
	}
 }, 1000);
}


play(snake, pinguin);






