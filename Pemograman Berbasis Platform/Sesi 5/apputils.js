import { formatRupiah, capitalize } from './utils.js';

const harga = 150000;
const namaProduk = 'Laptop gaming';

console.log(`Harga: ${formatRupiah(harga)} - apputils.js:6`);
console.log(`Nama Produk: ${capitalize(namaProduk)} - apputils.js:7`);