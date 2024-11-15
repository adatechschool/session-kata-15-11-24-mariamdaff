/* Étape 1

Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre
 du texte et retourner un tableau contenant chaque caractère.
Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien 
["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]*/
function getLatinCharacterList(texte){   // declaration de la fonction
    return texte.split('');              // convertir text en tableau de caractère en utilisant split('')
}
    let monTexte = "Hello, word";       // declaration d'une variable qu'on passera en argument à notre fonction
    let tableauDeCaractere = getLatinCharacterList(monTexte); // declaration d'une var ds laquelle on stocke le rsultat de la fx
console.log(tableauDeCaractere);                            //consologuer la variable contenant notre fonction
getLatinCharacterList(monTexte);


const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
};
/* Étape 2
À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre 
les caractères alphabets latin et l’alphabet morse.
Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.*/

function translateLatinCharacter(caractere){   //declaration de la fx"translatelatinCharater"
    return latinToMorse [caractere];           //on lui demande de retourner la valeur correspondant à lindex choisit
}
let monCaractere = "A";      // daclaration d'une variable qui contient la valeur de l'argument qu'on passera à notre fx
let resultatEnMorse =translateLatinCharacter(monCaractere); //declaration d'une variable ds laquel on stocke notre fonction
console.log(resultatEnMorse);            // afficher le resultat dans la console
translateLatinCharacter(monCaractere);

/*Étape 3
Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour 
chaque caractère,appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
Attention: la table de correspondance ne contient que des caractères majuscules. */
//@TODO creer une fonction qui prend en parametre du texte
//@TODO apler la 1er fonction pour convertir ce texte en tableau de caractere
//@TODO apler la fonction 2 pour convertir notre tableau de caractere en morse

function encode(text){
    monTexte = "Bonjour Mariam"
    tableauDeCaractere = getLatinCharacterList(monTexte); // declaration d'une var ds laquelle on stocke le rsultat de la fx
    console.log(tableauDeCaractere);                            //consologuer la variable contenant notre fonction

    monCaractere =  ["B", "o", "n", "j", "o", "u", "r", " ", "M", "a", "R", "I", "A","M"];
    for(let i =0 ; i<= monCaractere.length; i++){
    resultatEnMorse = translateLatinCharacter(monCaractere[i]);

    console.log(resultatEnMorse );            // afficher le resultat dans la console
    translateLatinCharacter(monCaractere[i]);
    return latinToMorse [monTexte]

    }
}
encode(monTexte);

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  };
/* Étape 4
Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez 
les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice,
 on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.*/
