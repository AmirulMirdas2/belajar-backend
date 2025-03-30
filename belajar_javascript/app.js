// if (1+1 == 3){
//     alert("perhitungan betul");
// } else {
//     alert("perhitugan salah seharusnya hasilnya adalah");
// }

// let angka = Math.random();

// if (angka >= 0.5 ? alert("angka lebih besar"):alert("angka lebih kecil"));

// const iniHari = "senin";

// if (iniHari === 'senin'){
//     console.log("Selamat Bekerja");
// } else if (iniHari === 'selasa'){
//     console.log("libur");
// }

// const nilai = 40;

// if (nilai < 50){
//     console.log('E');
// } else if (nilai < 60) {
//     console.log("D");
// } else if (nilai < 70) {
//     console.log('C');
// } else if (nilai < 80) {
//     console.log('B');
// } else if (nilai < 100){
//     console.log('A');
// } else {
//     console.log('F');
// }

// const password = prompt("buat password");

// if (password.length >= 6 && password.indexOf(" ") === -1 && password.indexOf("*") === -1 ) {
//     alert("password valid");
// } else {
//     alert("password minimal 6 kata dan tidak boleh ada spasi dan bintang")
// }
        
// let age = 19;
// let gender = 'male';

// if(gender === 'male' && age === 19){
//     alert("LEGAL")
// }

// const balon = prompt('masukkan balon mu').toLowerCase().trim()
// console.log(balon)

// switch(balon) {
//     case 'biru':
//         alert("ini balonku")
//         break;
//     case 'merah':
//         alert('bukan balonku')
//         break;
//     case 'hijau':
//         alert('balonmu')
//         break;
//     default:
//         alert('balon siapa ni bang?')
// }

// for(let i = 20; i >= 0 ; i--){
//     console.log(`saya ada didalam loop ke-${i}`);
// }

// for (let i = 10; i <= 100000; i *= 10){
//     console.log(i);
// }

// menampilkan data array dengan menggunakan perulangan

// const hewan = ['kucing', 'biawak', 'komodo', 'angsa'];

// for (let i = 0; i < hewan.length; i++){
//     console.log(`hewan ke-${i} adalah ${hewan[i]}`);
// }

// for didalam for
// const pilihan = 'abcde';

// for (let  x = 1; x <= 10; x++){
//     console.log(`no.${x}`);
//     for(let y = 0; y < pilihan.length; y++){
//         console.log(`       ${pilihan[y]}.`);
//     }
// }


// memanggil array dalam array
// const studentRow = [
//     ['olivia', 'liam', 'emma', 'noah'],
//     ['amelia', 'oliver', 'ava', 'elijah'],
//     ['sophia', 'mateo', 'isabella', 'lucas'],
// ]

// for(let i = 0; i<studentRow.length; i++){
//     const baris = studentRow[i];
//     console.log(`baris ke-${i + 1}`)
//         for(let j = 0; j < baris.length; j++){
//             console.log(`       ${baris[j]}`);
//         }
// }


// let num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// menggunakan while untuk membuat password 

// const password = "amirul123";
// let user = prompt("masukkan password");

// while (user !== password){
//     user = prompt("password salah!!");
// }
// prompt("password benar");


// while menggunakan break

// let input = prompt("katakan sesuatu");

// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'kelaz') break;
// }
// alert("nice");

// for(let i = 0; i <= 200; i++){
//     console.log(i);
//     if(i === 100) {
//         console.log("kondisi sudah mencukupi")
//         break;
//     };
// }


// let angka = Math.floor(Math.random()) + 1;
// console.log(angka);

// while(true){
//     let input = prompt("masukkan angka")
//     if(angka === input )break;
// }

// alert("selamat kamu benar");


// const fruits = ['mangga', 'anggur', 'cherry', 'semangka', 'nanas'];

// for(let buah of fruits){
//     console.log(`buah ${buah}`);
// }

// const mahasiswa = [
//     ['amirul', 'shaldi', 'irfan', 'affan'],
//     ['mahardika', 'faruqi', 'hizqil', 'diky'],
//     ['dayyat', 'shaira', 'khalisa', 'kak akhsania'],
//     ['bang rafli', 'bang rayyan', 'bang glenn', 'rezza']
// ];

// for(let x = 0; x < mahasiswa.length; x++){
//     // let PPM = mahasiswa[x];
    // console.log(`baris ke-${x + 1}`)
    // for(let y = 0; y < PPM.length; y++){
        // console.log(`       ${PPM[y]}`);
//     // }
// }   

// let angka = 0;
// for (let PPM of mahasiswa){
//     angka = angka + 1;
    
//     console.log(`baris ke-${angka}`)
//     for (let anggota of PPM){
//         console.log(`       ${anggota}`);
//     }
// }

// // membuat object
// const student = {
// //  key     value
//     olivia: 20,
//     amirul: 20,
//     mahardika: 22,
//     hendra: 10,
//     raja: 13,
//     suherman: 17,
//     caesar: 32,
//     sukijan: 34,
//     luis: 8,
//     asep: 15
// }

// objec harus menggunakan in
// for (let skor in student){
//     console.log(`${skor} memiliki skor ${student[skor]}`);
// }

// let total = 0;
// let score = Object.values(student); // mengubah objek menjadi array menggunakan Object.values(student)

// for (let rata_rata of score){
//     total += rata_rata
// }
// console.log(total / score.length) // length menghitung seluruh jumlah array

// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// // cara membuat function
// function nyanyi(){
//     console.log('fore fore fore')
//     console.log('dore dore dore')
//     console.log('fore fore fore')
// }

// // function dan argument
// function siswa (nama){              // -> nama adalah paramaeter
//     console.log(`halo ${nama}, selamat datang`)
// } 

