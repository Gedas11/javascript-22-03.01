function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
randomSkaicius(0, 4)  

var min = randomSkaicius (0, 4);
var max = randomSkaicius (0, 4);
console.log(  min + max);
console.log(  min - max);
console.log(  min * max);
console.log(  min / max);



 var a = randomSkaicius (0, 25);
 var b = randomSkaicius (0, 25);
 var c = randomSkaicius (0, 25);
 console.log(  a + b);