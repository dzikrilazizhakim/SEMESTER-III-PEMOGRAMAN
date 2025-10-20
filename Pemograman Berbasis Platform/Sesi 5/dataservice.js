import * as config from './config.js';

function fetchData(endpoint) {
    const url = `${config.BASE_URL}/${endpoint}`;
    console.log(`Mengambil data dari: ${url} - dataservice.js:5`);
    console.log(`Menggunakan Kunci API: ${config.API_KEY} - dataservice.js:6`);
    console.log(`Batasa Per Halaman: ${config.MAX_ITEMS_PER_PAGE} - dataservice.js:7`);
}

fetchData('products');