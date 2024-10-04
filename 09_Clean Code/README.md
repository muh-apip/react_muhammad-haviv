# Clean Code

## Summary

Dalam pengembangan perangkat lunak, *Clean Code* adalah kode yang mudah dipahami, dirawat, dan dikembangkan. Berikut adalah dua prinsip penting dalam Clean Code, yaitu **KISS** dan **DRY**.

### 1. KISS (Keep It Simple)

Prinsip **KISS** menekankan bahwa kode harus tetap sederhana dan langsung pada tujuannya. Tujuan utamanya adalah menghindari kerumitan yang tidak perlu dalam logika atau implementasi. Kode yang rumit sulit dibaca, dipahami, dan dipelihara.

#### Contoh KISS:
- **Do**: Buatlah fungsi atau metode yang fokus pada satu tugas dan jelas tujuannya.
- **Don't**: Jangan membuat fungsi yang terlalu kompleks atau mencakup terlalu banyak logika.

**Best Practices**:
- Pecah kode yang rumit menjadi bagian-bagian kecil yang dapat digunakan ulang.
- Gunakan nama variabel dan fungsi yang deskriptif untuk meningkatkan pemahaman.

### 2. DRY (Don't Repeat Yourself)

Prinsip **DRY** mengajarkan untuk menghindari pengulangan kode yang sama di beberapa tempat. Sebagai gantinya, buat fungsi atau modul yang dapat digunakan kembali sehingga kode lebih modular dan terstruktur. Pengulangan kode tidak hanya membuat kode menjadi panjang, tetapi juga menyulitkan perawatan dan memperbesar kemungkinan kesalahan.

#### Contoh DRY:
- **Do**: Ekstrak kode yang sering digunakan menjadi fungsi terpisah yang bisa dipanggil kembali di berbagai tempat.
- **Don't**: Hindari menulis kode yang sama di berbagai lokasi, karena akan sulit diubah jika ada bug atau perubahan.

**Best Practices**:
- Refaktor kode yang berulang menjadi fungsi yang bisa dipakai ulang.
- Gunakan inheritance (pewarisan) atau komposisi dalam pemrograman berorientasi objek untuk menghindari pengulangan.

### 3. Fungsi Sederhana
- Buat fungsi yang melakukan satu tugas dan tetap singkat.
- Contoh:
  ```javascript
  function calculateTotalPrice(items) {
    return items.reduce((total, item) => total + item.price, 0);
  }
### 4. **Sederhanakan Logika**
- Gunakan metode sederhana untuk memproses data.
- Contoh:
     
  ```javascript
     const activeItems = items.filter(item => item.isActive);


### 5. **Error Handling yang Baik**
- Tangani error dengan baik agar mudah di-debug.
- Contoh:
     
    ```javascript
     try {
       let data = JSON.parse(response);
     } catch (error) {
       console.error("Failed to parse JSON", error);
     }

---