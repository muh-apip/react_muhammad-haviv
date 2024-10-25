# React Testing

## Summary 

### 1. Apa itu Testing?
Definisi: Testing adalah proses memverifikasi bahwa aplikasi atau komponen bekerja seperti yang diharapkan, mencegah bug, dan memastikan kualitas aplikasi.

Tujuan: Mengidentifikasi kesalahan dalam kode sebelum dirilis, sehingga komponen aplikasi berfungsi sesuai kebutuhan dan lebih mudah dipelihara.

### 2. Tools Testing
Jest: Sebuah framework JavaScript untuk menjalankan unit test dan snapshot test. Jest populer untuk aplikasi React karena memiliki integrasi kuat, performa tinggi, dan kemudahan debugging.

React Testing Library (RTL): Perpustakaan untuk menguji komponen React, berfokus pada perilaku pengguna dan antarmuka komponen, bukan implementasi internal. RTL bekerja dengan Jest untuk menguji cara pengguna berinteraksi dengan aplikasi.

### 3. Basic Testing di React Testing Library

#### Persiapan Pengaturan
1. **Instalasi Jest dan React Testing Library (RTL)**:
   ```bash
   npm install --save-dev @testing-library/react jest
   ```
2. **Struktur Folder**: 
Buat direktori ``__tests__`` di folder proyek untuk menyimpan file testing.