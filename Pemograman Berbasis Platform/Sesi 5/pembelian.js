import { hitungDiskon, hitungPajak } from './calculator.js'

const hargaAwal = 95000;

const hargaSetelanDiskon = hitungDiskon(hargaAwal, 10);
console.log(`Harga Setelah Diskon 10%: ${hargaSetelanDiskon} - pembelian.js:6`);

const hargaAkhir = hitungPajak(hargaSetelanDiskon, 5);
console.log(`Harga Setelah Pajak 5%: ${hargaAkhir} - pembelian.js:9`);

hitungDiskon('seribu', 10);