# Introduction Data Structured (Java Script)

## Summary

1. **Struktur Data Dasar di JavaScript**
   - JavaScript menyediakan dua struktur data dasar yang sering digunakan, yaitu **Array** dan **Set**.
   
   ### Array
   - Array adalah kumpulan data yang terurut, di mana setiap elemen memiliki indeks. Array bisa berisi elemen yang sama (duplikat).
   - Contoh penggunaan Array adalah ketika kita butuh menyimpan daftar item yang terurut.

   ### Set
   - Set adalah kumpulan data yang hanya berisi elemen unik (tidak ada duplikat).
   - Set berguna ketika kita ingin menyimpan data tanpa ada elemen yang berulang.

2. **Operasi Membaca Data (Read)**
   - **Array:** Kita bisa mengakses elemen array dengan menggunakan indeks, contohnya `arr[0]` untuk mengambil elemen pertama.
   - **Set:** Untuk membaca elemen di Set, kita bisa menggunakan `for...of` untuk iterasi atau mengubah Set ke Array menggunakan `Array.from(set)`.

3. **Operasi Menambah Data (Insert)**
   - **Array:** Gunakan metode `push()` untuk menambah elemen di akhir array atau `unshift()` untuk menambah elemen di awal. Contoh: `arr.push(5)` menambahkan angka 5 ke akhir array.
   - **Set:** Gunakan `add()` untuk menambah elemen baru ke Set. Contoh: `set.add(5)`. Set secara otomatis menolak elemen duplikat.

4. **Operasi Menghapus Data (Delete)**
   - **Array:** Gunakan `pop()` untuk menghapus elemen terakhir, atau `shift()` untuk menghapus elemen pertama. Jika ingin menghapus elemen berdasarkan indeks, gunakan `splice()`. Contoh: `arr.splice(1, 1)` menghapus elemen kedua.
   - **Set:** Gunakan `delete()` untuk menghapus elemen tertentu. Contoh: `set.delete(5)` menghapus elemen bernilai 5 dari Set.

5. **Operasi Mencari Data (Search)**
   - **Array:** Gunakan `indexOf()` untuk mencari posisi elemen atau `includes()` untuk memeriksa apakah elemen ada di dalam array. Contoh: `arr.includes(5)` mengembalikan `true` jika angka 5 ada dalam array.
   - **Set:** Gunakan `has()` untuk memeriksa apakah elemen ada di dalam Set. Contoh: `set.has(5)` mengembalikan `true` jika angka 5 ada dalam Set.
