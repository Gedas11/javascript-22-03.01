// let siunta = 'S'
// console.log('Siunciam', siunta)




// if(siunta == 'S'){
//     console.log('telpa S')
// }
// if(siunta == 'S'){
//     console.log('telpa M' || siunta == 'M')
// }
// if(siunta == 'S'){
//     console.log('telpa L' || siunta == 'M' || siunta == 'L')
// }
// if(siunta == 'S'){
//     console.log('telpa XL')
// }


//SWITCH

// switch (siunta){
//     case 'S':
//         console.log('telpa S')
//     case 'M':
//         console.log('telpa M')
//     case 'L':
//         console.log('telpa L')
//     default :
//         console.log('telpa XL')
// }

// let light = 'yellow'

// if(light == 'green'){
//     console.log('Go')
// }else if(light == 'Yellow'){
//     console.log('Ready')
// }else {
//     console.log('wait')
// }

// MODIFIKUOTAS SWITCH
// switch(light){
//     case 'green':
//         console.log('Go')
//         break;
//     case 'yellow':
//         console.log('ready')
//         break;
//     default :
//         console.log('wait')
// }

// ridenam kauliuka random(1,6), jeigu issiridena 1 arba 5 perku ledu,jeigu 2 arba 4
// perku cipsus, jeigu 3 arba 6 perku pieno. Ka perkam?
// function randomSkaicius(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//     }
// let kauliukas = randomSkaicius(1,6)

// switch ( kauliukas){
//         case 1 :
//         case 5:
//             console.log('perku ledu')
//             break;   // jeigu neuzdedi break vaiuoja per visa uzdavini
//         case 2 :
//         case 4 :
//            console.log('perku cipsus')
//             break;
//         default :
//            console.log('perku pieno')
// }

// do while ciklas metom kauliuka tol kol iskrenta 5,
// suskaiciuojam kiek kartu metem



// function rand(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min)
//       }
    //kad while do  pasikeistu reikia paversti i neigiama
//       let run;
//       let count = 0
//       let saugiklis = 0
//    do {
//        if(saugiklis++ > 100)break; // apsauga nuo uzsiciklinimo
//        count++
//         run = rand(1,6)
//         console.log(run)
//    }while(run != 5)
//    console.log('prasisuko', count)


   //   run == 5 visos lygybes pavirsta -->   !=
   // != pavirsta  -->   ==
   // < maziau --> <= daugiau
   // <=  -->   >
   //  || &&


   //do while ciklas. Metom kauliuk?? tol kol i??krenta 5 arba 1. 
   //Suskai??iuojam kiek kart?? m??t??m DONE!
//    let run;
//       let count = 0
//       let saugiklis = 0
//    do {
//        if(saugiklis++ > 100)break; // apsauga nuo uzsiciklinimo
//        count++
//         run = rand(1,6)
//         console.log(run)
//    }while(run != 5 && run != 1)     //neigiama logika
//    console.log('prasisuko', count)

   //do while ciklas. Metom kauliuk??. 
//    Sustojam kai i??mest?? kauliuk?? suma tampa didesn?? nei 33. 
//    Suskai??iuojam kiek kart?? m??t??m DONE!

//       let runSum = 0;
//       let count = 0
      
//    do {
//        let run = rand(1,6)
//        count++
//         runSum += run;
//         console.log(run)
//    }while(runSum <= 33 )     //neigiama logika
//    console.log('prasisuko', count, 'suma', runSum)

//    let run;
//       let count = 0
//       let saugiklis = 0

//       while(runSum <= 33){
//           let run = rand(1,6)
//           console.log(run)
//           count++
//           runSum += run
//       }
//       console.log('prasisuko', count, 'suma', runSum)


//Yra 1000 litr?? vandens. Karvi?? banda per par?? i??geria atsitiktin?? kiek?? nuo 70 iki 200 litr??. 
//Paskai??iuoti per kiek dien?? karv??s i??geria vanden??. DONE!

   let h2o = 1000;
   let days = 0;
      
      

      while(h2o > 0) {
        
          days++
          h20 = h2o - randomSkaicius(70, 200)

      }
      console.log('numire is troskulio' + days, 'diena')



//------------------------- 8 uzduotis --------------------------

//Deklaruokite kintam??j?? (jeigu reikia kelis kintamuosius) u?? ciklo rib??. 
//Ciklo viduje generuokite atsitiktinius skai??ius funkcija rand(), kurie yra i?? intervalo 10???25. 
//Cikl?? kartokite tol, kol ciklo viduje bus sugeneruotas skai??ius ma??esnis nei 12;

// function ran(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     let run;
//       let count = 0
      

//       while(run < 12){
//           let run = ran(10,25)
//           console.log(run)
//           count++
          
//       }
//       console.log(count)