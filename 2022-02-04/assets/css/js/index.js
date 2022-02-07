// kintamieji: 
// var x = 34.34; var x = 'gediminas' //var x = true false
// document.write(x);

// var vardas = 'gediminas'
// var pavarde = 'galinis'
// document.write('sveiki mano vardas yra:' + 'vardas' + 'pavarde');
// var pirmas = 'bmw'
// var antras = 'audi' 
// var trecias = 'Ford'
// document.write(pirmas + antras + trecias )

// // // funksija kaip mazas skriptukas panaudojamas scripte
// function lentele(){
//   alert('danger danger')
// }
// lentele()  //issikvieciam funkcija

// function meile(x){
//   alert('as tikrai myliu' + x)
// }
// meile ('lietuva') 

// function daugialype(x, y){
//       document.write(x + '<br/>' + y)
// }
// daugialype('gediminas', 'galinis')


// function naujas(){
//   return('labas dienas')
// }
// document.write(naujas)

// function matieka(x, y){
//   var z = x + y    //atliekame veiksma
//   return z  //grazina atsakyma
// }
// document.write(matieka (5,15)) //iskvieciam funkcija


// function pirma(){
//   document.write('pirma funkcija')
// }
// function antra(){
//   document.write('antra funkcija')
// }
// function isvestis(){           //funkcija gali iskviesti kitas funkcijas
//   pirma()
//   antra()

// }
// isvestis()

// //GLOBALUS KINTAMASIS

// function apple(){
//   var kompas = 'macbook pro'
//   document.write(kompas)
// }
// apple()
// document.write(kompas)

// //LOKALUS KINTAMASIS
// var kompas = 'macbook pro '
// function apple(){
//   document.write(kompas)
// }
// apple()
// document.write(kompas)


// var skaicius = 25 + 1
// skaicius++  //lygu 26

// document.write(skaicius)

// var skaicius = 27
// skaicius %= 3

// var pirmas = 1
// var antras = 50

// if(pirmas > antras){
//   document.write("pavyko")}    //jei salyga pavyksta atvaizduoja
// // sauktukas apvercia salyga

// var pirmas = 10
// var antras = 15

// if(pirmas == antras){        //TRUE
// document.write('pavyko')
// }else(
//   document.write('nepavyko')  //ELSE NAUDOJAMAS FALSE SALYGA 
// )

//IF ELSE SAVOKOS
// var pirmasgerimas = 'kava'
// var antrasgerimas = 'sultys'
// var treciasgerimas = 'redbull'

// if(pirmasgerimas == 'kava'){
//   if(antrasgerimas == 'sultys'){
//      if(treciasgerimas == 'vanduo'){
//       document.write('labas as tave atpazinau')
//      }else{
//       alert('eik is cia ')
//   }
//   }

// }

//PAPRASCIAU IF 
// var pirmasgerimas = 'kava'
// var antrasgerimas = 'sultys'


// if(  (pirmasgerimas == 'kava') //&& ir abu turi but teisingi //||ar naudojama bent vienas turi but teisingas (antrasgerimas == 'sultys') ){
//   document.write('pavyko')
 
// }

//SWTICH
// var mergina = 'laura'

// switch(mergina){       //tikrina kuris scenarijus
//   case 'karolina':
//     document.write('taigi karolina busi')
//     break;               // break sustabdo operacija ir persoka prie kito
//        case 'ieva':
//         document.write('taigi ieva busi')
//         break;
//         default:
//           document.write('atsiprasau') //atsako galutini pasakyma 
// }

// CIKLAI

// for(x=0; x<10; x++){
// document.write('pirma pamoka .ciklas for <br/>' )
// }

// x = 1
// while(x<10){
//   document.write(x + 'antra pamoka while ciklas  <br/>')
//   x++
// }
//  var x = 11
// //DO PIRMIAUSIA IVYGDO PO TO TIKRINA 
// do{
//   document.write(x + 'trecia pamoka do while <br/>')
//   x++
// }while(x<10)



// alert('labas pasauli')
// document.getElementsByTagName('button')

// var gedas = 'gedas rytoj vaziuos'

// lenght suskaiciuoja obejektus
// document yra baltas langas obejktas viska i ji dedame
//WRITE KVALIFIKACIJA LENGHT YPATYBE
// document.write(gedas.length)
//OBJEKTAS APIBUDINTI YPATYBES JEI KAZKA DARYTI KLASIFIKACIJA


//OBJEKTU KURINMAS
// function asmuo(vardas, amzius){
//   this.vardas = vardas
//   this.amzius = amzius
// }
// var gedas = new asmuo('gedas galinis', 28)
// var evelina = new asmuo('evelina abmra', 26)
// document.write(gedas.amzius, '<br/>') 
// document.write(evelina.vardas)
 
// KAIP IDETI FUNKCIJOS SKAICIAVIMA I MATEMATINI BLOKA
// function zmones(vardas, amzius) {
//  this.vardas = vardas
//  this.amzius = amzius
//  this.likoIkiMirties = mirtis

// }
// function mirtis(){
//   var liko = 100 - this.amzius
//   return liko 
// }
// var gedas = new zmones('gedas', 30)
// document.write(gedas.likoIkiMirties())

// ARRAY 
// var zmoniuVardai = new Array('gedas', 'evelina', 'tomas', 'gabija', 'dainius')

// document.write(zmoniuVardai[3])

// var vardai = new Array(4)
// vardai[0] = 'gedas'
// vardai[1] = 'evelina'
// vardai[2] = 'gabija'
// vardai[3] = 'tomas'
// vardai[4] = 'valentinas'

// document.write(vardai[2])
  // NEREIKIA NUOSEKLUMO ARRAY
// var vardai = new Array()
// var x = 34 
// var zigulys = 43 + 12 -5
// vardai [0] = 'gedas'
// vardai [1] = 'evelina'
// document.write(vardai [1])


//CONCAT ARRAY
// var pMasinos = new Array ('opel', 'ford' , 'vw')
// var bMasinos = new Array ('bmw' , 'mb' , 'lexus')
// var masinos = pMasinos.concat (bMasinos)
// document.write(masinos[3])


// var menuo = new Array ('sausis ', 'vasaris', 'kovos', 'balandis')

// var  menesiai = menuo.join (' ')

//  document.write (menesiai[3])
//  menuo .pop ()                   // panaikina po viena 
//  document.write(menuo[3])


// var daiktai =  new Array ('iapd', 'puodelis' ,'lempa ', 'printeris')
// daiktai.reverse ()     //ATSUKA ATGAL 
// daiktai.push('knyga', 'nuotrauka') //DADEDA 
// daiktai.sort ()               //SURUOSIUOJA              
// var rodyti = daiktai.join ('  -  ')
// document.write (daiktai[4])

// PROMPT
// var vardas = prompt('iveskite vardas', '')

// document.write('sveiki' + vardas)

// var spalvos = new Array (3)
// for (i = 0; i< 3; i++)
// spalvos[i] = prompt ('iveskite spalvos pavadinimas', '')



//KVALIFIKACIJA FOR CIKLE
// var miestai = new Array('vilnius', 'kaunas', 'klaipeda', 'siauliai' , 'newyork')
// miestai.sort()


// for(i=0;i<miestai.length;i++){
//   document.write(miestai[i] + '<br/>')
// }