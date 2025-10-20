function hitungHargaAkhir(totalBelanja) {
    
    let persenDiskon = 0;

    if (totalBelanja > 1000000) {
        persenDiskon = 0.15; 
    } else if (totalBelanja > 500000) {
        persenDiskon = 0.10; 
    } else {
        persenDiskon = 0;
    }

    let HargaAkhir = totalBelanja - (totalBelanja*persenDiskon);

    return HargaAkhir;

}

