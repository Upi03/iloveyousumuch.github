# Cara Menambahkan Link YouTube untuk Lagu

## Langkah-langkah:

### 1. Cari Lagu di YouTube

**Untuk lagu "About You":**
- Buka YouTube.com
- Cari: "About You The 1975"
- Pilih video yang ingin digunakan
- Salin URL video (contoh: `https://www.youtube.com/watch?v=VIDEO_ID_DISINI`)

**Untuk lagu "Kota Ini Tak Sama Tanpamu":**
- Buka YouTube.com  
- Cari: "Kota Ini Tak Sama Tanpamu Nadhif Basalamah"
- Pilih video yang ingin digunakan
- Salin URL video (contoh: `https://www.youtube.com/watch?v=Px2B19P4HxI`)

### 2. Ambil Video ID

Dari URL yang Anda salin, ambil bagian setelah `watch?v=`

**Contoh:**
- URL: `https://www.youtube.com/watch?v=abc123xyz`
- Video ID: `abc123xyz`

### 3. Edit File index.html

1. Buka file `index.html` dengan text editor
2. Cari bagian yang berisi:
   ```html
   src="https://www.youtube.com/embed/5qap5aO4i9A?enablejsapi=1...
   ```
3. Ganti `5qap5aO4i9A` dengan Video ID yang Anda dapatkan
4. Simpan file
5. Buka website di browser

### 4. Contoh Video ID yang Bisa Dicoba

**About You:**
- Coba cari di YouTube dan gunakan video ID dari video resmi atau yang paling populer

**Kota Ini Tak Sama Tanpamu:**
- Video ID yang sudah ada: `Px2B19P4HxI`
- Jika tidak berfungsi, cari video lain di YouTube dan ganti dengan video ID yang baru

### Tips:
- Pastikan video YouTube yang dipilih adalah video **PUBLIK** (bukan private/unlisted)
- Gunakan video resmi jika memungkinkan untuk kualitas audio yang lebih baik
- Setelah mengganti video ID, refresh halaman website (tekan F5)

