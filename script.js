function valeur() {
  //valeur de l'élément dont l'id est shoeSize
  var shoeSize = document.getElementById("shoeSize").value;
  var yearOfBirth = document.getElementById("yearOfBirth").value;
  var valeur = (shoeSize * 2 + 5) * 50 - yearOfBirth + 1769;
  alert(valeur);
}

// var result;
// result = shoeSize * 2;
// result = result + 5;
// result = result * 50;
// result = result - yearOfBirth;
// result = result + 1769;
//
// if (isNaN(shoeSize) || isNaN(yearOfBirth)) {
//   alert("Veuillez saisir uniquement un nombre");
// }
