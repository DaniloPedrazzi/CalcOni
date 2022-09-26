/*Quantos clones seriam necessários pra ser onipresente?*/

var espaçoFisico = "Terra";
const toraxOuQuadril = 1.02; //média entre torax dos homens e quadris das mulheres
const distanciaEntreClones = 2;
var era = "Total";
const idade = 72; //média de longevidade do mundo

function calculo(){
    handleEspaco();
    //FÍSICO
    //sem distância Entre Clones
    // var nodistance = Math.round(espaçoFisico / toraxOuQuadril) + 1;
    //com distancia Entre Clones
    var distance = distanciaEntreClones * distanciaEntreClones + toraxOuQuadril;
    var clonesYouNeed = Math.round(espaçoFisico / distance) + 1;
    
    //TEMPO
    var timesYouNeedToLive = Math.round(era / idade) + 1;

    //TOTAL
    var total = Math.round(clonesYouNeed * timesYouNeedToLive);
    return total
}

function handleEspaco(){
    switch(espaçoFisico){
        case "Terra":
            espaçoFisico = 510100000000; //Área da superficie terrestre (m²)
            break;
        case "Água":
            espaçoFisico = 361150800000; //Área aquática da superficie terrestre (m²)
            break;
        case "Solo":
            espaçoFisico = 148949200000; //Área continental da superficie terrestre (m²)
            break;
    }
    switch(era){
        case "Total":
            era = 13820000000; //~ anos do universo
            break;
        case "Terra":
            era = 4543000000; //~ anos da Terra
            break;
        case "dc":
            era = 2022; //anos depois de cristo
            break;
    }
}

console.log(calculo());