const userName = {
    firstname: "jono",
    tahun: 2024

};

userName.tahun = 2024;
console.log(userName.tahun);

let kunciName = "firstname";
userName[kunciName] = "budi";
console.log(userName.firstname);