// //jeigu skaicius didesnis nei keturi tuomet i jungiam atvaizdavima
// var x = 4.8
// // galima if kondicijoj priskirti reiksme kintamajam
// if(x > 4) {

// console.log (Math.round(x))//suapvalina 3.5 = 4
// console.log (Math.floor(x))//suapvalina i maziau // 3.5 = 3

// console.log (Math.ceil(x)) //apvalina i daugiau 3.5 = 4
// }

// //jeigu skaicius didesnis arba lygu keturi tuomet i jungiam atvaizdavima
// var x = 4
// // galima if kondicijoj priskirti reiksme kintamajam
// if(x >= 4) {

// console.log (Math.round(x))//suapvalina 3.5 = 4
// console.log (Math.floor(x))//suapvalina i maziau // 3.5 = 3

// console.log (Math.ceil(x)) //apvalina i daugiau 3.5 = 4
// }


// //jeigu skaicius  lygu keturi tuomet i jungiam atvaizdavima
// var x = 4
// // galima if kondicijoj priskirti reiksme kintamajam
// if(x == 4) {

// console.log (Math.round(x))//suapvalina 3.5 = 4
// console.log (Math.floor(x))//suapvalina i maziau // 3.5 = 3

// console.log (Math.ceil(x)) //apvalina i daugiau 3.5 = 4
// }

//jeigu skaicius  nelygus keturi tuomet i jungiam atvaizdavima
// var x = 4
// // galima if kondicijoj priskirti reiksme kintamajam
// if(x != 4) {

// console.log (Math.round(x))//suapvalina 3.5 = 4
// console.log (Math.floor(x))//suapvalina i maziau // 3.5 = 3

// console.log (Math.ceil(x)) //apvalina i daugiau 3.5 = 4
// }

// // //jeigu skaicius  nelygus keturi ir penkiems tuomet i jungiam atvaizdavima
// var x = 6.3
// var y = 5.5
// // galima if kondicijoj priskirti reiksme kintamajam
// if(x != 4 && y != 5) {

// console.log (Math.round(x))//suapvalina 3.5 = 4
// console.log (Math.floor(x))//suapvalina i maziau // 3.5 = 3

// console.log (Math.ceil(x)) //apvalina i daugiau 3.5 = 4
// }

//jeigu skaicius  nelygu keturi arba nelygu  penkiems tuomet i jungiam atvaizdavima
// var x = 6.3
// var y = 5.5
// // galima if kondicijoj priskirti reiksme kintamajam
// if(x != 4 || y != 5) {

// console.log (Math.round(x))//suapvalina 3.5 = 4
// console.log (Math.floor(x))//suapvalina i maziau // 3.5 = 3
// console.log (Math.ceil(x)) //apvalina i daugiau 3.5 = 4
// }

//eventai
//submit
//click
//scroll
// pirmas pavyzdys
// function clickhandler() {
// console.log ('mygtukas uzregistruotas')
// }
// document.getElementById('submit').addEventListener('click', function(e){
//     console.log ('mygtukas uzregistruotas')
// })
// antras pavyzdis
document.getElementById('submit').addEventListener(
    'click', 
    function(){
      var reiksme =  document.getElementById('skaicius').value
    //  document.getElementById('rezultatas').innerText = reiksme
    // priesingas pasvirimas 
    // document.getElementById('rezultatas').innerHTML = '<h1 class=/"test/">" + reiksme + '<h1>'

    document.getElementById('rezultatas').innerHTML = `<h1 class="test">${reiksme}<h1>`
}
)
// var senesnasis kintamojo apibrezimas
// po es6 atnaujinimo
// const x = 10 nesikeicia reiksme
// let y = 15

// var x = 10 kinta keiciant eilute

// var x = 15

// let x = 'https://google.com' 


// let x, y, z

// x = 10

// console.log(x)
window.addEventListener('scroll', (event)=>{
    console.log(window.pageYOffset)
})