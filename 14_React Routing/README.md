# React Routing

## Pengantar
React Routing menyediakan cara untuk mengelola navigasi dalam aplikasi React, memungkinkan pengguna untuk berpindah antar halaman dengan mulus.

## 1. Cara Instalasi
Untuk menggunakan React Router, Anda perlu menginstal paket `react-router-dom` dengan perintah:
```bash
npm install react-router-dom
```

### 2. Konsep Utama React Routing
Router: Komponen utama yang membungkus aplikasi dan mengelola routing.
Route: Mendefinisikan jalan untuk komponen tertentu, biasanya terdiri dari path dan element.
Link: Komponen untuk membuat tautan yang memungkinkan pengguna berpindah antar route tanpa memuat ulang halaman.
Switch: Digunakan untuk merender hanya satu Route yang sesuai dengan path yang diberikan (pada versi sebelumnya; di versi terbaru, menggunakan Routes).

### 3. Hook Routing React
React Router juga menyediakan beberapa hook yang berguna untuk menangani routing di dalam komponen fungsional. Berikut adalah beberapa hook penting: useNavigate, useParams, useHistory, useLocation, useRouteMatch

### 4. Contoh Penggunaan React Routing
```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}
```

