function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name);
console.log(person1.age); 
console.log(person2.name); 
console.log(person2.age);