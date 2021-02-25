//Ejercicio días de la semana
//Creamos una variable  que almacene el día
let dia = prompt("Ingresa un día de la semana");




//Convertir lo que escriba el usuario a minusculas
dia = dia.toLowerCase();
//validamos si es entre semana o fin de semana
//|| "O" && "y"
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "miércoles" || dia == "jueves" || dia == "viernes"){      
    alert("Es un día de entre semana");
}else{
    if(dia == "sabado" || dia == "sábado" || dia == "domingo"){
        alert("Es un fin de semana");
    }else{
    alert("Esto no es un día de semana");
    }
}