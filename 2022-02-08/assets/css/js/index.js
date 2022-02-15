
//--------- 7 uzduotis
// let skaicius = 10;
// if(skaicius % 2 == 0){
//     console.log('skaicius lyginis');
// }else{
//     console.log('skaicius nelyginis');
// }


// let n = 12456;
// let penktas = n % 10;
// let ketvirtas = Math.floor(n / 10) % 10;

// let antras = Math.floor(n / 1000) % 10;
// let pirmas = Math.floor(n / 10000) % 10;

// if(pirmas == penktas && antras == ketvirtas){
//     console.log('polindrominiai');

// }else{
//     console.log('nepolindrominiai');
// }

// let k = randomSkaicius(1,6);
// if(k == 1 || k == 3 || k == 5){
//     console.log('tvarkys jaunelis');
// } else{
//     console.log('tvarkys vyresnelis')
// }

 //Masyvas = Array //!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //Objetkas = Object
        // let x = [15, 'Stringas', 30, '12'] 
        //        // 0       1       2   3

        // x['test'] = 10 //Tekstinio indekso priskyrimas

        // //Visu reiksmiu paemimas naudojant for cikla
        // for(let i = 0; i < x.length; i++) {
        //     console.log(x[i]);
        // }

        // //Length paskaiciavimo neatitikimai
        // let y = [];
        // y[0] = '';
        // y[10] = 'test';
        // y[15] = 'test2';
        // console.log(y);

        // let z = ['unshift', 20, 50, 15, 20, 16, 'push'];

        // //push() visa laika deda nauja reiksme i masyvo pabaiga
        // z.push('TEST');

        // //unshift() metodas deda nauja reiksme i masyvo prieki
        // z.unshift('priekyje');

        // //shift() pasalina pacia pirma reiksme is masyvo
        // z.shift();

        // //pop() pasalina paskutine reiksme is masyvo
        // z.pop();

        // console.log(z);

        //Generuojame masyva kurio ilgis 50 elementu
        // function randomSkaicius(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1) + min);
        //   }
        
        // let masyvas = [];

        // for(let i = 0; i < 30; i++) {
        //     masyvas.push(randomSkaicius(5,25));
            
            
        // }
        // console.log(masyvas);
        // //Atsispausdiname suformuota masyva
        

        // //Paimame duomenis is masyvo cikle
        // //Pakeisti kiekviena reiskme masyve, sudedant kiekviena einamaji
        // for(let i = 0; i < masyvas.length; i++) {
        //     i = 5, masyvas.lenght = 30
        //     if(i != masyvas.length - 1);
        //         masyvas[i] += masyvas[i+1];

        // }

        // // //Modernus funkcijos aprasymas
        // masyvas.forEach( (reiksme, indeksas, masyvas) => {
        //     masyvas[indeksas] = 12;
        //     console.log(reiksme + ' indeksas: ' + indeksas);
        // } );

        // console.log(masyvas);

        // //Klasikinis funkcijos callback budas aprasymas
        // masyvas.forEach(function(reiksme, indeksas) {
        //     console.log(reiksme);
        // });

        // // function test(reiksme, indeksas) {

        // // } 

        function randomSkaicius(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        let kiekis = 0
        let masyvas = [];
           for(let i = 0; i < 30; i++) {
            masyvas[i] = randomSkaicius(5,25);
            //-------------- A--------------
            if(masyvas[i] > 10){
               }
             }
            console.log(masyvas);
            console.log(`skaiciu virs 10 ${kiekis}`);
            //-------------B-------------
            let max = Math.max(...masyvas); //splitina masyva po viena elementa
            let op = [];
            for(let z = 0; z< masyvas.length; z++ ) {
                if(masyvas[z] === max){
                    op.push(z)
                }
            }
            console.log(`didziausia reiksme ${max}, indexkas ${op}`);

            //---------------C ----------------

        let suma = 0;
        for(let i = 0; i < 30; i = i + 2){
            suma += masyvas[i];
        }
        console.log('lyginiu indeksu reiksmiu suma ');

        //---------------D --------------
        let masyvnas = [];
        for(let i = 0; i < 30; i++){
            masyvnas[i] = masyvas[i] - i;
        }
        console.log(masyvnas);

        //------------E----------

        for(let i = 0; i < 10; i++){
            masyvas.push(randomSkaicius(5,25));
        }
          console.log(masyvas);

        //--------F---------

        let lyginis = [];
        let nelyginis = [];
        for(let i = 0; i < 40; i = i + 2){
            lyginis.push(masyvas[i]);
            nelyginis.push(masyvas[i + 1]);
        }
        console.log(lyginis);
        console.log(nelyginis);

        //--------------G------------

        for(let i = 0; i < 40; i = i + 2){
            if(masyvas[i] > 15 ){
                masyvas[i] = 0;
            }
        }
        console.log(masyvas);
        
        
        //------------- 9 uzduotis -----------
        let p1 = 10;
        let p2 = 8;
        let p3 = 9;
        if(p1 > p2 && p1 > p3){
            console.log('pirmas mokinys gavo geriausiai')
        }else if (p2 > p3 && p2 > p1){
            console.log('antras mokinys gavo daugiausiai')
        }else{
            console.log('trecias mokinys gavo geriausia pazymi')
        }

        //-------------10 uzduotis-------------

         let n;
         if(n == 1 || n == 3  || n == 5  || n == 7  || n == 8  || n == 10  || n == 12) {
             console.log('menesio dienu turi 31 diena');
         }else if (n == 2){
              console.log('menesio dienu turi 28')
         }else{
              console.log('likusieji menesiai turi 30 dienu')
         }


        //------------11 uzduotis------------

        




        //------------------13 uzduotis------------


         let metai = randomSkaicius(1896,2012);
         if(metai % 4 == 0){
             let n = (metai - 1896 ) / 4 + 1 ;
             console.log('metai olimpiniai ir zaidyniu numeris yra ' + n);
         }else{
             console.log('metai neolimpiniai');
         }
         
        //-----------14 uzduotis---------

            // let a = 1;
            // let b = 2;
            // let c = 1;

            // let x;
            // let x1;
            // let x2;
            // let d;

            // d = (b ** 2) - (4 * a * c);

            // if (d < 0) {
            // console.log("sprendinių nėra");
            // } else if (d == 0) {
            // x = -b / (2 * a);
            // console.log("X = " + x);
            // } else {
            // x1 = (-b + Math.sqrt(d)) / (2 * a);
            // x2 = (-b - Math.sqrt(d)) / (2 * a);
            // console.log("X1 = " + x1);
            // console.log("X2 = " + x2);
            // }

            //--------------15------------
            // Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. 
            // Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, 
            // kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. 
            // Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10

            let centu = 50;
            let kaina = 20;
            let porcijos =  Math.floor(centu / kaina)
            let liekaCentu = centu % kaina;
            console.log
            
            //----------- 16-----------
            // Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. 
            // Į mašiną telpa m dėžių prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, 
            // kiek kartų k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę. 
            // Pasitikrinkite: jei n = 100, m = 14, tai k = 8.

            let dezes = 100;
            let masina = 14;
            
            let kartai = Math.ceil(dezes / masina)
            console.log('pervezti dezes mums reiktu ' + kartai)
            
            
            
            //-------------- 02 09 uzduotys-------------

// // const alpha = "ABCD";
// let array1 = [];
// let array2 = [];
// let array3 = [];
// let arrayCombo = []
// let u2 = []

// for (let i = 0; i < 200; i++) {
//   array1.push(alpha.charAt(rndNum(0, 3)));
//   array2.push(alpha.charAt(rndNum(0, 3)));
//   array3.push(alpha.charAt(rndNum(0, 3)));
//   arrayCombo.push(array1[i] + array2[i] + array3[i]);
// }

// // for (let i = 0; i < 200; i++) {
// //     if(!u2.includes(arrayCombo[i])){
// //       u2.push(arrayCombo[i])
// //     }
// // }

// function unique(value, index, self) {
//   return self.indexOf(value) === index;
// }
// let u = arrayCombo.filter(unique);

// console.log('A1 ' + array1);
// console.log('A2 ' + array2);
// console.log('A3 ' + array3);
// console.log('AX ' + arrayCombo);
// console.log('Unikalios ' + u);
// console.log('Unikalios ' + u.length);


//------------17----------
//   let a = 5;
//   let b = 3;
//   if(a < b){
//       a--
//       b++
//   }else if(a > b){
//       b++
//       a--
//   }else{
//       console.log('skaiciai lygus');
//   }

//----------------CIKLAI----------------

//----------------1 uzduotis--------------
//naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for(let i = 0; i < 5; i++){
    console.log('labas')
}


