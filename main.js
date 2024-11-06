// function addition(a, b) {
//     return a + b;
// }
// console.log(addition(2, 3)); // Résultat attendu : 5

//exo 2
// function salutation(nom) {
//    return "Bonjour " + nom;
//   }
//   console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"

//exo3
// function estPair(nombre) {
// 	if (nombre % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}

//     //return nombre % 2 === 0;
// }
// console.log(estPair(4)); // Résultat attendu : true
// console.log(estPair(7)); // Résultat attendu : false

//exo 4
// function aireRectangle(longueur, largeur) {
// 	return longueur * largeur;
// }
// console.log(aireRectangle(5, 3)); // Résultat attendu : 15

//exo 5
// function estMajuscule(chaine) {
// 	return chaine === chaine.toUpperCase();
// }
// console.log(estMajuscule("HELLO")); // Résultat attendu : true
// console.log(estMajuscule("Hello")); // Résultat attendu : false

//exo 6
// function maxDeuxNombres(a, b) {
// 	if (a < b) {
// 		return b;
// 	} else {
// 		return a;
// 	}
// }
// console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10

//exo 7
// function difference(a, b) {
// 	return a - b;
// }
// console.log(difference(10, 3)); // Résultat attendu : 7

//exo 8
// function convertirEnCelsius(fahrenheit) {
// 	let c = (fahrenheit - 32) * 5/ 9;
// 	return c;
// }
// console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

//exo 9
// function estMajeur(age) {
// 	if (age >= 18) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(estMajeur(20)); // Résultat attendu : true
// console.log(estMajeur(16)); // Résultat attendu : false

//exo 10
// function maxTroisNombres(a, b, c) {
// 	if (a < b || c < b) {
// 		return b;
// 	} else if (b < a || b < c) {
// 		return a;
// 	} else {
// 		return c;
// 	}
// }
// console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7

//exo 11
// function calculer(a, b, operation) {
// 	return operation(a, b);
// }
// function addition(x, y) {
// 	return x + y;
// }
// function multiplication(x, y) {
// 	return x * y;
// }

// console.log(calculer(5, 3, addition)); // Résultat attendu : 8
// console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15

//exo 12
// function filtrerTexte(chaine, filtre) {
// 	return filtre(chaine);
// }
// function estVoyelle(c) {
// 	return c
// 		.split("")
// 		.filter(
// 			(lettre) =>
// 				lettre === "o" ||
// 				lettre === "e" ||
// 				lettre === "a" ||
// 				lettre === "i" ||
// 				lettre === "u" ||
// 				lettre === "y"
// 		);
// }
// console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oou"

//exo 13
// function appliquerTroisFois(valeur, fonction) {
//     for(let i = 0; i < 3; i++){
//         valeur++
//         valeur = fonction(valeur);
//     }
//     return valeur;
//   }
//   function incrementer(x) {
//         return x++;
//   }

//   console.log(appliquerTroisFois(5, incrementer)); // Résultat attendu : 8

//exo 14
// function transformerTexte(texte, transformation) {
// 	return transformation(texte);
// }
// function majuscule(c) {
// 	return c.toUpperCase();
// }
// function avecPoint(c) {
// 	return c.split("").join(".");
// }

// console.log(transformerTexte("bonjour", majuscule)); // Résultat attendu : "BONJOUR"
// console.log(transformerTexte("bonjour", avecPoint)); // Résultat attendu : "b.o.n.j.o.u.r."

//exo 15

// function conditionnelle(a, b, condition) {
// 	return condition(a, b);
// }
// function estPairEtPositif(x, y) {
// 	if (x % 2 === 0 && x >= 0 && y % 2 === 0 && y >= 0) {
// 		return x + y;
// 	} else {
// 		return x * y;
// 	}
// }

// console.log(conditionnelle(4, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition est remplie)
// console.log(conditionnelle(3, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition échoue, donc produit)

//exo 16

// function estPositif(nombre) {
//    if(nombre > 0){
//     return "Positif";
//    } else if(nombre == 0){
//     return "Zéro";
//    } else if(nombre < 0){
//     return "Négatif"
//    }
//   }
//   console.log(estPositif(5)); // Résultat attendu : "Positif"
//   console.log(estPositif(-3)); // Résultat attendu : "Négatif"
//   console.log(estPositif(0)); // Résultat attendu : "Zéro"

//exo 17

// function comparerNombres(a, b) {
//     if(a < b){
//         return "Plus petit";
//     } else if(a > b){
//         return "Plus grand";
//     } else if(a == b){
//         return "Égal";
//     }
//   }
//   console.log(comparerNombres(5, 10)); // Résultat attendu : "Plus petit"
//   console.log(comparerNombres(10, 5)); // Résultat attendu : "Plus grand"
//   console.log(comparerNombres(7, 7)); // Résultat attendu : "Égal"

//exo 18

// function calculerPrix(prix) {
//     let total = (prix * 10) / 100;
//     let result = prix - total;
//     if(prix > 100){
//         return result;
//     } else {
//         return prix;
//     }
//   }
//   console.log(calculerPrix(120)); // Résultat attendu : 108
//   console.log(calculerPrix(80)); // Résultat attendu : 80

//exo 19

// function tarif(age) {
//     if(age < 5){
//         return "Gratuit";
//     } else if(age >= 5 && age <=18){
//         return "Réduit";
//     } else {
//         return "Plein tarif";
//     }
//   }
//   console.log(tarif(3)); // Résultat attendu : "Gratuit"
//   console.log(tarif(15)); // Résultat attendu : "Réduit"
//   console.log(tarif(25)); // Résultat attendu : "Plein tarif"

