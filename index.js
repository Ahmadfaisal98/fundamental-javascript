let nama = 'Andhika'
let nilai = 20
var score

if ( nilai >=80 && nilai <=100){
    score = "A"
    console.log('nama: ' + nama + "; score: " + score)
} else if (nilai >= 65 && nilai <= 79){
    score = "B"
    console.log('nama: ' + nama + "; score: " + score)
} else if (nilai >= 50 && nilai <=64){
    score = "C"
    console.log('nama: ' + nama + "; score: " + score)
} else if (nilai >= 35 && nilai <=49){
    score = "D"
    console.log('nama: ' + nama + "; score: " + score)
} else if (nilai >=0 && nilai <=34){
    score = "E"
    console.log('nama: ' + nama + "; score: " + score)
} else {
    console.log('Nilai Invalid')
}