class Person {

  constructor(name, age) {

      this.name = name;
      this.age = age;

  }

  introduce() {

      return `Nama Saya ${this.name}, umur saya ${this.age} tahun`

  }

}

const haviv = new Person('Haviv', 20);
console.log(haviv.introduce());