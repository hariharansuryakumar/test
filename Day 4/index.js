class Person  {
constructor(name) {
    this.name = name;
}
getName() {
    return this.name;
}
}

class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    getID() {
        return this.id;
    }
}
let emp = new Employee("Hariharan", "C30798");
console.log("Employee get name:", emp.getName());
console.log("Employee get id:", emp.get());