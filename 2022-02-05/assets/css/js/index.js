// function randomSkaicius(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }

// let moneta;
// while(moneta != 0){
//  moneta = randomSkaicius(0, 1);
//     if(moneta == 1 ){
//         console.log('S');
        
//     }
//     else if(moneta == 0){
//         console.log('H');
//     }
// }


//----------------------------BBBBBB
// function randomSkaicius(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }

// let kartai = 0;
// while(kartai < 3) {
//  let moneta = randomSkaicius(0, 1);
//     if(moneta == 1 ){
//         console.log('S');
        
//     }
//     else if(moneta == 0){
//         kartai++;

//         console.log('H');
//     }
// }


// ----------------------CCCC

// function randomSkaicius(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }

// let kartai = 0;
// while(kartai < 3) {
//  let moneta = randomSkaicius(0, 1);
//     if(moneta == 1 ){
//         kartai = 0;
//         console.log('S');
        
//     }
//     else if(moneta == 0){
//         kartai++;
        
//         console.log('H');
//     }

// }

//----------------------------vinies kalimas

// function randomSkaicius(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
// let vinis1 = 85;
// let vinis2 = 85;
// let vinis3 = 85;
// let vinis4 = 85;
// let vinis5 = 85;

// let mazaisSmugiais = 0;
// let dideliSmugiais = 0;

//  function mazaiSmugiaisf(vinis){
//     let mSmugis = randomSkaicius(5,20);
//     return vinis - mSmugis;
//  }
//  function didelSmugiais(vinis){
//     let dSmugiais = randomSkaicius(20,30);
//     let tikimybe = randomSkaicius(0,1);
//     return vinis - dSmugiais * tikimybe;
//  }
 
//  while(vinis1 > 0){
//   vinis1 = mazaiSmugiaisf(vinis1);
//   mazaisSmugiais++;
//  }
//  while(vinis2 > 0){
//     vinis2 = mazaiSmugiaisf(vinis2);
//     mazaisSmugiais++;
//    }
//    while(vinis3 > 0){
//     vinis3 = mazaiSmugiaisf(vinis3);
//     mazaisSmugiais++;
//    }
//    while(vinis4 > 0){
//     vinis4 = mazaiSmugiaisf(vinis4);
//     mazaisSmugiais++;
//    }
//    while(vinis5 > 0){
//     vinis5 = mazaiSmugiaisf(vinis5);
//     mazaisSmugiais++;
//    }
//    console.log(`mazu smugiu reikejo ${mazaisSmugiais}`);


//    let vinis6 = 85;
//    let vinis7 = 85;
//    let vinis8 = 85;
//    let vinis9 = 85;
//    let vinis10 = 85;

//    while(vinis6 > 0){
//     vinis6 = didelSmugiais(vinis6);
//     dideliSmugiais++;
//    }
//    while(vinis7 > 0){
//       vinis7 = didelSmugiais(vinis7);
//       dideliSmugiais++;
//      }
//      while(vinis8 > 0){
//       vinis8 = didelSmugiais(vinis8);
//       dideliSmugiais++;
//      }
//      while(vinis9 > 0){
//       vinis9 = didelSmugiais(vinis9);
//       dideliSmugiais++;
//      }
//      while(vinis10 > 0){
//       vinis10 = didelSmugiais(vinis10);
//       dideliSmugiais++;
//      }
//      console.log(`dideliu smugiu reikejo ${dideliSmugiais}`);

function randomSkaicius(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
//------------ 1 uzduotis
// let n = randomSkaicius(-50, 50)
// if(n < 0){
//     console.log( 'skaicius blogas');
// }
// if( n> 0 ){
//     console.log('skacius geras' )
// }


// ------------------2 uzduotis
// let n = randomSkaicius(1, 3)
    
// if(n == 1){
//     console.log( 'zalia');
// }
// if( n == 2 ){
//     console.log('palaukite' )
// }
// if( n ==  3){
//     console.log('raudona' )
// }

// let d = 2;
// let k = 8 ;
// let n = 5;
// if(d + k + n){
//     console.log('knygos telpa ')
// }


// ----------------3 uzduotis
// let dezes = 0;
// let knygos = 0;
// let knyguSkaicius = 5;
// dezes = randomSkaicius(1,5)
// knygos = randomSkaicius(1,20)
//    if(dezes * knyguSkaicius > knygos){
//    console.log('knygos telpa')
   
// }else {(dezes * knyguSkaicius < knygos)
//     console.log('knygos netelpa')
// }


//------------------ 5 uzduotis
// let bilietas = randomSkaicius(100000,800000);
// let sum = 0;
// console.log(bilietas)
// while(bilietas){            // be masyvo(array)
//     sum += bilietas %10;
//     bilietas = Math.floor(bilietas/ 10)
// }
// if(sum % 4 == 0){
//     console.log('bilietas laimingas')
// } else{
//     console.log('bilietas nelaimingas')
// }

//----------- 6 uzduotis ----------

// let metai = randomSkaicius(2000, 2100);
// if(metai % 4 == 0 && metai % 100 != 0){
//     console.log('metai kelemieji');
//     }else {
//     console.log('metai nekelemieji')
// }
    











