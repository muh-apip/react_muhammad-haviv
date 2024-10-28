# Introduction Restfull API

## Summary

### 1 . Apa itu RESTful API?

RESTful API (Representational State Transfer) adalah arsitektur yang digunakan untuk membangun layanan web yang memungkinkan komunikasi antara client dan server menggunakan protokol HTTP. Dalam konteks aplikasi web, client biasanya merupakan aplikasi frontend (seperti yang dibangun dengan React), dan server mengelola database serta menyajikan data ke client.

### 2. Tools yang Digunakan

React: Library JavaScript untuk membangun antarmuka pengguna. React memungkinkan Anda untuk membuat komponen UI yang dapat digunakan kembali.

Axios: Library untuk melakukan permintaan HTTP yang menyederhanakan proses komunikasi dengan API.

Postman: Alat untuk menguji API. Dengan Postman, Anda dapat melakukan permintaan GET, POST, PUT, dan DELETE ke API Anda untuk memastikan semuanya berjalan dengan baik.

### 3. Langkah-langkah Pembuatan RESTful API dengan React

- **Buat Proyek Baru**: Gunakan Vite untuk memulai proyek React baru. Jalankan perintah berikut di terminal:
  ```bash
  npm create vite@latest my-restful-api-app --template react
  cd my-restful-api-app
  ```
- **Install Axios**: Axios adalah library yang memungkinkan Anda untuk melakukan permintaan HTTP. Untuk menginstalnya, jalankan:

  ```bash
    npm install axios
  ```