//----------------------2 uzduotis--------------
//naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje
   // eilutėje);

   for(let i = 0; i < 5; i++){
       console.log(i);
   }

   //-------------3 uzduotis--------------

   //naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius
   // vienoje eilutėje);

   for(let i = 0; i < 5; i++){
       console.log(i * 10);
   }

   // 4. naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius
    // vienoje eilutėje);
    
    for(let i = 49; i < 54 ; i++) {
        console.log(i);
    }
    
    // 5. naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje
    // eilutėje);
    
    for(let i = 4; i >= 0; i--) {
        console.log(i);
    }
    
    // 6. naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10
    // (vienas skaičius vienoje eilutėje);
    function randomSkaicius(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    for(let i = 0; i < 5; i++) { //for ciklas nurodyti tam tikra eiluciu skaiciu
        console.log(randomSkaicius(0, 10));
    }
    
    // 7. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius
    // vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
    
    let i;
    
    while(i != 5) { 
        i = randomSkaicius(0, 10);
        console.log(i);
    }
    
    // 8. naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius
    // vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
    
    let suma = 0;
    
    while(suma <= 100){
        let i = randomSkaicius(0, 10);
        console.log(i);
        suma += i;
    }
    
    console.log(suma);
    
    // 9. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius
    // vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek
    // ciklų prasisuko;
    
    let i = 0;
    let kartai = 0;
    
    while(i != 5 && i != 7) {
        i = randomSkaicius(0, 10);
        console.log(i); 
        kartai++;
    }
    
    console.log('Ciklas prasisuko kartu: ' + kartai);
    
    // 10. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n
    // centimetrus coliais ir atvirkščiai.
    
    let n = 10;
    
    for(let i = 1; i <= n; i++) {
        console.log(i + ' coliai yra ' + i * 2.54 + ' cm');
    }
    
    // atvirksciai \/
    
    let n = 10;
    for(let i = 1; i <= n; i++) {
        console.log(i + ' cm yra ' + i / 2.54 + ' coliu');
    }

    //--------------11 uzduotis----------

    