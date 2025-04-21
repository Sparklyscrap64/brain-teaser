const questions = {
    sinonim: [
        { "q": "Sinonim dari 'abstrak'?", "a": ["Nyata", "Konkret", "Kabur", "Samar"], "correct": 3 },
        { "q": "Sinonim dari 'akomodasi'?", "a": ["Penginapan", "Perubahan", "Perjalanan", "Penyesuaian"], "correct": 0 },
        { "q": "Sinonim dari 'konvensional'?", "a": ["Modern", "Tradisional", "Inovatif", "Radikal"], "correct": 1 },
        { "q": "Sinonim dari 'ekspresi'?", "a": ["Perasaan", "Ungkapan", "Penjelasan", "Kemauan"], "correct": 1 },
        { "q": "Sinonim dari 'fundamental'?", "a": ["Pokok", "Biasa", "Sederhana", "Kompleks"], "correct": 0 },
        { "q": "Sinonim dari 'ilustrasi'?", "a": ["Warna", "Karangan", "Gambar", "Lagu"], "correct": 2 },
        { "q": "Sinonim dari 'kompeten'?", "a": ["Mahir", "Lemah", "Ragu", "Pelupa"], "correct": 0 },
        { "q": "Sinonim dari 'modifikasi'?", "a": ["Perubahan", "Penghapusan", "Pengurangan", "Penambahan"], "correct": 0 },
        { "q": "Sinonim dari 'signifikan'?", "a": ["Penting", "Biasa", "Kecil", "Tidak perlu"], "correct": 0 },
        { "q": "Sinonim dari 'transparan'?", "a": ["Jernih", "Gelap", "Buram", "Samar"], "correct": 0 }
    ],
    antonim: [
        { "q": "Antonim dari 'dermawan'?", "a": ["Baik", "Pelit", "Murah hati", "Suka memberi"], "correct": 1 },
        { "q": "Antonim dari 'optimis'?", "a": ["Pesimis", "Semangat", "Percaya diri", "Antusias"], "correct": 0 },
        { "q": "Antonim dari 'konvensional'?", "a": ["Tradisional", "Modern", "Lama", "Klasik"], "correct": 1 },
        { "q": "Antonim dari 'inovatif'?", "a": ["Kreatif", "Biasa", "Stagnan", "Menarik"], "correct": 2 },
        { "q": "Antonim dari 'superior'?", "a": ["Unggul", "Rendah", "Inferior", "Luar biasa"], "correct": 2 },
        { "q": "Antonim dari 'eksplisit'?", "a": ["Jelas", "Tersirat", "Terang", "Terbuka"], "correct": 1 },
        { "q": "Antonim dari 'serius'?", "a": ["Sungguh-sungguh", "Main-main", "Tekun", "Fokus"], "correct": 1 },
        { "q": "Antonim dari 'fleksibel'?", "a": ["Kaku", "Lentur", "Bebas", "Luwes"], "correct": 0 },
        { "q": "Antonim dari 'loyal'?", "a": ["Setia", "Pengkhianat", "Jujur", "Tulus"], "correct": 1 },
        { "q": "Antonim dari 'abadi'?", "a": ["Kekal", "Sementara", "Selamanya", "Tak terbatas"], "correct": 1 }
    ],
    materi: [
        { "q": "Apa tujuan utama dari teks anekdot?", "a": ["Menghibur dan memberi kritik secara halus","Memberi informasi faktual","Mempromosikan produk","Menjelaskan langkah-langkah"], "correct": 0 },
        { "q": "Struktur teks laporan hasil observasi yang benar adalah...", "a": ["Orientasi, peristiwa, reorientasi", "pernyataan umum, deskripsi bagian, deskripsi manfaat", "Tesis, argumentasi, penegasan ulang", "Abstrak, orientasi, krisis, reaksi, koda"], "correct": 1 },
        { "q": "Ciri kebahasaan teks eksposisi adalah...", "a": ["Menggunakan majas", "Menggunakan kalimat perintah", "Menggunakan kata-kata teknis dan fakta", "Menggunakan kata kerja imperatif"], "correct": 2 },
        { "q": "Contoh kata tidak baku di bawah ini adalah...", "a": ["Risiko", "Kualitas", "Aktifitas", "Objektif"], "correct": 2 },
        { "q": "Puisi memiliki unsur batin. Salah satunya adalah amanat, yaitu...", "a": ["Sikap penyair terhadap tema", "Perasaan yang terkandung dalam puisi", "Nada dan irama dalam puisi", "Pesan yang ingin disampaikan penyair"], "correct": 3 },
        { "q": "Kalimat yang merupakan kalimat opini adalah...", "a": ["Banjir terjadi akibat curah hujan tinggi.", "Gempa berkekuatan 6,5 SR mengguncang wilayah selatan.", "Menurut saya, pemerintah kurang sigap menanggapi bencana.", "Data menunjukkan peningkatan suhu global setiap tahun."], "correct": 2 },
        { "q": "Apa fungsi paragraf argumentasi dalam teks eksposisi?", "a": ["Menghibur pembaca", "Mendukung pernyataan pendapat dengan alasan", "Menjelaskan tokoh dan alur", "Menutup pembahasan dengan kesimpulan"], "correct": 1 },
        { "q": "Ciri teks anekdot adalah...", "a": ["Lucu, menyentuh, dan penuh emosi", "Faktual, formal, dan objektif", "Lucu, menyindir, dan berdasarkan kejadian nyata", "Penuh imajinasi dan naratif"], "correct": 2 },
        { "q": "Kalimat yang menggunakan kata baku adalah...", "a": ["Dia mempublikasikan hasil penelitian itu.", "Ia mentraktir temannya makan siang.", "Mereka menyebarkan brosur promosi.", "Saya menyukai aktifitas di luar ruangan."], "correct": 0 },
        { "q": "Unsur penting dalam laporan hasil observasi adalah...", "a": ["Fiksi dan sudut pandang penulis", "Informasi fakta hasil pengamatan", "Alur cerita dan tokoh", "Dialog dan konflik"], "correct": 1 }
    ]
};


function endGame() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerHTML = `<strong>${playerName}</strong>, skor Anda: ${score}`;

    if (currentCategory === "sinonim") {
        unlockedLevels.antonim = true;
    } else if (currentCategory === "antonim") {
        unlockedLevels.materi = true;
    }

    updateMenuButtons();

    let detailHTML = "<h3>Rangkuman Jawaban:</h3>";
    answerResults.forEach(res => {
        const statusClass = res.status === "Benar" ? "correct-answer" :
            res.status === "Salah" ? "wrong-answer" : "neutral-answer";
            detailHTML += `<p><strong>Soal ${res.number}:</strong> ${res.question}<br>
            Jawaban Anda: <span class="${statusClass}">${res.selected}</span><br>
            Jawaban Benar: <span class="correct-answer">${res.correct}</span><br>
            Hasil: <span class="${statusClass}">${res.status}</span></p><hr>`;
    });

    document.getElementById("result-detail").innerHTML = `<div class="result-detail">${detailHTML}</div>`;
}
