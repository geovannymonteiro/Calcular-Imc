var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i< pacientes.length ; i++){
  var paciente=pacientes[i];
  var tdPeso=paciente.querySelector(".info-peso");

var peso=tdPeso.textContent;
var tdAltura=paciente.querySelector(".info-altura")
var altura=tdAltura.textContent; 

var tdImc=paciente.querySelector(".info-imc");

var pesoEhvalido=validaPeso(peso);
var alturaEhvalida=validaAltura(altura);

if(!pesoEhvalido){
    console.log("Peso inválido!");
    pesoEhvalido=false;
    tdImc.textContent="Peso invalido";
    paciente.classList.add("paciente-invalido");
}
if(!alturaEhvalida){
    console.log("Altura invalida!");
    alturaEhvalida=false;
    tdImc.textContent="Altura inválida!"
    paciente.classList.add("paciente-invalido");
}
if (alturaEhvalida && pesoEhvalido){
    var imc=calculaImc(peso,altura);
    tdImc.textContent=imc;
}
}
function validaPeso(peso){

    if(peso >=0 && peso < 1000){
      return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc=0;

    imc=peso/(altura*altura);
    return imc.toFixed(2);
}


   






//