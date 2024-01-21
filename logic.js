function funcLogin(value) {
  if (value < 5) { // 0,1,2,3,4
    return "rendah"
  } else if (value >= 5 && value < 8) { // 5,6,7
    return "medium"
  } else if (value === 8) {
    // == : hanya cek nilainya tipe datanya tidak
    // === : cek nilainya  dan tipe datanya juga
    return "cukup tinggi"
  }

  return "tinggi" // 9,...
}

// const value = 5
// if (value < 5) { // 0,1,2,3,4
//   console.log("rendah")
//   return "rendah"
// } else if (value >= 5 && value < 8) { // 5,6,7
//   console.log("medium")
// } else {
//   console.log("tinggi") // 8,9,...
// }


console.log(funcLogin(8))

// calculation
// const value = 1 */-+

