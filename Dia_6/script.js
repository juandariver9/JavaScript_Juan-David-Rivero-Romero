/*
-----------------------------------------------------------------------------------------
---------------------------------------EJERCICIO 1---------------------------------------
- Write a JavaScript program to create a class called "Person" with properties for name -
-age and country. Include a method to display the person's details. Create two instances-
-                   of the 'Person' class and display their details.                    -
-----------------------------------------------------------------------------------------
*/

class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}
  
const person1 = new Person("Juan", 16, "Colombia");
const person2 = new Person("Landon", 17, "Uruguay");

person1.displayDetails();
person2.displayDetails()


/*
-----------------------------------------------------------------------------------------
---------------------------------------EJERCICIO 2---------------------------------------
-  Write a JavaScript program to create a class called 'Rectangle' with properties for  -
-width and height. Include two methods to calculate rectangle area and perimeter. Create-
-      an instance of the 'Rectangle' class and calculate its area and perimeter.       -       
-----------------------------------------------------------------------------------------
*/


class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
    perimeter() {
      return 2 * (this.width + this.height);
    }
    displayDetails() {
        console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
    }
}
const Rectangle1 = new Rectangle(20, 10);
const Rectangle2 = new Rectangle(23, 12);

Rectangle1.displayDetails();
Rectangle2.displayDetails()


/*
-----------------------------------------------------------------------------------------
---------------------------------------EJERCICIO 3---------------------------------------
-  Write a JavaScript program that creates a class called 'Vehicle' with properties for -
- make, model, and year. Include a method to display vehicle details. Create a subclass -
-called 'Car' that inherits from the 'Vehicle' class and includes an additional property-
-  for the number of doors. Override the display method to include the number of doors. -
-----------------------------------------------------------------------------------------
*/

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
    displayDetails() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors: ${this.doors}`);
    }
}

const car1 = new Car("Honda", "Civic", 2020, 4);
const car2 = new Car("Toyota", "Corolla", 2024, 4);

car1.displayDetails();
car2.displayDetails()


/*
-----------------------------------------------------------------------------------------
---------------------------------------EJERCICIO 4---------------------------------------
-  Write a JavaScript program that creates a class called "BankAccount" with properties -
-for account number and balance. Include methods to deposit and withdraw money from the -
-   account. Create some instances of the "BankAccount" class, deposit some money, and  -
-                                withdraw a portion of it.                              -
-----------------------------------------------------------------------------------------
*/

class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
    depositar(Cant) {
      this.balance += Cant;
    }
    sacar(Cant) {
      this.balance -= Cant;
    }
    displayDetails() {
        console.log(`Account Number: ${this.accountNumber}, Balance: ${this.balance}`);
    }
}

const account1 = new BankAccount(123456789, 1000);
const account2 = new BankAccount(987654321, 2000);

account1.depositar(100);
account2.sacar(100);

account1.displayDetails();
account2.displayDetails()



/*
-----------------------------------------------------------------------------------------
---------------------------------------EJERCICIO 5---------------------------------------
-     Write a JavaScript program that creates a class called 'Shape' with a method to   -
- calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from -
- the 'Shape' class and override the area calculation method. Create an instance of the -
- 'Circle' classand calculate its area. Similarly, do the same for the 'Triangle' class.-
-----------------------------------------------------------------------------------------
*/


class Figura {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
    displayDetails() {
        console.log(`Area: ${this.area()}`);
    }
}

class Circle extends Figura {
    constructor(radius) {
      super(radius * 2, radius * 2);
      this.radius = radius; 
    }
    area() {
      return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Figura {
    constructor(base, height) {
      super(base, height);
      this.base = base; 
      this.height = height; 
    }
    area() {
      return (this.base * this.height) / 2; 
    }
}

const circle1 = new Circle(10);
const triangle1 = new Triangle(10, 10);

circle1.displayDetails();
triangle1.displayDetails();


/*
-----------------------------------------------------------------------------------------
---------------------------------------EJERCICIO 6---------------------------------------
-    Write a small JavaScript program that demonstrates constructor chaining using a    -
- hierarchy of three classes as follows: A is the parent of B which is the parent of C. -
-    Modify your definition of A so that it has exactly one constructor that takes an   -
-          argument, and show how B and/or C must be changed to work with it.           -
-----------------------------------------------------------------------------------------
*/

class A {
  constructor(arg) {
    this.propiedadA = arg;
  }
  // Se define la clase A con un constructor que toma un argumento arg.
  // Dentro del constructor, se asigna el valor de arg a la propiedad propiedadA del objeto actual (this).
}

class B extends A {
  constructor(arg) {
    super(arg);
  }
  // Se define la clase B que extiende de la clase A con extends A.
  // El constructor de B toma un argumento arg.
  // Se llama al constructor de la clase A usando super(arg), lo que inicializa la propiedad propiedadA en la instancia de B.
}

class C extends B {
  constructor(arg) {
    super(arg);
  }
  // Se define la clase C que extiende de la clase B con extends B.
  // El constructor de C toma un argumento arg.
  // Se llama al constructor de la clase B usando super(arg), lo que a su vez llama al constructor de la clase A y establece la propiedad propiedadA en la instancia de C.
}

const CC = new C("Hola");
// Se crea una nueva instancia de la clase C con el argumento "Hola".
// Se pasa "Hola" al constructor de C, que a su vez lo pasa al constructor de B, y luego al constructor de A, inicializando así la propiedad propiedadA en la instancia de C.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(CC.propiedadA); 
// Se imprime el valor de la propiedad propiedadA de la instancia CC, que en este caso es "Hola".


/*
-----------------------------------------------------------------------------------------
---------------------------------------EJERCICIO 7---------------------------------------
-  A Computer Science department keeps track of its CS students using some custom soft  -
-  ware. Each student is represented by a Student object that features a pass() method  -
-  that returns true if and only if the student has all six ticks to pass the year. The -
-    department suddenly starts teaching NS students, who only need four ticks to pass. -
-   Using inheritance and polymorphism, show how the software can continue to keep all  -
-   Student objects in one list in code without having to change any classes other than -
-                                       Student.                                        -
-----------------------------------------------------------------------------------------
*/