//Array para almacenar nombres agregados
let amigos = []

//Función para ir agregando amigos a la lista
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //Verificar que campo de amigo no esté vacío
    if (nombreAmigo === ""){
        alert ("Por favor insertar un nombre!");
        return;
    }
    //Verificar que nombre no se repita
    if (amigos.includes(nombreAmigo)){
        alert (`El nombre ${nombreAmigo} ya se encuentra en la lista. Por favor ingresa otro nombre`);
        return;
    
    }
     //Agregar amigos al Array
     amigos.push(nombreAmigo);

     //Actualizar la lista en HTLM
     actualizarLista();

     //Limpiar campo de entrada
     inputAmigo.value = "";

    }

//Función para que se actualice la lista en la página
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    //Limpiar el contenido de la lista
    listaAmigos.innerHTML = "";

    //Para recorrer Array
    for(let i = 0; i = amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
   
//Función para sortear amigo de forma aleatoria
function sortearAmigo() {
    //Verificar si quedan amigos disponibles en la lista
    if (amigos.length === 0){
        alert ("No hay amigos por sortear. Agrega nombres a la lista");
        return;
    }
    //Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random()* amigos.length);

    //Para obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar resultado en página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado : <li>${amigoSorteado}/<li>`;

}

 //Asignar evento a los botones
 document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAgregar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
 })