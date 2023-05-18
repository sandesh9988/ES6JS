// function sayHello(){
//   for (var  i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

//if  we have function inside an object  we refered that function  as a method  --------------------------------

// const person = {
//   name: 'Andy',
//   walk() { },
//   talk() { }
// };

// person.talk();
// person.name = '';

// const targetMember = 'name';
// person[targetMember.value] = 'John';


//this keyword --------------------------------

// const person = {
//   name: 'Andy',
//   walk() {
// console.log(this);
//    }

// };

// person.walk();
// const walk = person.walk.bind(person);
// walk();

//arrow function  --------------------------------

//old js
// const square =  function(number) {
//   return number * number;
// }

//modern js es6

const square = number => number * number;

console.log(square(5));

//more eg

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

//below  code is old js for filtering active jobs

// const activeJobs = jobs.filter(function(job) { return job.isActive; });
// console.log(activeJobs);

//using arrow function for above
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);


//Arrow functions and this  --------------------------------

const person = {  //settimeout will execute function after 1sec
  talk() {
    
    setTimeout(function () { 
      console.log('this', this);
    }, 1000);
  }
};

person.talk();

