# React Form

## Summary

### 1. Inputan Form / Basic Form
React menyediakan cara untuk membuat form dengan elemen HTML seperti `<input>`, `<textarea>`, dan `<select>`. Setiap elemen input dapat memiliki state yang terkait untuk menyimpan dan mengelola nilai yang dimasukkan pengguna. Biasanya, form React menggunakan event handler seperti `onChange` untuk mengupdate state saat pengguna mengetik.

### 2. Controlled vs Uncontrolled Forms

#### Controlled Forms
Dalam controlled forms, nilai input dikendalikan oleh state React. Setiap perubahan pada input akan memicu fungsi `onChange`, dan nilai input disimpan dalam state. 

**Contoh:**
```javascript
const [value, setValue] = useState('');

return (
  <input 
    type="text" 
    value={value} 
    onChange={(e) => setValue(e.target.value)} 
  />
);
```
Uncontrolled Forms

Uncontrolled forms menggunakan referensi (refs) untuk mengakses nilai input, tanpa menyimpannya dalam state. Ini berguna ketika Anda tidak ingin mengelola state untuk setiap input, atau dalam kasus penggunaan yang lebih sederhana.

**Contoh:**
```javascript
const inputRef = useRef();

const handleSubmit = () => {
  alert(inputRef.current.value);
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" ref={inputRef} />
    <button type="submit">Submit</button>
  </form>
);

```
### 3. Basic Validation Form
Validasi form memastikan bahwa data yang dimasukkan oleh pengguna memenuhi kriteria tertentu sebelum dikirim. Validasi bisa dilakukan secara manual dengan memeriksa nilai state sebelum pengiriman form.

**Contoh:**
```javascript
const [value, setValue] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (!value) {
    setError('Input tidak boleh kosong');
  } else {
    setError('');
    // Proses pengiriman form
  }
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    {error && <span>{error}</span>}
    <button type="submit">Submit</button>
  </form>
);

```