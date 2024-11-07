let texto1=" ";
let texto2=" ";
let texto0  =" ";
let elements=" ";
document.addEventListener("DOMContentLoaded", () => {
    elements = document.querySelectorAll("input");

        elements[2].addEventListener("input", (event) => {
            texto1 = event.target.value;
            let parrafo = document.querySelectorAll("p");

            if (texto1.length < 6) {
                parrafo[2].textContent = "La contraseña debe tener más de 6 caracteres ❌​";
                elements[2].classList.add("color")
                elements[2].classList.remove("color1")

            } else {
                parrafo[2].textContent = "la contraseña ahora es mas segura ✅​";
                elements[2].classList.add("color1")
            }
        });
        elements[0].addEventListener("input", (event) => {
            texto2 = event.target.value;
            let parrafo = document.querySelectorAll("p");

            if (texto2.length < 15) {
                parrafo[0].textContent = "ingrese su nombre y primer apellido ❌​";
                elements[0].classList.add("color")
                elements[0].classList.remove("color1")
            } else {
                parrafo[0].textContent = "cumple con los requisitos ✅​";
                elements[0].classList.add("color1")
            }
        });

        elements[1].addEventListener("input", (event) => {
            texto = event.target.value;
            let parrafo = document.querySelectorAll("p");

            if (texto.length < 12 || (!texto.includes("@gmail.com") && !texto.includes("@outlook.com"))) {
                parrafo[1].textContent = "El correo debe tener al menos 12 caracteres y contener '@gmail.com' o '@outlook.com' ❌​";
                elements[1].classList.add("color")
                elements[1].classList.remove("color1")
            } else {
                parrafo[1].textContent = "Cumple con los requisitos ✅​";
                elements[1].classList.add("color1")
            }
        });
    });
    function mostrar_datos(){
        let parrafos=document.querySelectorAll(".colorletra");
        parrafos[0].textContent=("nombre:"+" "+texto2);
        parrafos[1].textContent=("correo:"+" "+texto);
        parrafos[2].textContent=("contraseña:"+" "+texto1);
        elements[0].value=" ";
        elements[1].value=" ";
        elements[2].value="";
    }