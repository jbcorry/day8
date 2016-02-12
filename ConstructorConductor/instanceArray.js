/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

var users = [];  //code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));
  //code here

console.log('Tyler\'s information is ');
//Console.log all of Tylers information
for (var p in users[0]) {
  console.log(users[0][p]);
}

  //code here

console.log('Lenny\'s information is ');
for (var p in users[2]) {
  console.log(users[2][p]);
}
//Now console.log all of Lennys information

  //code here
users.push(new User('Jake', 'jakecorry123@gmail.com', 'iLoveMovies'));

//Now create another instance of User using your own information and then add that to your users array.



console.log('All my users names are ');
users.forEach(function(user) {console.log(user.name);});
