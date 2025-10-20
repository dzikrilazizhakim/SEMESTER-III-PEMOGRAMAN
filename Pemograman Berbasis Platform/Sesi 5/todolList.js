// todolList.js

import { Task, DEFAULT_PRIORITY } from './task.js';

const task1 = new Task('Belajar JavaScript'); // Menggunakan prioritas default
const task2 = new Task('Membayar Tagihan', 'high'); // Menggunakan prioritas high

console.log(`Prioritas Default: ${DEFAULT_PRIORITY} - todolList.js:8`); // Memperbaiki string dengan menghapus tanda kurung ekstra
console.log(`Task1: ${task1.title} dengan prioritas ${task1.priority} - todolList.js:9`); // Melanjutkan dan melengkapi baris ini
console.log(`Task2: ${task2.title} dengan prioritas ${task2.priority} - todolList.js:10`); // Menambahkan baris baru untuk task2

// Melanjutkan kode dengan memanggil metode untuk melihat output
task1.markCompleted(); // Ini akan menjalankan metode dan mencetak pesan
console.log(`Status Task1 setelah selesai: ${task1.isCompleted ? 'Selesai' : 'Belum selesai'} - todolList.js:14`);
console.log(`Status Task2: ${task2.isCompleted ? 'Selesai' : 'Belum selesai'} - todolList.js:15`);