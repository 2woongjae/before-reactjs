/*
  React.js 수강을 위해 알아야 하는 최소한의 자바스크립트 문법입니다. 
  아래 코드를 보시고 이해가 안되는 부분이 있으시면,
  자바스크립트 기본 문법을 좀 더 학습하고 오셔야 합니다. :)
*/

function hello(props) {
  return `Hello ${props.name}`;
}

var person = {
  name: 'Mark',
  age: 37
};

console.log(hello(person));

person.age++;

if (person.age === 38) {
  console.log('oh my god!');
}

for (var i = 0; i < 10; i++) {
  console.log(' '.repeat(i) + new Array(10 - i).fill('*').join(''));
}

function factory() {
  var a = 10;
  var b = 15;
  return function(c) {
    return a + b + c;
  };
}

console.log(factory()(7));

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log(`hello, I'm ${this.name}.`);
  };
}

var mark = new Person('Mark', 37);
mark.hello();
