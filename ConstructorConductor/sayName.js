//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age) {
  this.name = name;
  this.age = age;
};

//Now create three instances of Person with data you make up

  //code here
var person1 = new Person('Jake', 23);
var person2 = new Person('Jeff', 144);
var person3 = new Person('Lady', 12);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  alert(this.name);
}
  //code here
