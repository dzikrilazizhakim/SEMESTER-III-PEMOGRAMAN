const userProfile = {

    firstName: "Budi",
    lastName: "Santoso",
    age: 30,
    email: "budi.santoso@example.com",
    isActive: true,

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    greet() {
        return "Hallo, saya " + this.getFullName() + ".";
    }
};
console.log("Nama Lengkap: - profile.js:17", userProfile.getFullName());
console.log("Usia: - profile.js:18", userProfile.age);

console.log("Status Aktif: - profile.js:20", userProfile['isActive']);
console.log(userProfile.greet());