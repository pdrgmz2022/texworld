function buscar() {
    // Obtener el valor del campo de búsqueda
    var searchTerm = document.getElementById("valor").value;

    // Realizar alguna acción con el término de búsqueda (puedes redirigir a una página de resultados, mostrar resultados en el mismo lugar, etc.)
    alert("valor encontrado: " + searchTerm);
}
function enviarcorreo(){
    nombre=document.getElementById("nombre").value;
    email=document.getElementById("email").value;
    mensaje=document.getElementById("mensaje").value;

    alert("el nombre es "+nombre);
    alert("el email es "+email);
    alert("el mensaje es "+mensaje);
}




//document.getElementById('nav').innerHTML = fetch('nav.html').then(response => response.text());
//document.getElementById('footer').innerHTML = fetch('footer.html').then(response => response.text());

 // Función para cargar un archivo HTML en un contenedor
 async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;
        } else {
            console.error(`Error al cargar ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error al intentar cargar ${filePath}:`, error);
    }
}

// Cargar la barra de navegación y el pie de página
loadHTML('nav', 'nav.html');
loadHTML('footer', 'footer.html');