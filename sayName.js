//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function (name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var person1 = new Person( 'matt', 28);
var person2 = new Person( 'jesse', 27);
var person3 = new Person( 'wendy', 25);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function () {
	console.log(this.name);
};
