// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Limpiar espacios innecesarios

    // Validar que el campo no esté vacío
    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista de amigos en la interfaz
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos

    // Crear un <li> para cada amigo y agregarlo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agregue al menos un amigo para sortear.");
        return;
    }

    // Seleccionar un amigo aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];  // Acceder al amigo por el índice aleatorio

    // Mostrar el amigo secreto en la interfaz
    const amigoSecretoTexto = document.getElementById('amigoSecretoTexto');
    
    // Habilitar el mensaje "El amigo secreto es:"
    amigoSecretoTexto.style.display = 'block';
    
    // Cambiar el texto del mensaje y agregar clase de estilo
    amigoSecretoTexto.textContent = `El amigo secreto es: ${amigoSecreto}`;
    amigoSecretoTexto.classList.add('mensaje-verde'); // Aplicar el estilo verde
}
