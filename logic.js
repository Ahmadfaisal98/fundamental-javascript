// function funcLogin(value) {
//   if (value < 5) { // 0,1,2,3,4
//     return "rendah"
//   } else if (value >= 5 && value < 8) { // 5,6,7
//     return "medium"
//   } else if (value === 8) {
//     // == : hanya cek nilainya tipe datanya tidak
//     // === : cek nilainya  dan tipe datanya juga
//     return "cukup tinggi"
//   }

//   return "tinggi" // 9,...
// }

// const value = 5
// if (value < 5) { // 0,1,2,3,4
//   console.log("rendah")
//   return "rendah"
// } else if (value >= 5 && value < 8) { // 5,6,7
//   console.log("medium")
// } else {
//   console.log("tinggi") // 8,9,...
// }


// console.log(funcLogin(8))

// calculation
// const value = 1 */-+



// LOGIC - pengkondisian
// if, else if, else

// OPERATOR
/*
  - +
  - -

*/

// kalau sama dengan 1 -> memberikan value ke variable
let score = 10
score = 20

// kalau sama dengan 2 -> untuk memperbandingkan value tapi tanpa tipe data
const bandingakan2sign = null == undefined
// console.log(bandingakan2sign, 'bandingakan2sign')

// kalau sama dengan 3 -> untuk memperbandingkan value tapi dengan tipe data
const bandingakan3sign = 10 === '10' 
// console.log(bandingakan3sign, 'bandingakan3sign')

const value = 0;
if (value === 'gajah') {
  console.log('GAJAH WOI!!')
} else if (value === "kucing") {
  console.log("KUCING WOI!!")
} else {
  console.log("ASAL WOI!!")
}