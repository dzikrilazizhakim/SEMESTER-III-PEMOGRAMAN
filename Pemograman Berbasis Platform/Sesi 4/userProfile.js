const userProfile = {
    firstname: "Dzikril",
    lastname: "Aziz",
    age: 20,
    email: "dzikrilfansbase@gmail.com",
    isActive: true,

    getfullname: function() {
        return this.firstname + " " + this.lastname;
    },

    greet() {
        return "Hello, Saya " + this.getfullname() + "!";
    }
};

// 🔹 Ubah nilai lastname
userProfile.lastname = "Jono";

// 🔹 Ubah nilai firstname menggunakan variabel
let namaawal = "firstname";
userProfile[namaawal] = "Budi";

// 🔹 Tambah properti baru
userProfile.telepon = "085721329929";

// 🔹 Tampilkan hasil dengan format rapi
console.log("========== PROFIL PENGGUNA ========== - userProfile.js:28");
console.log(`Nama Lengkap : ${userProfile.getfullname()} - userProfile.js:29`);
console.log(`Umur         : ${userProfile.age} - userProfile.js:30`);
console.log(`Email        : ${userProfile.email} - userProfile.js:31`);
console.log(`Telepon      : ${userProfile.telepon} - userProfile.js:32`);
console.log(`Status Aktif : ${userProfile.isActive ? "Aktif" : "Tidak Aktif"} - userProfile.js:33`);
console.log("");
console.log(userProfile.greet());
console.log("===================================== - userProfile.js:36");