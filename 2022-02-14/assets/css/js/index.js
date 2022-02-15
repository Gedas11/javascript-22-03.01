//Reikia su ciklo pagalba atspausdinti skaičius nuo 10 iki 1 t.y. 10 9 .... 2 1 DONE!

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }


// //-----------------Žodį animal atspausdinti stulpeliu DONE!-----------

//const animal = 'Begemotas';
//     console.log(animal[0]);
//     console.log(animal[6]);
//     for(let i = 0; i < animal.length; i++){
//          console.log(animal[i], i);
//     }


    
//------------Padaryti vieną stringą, labai ilgą, kuriame 100 kartų kartotųsi
    // žodis Begemotas DONE!---------------

    // let animal100 = '';
    // const animal = 'Begemotas';
    // for(let i = 0; i < 100; i++){
    //     animal100 = animal100 + animal;
    //      //animal100 += animal; tas pats
    // }
    // console.log(animal100);

   
   
    //--------10 kartų meskite kauliuką (rand 1 - 6). Suskaičiuokite visų metimų sumą DONE!-----------

    // function randomSkaicius(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    //   }
      
    //   let suma = 0;
    //   for(let i = 0; i < 10; i++){
    //     let kauliukas = randomSkaicius(1, 6);
    //     suma += kauliukas;
    //   }
    //   console.log(suma)

    //--------10 kartų mesti kauliuką, skaičiuoti sumą, bet jeigu suma viršina 35 - ciklą reikia nutraukti pirma laiko.
    // Gale atspausdinti sumą ir prasisukusių ciklų skaičių DONE!-----------

    // function randomSkaicius(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    //   }
      
    //   let suma = 0;
    //      while(suma < 50){
    //          if(suma <= 35){
    //      let kauliukas = randomSkaicius(1, 6);
    //      suma += kauliukas;
    //      break;
    //      }
    //     }
         
    //   console.log(suma;)

    // function randomSkaicius(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    //   }
      
    //   let suma = 0;
    //   let counter2 = 0;

    //   for(let i = 0; i < 10; i++){
    //       counter2++;
    //     let kauliukas = randomSkaicius(1, 6);
    //     suma += kauliukas;
    //     if( suma > 20){
    //         break;
    //     }
    //   }
    //   console.log('suma:', suma ,'suma:', counter2);
    
    // function randomSkaicius(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    //   }
      
    //   let suma1 = 0;
    //   let counter2 = 0;
      

    //   for(let i = 0; i < 10; i++){
    //       let kauliukas = randomSkaicius(1, 6);
    //     if( suma1 + kauliukas > 20){
    //         break;
    //     }
    //     counter2++;
    //     suma1 += kauliukas;
    //   }
    //   console.log('suma:', suma1 ,'viso:', counter2);
    


    //10 kartų mesti kauliuką ir suskaičiuoti kiek kartų iškrito 
    //skaičius didesnis nei 4 DONE!

    // function randomSkaicius(min, max) {
    //         return Math.floor(Math.random() * (max - min + 1) + min);
    //       }
          
    //       let suma = 0;
          
    //       for(let i = 0; i < 10; i++){
    //           let kauliukas = randomSkaicius(1, 6);
    //         if( kauliukas > 4){
    //             suma++
    //         }
            
    //       }
    //       console.log('kartai:', suma );


          // 10 kartų mesti kauliuką ir suskaičiuoti kiek kartų iškrito 3 
          //ir kiek kartų iškrito 5 DONE!

        //   function randomSkaicius(min, max) {
        //             return Math.floor(Math.random() * (max - min + 1) + min);
        //           }
                  
        //           let suma3 = 0;
        //           let suma5 = 0;
                  
        //           for(let i = 0; i < 10; i++){
        //               let kauliukas = randomSkaicius(1, 6);
        //             if( kauliukas == 4){
        //                 suma3++
        //             }
        //             if(kauliukas == 5){
        //                 suma5++
        //             }

                    
        //           }
        //           console.log('kartai3:', suma3, 'kartai5', suma5);



        //----------------2 uzduotis --------------
        // Sukurkite vieną kintamąjį, jam priskirkite skaičių 
        // (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) 
        // ir jį atspauszdinkite pasinaudojus console.log;

        function randomSkaicius(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
        let skaicius = randomSkaicius(5, 10);
        
            // i = skaicius
            // skaicius++
            console.log(skaicius)
        

        //-----------------3 uzduotis-------------
        // Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. 
        // Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

        let tekstas = 'labas';
        for(let i = 0; i < 5; i++){
            console.log(tekstas)
        }


        //------------- 4 uzduotis -----------------
        //Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

        //         function randomSkaicius(min, max) {
        //             return Math.floor(Math.random() * (max - min + 1) + min);
        //           }
        // let septynis = randomSkaicius(5, 10);
        for(let i = 0 ; i < 7; i++ ){

        console.log(skaicius)
        }
            //----------------- 5 uzuodtis------------------
            // Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų,
            //  koks skaičius yra sugeneruotas;

        for(let i = 0 ; i < skaicius; i++ ){
            console.log(skaicius)
            }

    //-------------------- 6 uzduotis-----------------
    // Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, 
    // koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
       if(skaicius > 7){
       for(let i = 0 ; i < skaicius; i++ ){
        console.log(skaicius)
        }
        }

        //------------------ 7 uzduotis -----------------------

        // Deklaruokite kintamąjį už ciklo ribų. 
        // Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
        // kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;

        function ran(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
            }
            let numeris;
            // ---------------a dalis--------------
        for(let i = 0; i < 5; i++){
            numeris = ran(10,20);
            console.log(numeris)

        }
        let suma = 0;
        for(let i = 0; i < 5; i++){
            suma += ran(10,20);
            }
            console.log(suma)
        
        





