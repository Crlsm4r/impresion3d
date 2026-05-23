const boton = document.getElementById("btnAnimar");
const nozzle = document.querySelector(".nozzle");
const pieza = document.querySelector(".pieza-3d");

boton.addEventListener("click", () => {
    // ACTIVAR MODO TURBO (Acelerar animaciones)
    nozzle.style.animation = "nozzleX 0.2s infinite ease-in-out, nozzleY 1.5s infinite steps(25)";
    pieza.style.animation = "growPiece 1.5s infinite steps(25)";
    
    boton.innerText = "¡MODO TURBO!";
    boton.style.background = "#ff00ff"; // Color neón para resaltar
    boton.style.boxShadow = "0 0 40px #ff00ff";

    setTimeout(() => {
        // REGRESAR A VELOCIDAD NORMAL
        nozzle.style.animation = "nozzleX 1.5s infinite ease-in-out, nozzleY 10s infinite steps(25)";
        pieza.style.animation = "growPiece 10s infinite steps(25)";
        
        boton.innerText = "Ver Animación";
        boton.style.background = "cyan";
        boton.style.boxShadow = "0 0 40px cyan";
    }, 4500);
});
