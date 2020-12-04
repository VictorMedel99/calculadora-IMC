export function EstadoHombre(IMC: number) {
  let rest = ''
  if (IMC<18.5) {
      rest = `peso bajo` 
  } else {
      if (IMC >=18.5 && IMC <=24.9) {
          rest = `peso normal` 
      } else {
          if (IMC >=25.0 && IMC <=29.9) {
              rest = `sobrepeso` 
          } else {
              if (IMC >=30.0 && IMC <=34.9) {
                  rest = `obesidad grado 1` 
              } else {
                  if (IMC >=35.0 && IMC <=39.9) {
                      rest = `obesidad grado 2` 
                  } else {
                      rest = `obesidad grado 3 (obesidad mórbida)` 
                  }
              }
          }
      }
  }
  return rest
  }

export function IMCHombre(peso: number,estatura: number){
  let IMC = peso/(Math.pow(estatura,2));
  return  parseFloat(IMC.toFixed(2));
}

export function pesoMinHombre(edad: number,estatura: number){
  let rest: number
  if (edad>=10 && edad<=14) {
      rest = Math.pow(estatura,2)*15;
  } else {
      if (edad>=15 && edad<=18) {
          rest = Math.pow(estatura,2)*17.4;
      } else {
          if(edad>=19){
              rest = Math.pow(estatura,2)*18.5;
          }
      }
  }

  return `${rest.toFixed(2)} kg`;
}

export function pesoMaxHombre(edad: number,estatura: number){
  let rest: number
  if (edad>=10 && edad<=14) {
      rest = Math.pow(estatura,2)*18.4;
  } else {
      if (edad>=15 && edad<=18) {
          rest = Math.pow(estatura,2)*21.7;
      } else {
          if(edad>=19){
              rest = Math.pow(estatura,2)*24.9;
          }
      }
  }
  return `${rest.toFixed(2)} kg`;
}