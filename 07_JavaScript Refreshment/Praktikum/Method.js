const calculator = {
  add: function(a, b) {
      return a + b;
  },
  subtract: function(a, b) {
      return a - b;
  },
  multiply: function(a, b) {
      return a * b;
  },
  divide: function(a, b) {
      return a / b;
  }
};

const num1 = 10;
const num2 = 5;

console.log("Penjumlahan:", calculator.add(num1, num2));        
console.log("Pengurangan:", calculator.subtract(num1, num2));  
console.log("Perkalian:", calculator.multiply(num1, num2));    
console.log("Pembagian:", calculator.divide(num1, num2));      

