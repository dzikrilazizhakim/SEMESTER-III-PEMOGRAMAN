// 1. Objek literal untuk mahasiswa pertama
const mahasiswa1 = {
    nama: "Budi Santoso",
    nim: "2023001",
    jurusan: "Teknik Informatika"
};

// 2. Objek literal untuk mahasiswa kedua
const mahasiswa2 = {
    nama: "Siti Aminah",
    nim: "2023002",
    jurusan: "Sistem Informasi"
};

// 3. Fungsi untuk menampilkan informasi mahasiswa
function tampilkanInfoMahasiswa(mahasiswa) {
    console.log(`Nama: ${mahasiswa.nama} - mahasiswa.js:17`);
    console.log(`NIM: ${mahasiswa.nim} - mahasiswa.js:18`);
    console.log(`Jurusan: ${mahasiswa.jurusan} - mahasiswa.js:19`);
    console.log(""); // Penanda pemisah antar mahasiswa
}

// 4. Panggil fungsi untuk menampilkan informasi kedua mahasiswa
tampilkanInfoMahasiswa(mahasiswa1);
tampilkanInfoMahasiswa(mahasiswa2);