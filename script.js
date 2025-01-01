const dataKuis = [
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 1?",
  "a": "Mau ke pasar.",
  "b": "Ada diskon besar-besaran.",
  "c": "Karena lapar.",
  "d": "Karena mau viral di TikTok.",
  "benar": "d"
 }, 
{
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 2?",
  "a": "Virus.",
  "b": "Listrik mati.",
  "c": "Tikus komputer.",
  "d": "Air hujan.",
  "benar": "b"
},
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 3?",
  "a": "Indomie di rak dapur.",
  "b": "Diskon makanan.",
  "c": "Teman yang traktir.",
  "d": "Restoran.",
  "benar": "a"
},
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 4?",
  "a": "Tidur.",
  "b": "Makan banyak.",
  "c": "Marah-marah sendiri.",
  "d": "Scroll TikTok tanpa senyum.",
  "benar": "d"
},
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 5?",
  "a": "Kucing Matematika.",
  "b": "Kucing Kalkulator.",
  "c": "Kucing Statistik.",
  "d": "Kucing Algebra.",
  "benar": "b"
},
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 6?",
  "a": "Jajan terus.",
  "b": "panas matahari",
  "c": "Hutang teman.",
  "d": "Ongkir paket.",
  "benar": "b"
},
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 7?",
  "a": "Cuaca.",
  "b": "Soal air yang kurang asin.",
  "c": "Tentang jaring nelayan.",
  "d": "Tentang kapal di atas mereka.",
  "benar": "b"
},
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 8?",
  "a": "Cepat lewat, aku capek!",
  "b": "Ayo kita selfie!",
  "c": "Berhenti dulu dong, sabar napa!",
  "d": "Aku ngantuk, matikan aku.",
  "benar": "c"
},
    {
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 9?",
  "a": "Sepeda lipat.",
  "b": "HP jadul.",
  "c": "Uang receh.",
  "d": "Korek api gas.",
  "benar": "d"
},
{
  "pertanyaan": "Apa jawaban yang tepat untuk nomor 10?",
  "a": "Cheetah.",
  "b": "Ayam, karena suka joget chicken dance".,
  "c": "Lumba-lumba.",
  "d": "Kuda, karena sering lari di lapangan.",
  "benar": "d"
}
  ];
  
  const pertanyaanEl = document.getElementById('pertanyaan');
  const a_teks = document.getElementById('a_teks');
  const b_teks = document.getElementById('b_teks');
  const c_teks = document.getElementById('c_teks');
  const d_teks = document.getElementById('d_teks');
  const kirimBtn = document.getElementById('kirim');
  const jawabanEls = document.querySelectorAll('.jawaban');
  
  let kuisSaatIni = 0;
  let skor = 0;
  
  muatKuis();
  
  function muatKuis() {
    batalkanPilihan();
    
    const dataKuisSaatIni = dataKuis[kuisSaatIni];
    
    pertanyaanEl.innerText = dataKuisSaatIni.pertanyaan;
    a_teks.innerText = dataKuisSaatIni.a;
    b_teks.innerText = dataKuisSaatIni.b;
    c_teks.innerText = dataKuisSaatIni.c;
    d_teks.innerText = dataKuisSaatIni.d;
  }
  
  function batalkanPilihan() {
    jawabanEls.forEach(jawabanEl => jawabanEl.checked = false);
  }
  
  function ambilPilihan() {
    let jawaban;
    jawabanEls.forEach(jawabanEl => {
      if (jawabanEl.checked) {
        jawaban = jawabanEl.id;
      }
    });
    return jawaban;
  }
  
  kirimBtn.addEventListener('click', () => {
  const jawaban = ambilPilihan();

  if (jawaban) {
    if (jawaban === dataKuis[kuisSaatIni].benar) {
      skor++;
    }

    kuisSaatIni++;

    if (kuisSaatIni < dataKuis.length) {
      muatKuis();
    } else {
      const jumlahBintang = Math.floor(skor / 2); // Hitung jumlah bintang
      let bintangHTML = '';

      for (let i = 0; i < jumlahBintang; i++) {
        bintangHTML += '⭐'; // Tambahkan bintang
      }

      document.getElementById('kuis').innerHTML = `
          <h2>Kamu menjawab ${skor}/${dataKuis.length} pertanyaan dengan benar</h2>
          <h3>${bintangHTML}</h3> <!-- Tampilkan bintang -->
          <button onclick="location.reload()">Ulangi Kuis</button>
        `;
    }
  }
});
