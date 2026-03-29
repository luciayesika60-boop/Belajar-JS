//document.getElementById() -> element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "mawar";

//document.getElementsByTagName()
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

//document.getElementsByClassName()
// -> HTMLCollection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "Ini diubah dari javascript";

//document.querySelector() -> element (child dari 1 indeknya)
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

//document..querySelector(" p") akan dieksekusi bagiana wal saja gak semua
//klo mau semua menggunakan
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[2].style.backgroundColor = "lightblue";
// }

//MEMANIPULASI ELEMENT
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em> Mawar </em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello Word!";

// const judul = document.querySelector('#judul');
// judul.computedStyleMap.color='red';

//MEMANIPULASI Atribut
// const judul = document.getElementsByTagName("h1")[0];
// //digunakan untuk menambahkan  atribut
// // judul.setAttribute("name", "sandhika");
// //digunakan untuk mengecek nilai atribut dengan getAttribute
// //dugunakan untuk menghapus atribut dengan remove
// const a = document.querySelector("section#a a");

//mengelola class
//element.classList.add()
//element.classList.remove()
//element.classList.toggle()
// Toggle itu adalah tombol atau
// switch yang berfungsi untuk menyalakan/mematikan sesuatu, atau mengubah antara dua keadaan (on/off, show/hide, aktif/nonaktif).
//element.classList.item () untuk mencari indek dalam kurung
//element.classList.contains(),nanya ke js adakah yang punya kelas demgan nama ()
//element.classList.replace(kels sebelum,kelas sesudah), mengubah nama kelas
// const p2=document.querySelector('.p2');

//Manipulasi Node
//====================================================
//document.createElement()
//====================================================
// const pBaru = document.createElement("p");
// const teksPBaru = document.createTextNode("Paragraf Baru");

// //simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru);

// //simpan pBaru di akhir section A
// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);
// //appendChild unutk menyeimpan elemen ke akhir

// const liBaru = document.createElement("li");
// const teksLiBaru = document.createTextNode("Item Baru");
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)"); // perbaiki typo

// //(node baru,disimpan sebelum elemen apa)
// ul.insertBefore(liBaru, li2);

// //remove
// const link = document.getElementsByTagName("a")[0];
// sectionA.removeChild(link);

// //replace
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");

// const h2Baru = document.createElement("h2");
// const teksH2Baru = document.createTextNode("Judul baru");

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);
// pBaru.style.backgroundColor = "green";
// liBaru.style.backgroundColor = "green";
// h2Baru.style.backgroundColor = "green";
//parentNode.append() -> ta,bah diakhir
//parentNode.prepend() -> ta,bah diawal
//childNode.before()
//childNode.after()
//childNode.replaceWith()

//===================================================================================
//DOM EVENTS
//=======================================================================================

//innerHTML
// const p3 = document.querySelector(".p");

// function ubahWarna() {
//   p2.style.bacgroundColor = "lightblue";
// }

// //Event Handler
// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarna;

// //addEventListener()

// const p4 = document.querySelector("section#b p4");
// p4.addEventListener("click", function () {
//   alert("Ok");
//   //nambah item baru
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLiBaru = document.createTextNode("item baru");
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });
//perbedaanya
//addEventListener dan eventHandler
//eventhandler  maka perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya
//addEventListener maka menambah perubahannya

// const p3 = document.querySelector(".p3");
// // p3.onclick = function () {
// //   p3.style.bacgroundColor = "lightblue";
// // }

// //dilakukan dua-duanya klo EventListener
// p3.addEventListener("click", function () {
//   p3.style.color = "red";
// });
// p3.addEventListener("click", function () {
//  p3.style.bacgroundColor = "lightblue";
// });
// //mouseenter dan mauseleave

// const tUbahWarna = document.getElementById("tUbahWarna");
// tUbahWarna.onclick = function () {
//   //   document.body.style.backgroundColor = "lightblue";
//   document.body.classList.toggle("biru-muda");
// };

// const tAcakWarna = document.createElement("button");
// const teksTombol = document.createTextNode("Acak Warna ");
// tAcakWarna.appendChild(teksTombol);
// tAcakWarna.setAttribute("type", "button");
// tUbahWarna.after(tAcakWarna);

// tAcakWarna.addEventListener("click", function () {
//   const r = Math.round(Math.random() * 255 + 1);
//   const g = Math.round(Math.random() * 255 + 1);
//   const b = Math.round(Math.random() * 255 + 1);
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// const sMerah = document.querySelector("input[name=sMerah");
// const sHijau = document.querySelector("input[name=sHijau");

// const sBiru = document.querySelector("input[name=sBiru");

// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   document.body.style.backgroundColor = "rgb(" + r + ",100,100)";
// });
// sHijau.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// sBiru.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

