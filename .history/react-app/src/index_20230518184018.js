// function sayHello(){
//   for (var  i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

//if  we have function inside an object  we refered that function  as a method

// const person = {
//   name: 'Andy',
//   walk() { },
//   talk() { }
// };

// person.talk();
// person.name = '';

// const targetMember = 'name';
// person[targetMember.value] = 'John';


//this keyword

const person = {
  name: 'Andy',
  walk() {
console.log(this);
   }

};

person.walk();

const walk = person.walk.apply;


walk();