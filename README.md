# 📚 Bookshelf API

Submission proyek **Bookshelf API** menggunakan **Node.js + Express**.  
Aplikasi ini memenuhi seluruh kriteria wajib dari kelas **Belajar Back-End Pemula dengan JavaScript** Dicoding.

## 🚀 Cara Menjalankan
1. Clone atau ekstrak project ini.
2. Masuk ke folder project:
   ```bash
   cd bookshelf-api
   ```
3. Install dependency:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm run start
   ```
   Server berjalan di **http://localhost:9000**

> Untuk development bisa gunakan:
> ```bash
> npm run start-dev
> ```

---

## 📑 Endpoint Utama

### Tambah Buku
- **POST** `/books`

### Lihat Semua Buku
- **GET** `/books`

### Lihat Detail Buku
- **GET** `/books/{bookId}`

### Update Buku
- **PUT** `/books/{bookId}`

### Hapus Buku
- **DELETE** `/books/{bookId}`

---

## 🔍 Query Opsional (GET /books)
- `?name=keyword` → filter nama buku (case-insensitive)  
- `?reading=0/1` → filter status sedang dibaca  
- `?finished=0/1` → filter status selesai dibaca  

---

## 🛠️ Tools & Style
- Framework: **Express.js**
- ID Generator: **nanoid**
- Linter: **ESLint (Google Style Guide)**

---

## ✅ Catatan Submission
- Port default: **9000**
- Script start: `npm run start`
- Tidak menggunakan database eksternal
- Data disimpan di memory (`books` array)
- Sudah lolos linting (`npx eslint .`)



<img width="1919" height="920" alt="image" src="https://github.com/user-attachments/assets/f57e8dc1-1ff8-45e1-9df1-350bf36257db" />
