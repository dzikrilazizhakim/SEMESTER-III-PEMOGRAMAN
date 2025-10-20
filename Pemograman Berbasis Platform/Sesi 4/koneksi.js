function buatKoneksi(config) {
    const { host, port, user, password } = config;
    console.log(`Menghubungkan ke ${user}@${host}:${port} - koneksi.js:3`);
}

buatKoneksi({
    host: "localhost",
    port: 3306,
    user: "admin",
    password: "rahasia"
});