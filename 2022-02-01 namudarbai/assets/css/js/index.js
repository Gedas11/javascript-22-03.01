// function sugeneruoti(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
//   let a = sugeneruoti(1, 30);
// document.getElementById('atsitiktiniai').innerHTML = a

// function anotherFunction(number){
//     document.getElementById('atsitiktiniai').innerHTML =  Math.floor(Math.random() * number)

// }

// console.log(anotherFunction(5))

function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let a = randomSkaicius(-10, 10);
document.getElementById('skaiciai').innerHTML = a
if(a === 0){
    document.getElementById('skaiciai').style.color = 'blue'
}else if(a < 0){
    document.getElementById('skaiciai').style.color = 'red'

}
else{
    document.getElementById('skaiciai').style.color = 'green'
}

// function randomSkaicius(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let zvakes = randomSkaicius(5, 3000);
// document.getElementById("skaiciai").innerHTML = zvakes;
// if (zvakes > 1000) {
//   let suma = zvakes - (zvakes * 3) / 100;
//   document.getElementsByClassName("suma")[0].innerHTML = suma;
// }

// function randomSkaicius(min, max) {
//     let zvakes = Math.floor(Math.random() * (max - min + 1) + min);
//     document.getElementById("skaiciai").innerHTML = zvakes;
//     if (zvakes > 1000) {
//         let suma = zvakes - (zvakes * 3) / 100;
//         document.getElementsByClassName("suma")[0].innerHTML = suma;
//       }
//       if (zvakes > 2000) {
//         let suma = zvakes - (zvakes * 4) / 100;
//         document.getElementsByClassName("suma")[0].innerHTML = suma;
//       }

//   }
// function bendras(){
// randomSkaicius(5, 3000); sugeneruoti(1, 30);
// }
//   const mygtukas = document.getElementsByTagName('button')[0]
// mygtukas.addEventListener('click', ()=> bendras());

 



// var x = 21 kintamasis
//  document.getElementById(x) prasome javascript isvesti kintamaji
// kintamasis reikalingas jog pasikeistu kodas kuriam nurodytas, jeigu reiktu pataisyt viena koda pasitaisys

// kintamieji: 
// var x = 34.34; var x = 'gediminas' var x = true false
// document.getElementsById(x);

// var vardas = 'gediminas'
// var pavarde = 'galinis'
// document.getElementsById('sveiki mano vardas yra:' + 'vardas' + 'pavarde');
// var pirmas = 'bmw'
// var antras = 'audi' 
// var trecias = 'Ford'
// document.write(pirmas + antras + trecias )

// funksija kaip mazas skriptukas panaudojamas scripte
// function lentele(){
//   alert('danger danger')
// }
// // lentele()  issikvieciam funkcija

// function meile(x){
//   alert('as tikrai myliu' + x)
// }
// meile ('lietuva') 

// function daugialype(x, y){
//       document.write(x + '<br/>' + y)
// }
// daugialype('gediminas', 'galinis')


// function naujas(){
//   return('labas dienas')
// }
// document.write(naujas)

// function matieka(x, y){
//   var z = x + y    atliekame veiksma
//   return z  grazina atsakyma
// }
// document.write(matieka (5,15)) iskvieciam funkcija


// function pirma(){
//   document.write('pirma funkcija')
// }
// function antra(){
//   document.write('antra funkcija')
// }
// function isvestis(){           funkcija gali iskviesti kitas funkcijas
//   pirma()
//   antra()

// }
// isvestis()

// GLOBALUS KINTAMASIS

// function apple(){
//   var kompas = 'macbook pro '
//   document.write(kompas)
// }
// apple()
// document.write(kompas)

// LOKALUS KINTAMASIS
// var kompas = 'macbook pro '
// function apple(){
//   document.write(kompas)
// }
// apple()
// document.write(kompas)


// var skaicius = 25 + 1
// skaicius++  lygu 26

// document.write(skaicius)

// var skaicius = 27
// skaicius %= 3