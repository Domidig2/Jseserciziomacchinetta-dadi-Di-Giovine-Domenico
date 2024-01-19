
// let voto =21;

// if (voto<18) {
//     console.log(`insufficiente`);
// } else if(voto>=18 & voto<21) {
//     console.log(`sufficiente`);
    
// } else if(voto>=21 & voto<24) {
//     console.log(`buono`);
    
// }else if(voto>=24 & voto<27) {
//     console.log(`distinto`);
    
// }else if(voto>=27 & voto<29) {
//     console.log(`ottimo`);
    
// }else if(voto==30) {
//     console.log(`eccellente`);
    
// }else if(voto>30) {
//     console.log(`Non valido`); 
// };

// ESRCIZIO VOTO CON SWITCH-CASE


// switch (true) {
//     case voto <18 :
//     console.log("insufficiente");
    
//     break;
//     case voto >=18 && voto<21:
//     console.log("sufficiente");
//     break;
//     case voto >=21 && voto<24 :
//     console.log("buono");
//     break;
    
//     case voto >=24 && voto<27 :
//     console.log("distinto");
//     break;
    
//     case voto >=27 && voto<29 :
//     console.log("ottimo");
//     break;
    
//     case voto ==30 :
//     console.log("eccelente");
//     break;
    
//     default:
    
//     break;
// };
// // SECONDO ESERCIZIO
// let temp =25;
// if (temp<20) {
//     console.log(`non ci sono più le mezze stagioni`);
// } else if(temp>=30) {
//     console.log(`lu mare, lu sole, lu ientu`);
    
// } else if(temp<30) {
//     console.log(`mi dia una peroni sudata`);
    
// }else if(temp<0) {
//     console.log("non e’ tanto il freddo quanto l’umidità");
    
// }else if(temp<-10) {
//     console.log(`copriti ancora ti raffreddi`);
// };


// SECONO ESERCIZIO CON SWITCH-CASE

// switch (true) {
//     case temp<20 :
//     console.log("non ci sono più le mezze stagioni");
    
//     break;
//     case temp>=30:
//     console.log("lu mare, lu sole, lu ientu");
//     break;
//     case temp<30 :
//     console.log("mi dia una peroni sudata");
//     break;
    
//     case temp<0 :
//     console.log("non e’ tanto il freddo quanto l’umiditào");
//     break;
    
//     case temp<-10:
//     console.log("copriti ancora ti raffreddi");
//     break;
//     default:
    
//     break;
// };

// ESERCIZIO 3
// let acqua = 1;
// let coca = 2;
// let birra = 3;
// let input;
// do {
//      input =Number(prompt('Inserisci un numero'))
//     if (input!==acqua && input !==coca && input !==birra) {
//         console.log("Bevande non disponibile");
        
//     } else if(input==coca){
//         console.log("Hai preso la coca")
//     }else if(input==birra){
//         console.log("Hai preso la birra")
//     }else if(input==acqua){
//         console.log("Hai preso l'acqua")
//     };
// } while (input!==acqua && input!==coca && input!==birra);

// if (input!==aqua && input !==coca && input !==birra) {
//     console.log("Bevande non disponibile");
    
// } else if(input==coca){
//     console.log("Hai preso la coca")
// };
// switch (input) {
//     case aqua:
//         console.log("Hai preso l'aqua")

//         break;

//     default:
//         break;
// }

// ESERCIZIO DADI

let tiri=3;
let punteggio = 0;
let punteggio2 = 0;
for (let i = 0; i < 3; i++) {
   punteggio = punteggio + Math.floor(Math.random() * (6 - 1 + 1) + 1);



    console.log(`il tuo punteggio è ${punteggio} Luca`);
}


for (let i = 0; i < 3; i++) {
    punteggio2 = punteggio2 + Math.floor(Math.random() * (6 - 1 + 1) + 1);

    console.log(`il tuo punteggio è ${punteggio2} Marco`);
 
}

switch (true) {
    case punteggio>punteggio2:
        console.log(`Luca hai vinto,hai totalizzato ${punteggio}`);
        break;
        case punteggio2>punteggio:
        console.log(`Marco hai vinto,hai totalizzato ${punteggio2}`);
        break;

    default:
        break;
}



