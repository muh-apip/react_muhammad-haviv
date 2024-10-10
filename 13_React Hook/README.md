# React Hook

## Summary

### 1. React Hook
Hooks adalah fitur di React yang memudahkan kita untuk menggunakan fitur-fitur seperti **state** dan **lifecycle** di dalam **functional component**. Sebelum hooks, fitur-fitur ini hanya bisa digunakan di **class component**.

Dengan hooks, kita bisa membuat komponen yang lebih sederhana dan lebih mudah dibaca tanpa harus menggunakan **class**.

### 2. useState
`useState` adalah hook yang digunakan untuk menambahkan **state** ke dalam komponen fungsional. State adalah data yang dapat berubah seiring waktu dan digunakan untuk membuat komponen lebih dinamis.

### 3. useEffect
`useEffect` adalah hook yang digunakan untuk mengelola efek samping (side effects) dalam komponen React, seperti mengambil data dari API, memperbarui DOM, atau memasang/membersihkan event listener.

#### Contoh Penggunaan:
Jika kamu ingin menjalankan sesuatu setelah komponen muncul di layar (misalnya, mengambil data dari server), kamu bisa menggunakan `useEffect`. Hook ini juga bisa diatur supaya hanya berjalan saat ada perubahan pada variabel tertentu.

#### Contoh Sederhana:

```javascript
import { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    // Ini akan berjalan saat komponen pertama kali di-render
    console.log('Komponen muncul di layar!');

    // Mengembalikan fungsi untuk membersihkan saat komponen dihilangkan
    return () => {
      console.log('Komponen dihilangkan dari layar!');
    };
  }, []); // Array kosong berarti hanya dijalankan sekali saat komponen muncul
}
```

### 4. Custom Hook

**Custom Hook** adalah cara untuk membuat hook sendiri berdasarkan hook-hook bawaan React. Tujuannya adalah agar kita bisa menggunakan logika yang sama di banyak komponen tanpa perlu menyalin kode berulang kali.

Kita dapat membuat **Custom Hook** dengan cara mendefinisikan fungsi biasa, namun di dalamnya menggunakan hook bawaan seperti `useState` atau `useEffect`.

Dengan menggunakan Custom Hook, kita bisa membuat logika yang dapat digunakan kembali di berbagai komponen, sehingga kode menjadi lebih bersih dan lebih mudah dipelihara.