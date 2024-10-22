# Deployment with Vercel

## Summary
## Link vercel.app : https://react-muhammad-haviv-fvsn.vercel.app/

### 1. Pengertian Deployment
Deployment adalah proses mengirimkan aplikasi yang sudah selesai dikembangkan ke lingkungan produksi agar dapat diakses oleh pengguna akhir. Ini mencakup langkah-langkah untuk mempersiapkan dan menempatkan aplikasi di server atau platform hosting sehingga aplikasi dapat beroperasi secara live.

### 2. Vercel
Vercel adalah platform hosting yang dirancang untuk proyek frontend, terutama React. Platform ini mendukung deployment otomatis dan berintegrasi dengan repositori Git seperti GitHub, GitLab, dan Bitbucket.

### 3. Langkah - langkah deployment dengan vercel
1. Buat akun di Vercel: Pertama, buat akun di Vercel atau login menggunakan akun GitHub.
2. Hubungkan dengan repositori Git: Hubungkan proyek React Anda yang berada di GitHub ke Vercel.
3. Deployment Otomatis: Setiap kali Anda melakukan push ke repositori, Vercel akan otomatis mem-build dan mendistribusikan aplikasi.
4. Optimasi Build: Vercel melakukan optimasi build seperti minifikasi file dan optimasi gambar untuk kinerja yang lebih baik.

### 4. Peletakan Branch tertentu pada vercel
 Biasanya, deployment otomatis diaktifkan untuk branch utama, seperti main atau master. 

### 5. HTTPS yang Disediakan oleh Vercel
Vercel secara otomatis menyediakan sertifikat SSL gratis dari Let's Encrypt untuk setiap deployment yang dilakukan, baik untuk domain Vercel bawaan (misalnya your-app.vercel.app) maupun custom domain yang Anda tambahkan.