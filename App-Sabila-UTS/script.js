function tampilData() {
    var nim = document.getElementById("nim").value;
    var nama = document.getElementById("nama").value;
    var Semester = document.getElementById("Semester").value;
    var mataKuliah = document.getElementById("mataKuliah").value;
    var nilaiAkhir = parseFloat(document.getElementById("nilaiAkhir").value);

    var nilaiHuruf, indeksNilai;

    if (nilaiAkhir >= 85) {
        nilaiHuruf = "A";
        indeksNilai = 4.00;
    } else if (nilaiAkhir >= 79) {
        nilaiHuruf = "A-";
        indeksNilai = 3.67;
    } else if (nilaiAkhir >= 74) {
        nilaiHuruf = "B+";
        indeksNilai = 3.33;
    } else if (nilaiAkhir >= 69) {
        nilaiHuruf = "B";
        indeksNilai = 3.00;
    } else if (nilaiAkhir >= 64) {
        nilaiHuruf = "B-";
        indeksNilai = 2.67;
    } else if (nilaiAkhir >= 59) {
        nilaiHuruf = "C+";
        indeksNilai = 2.33;
    } else if (nilaiAkhir >= 54) {
        nilaiHuruf = "C";
        indeksNilai = 2.00;
    } else if (nilaiAkhir >= 41) {
        nilaiHuruf = "D";
        indeksNilai = 1.00;
    } else {
        nilaiHuruf = "E";
        indeksNilai = 0.00;
    }

    var hasilTampilan = "NIM: " + nim + "<br>" +
                        "Nama: " + nama + "<br>" +
                        "Semester: " + Semester + "<br>" +
                        "Mata Kuliah: " + mataKuliah + "<br>" +
                        "Nilai Akhir: " + nilaiAkhir + "<br>" +
                        "Nilai Huruf: " + nilaiHuruf + "<br>" +
                        "Indeks Nilai: " + indeksNilai.toFixed(2);

    document.getElementById("tampilanData").innerHTML = hasilTampilan;
}
