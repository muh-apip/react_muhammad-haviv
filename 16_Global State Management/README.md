# Global State Management

## Summary

### 1. Global State 
merujuk pada cara untuk mengelola data atau status yang dapat diakses oleh berbagai komponen dalam aplikasi. Pada aplikasi React, setiap komponen dapat memiliki state lokal yang hanya dapat diakses dalam komponen tersebut. Namun, ketika beberapa komponen perlu berbagi data yang sama, kita memerlukan global state untuk menjaga data yang konsisten di seluruh aplikasi tanpa perlu mengoper props antar komponen secara berlapis.

### 2. Zustand
Zustand adalah sebuah pustaka (library) untuk manajemen state global di aplikasi React yang ringan, sederhana, dan tanpa boilerplate. Zustand memungkinkan pengelolaan state yang efisien dengan API yang mudah digunakan dan reaktif, sangat cocok untuk aplikasi kecil hingga besar. Zustand memanfaatkan hook React, seperti useState dan useEffect, namun menawarkan lebih banyak fleksibilitas untuk berbagi state di seluruh aplikasi tanpa kompleksitas Redux.

### 3. Tools dan Libraries di Zustand
-React: Untuk membangun UI dan menggunakan hook-state.
-Zustand: Untuk mengelola global state.
-TypeScript (opsional): Menyediakan tipe data untuk meningkatkan kualitas kode dan mengurangi bug.
-DevTools (opsional): Zustand menyediakan ekstensi devtools untuk memantau dan mendiagnosis state   dalam aplikasi React.

### 4. Komponen komponen di Zustand
1. Store:

Store adalah tempat untuk mendefinisikan dan menyimpan global state.
Setiap store di Zustand adalah sebuah fungsi yang mengembalikan objek yang berisi state dan action untuk mengubah state tersebut.
Contoh:

  ```js
  Salin kode
  import create from 'zustand';

  const useStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 }))
  }));
  ```

2. State:

State adalah data yang disimpan di dalam store dan dapat diakses oleh komponen-komponen di seluruh aplikasi.
Misalnya, data yang mengelola jumlah klik atau preferensi pengguna.

3. Actions:

Actions adalah fungsi yang dapat memodifikasi state. Dalam Zustand, kita menggunakan fungsi set() untuk mengubah state.
Actions bertugas untuk menangani logika yang mengubah data (misalnya penambahan atau pengurangan).
