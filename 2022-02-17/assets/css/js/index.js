// //reikia padaryti masyva is 10 elementu kurio elementai yra random skaiciai (0,7)
// function randomSkaicius(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

// let mas = [];
// for(let i = 0; i < 10; i++){
//         mas.push(randomSkaicius(0,7));
// }
// console.table(mas)
      

//         // let namas = ['antanas', 'laima', 'bebras']

//         // console.table(namas);

//         // console.log(namas[0]);
//         // console.log(namas[1]);
//         // console.log(namas[2]);


//         // namas.push('zuikis')
//         // console.table(namas);


//         // for(let i = 0; i < 10; i++){
//         //     namas.push('zuikis' + i)
//         // }

//         //Atspausdinti masyvo reikšmes stulpeliu, bet tik tas kurios didesnės
//         // už 3 DONE!

        
//         for(let i = 0; i < mas.length; i++){
//             if(mas[i] > 3 ){
              
//               console.log(mas[i])
//             }
//         }

//         //paskaiciuoti masyvo elementu suma

//         function randomSkaicius(min, max) {
//             return Math.floor(Math.random() * (max - min + 1) + min);
//           }
//         let bigSum = 0;
       
//         for(let i = 0; i < mas.length; i++){
                
//                 bigSum = bigSum + mas[i];
//         }
//         console.table(bigSum)

//         //surasti maziausia elementa masyve
         
//         let maziausia = mas[0];
//         for(let i = 0; i < mas.length; i++){
                
//           if(  mas[i] < maziausia);
//           maziausia = mas[i];
//     }
//         console.table(maziausia)

//         //paskaiciuoti kiek lyginiu reiksmiu yra masyve

//     //     let lyginis = [0]
//     //     let nelyginis = []
//     //     for(let i = 0; i < mas.length; i++){
                
//     //      lyginis.push(mas[i])
//     //      nelyginis.push(mas[i + 1])
//     // }
//     //     console.log(lyginis)
//     //     console.log(nelyginis)
//     let count = 0;
//         for(let i = 0; i < mas.length; i++){
                
//           if(  mas[i] % 2 == 0);
//           count ++;
//     }
//         console.log(maziausia)
//        // masyvas masyve
//     //     let one = ['nauseda', 'antanas', 'petras']
//     //     let two = ['linas', 'birute', 'bebras']
//     //     let three = ['tomas', 'sima' ,'saulius']

//     //     let bigHouse = []

//     //     bigHouse.push(one)
//     //     bigHouse.push(two)
//     //     bigHouse.push(three)

//     //    console.table(bigHouse)

//     //    console.log(bigHouse[0][0])
//     //    console.log(bigHouse[2][1]); 

//        //-------atspausdinti bighouse gyventoju sarasa--------

//         let one = ['nauseda', 'antanas', 'petras']
//         let two = ['linas', 'birute', 'bebras']
//         let three = ['tomas', 'sima' ,'saulius']

//         let bigHouse = []

        
//         bigHouse.push(one)
//         bigHouse.push(two)
//         bigHouse.push(three)

//        console.table(bigHouse)

//     //    console.log(bigHouse[0][0])
//     //    console.log(bigHouse[2][1]); 
        
//         for(i = 0; i < bigHouse.length; i++){
//             // console.log(bigHouse[i]) // butu masyvas
//             // const store = bigHouse[i] aukstas
//             // const flats = store.length;  
//         for(let k = 0; k < bigHouse[i].length; k++){
//                  console.log(bigHouse[i][k]);
//             }
//         }

//         // kur gyvena tomas //

//         for( i = 0; i < bigHouse.length; i++){
//             for(let k = 0; k < bigHouse[i].length; k++){
//                 if(bigHouse[i][k] == 'tomas'){
//                     console.log('tomas gyvena:', i, k)
//                 }
//             }
//         }

function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //--------------- 1 uzduotis---------Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30
  //, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);------------------

  let pinigine = []
  for(i = 0; i < randomSkaicius(10,30); i++){
      pinigine.push(randomSkaicius(0,10))
  }
  
  

//  ----------------2 uzduotis-------- Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių 
//   (pinigų esančių piniginėje) sumą;--------------------


let suma = 0;
for(i = 0; i < pinigine.length; i++){
    suma = suma + pinigine[i]
}

console.log(suma)

//------------------3 uzduotis  -----Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų 
//(skaičių didesnių už 2 ) reikšmių sumą;----------------
 suma = 0;
for(i = 0; i < pinigine.length; i++){
    if(pinigine[i] > 2){
        suma = suma + pinigine[i]
        
    }
}
console.log('popieriniu pinigu yra: ', suma)


//-------------4 uzduotis---------Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės 
//arba lygios 2 padaryti lygias 0) iš 1 uždavinio;-------------
suma = 0;
for(i = 0; i < pinigine.length; i++){
    if(pinigine[i] <= 2){
       suma + pinigine[i] == 0
        
    }
}
console.log('isleisti metalinius pinigus', suma)




