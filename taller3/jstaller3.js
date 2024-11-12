document.getElementById("boton").addEventListener("click",()=>{

    var termino = document.getElementById("acomodar_input").value.toLowerCase();
    var tabla = document.querySelector("table");
    var filas = tabla.getElementsByTagName("tr");
    var contador = 0;

    if (termino === "") {
        document.getElementById("imprimir").textContent = "Por favor, ingrese un término para buscar.";
        return;
    }

    for (var i = 1; i < filas.length; i++) {
        var celdas = filas[i].getElementsByTagName("td");

        for (var j = 0; j < celdas.length; j++) {
            if (celdas[j].textContent.toLowerCase().includes(termino)) {
                contador++;
            }
        }
    }

    document.getElementById("imprimir").textContent = "Se encontraron " + contador + " coincidencia(s).";
});
