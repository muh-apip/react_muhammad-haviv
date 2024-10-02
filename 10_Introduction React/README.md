# Introduction React

## Summary
## Link Repository Instalasi React CRA (Create React APP) : https://github.com/muh-apip/instalasi-react-cra/tree/main/introduction-react

1. **Apa itu React?**
   - React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (User Interface) yang interaktif. React dikembangkan oleh Facebook dan saat ini banyak digunakan untuk membangun aplikasi web modern.
   - React berfokus pada komponen, yang memungkinkan pengembang memecah UI menjadi bagian-bagian kecil yang bisa digunakan kembali.

2. **Komponen dalam React**
   - Komponen adalah blok bangunan dasar dalam React. Setiap komponen bisa berupa fungsi atau kelas yang menghasilkan elemen UI.
   - Komponen dapat digunakan kembali (reusable) dan bisa menerima *props* (parameter) untuk menampilkan data dinamis.
   - Contoh komponen fungsional:
     ```javascript
     function HelloWorld() {
       return <h1>Hello, World!</h1>;
     }
     ```

3. **JSX (JavaScript XML)**
   - JSX adalah ekstensi sintaksis untuk JavaScript yang digunakan dalam React untuk menulis tampilan (UI) dengan cara yang mirip seperti HTML.
   - JSX membuat kode lebih mudah dibaca dan ditulis, meskipun di balik layar, JSX akan di-*transpile* menjadi JavaScript murni.
   - Contoh JSX:
     ```javascript
     const element = <h1>Hello, JSX!</h1>;
     ```

4. **State dan Props**
   - **State** adalah data internal yang dimiliki oleh komponen dan bisa berubah seiring interaksi pengguna atau waktu. State dikelola menggunakan `useState` pada komponen fungsional.
   - **Props** adalah data yang diterima oleh komponen dari komponen induk. Props bersifat statis dan tidak dapat diubah oleh komponen penerima.
   - Contoh penggunaan state:
     ```javascript
     const [count, setCount] = useState(0);
     ```