// siswa('amirul') // amirul adalah argument dari parameter nama. Jadi argumen dan parameter = input 

// function jumlah(a, b){
//     if(typeof a !==  'number' || typeof b !== 'number'){
//         return "bukan angka"
//     }
//     return "angka";
// }


// lexical scope
// function lamaKerja(){
    // const jabatan = 'Progremmar'
// 
    // function orangDalam(){
        // let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
        // console.log(kenalan);
    // }
// 
    // orangDalam();
    // orangDalam();
// }

// function perpangkatan(nilai){
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5)


// // function expressions
// const hasilPerpangkatan = function (nilai) {
//     return nilai * nilai;
// }


// function sebagai argument
// function duaKali(func){
//     func()
//     func()
// }

// function lemparDadu(){
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil)
// }

// duaKali(lemparDadu)


// function hasilNyaAdalahFunction(){
//     let ran = Math.floor(Math.random() * 6) + 1;
//     if(ran > 3){
//         return function(){
//             console.log(`selamat angkanya lebih besar ${ran}`);
//         }
//     } else {
//         return function(){
//             console.log(`NOOOOOO!!! angkanya lebih kecil ${ran}`)
//         }
//     }
// }

// const tes = { // objek
//     perkalian: function(x,y) { //method
//         return x * y;
//     },
// };

// const saya = {
//     nama: 'ammirul mirdas',
//     hobi: 'nonton anime',
//     prodi: 'informatika',
//     kenalan: function(){
//         return `hello perkenalkan nama saya adalah ${this.nama}, saya memiliki hobi ${this.hobi}, dan sekarang saya sedang berada di prodi ${this.prodi}`
//     }
// }

// try {
//     saya.kenalan();
// } catch {
//     console.log('error bang')
// }

// function pesan(msg){
//     try {
//         console.log(msg.toUpperCase);
//     } catch (error){
//         console.log("masukkan string")
//     }
// }




// setTimeout(function(){
//     document.body.style.backgroundColor = 'red';
//     setTimeout(function(){
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(function(){
//             document.body.style.backgroundColor = 'green';
//         }, 1000);
//     }, 1000);
// }, 1000);


// setTimeout(function(){
//     document.body.style.backgroundColor = 'green';
// }, 3000)


// const angka = [1,2,3,4,5,6,7,8,9];

// angka.forEach(function(nomor){
//     if(nomor % 2 === 0){
//         console.log(nomor + ' adalah bilangan genap');
//     }
// })


const anime = [
    {
        nama: 'Naruto',
        tahun: 2002,
        genre: 'Ninja',
        rating: 80
    },
    {
        nama: 'One Piece',
        tahun: 1999,
        genre: 'Aksi, Petualangan',
        rating: 10
    },
    {
        nama: 'detective conan',
        tahun: 1996,
        genre: 'Misteri, Petualangan',
        rating: 90
    }
]

// for(let tes of anime){
//     console.log(tes.nama, tes.tahun);
// }

// anime.forEach(function(kartun){
//     console.log(kartun.nama, kartun.tahun);
// })

// const mahasiswa = [
//     {
//     nama: 'Rizki',
//     prodi: 'informatika',
//     hobi: 'bola'
//     }
// ]

// mahasiswa.forEach(function(bebas){
//     console.log(bebas.nama)
// })


const angka = [1,2,3,4,5,6,7,8,9];
// const angkaDouble = angka.map(function(kalidua){
//     if(kalidua % 2 === 0){
//         return `angka habis dibagi dua` + kalidua;
//     } 
// })

// const animeList = anime.map(function(movie){
//     return movie.nama.toUpperCase();
// })

// function perpangkatan(x){
//     return x * x;
// }
// const hasil = perpangkatan(2,2);

// const hasil = function(x){
//     return x * x;
// }

// const perpangkatan = (x) => {
//     return x * x;
// }

// const random = () => {
//     return Math.random();
// }

// const random_1 = () => (
//     Math.random()
// )

// const random_2 = () => Math.random()

// // arrow function
// const nama = (paramaeter) => {
//     // inisialisasi
// }

// // call back function
// nama.forEach(function(paramater){

// })

// console.log("halo apakah ada orang??");

// setTimeout(() => {
//     console.log('saya ada didalam');
// }, 5000)

// console.log('saya pergi');

// setInterval(() => {
//     console.log(Math.floor(Math.random() * 10));
// }, 2000)

// const interval = setInterval(() => {
//     console.log(Math.random());
// }, 2000)

// const angkatGanjil = angka.filter((n) => {
//     return n < 5; 
// })

// const animeBagus = anime.filter((bagus) => bagus.tahun > 2000)

// const wow = anime.filter((keren) => keren.rating >= 80).wow.map((bagus) => bagus.nama);

const scoreUjian = [80,85,90,96,70,73,60,50];
// const lulus = scoreUjian.every((nilai) => nilai >= 10)
// const pinjam = anime.some((anime) => anime.rating >= 80)

// let total_1 = 0;
// for(let a of scoreUjian){
//     total_1 += a;
// }
//  console.log(total_1);

// const total = scoreUjian.reduce((nilaiAwal, nilaiSetelahnya) => {
//     return nilaiAwal + nilaiSetelahnya;
// })

// const bestAnime = anime.reduce((bestAnime, currAnime) => {
//     console.log(bestAnime, currAnime)
//     if(currAnime.rating > bestAnime.rating){
//         return currAnime;
//     }
//     return bestAnime;
// });

const person = {
    firstName: 'amirul',
    lastName: 'mirdas',
    fullName: function() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    
    panggilNanti: () => {
        setTimeout(function () {
            console.log(this.firstName)
        }, 3000)
    }
}