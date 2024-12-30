const dataKuis = [
    {
  "pertanyaan": "Berapa hasil yang benar dari 3 + 2?",
  "a": "4",
  "b": "5",
  "c": "6",
  "d": "7",
  "benar": "b"
 }, 
{
  "pertanyaan": "Berapa hasil yang benar dari 10 ÷ 2?",
  "a": "3",
  "b": "4",
  "c": "5",
  "d": "6",
  "benar": "c"
},
    {
  "pertanyaan": "Berapa hasil yang benar dari 7 + 8?",
  "a": "14",
  "b": "17",
  "c": "16",
  "d": "15",
  "benar": "d"
},
    {
  "pertanyaan": "Berapa hasil yang benar dari 12 ÷ 3?",
  "a": "4",
  "b": "3",
  "c": "5",
  "d": "6",
  "benar": "a"
},
    {
  "pertanyaan": "Berapa hasil yang benar dari 5 x 6?",
  "a": "28",
  "b": "30",
  "c": "32",
  "d": "36",
  "benar": "b"
},
    {
  "pertanyaan": "Berapa hasil yang benar dari 16 ÷ 4?",
  "a": "3",
  "b": "6",
  "c": "5",
  "d": "4",
  "benar": "d"
},
    {
  "pertanyaan": "Berapa hasil yang benar dari 7 x 9?",
  "a": "63",
  "b": "69",
  "c": "72",
  "d": "81",
  "benar": "a"
},
    {
  "pertanyaan": "Berapa hasil yang benar dari 12 x 8?",
  "a": "86",
  "b": "106",
  "c": "96",
  "d": "112",
  "benar": "c"
},
    {
  "pertanyaan": "tentukan hasilnya! Jika x + 5 = 12, x=",
  "a": "6",
  "b": "7",
  "c": "8",
  "d": "9",
  "benar": "b"
},
{
  "pertanyaan": "Berapakah hasil dari 790 + 96 x 870?",
  "a": "87220",
  "b": "84300",
  "c": "84377",
  "d": "84310",
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