// document.body.addEventListener("mousemove", function (event) {
//   //posisi mouse
//   // event.clientx
//   // event.clientY
//   //ukuran browser
//   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//   const YPos = Math.round((event.clientY / window.innerWidth) * 255);
//   document.body.style.backgroundColor = "rgb(" + xPos + "," + YPos + ",100)";
// });

// var tanya = true;
// while (tanya) {
//   // menangkap pilihan player
//   var p = prompt("pilih : gajah, semut, orang");

//   // menangkap pilihan computer
//   // membangkitkan bilangan random
//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }

//   // menentukan rules
//   var hasil = "";
//   if (p == comp) {
//     hasil = "SERI!";
//   } else if (p == "gajah") {
//     hasil = comp == "orang" ? "MENANG!" : "KALAH!";
//   } else if (p == "orang") {
//     hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
//   } else if (p == "semut") {
//     hasil = comp == "orang" ? "KALAH" : "MENANG!";
//   } else {
//     hasil = "memasukkan pilihan yang salah!";
//   }

// tampilkan hasilnya
//   alert(
//     "Kamu memilih : " +
//       p +
//       " dan Komputer memilih : " +
//       comp +
//       "\nMaka hasilnya : Kamu " +
//       hasil,
//   );

//   tanya = confirm("lagi?");
// }

// alert("terimakasih sudah bermain.");

// function getpilihankomputer() {
//   const comp = Math.random();

//   if (comp < 0.34) return "gajah";
//   if (comp >= 0.34 && comp < 0.67) return "orang";
//   return "semut";
// }
// function getHasil(comp, player) {
//   var hasil = "";
//   if (player == comp) return "SERI!";
//   if (player == "gajah") hasil = comp == "orang" ? "MENANG!" : "KALAH!";
//   if (player == "orang") hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
//   if (player == "semut") hasil = comp == "orang" ? "KALAH" : "MENANG!";
// }
// function putar() {
//   const imgComputer = document.querySelector(".img-komputer");
//   const gambar = ["gajah", "semut", "orang"];
//   let i = 0;
//   const waktuMulai = new Date().getTime();

//   setInterval(function () {
//     if (new Date().getTime() - waktuMulai > 1000) {
//       clearInterval;
//       return;
//     }
//     imgComputer.setAttribute("src", "img/" + gambar[i++], ".png");
//     if (i == gambar.length) {
//       i = 0;
//     }
//   }, 100);
// }

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihancomputer = getpilihankomputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihancomputer, pilihanPlayer);
//   console.log("comp:" + pilihanComputer);
//   console.log("player:" + pilihanPlayer);
//   console.log("Hasil:" + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihancomputer = getpilihankomputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihancomputer, pilihanPlayer);
//   console.log("comp:" + pilihanComputer);
//   console.log("player:" + pilihanPlayer);
//   console.log("Hasil:" + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihancomputer = getpilihankomputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihancomputer, pilihanPlayer);
//   console.log("comp:" + pilihanComputer);
//   console.log("player:" + pilihanPlayer);
//   console.log("Hasil:" + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// const pilihan = document.querySelectorAll("li img");
// pilihan.forEach(function (pil) {
//   pil.addEventListener("click", function () {
//     const pilihancomputer = getpilihankomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihancomputer, pilihanPlayer);
//     putar();
//     setTimeout(function () {
//       const imgComputer = document.querySelector(".img-komputer");
//       imgComputer.setAttribute("src", "img/" + pilihComputer + ".png");
//       const info = document.querySelector(".info");
//       info.innerHTML = hasil;
//     }, 1000);
//   });
// });
//========================================================================
//DOM
//========================================================================
//DOM TRANSVERSAL
// const tsalah = document.querySelectorAll(".close");
// // for (let i = 0; i < close.length; i++) {
// //   tsalah.addEventListener("click", function (e) {
// //     // close[i].parentElement.style.disply = "none";
// //     e.target.parentElement.style.disply = "none";
// //   });
// // }

// //Menghentikan aksi default menggunakan preventDefault
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
//   // const nama = document.querySelector(".nama");
//   // console.log(nama.previousnextElementSibling);
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   if ((e.target.className = "close")) {
//     e.target.classElement.style.display = "none";
//     e.preventDefault();
//   }
// });

const tekan = document.querySelector("container");
const jumbo=document.querySelector('.jumbo');
const thumbs =document.('.thumb');
tekan.addEventListener("click", function (e) {
  //cek apakah yang diklik adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    thumbs.forEach(efunction(thumbs){
      // if(thumbs.classList.contains('active')){
      // thumbs.classList.remove('active');
      // }
      thumbs.className='thumb';
    });
    e.target.classList.add(".active");
  }
})
