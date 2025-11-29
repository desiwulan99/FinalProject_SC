* Judul Project: Animal Care

* Deskripsi Umum

Proyek ini adalah REST API sederhana yang digunakan untuk mengelola data hewan dan layanan perawatannya. Sistem ini memungkinkan pencatatan informasi hewan, pemantauan kondisi kesehatan, serta pemberian saran perawatan yang sesuai melalui endpoint yang tersedia.

* Cara menjalankan server
1. Menginstall node.js (ver 16+)
2. Jalankan perintah npm install
3. lalu npm start atau node index.js

--> Server akan berjalan (default contoh): http://localhost:3000

* Daftar Endpoint 
1. getAllHewanController : Menampilkan semua data hewan di klinik
2. getTotalHewanController : Menampilkan total jumlah hewan di klinik
3. getHewanByIdController : Menampilkan data hewan berdasarkan ID
4. getSaranPerawatanController : Menampilkan saran perawatan untuk hewan berdasarkan ID
5. createHewanController : Menambahkan data hewan di klinik
6. updateHewanController : Mengubah data hewan di klinik
7. deleteHewanController : Menghapus data hewan di klinik

* Struktur File 

/controllers/hewanController.js  
/routes/hewanRoutes.js  
/services/hewanService.js  
/data.js  
/index.js
