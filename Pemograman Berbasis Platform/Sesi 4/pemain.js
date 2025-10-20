function buatPemain(nama, skor) {
    return {
        nama, // Shorthand untuk nama: nama
        skor, // Shorthand untuk skor: skor
        tambahSkor(poin) {
            this.skor += poin;
        }
    };
}

const pemain1 = buatPemain("Doni", 50);
pemain1.tambahSkor(45);
console.log(pemain1.skor); // Output: 60