
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

        //------------11 uzduotis------------

        

