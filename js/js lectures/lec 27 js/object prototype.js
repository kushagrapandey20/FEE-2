var person1 = {
    names: "yash",
    age: 25,

};
// person2 object person1 property as a prototype
console.log(person1); 
var person2 = Object.create(person1);
console.log(person2); 
console.log(person2.names); 
console.log(person2._proto_ == person1); 
var person3 = Object.create(person2);
console.log(person3);
console.log(person3.age);
console.log(person2.names);  

console.log(person3._proto_ == person2);
console.log(person2._proto_ == person1);
console.log(person1._proto_ == Object.prototype);
console.log(Object.prototype._proto_);