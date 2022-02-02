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

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

 var a = randomSkaicius (0, 25);
 var b = randomSkaicius (0, 25);
 var c = randomSkaicius (0, 25);
 console.log(a);
 console.log(b);
 console.log(c)
 console.log(Math.min( Math.max(a,b), c));


