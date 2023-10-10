class Person {
  constructor(name) {
    this._name = name;
  }

  greet = () => {
    console.log(`Hola, ${this._name}`);
  };
}

const persona = new Person("Mònica");
persona.greet();
