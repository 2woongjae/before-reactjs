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