//exo 20

// function longueurChaine(chaine) {
//     if(chaine.split("").length <= 10){
//         return "Courte";
//     } else {
//         return  "Longue";

//     }
//   }
//   console.log(longueurChaine("JavaScript")); // Résultat attendu : "Courte"
//   console.log(longueurChaine("Développement web")); // Résultat attendu : "Longue"

//exo 21

// function categorieTemperature(temp) {
// 	if (temp > 30) {
// 		return "Chaud";
// 	} else if (temp >= 15 && temp <= 30) {
// 		return "Tempéré";
// 	} else {
// 		return "Froid";
// 	}
// }
// console.log(categorieTemperature(35)); // Résultat attendu : "Chaud"
// console.log(categorieTemperature(20)); // Résultat attendu : "Tempéré"
// console.log(categorieTemperature(10)); // Résultat attendu : "Froid"

//exo 22

// function multipleDeCinq(nombre) {
//     if(nombre % 5 === 0){
//         return "Oui";
//     } else {
//         return "Non";
//     }
//   }
//   console.log(multipleDeCinq(10)); // Résultat attendu : "Oui"
//   console.log(multipleDeCinq(7)); // Résultat attendu : "Non"

//calulateur remise

// /**
// * Calcule le montant total après application d'une remise.
// *
// * @param {number} montantInitial - Le montant initial avant remise.
// * @param {string} typeRemise - Le type de remise appliquée ("etudiant",
// "soldes", "fidélité", "aucune").
// * @returns {number} - Le montant total après application de la remise.
// */
// function calculerMontantTotal(montantInitial, typeRemise) {
// 	const etudiant = 15;
// 	const soldes = 20;
// 	const fidélité = 10;
// 	const aucune = 0;

// 	if (montantInitial < 0) {
// 		return "Le montant initial ne peut pas être négatif.";
// 	} else if (typeRemise == "fidélité") {
// 		typeRemise = fidélité;
// 		let total = (typeRemise * montantInitial) / 100;
// 		let result = montantInitial - total;
// 		return result;
// 	} else if (typeRemise == "aucune") {
// 		typeRemise = aucune;
// 		let total = (typeRemise * montantInitial) / 100;
// 		let result = montantInitial - total;
// 		return result;
// 	} else if (typeRemise == "soldes") {
// 		typeRemise = soldes;
// 		let total = (typeRemise * montantInitial) / 100;
// 		let result = montantInitial - total;
// 		return result;
// 	} else if (typeRemise == "inconnu") {
// 		return "Type de remise inconnu.";
// 	} else if (typeRemise == "etudiant") {
// 		typeRemise = etudiant;
// 		let total = (typeRemise * montantInitial) / 100;
// 		let result = montantInitial - total;
// 		return result;
// 	}
// }
// console.log(calculerMontantTotal(100, "etudiant")); // 85
// console.log(calculerMontantTotal(150, "fidélité")); // 135
// console.log(calculerMontantTotal(50, "aucune")); // 50
// console.log(calculerMontantTotal(200, "soldes")); // 160
// console.log(calculerMontantTotal(100, "inconnu")); // "Type de remise inconnu."
// console.log(calculerMontantTotal(-100, "etudiant")); // "Le montant initial ne peut pas être négatif."

// exo sumTwoNumbers()
// function sumTwoNumbers(a, b) {
//     return a + b;
// }
// console.log(sumTwoNumbers(3, 7)) // 10
// console.log(sumTwoNumbers(-1, 5))// 4
// console.log(sumTwoNumbers(0, 0)) // 0
// console.log(sumTwoNumbers(10, -10)) // 0
// console.log(sumTwoNumbers(1.5, 2.5)) // 4

//exo concatenateStrings()
// function concatenateStrings(str1, str2) {
//    return str1 + str2;
// }
// console.log(concatenateStrings("Hello", "World")); // "HelloWorld"
// console.log(concatenateStrings("foo", "bar")); // "foobar"
// console.log(concatenateStrings("", "test")); // "test"
// console.log(concatenateStrings("123", "456")); // "123456"
// console.log(concatenateStrings("JavaScript", "Rocks")); // "JavaScriptRocks"

//exo isEven()
// function isEven(n) {
//     return n % 2 === 0;
// }
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// console.log(isEven(0)); // true
// console.log(isEven(-2)); // true
// console.log(isEven(101)); // false

//exo rectangleArea()
// function rectangleArea(width, height) {
//     return width * height;
// }
// console.log(rectangleArea(4, 5)); // 20
// console.log(rectangleArea(10, 3)); // 30
// console.log(rectangleArea(6.5, 2.5)); // 16.25
// console.log(rectangleArea(0, 10)); // 0
// console.log(rectangleArea(5, 5)); // 25

//exo isAdult()
// function isAdult(age) {
//     return age >= 18;
// }
// console.log(isAdult(20)); // true
// console.log(isAdult(17)); // false
// console.log(isAdult(18)); // true
// console.log(isAdult(30)); // true
// console.log(isAdult(5)); // false

// Fibonacci
// function fibonacci(n) {
//     // if (n === 0) {
//     //     return 0;
//     // }
//     // else if (n === 1) {
//     //     return 1;
//     // }
// 	let a = 0;
// 	let b = 1;
// 	let c = 0;
// 	for (let i = 0; i < n; i++) {
// 		a = b;
//         b = c;
//         c = a + b;
// 	}
//     return c;
// }
// console.log(fibonacci(5)); // Retourne 5
// console.log(fibonacci(7)); // retourne 13
// console.log(fibonacci(10)); // retourne 55
