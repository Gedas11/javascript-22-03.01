function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let a = randomSkaicius(0, 2);
  let b = randomSkaicius(0, 2);
  let c = randomSkaicius(0, 2);
  let d = randomSkaicius(0, 2);
  let kiekis0 = 0;
  let kiekisvienetu = 0;
  let kiekisdvejetu= 0;
  if(a === 0){
      kiekis0 = kiekis0 + 1
  }
  if(b === 0){
      kiekis0 = kiekis0 + 1
  }
  if(c === 0){
    kiekis0 = kiekis0 + 1
}

if(d === 0){
    kiekis0 = kiekis0 + 1 
}
// kiekis vienetu
if(a === 1){
    kiekisvienetu = kiekisvienetu + 1
}
if(b === 1){
    kiekisvienetu = kiekisvienetu + 1
}
if(c === 1){
    kiekisvienetu= kiekisvienetu + 1
}
if(d === 1){
    kiekisvienetu = kiekisvienetu + 1 
}
// kiekisdvejetu
if(a === 2){
    kiekisdvejetu = kiekisdvejetu + 1
}
if(b === 2){
    kiekisdvejetu = kiekisdvejetu + 1
}
if(c === 2){
    kiekisdvejetu= kiekisdvejetu + 1
}
if(d === 2){
    kiekisdvejetu = kiekisdvejetu + 1 
}

   console.log('cia yra a ', a, 'cia yra b', b ,'cia yra c', c ,'cia yra d', d) 
   console.log('----')
   console.log('nuliu kiekis', kiekis0, 'vienetu kiekis', kiekisvienetu, 'dvejetu kiekis', kiekisdvejetu)

//  jeigu tam paciam dive
document.getElementById('desimta').innerHTML =  a + '<br/>' + b + '<br/>' + c;

// VIENUOLIKTA UZDUOTIS
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let skaicius = randomSkaicius(1,6);
document.getElementById('vienuolikta').innerHTML = `<h${skaicius}>${skaicius}</h${skaicius}>`;
//   document.getElementById('vienuolikta').innerHTML =  z


let pirmas = randomSkaicius(0, 100);
let antras = randomSkaicius(0, 100);
let trecias = randomSkaicius(0, 100);

let arimetrinisVidurkis = (pirmas + antras + trecias)/3;

let kiekis = 3;
let suma = 0

function tinkamas (x){
    if(x < 10 || x > 90){
        kiekis--; 
    } else {
        suma += x;
    }
}
tinkamas(pirmas)
tinkamas(antras)
tinkamas(trecias)

if(kiekis == 0){

}else{
    let vidurkis = suma/kiekis;
}