function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

const person = new Person("mark");
