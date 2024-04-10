// const age = 30;
// aged= 31;
// console.log(age);
// console.log(aged);

// const age = 30;
// console.log(age);


// var no= 2;
// var sq= no * no
// console.log(sq);


// var no= 4;
// var sq= no * no
// console.log(sq);


// let num = 5;
// num = 10;
// num = 50;
// console.log(num);


// const name='mads';
// const age=22;
// // const num=7.5;

// console.log('My name is ' + name + ' and i am ' + age +' years old.');
// console.log(`My name is ${name} and I'm ${age} years old.`);


// const s = 'hello people do your work';

// console.log (s.length);
// console.log(s.substring(6,15).toUpperCase());
// console.log(s.substring(15,25).toLocaleLowerCase());

// const a = 'hello';
// console.log(a.split(''));

// const b = 'i, am, a disco, dancer, oh , la, la , la';
// console.log(b.split(' '))


// const b = 'i, am, a disco, dancer, oh , la, la , la';
// console.log(Array.isArray(b))
// console.log(b);



// const num=[1,2,3,4,5,'text'];
// num[6]='sample';
// num.push('fruit');
// num.unshift('sololo');
// num.unshift('straw');
// num.unshift('helllo');

// num.pop();
// console.log(Array.isArray(num))
// console.log(num.indexOf('text'));
// console.log(num);



// const animal={
//     name: 'dog',
//     life: '15',
//     breeds : ['pug','coco', 'malteese'],
//     purpose:{
//         home : 'pet',
//         police: 'guard',
//         random:['lovely','pet','play']
//     }
// }

// alert(animal);

// console.log(animal);
// console.log(animal.name, animal.life);
// console.log(animal.breeds[1]);
// console.log(animal.purpose.police);
// console.log(animal.purpose.random[2]);

// const{name,life,purpose:{home}}=animal;
// animal.email = 'dog@huha.com';
// console.log(home);




const todos=[
    {
        id:1,
        text :'get better',
        isCompleted : false
    },
    {
        id:2,
        text :'do better',
        isCompleted : true
    },
    {
        id: 3,
        text :'be better',
        isCompleted : true
    }
];

// todos.forEach(function(a){
//     console.log(a.text);
// })


// todos.map(function(a){
//     console.log(a.id);
// })



// for(let i=0; i<todos.length; i++){
// console.log(todos[i].text);
// }

// for(let a of todos){
//     console.log(a.id);
// }



// console.log(todos[0].text);
// console.log(todos[1].text);
// console.log(todos[2].text);


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// for (let i=0; i<=10; i++){
// console.log(`loop lagau:${i}`);
// }



// let i=0;
// while(i<10){
//     console.log(`feri loop lagau: ${i}`);
//     i++;
// }



// for (let i = 0; i < 5; i++) {
//     console.log (`The number is ${i}`);
//   }


//   for(let  a= 0; a<5 ; a++){
//     console.log(`kina aayena:${a}`);
//   }


// const x = 10;

// if (x===10){
//     console.log('x is 10');
// }
// else if (x>10){
//     console.log('x is greater than 10');
// }
// else{
//     console.log('x is less than 10');
// }


// const a=6;
// const b=12;

// if(a>5 && b>10){
//     console.log('x is more than 5 and y is more than 10');
// }
// else if(a>5 || b>10){
//     console.log('x is more than 5 or y is more than 10');
// }
// else{
//     console.log('x and y both are smaller than 5 and 10');
// }



// const x= 10;

// const color = x > 10 ? 'yes' : 'no';
// // console.log(`is given number greater than 10? ${color}`);

// switch(color){
//     case 'yes':
//         console.log('answer is yes');
//         break;
//     case "no":
//         console.log('answer is no');
//         break;
//     default:
//         console.log('false statement');
//         break;
// }




// function add(n1=1,n2=2){
//     return(n1+n2);
// }
// console.log(add(2,5));




// function person(fname, lname, dob, addr, time){
// this.fname = fname;
// this.lname = lname;
// this.dob = dob;
// this.addr = addr;
// this.time = new Date(time)
// this.getYear = function(){
//     return this.time.getFullYear();
// }
// this.getName = function(){
//     return `${this.fname} ${this.lname}`;
// }
// }

// person.prototype.getYear = function(){
//     return this.time.getFullYear();
// }

// class person{
//    constructor (fname, lname, dob, addr){
//     this.fname = fname;
//     this.lname = lname;
//     this.dob = dob;
//     this.addr = addr;
// }
// }


// const per1 = new person('manga', 'sanga','2-2-2222','saitangalli');
// const per2 = new person('saram','garam','1-1-1111','masanghat');



// // const per1 = new person('manga', 'sanga','2-2-2222','saitangalli','11-18-2000');
// // const per2 = new person('saram','garam','1-1-1111','masanghat','11-18-2079');


// console.log(per1);
// console.log(per2);


// console.log(per1.getYear());
// console.log(per2.getName());


// console.log(`Greetings dear, ${per2.getName()}`);






// const form = document.getElementById('myForm');
// console.log(form)

// console.log(document.getElementById('myForm'));
// console.log(document.querySelector('h1'));

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));



// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// const ul = document.querySelector('.items');

//  ul.remove();
//  ul.lastElementChild.remove();

//  ul.firstElementChild.textContent = "hello";
//  ul.children[1].innerText = "Brad";

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';




// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     document.querySelector('#myForm').Style.background = '#ccc';
//     // console.log(e.target.className);
// });