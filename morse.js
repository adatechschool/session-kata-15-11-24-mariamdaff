//recuperation et sockage des elements html dans des variables
const champtexte = document.querySelector("#texte");
const boutontraduire = document.querySelector("#traduire");
const resultatTraduction = document.querySelector(".traduction")
let resultat;                               //creation d'une variable 
champtexte.placeholder = "Entrez un texte !" //contenu par defaut de l'input

const latinVersMorse = { 'A':'.-', 'B':'-...', 'C':'-.-.', 'D':'-..', 'E':'.', 'F':'..-.', 'G':'--.', 'H':'....',
    'I':'..', 'J':'.---', 'K':'-.-', 'L':'.-..', 'M':'--', 'N':'-.', 'O':'---', 'P':'.--.', 'Q':'--.-', 'R':'.-.',
     'S':'...', 'T':'-',   'U':'..-', 'V':'...-', 'W':'.--', 'X':'-..-', 'Y':'-.--', 'Z':'--..',' ':'/'};

//fonction qui convertit du texte en une liste de caracteres
function obtenirListeCaracteresLatins(texte){
   return texte.split(''); //la methode .split() permet de convertir du texte en un tableau de carateres
}
console.log ('La methode split donne ça :',obtenirListeCaracteresLatins("Hello Mariama"));

//fonction qui traduit un caractere en morse
function traduireCaractereLatin(caractere){
   return latinVersMorse[caractere.toUpperCase()];
}
console.log("La traduction d'un caractere en morse :",traduireCaractereLatin('a'));

//fonction qui traduit un texte en morse
function encoder(texte) {
   // Découpe le texte en caractères
   const caracteres = obtenirListeCaracteresLatins(texte);

   // Traduit chaque caractère en Morse
   const traduitEnMorse = caracteres.map(caractere => traduireCaractereLatin(caractere));

   // Combine les résultats en une seule chaîne, séparée par des espaces
   return traduitEnMorse.join(' ');
  }
console.log( "Traduction du texte en morse: ",encoder("Binta"));

// Dictionnaire Morse vers Latin
const morseVersLatin = {'-': "T", '--': "M", '---': "O", '--.': "G", '--.-': "Q", '--..': "Z", '-.': "N", '-.-': "K",
   '-.--': "Y", '-.-.': "C", '-..': "D", '-..-': "X", '-...': "B", '.': "E", '.-': "A", '.--': "W", '.---': "J", '.--.':
    "P", '.-.': "R", '.-..': "L", '..': "I", '..-': "U", '..-.': "F", '...': "S", '...-': "V", '....': "H","/":' '};

//fonction qui divise un texte Morse en liste de caractères Morse
function obtenirListeCaracteresMorse(texteMorse){
   const mots= texteMorse.split('/')
   return mots.map(mot => mot.split(' '))
}
console.log("Traduction texte Morse en chaine de caracteres : ",obtenirListeCaracteresMorse(encoder("Hello Mariama")));

//fonction qui traduit un caractere Morse en texte
function traduireCaractereMorse(caractereMorse){
   return morseVersLatin[caractereMorse] || ' ';
}
console.log( "Traduction caractere Morse:",traduireCaractereMorse('.-'))

//fonction qui traduit un texte Morse en texte Latin
function decoder(texteMorse){
   // Découpe le texte Morse en tableau de caractères Morse
   const motsMorse =  obtenirListeCaracteresMorse(texteMorse);
   // Traduit chaque caractère Morse en caractère Latin
   const motsDecodes = motsMorse.map(mot => mot.map(caractereMorse=> traduireCaractereMorse(caractereMorse)).join(''));
   return motsDecodes.join(' ');
   
}
console.log("Convertir du Morse en Latin:",decoder(".... . .-.. .-.. --- / -- .- .-. .. .- -- .-"))

boutontraduire.addEventListener('click',()=>{
    const texteATraduire = champtexte.value.trim();
    if (!texteATraduire) { // Vérifie si l'entrée est vide
        resultatTraduction.innerHTML = "Veuillez entrer du texte.";
        return;
    }
   if( /^[.\- \/]+$/.test(texteATraduire)){
        resultat = decoder(texteATraduire)
        resultatTraduction.innerHTML = "traduction en latin: "+ resultat;
    } else {
    resultat = encoder(texteATraduire)
    resultatTraduction.innerHTML = "traduction en morse: "+ resultat;
   }
});

champtexte.addEventListener('input', () => {
   boutontraduire.disabled = champtexte.value.trim() === ""; // Vérifie si le champ est vide
 
 });
 