function greetUser(name) {
  return 'Hello, ' + name + '!';
}

const greeting = greetUser("Haviv");
console.log(greeting); 

// Menggunakan Arrow Function
const greetUserArrow = (name) => {
  return 'Hello, ' + name + '!';
}
const greetingArrow = greetUser("Apip");
console.log(greetingArrow);