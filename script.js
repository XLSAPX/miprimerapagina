function showAlert() {
      alert('¡Hola, este es un alerta desde Javascript!');
}

// var button = document.querySelector(".simple-button");

// button.addEventListener("click", function() {
//     alert("You clicked the simple button!");
//   });

const miBoton = document.getElementById('miBoton');

miBoton.addEventListener("click", function handleClick() {
     alert('¡Haz hecho click en el botón!');
});