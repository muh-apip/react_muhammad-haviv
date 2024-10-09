# React Fundamental

## Summary

### 1. React Components

Komponen di React adalah blok bangunan yang digunakan untuk membangun antarmuka. Ada dua jenis komponen:

- **Komponen Kelas**: Ini adalah cara lama untuk membuat komponen. Kita menggunakan kelas dan bisa memiliki state serta metode siklus hidup.
- **Komponen Fungsi**: Ini adalah cara baru dan lebih sederhana. Kita hanya menggunakan fungsi dan dapat menggunakan fitur baru yang disebut Hooks untuk memiliki state dan efek samping.

### 2. React Lifecycle

Setiap komponen di React memiliki siklus hidup, yang berarti ia melewati beberapa tahap, yaitu:

- **Mounting**: Tahap ini terjadi saat komponen pertama kali dibuat dan ditampilkan di layar. Beberapa metode yang terlibat di sini adalah `constructor`, `componentDidMount`, dan `render`.
- **Updating**: Ini terjadi ketika komponen menerima data baru atau ketika state-nya berubah. Metode yang dipanggil termasuk `shouldComponentUpdate`, `componentDidUpdate`, dan `render`.
- **Unmounting**: Tahap ini terjadi saat komponen dihapus dari layar. Di sini kita menggunakan metode `componentWillUnmount`.

### 3. Props

Props adalah cara untuk mengirim data dan fungsi dari komponen induk ke komponen anak. Bayangkan props seperti paket yang kita kirim ke teman kita. Teman kita bisa membuka dan melihat isinya, tetapi mereka tidak bisa mengubah isi paket tersebut. Ini membantu kita menjaga data tetap konsisten dan membuat komponen lebih fleksibel dan mudah digunakan kembali.

Dengan memahami komponen, siklus hidup, dan props, kita bisa membangun aplikasi React yang lebih efisien dan terorganisir.
