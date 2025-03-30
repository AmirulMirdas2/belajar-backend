let nilai_awal = parseInt(prompt("masukkan jumlah"));

while(!nilai_awal){
    nilai_awal = parseInt(prompt("masukkan yang benar bang"));
}

const batas = Math.floor(Math.random() * nilai_awal) + 1;
console.log(batas);
let percobaan = 1;

let tebakan = parseInt(prompt('masukkan angka yang ingin ditebak'));

while(parseInt(tebakan) !== batas){
    percobaan ++;
    if (tebakan > batas){
        tebakan = parseInt(prompt("terlalu tinggi bang"));
    } else {
        tebakan = parseInt(prompt("terlalu rendah bawang"));
    }
}

alert(`kelazzz king walaupun percobaan ke-${percobaan}`)