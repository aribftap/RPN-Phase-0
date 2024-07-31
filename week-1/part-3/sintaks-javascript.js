// membuat variable with var, let, const
var person1 = "person1"; // jarang digunakan + bisa duplikasi varible
var person1 = "tidak terjadi error"; // contoh
console.log(person1);

let person2 = "person2"; // penganti var + tidak bisa duplikasi variable
// let person2 = "error" // contoh
console.log(person2);

const person3 = "person3"; // konstant alias tidak bisa duplikasi serta tidak bisa diubah nilainya
// person3 = "anjay"; // error akan muncul ketika di run
console.log(person3);

// tipe data javascript
// Numbers:
let length = 16;
let weight = 7.5;
console.log(length);
console.log(weight);

// Strings:
let color = "Yellow";
let myName = "Johnson";
console.log(color);
console.log(myName);

// Booleans
let x = true;
let y = false;
console.log(x);
console.log(y);

// operator aritmatike javascript
let a = 10;
let b = 20;

// Penjumlahan
console.log(a + b); // langsung diconsole
let result = a + b; // ditampung terlebih dahulu juga bisa
console.log("Hasil Penjumlahan adalah =", result);

// Pengurangan
result = a - b;
console.log("Hasil Pengurangan adalah =", result);

// Perkalian
result = a * b;
console.log("Hasil Perkalian adalah =", result);

// Pembagian
result = a / b;
console.log("Hasil Pembagian adalah =", result);

// Sisa Bagi aka Modulus
result = a % b;
console.log("Hasil Sisa Bagi / Modulus adalah =", result);

// string concatenation
// Saat menambahkan angka dan string, JavaScript akan memperlakukan angka tersebut sebagai string.
let firstName = "Arib Fayyadhtamir";
let lastName = "Andika Putra";
let age = 22;
console.log(
  "Halo nama saya " + firstName + " " + lastName + " Dan umur saya " + age
);
