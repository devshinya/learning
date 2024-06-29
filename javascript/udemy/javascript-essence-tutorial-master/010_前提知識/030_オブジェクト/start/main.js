const myObj = {
  name: '山田太郎',
  age: 35,
  greet: function() {
    console.log(`こんにちは、私は${this.name}です`);
  },
  child: {
    name: '山田息子',
    age: 6,
    greet: function() {
      console.log(`こんにちは、私は${this.name}です`);
    }
  }
}

console.log(`myObj.name = ${myObj.name}`);
console.log(`myObj.age = ${myObj.age}`);
myObj.greet();

console.log(`myObj.child.name = ${myObj.child.name}`);
console.log(`myObj.child.age = ${myObj.child.age}`);
myObj.child.greet();

myObj.wife = {
  name: '山田花子',
  age: 32,
  greet: function() {
    console.log(`こんにちは、私は${this.name}です`);
  }
}

console.log(myObj)