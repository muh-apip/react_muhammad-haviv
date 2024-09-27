function swapValues(a, b) {
  console.log("Nilai sebelum di swap : a =", a, "b =" , b );
  
  var nilai = a;
  a = b;
  b = nilai;
  
  console.log("Nilai setelah di swap : a =", a, "b =" , b );

}

swapValues(5, 10);