document.addEventListener("DOMContentLoaded", () => {
    let elements = document.querySelectorAll("input");

        elements[2].addEventListener("input", (event) => {
            let texto = event.target.value;
            let parrafo = document.querySelectorAll("p");

            if (texto.length < 6) {
                parrafo[2].textContent = "La contraseña debe tener más de 6 caracteres ❌​";
                elements[2].classList.add("color")
                elements[2].classList.remove("color1")

            } else {
                parrafo[2].textContent = "la contraseña ahora es mas segura ✅​";
                elements[2].classList.add("color1")
                console.log(texto)
            }
        });
        elements[0].addEventListener("input", (event) => {
            let texto = event.target.value;
            let parrafo = document.querySelectorAll("p");

            if (texto.length < 15) {
                parrafo[0].textContent = "ingrese su nombre y primer apellido ❌​";
                elements[0].classList.add("color")
                elements[0].classList.remove("color1")
            } else {
                parrafo[0].textContent = "cumple con los requisitos ✅​";
                elements[0].classList.add("color1")
                console.log(texto)
            }
        });

        elements[1].addEventListener("input", (event) => {
            let texto = event.target.value;
            let parrafo = document.querySelectorAll("p");

            if (texto.length < 12 || (!texto.includes("@gmail") && !texto.includes("@outlook"))) {
                parrafo[1].textContent = "El correo debe tener al menos 12 caracteres y contener '@gmail' o '@outlook' ❌​";
                elements[1].classList.add("color")
                elements[1].classList.remove("color1")
            } else {
                parrafo[1].textContent = "Cumple con los requisitos ✅​";
                elements[1].classList.add("color1")
                console.log(texto)
            }
        });
    });
