# Event Handling

## Summary

### 1. State
- **Definisi**: State adalah objek yang menyimpan informasi tentang komponen React dan dapat berubah seiring waktu.
- **Penggunaan**: Digunakan untuk menyimpan data yang dapat mempengaruhi rendering UI, seperti input dari pengguna atau status aplikasi.
- **Pembaruan**: Pembaruan state dilakukan menggunakan metode `setState` untuk komponen kelas, dan dengan menggunakan hook `useState` pada komponen fungsional.

### 2. Stateful vs Stateless
- **Stateful Components**:
  - **Definisi**: Komponen yang memiliki state dan dapat menyimpan dan mengelola data internal.
  - **Contoh**: Komponen kelas, seperti yang dibuat menggunakan `class Component`, atau komponen fungsional yang menggunakan hook state (e.g., `useState`).
  - **Fitur**: Mampu merender ulang dirinya sendiri ketika state berubah.

- **Stateless Components**:
  - **Definisi**: Komponen yang tidak memiliki state internal dan hanya menerima props untuk merender UI.
  - **Contoh**: Komponen fungsional biasa tanpa hook state.
  - **Fitur**: Lebih sederhana dan sering kali lebih mudah untuk diuji dan dipahami karena tidak mengelola state.

### 3. Handling Events
- **Definisi**: Penanganan event di React melibatkan pengelolaan interaksi pengguna, seperti klik tombol, input teks, dll.
- **Metode**:
  - **Pengikatan Event**: Gunakan sintaks JSX untuk mengaitkan event handler, misalnya, `onClick={this.handleClick}`.
  - **Fungsi Penanganan**: Event handler biasanya didefinisikan sebagai metode di dalam kelas komponen atau fungsi di dalam komponen fungsional.
  - **Penggunaan `this`**: Pada komponen kelas, perlu mengikat `this` ke event handler untuk mengakses state dan props. Biasanya dilakukan di constructor atau menggunakan arrow functions.
  - **Prevent Default**: Metode `event.preventDefault()` dapat digunakan untuk mencegah perilaku default pada event tertentu (misalnya, pengiriman form).

### Contoh Kode
```javascript
import React, { useState } from 'react';

const StatefulComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default StatefulComponent;
