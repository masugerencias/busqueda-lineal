
let lista=['enero','febrero','marzo','abril','mayo','junio']

let titulo='junio'

function buscar(lista, junio){
    let i=0;
    let encontrado=false;
     while(!encontrado && i< array.length){ //recorrer el array para encontrar  la palabra.
      if(array[i].textContent == titulo){ //si el valor de cada elemento de la lista coincide con la palabra
        encontrado=true; //encontrado se pone en true
      }
      i++ //si no la encuentra, sigue buscando en posiciones siguientes
     }
     if(encontrado){ //
       return (i-1)
     }
     return -1
  }

  buscar();

