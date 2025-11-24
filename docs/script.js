function buscarTexto() {
    const texto = document.getElementById("inputBusqueda").value.toLowerCase();
    const contenedor = document.getElementById("contenido");
    const elementos = contenedor.getElementsByTagName("*");

    // Quitar resaltados anteriores
    for (let elem of elementos) {
        elem.style.backgroundColor = "";
    }

    if (texto.trim() === "") return;

    let primerElemento = null;

    // Buscar la primera coincidencia
    for (let elem of elementos) {
        if (elem.children.length === 0) { 
            let contenido = elem.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                elem.style.backgroundColor = "yellow";

                if (!primerElemento) primerElemento = elem;
            }
        }
    }

    // Si se encontró la primera coincidencia → hacer scroll
    if (primerElemento) {
        primerElemento.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}


