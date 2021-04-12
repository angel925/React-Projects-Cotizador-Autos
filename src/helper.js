
// calcual el año
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//CALCULA el total a pagar segun la marca

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 0.5;
      break;
    default:
      break;
  }

  return incremento;
}

// calcula el tipo de plan
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}


// Muestra la primer letra mayuscula 

export function  primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
