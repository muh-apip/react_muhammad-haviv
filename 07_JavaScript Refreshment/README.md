# JavaScript Refreshment

## Summary

### 1. Variabel
- **Deklarasi**: Variabel dapat dideklarasikan menggunakan `var`, `let`, atau `const`.
  - `var`: Mempunyai scope global atau function.
  - `let`: Mempunyai block scope, dapat diubah nilainya.
  - `const`: Mempunyai block scope, tidak dapat diubah nilainya setelah dideklarasikan.

### 2. Function
- Fungsi adalah blok kode yang dapat dipanggil dan digunakan kembali. Dalam JavaScript, fungsi dapat didefinisikan dengan beberapa cara:

#### Fungsi Deklarasi
- Fungsi yang dideklarasikan dengan menggunakan kata kunci `function`, diikuti oleh nama fungsi dan tanda kurung.
- **Contoh**:
  ```javascript
  function greet(name) {
      return `Hello, ${name}!`;
  }

  console.log(greet('Haviv')); 

### Fungsi Ekspresi
-Fungsi yang didefinisikan sebagai ekspresi, sering kali tidak memiliki nama (dikenal  sebagai fungsi anonim) dan dapat disimpan dalam variabel.
- **Contoh**:
  ```javascript
  const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // Output: 20

### 3. Class
- Class adalah blueprint untuk membuat objek dalam JavaScript. Sintaks `class` digunakan untuk mendefinisikan class, dan class dapat memiliki constructor, method, dan mendukung inheritance.
- **Contoh**:
  ```javascript
  class Person {

  constructor(name, age) {

      this.name = name;
      this.age = age;

  }

  introduce() {

      return `Nama Saya ${this.name}, umur saya ${this.age} tahun`

  }

}
