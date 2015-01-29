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
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var user2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var user3 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

users.push(user1);
users.push(user2);
users.push(user3);

console.log('Tyler\'s information is ');
//Console.log all of Tylers information


for(var key in user1){
  console.log(key + ": " + user1[key]);
}

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

for(var key in user3){
  console.log(key + ": " + user3[key]);
}


//Now create another instance of User using your own information and then add that to your users array.

var user4 = new User('Jesse', 'random@email.com', 'iLoveCoding');
users.push(user4);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

for (var i = 0; i < users.length; i++) {
  
    console.log(users[i].name);
  
}