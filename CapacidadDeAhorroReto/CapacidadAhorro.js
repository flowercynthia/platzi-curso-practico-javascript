


function calcularAhorro(){


    const Salario = parseInt(document.getElementById("salario").value);

    const porcentaje = parseInt(document.getElementById("porcentaje").value);

    const anios = parseInt(document.getElementById("anios").value);

    var porcentajeSueldo = (Salario * porcentaje) / 100;
    var ahorroEnElTiempo = porcentajeSueldo *  (12 * anios);
    
    const resultado = ahorroEnElTiempo;


    
    swal("Su capacidad de ahorro es de: " +  resultado + " en " + anios + " años" );

}