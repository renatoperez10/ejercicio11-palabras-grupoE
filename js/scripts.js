const inputPalabra = document.querySelector(".input-palabra");
const repeticiones = document.querySelector(".repeticiones");
const submitNuevaPalabra = document.querySelector(".submit-palabra");
const checkLenguajeProgramacion = document.querySelector(".lenguaje-programacion");
const listaPalabras = document.querySelector(".lista-palabras");

const updateValue = (e) => {
  submitNuevaPalabra.disabled = e.target.value === "" || e.target.value.includes(" ");
};

const submitValue = (e) => {
  e.preventDefault();
  const createNode = crearPalabraValidador();
  if (createNode) {
    const nodoPalabra = document.createElement("li");
    if (checkLenguajeProgramacion.checked) {
      nodoPalabra.dataset.lenguaje = "si";
    }
    if(repeticiones.value !== "0"){
      nodoPalabra.dataset.repeticiones = repeticiones.value;
    }
    nodoPalabra.textContent = inputPalabra.value;
    console.log(nodoPalabra);
    listaPalabras.appendChild(nodoPalabra);
    submitNuevaPalabra.disabled = true;
    inputPalabra.value = "";
    repeticiones.value = "";
  }
};

const crearPalabraValidador = () => {
  let res = true;
  if (repeticiones.required && repeticiones.value === "") res = false;
  if (inputPalabra.required && inputPalabra.value === "") res = false;
  if (palabraRepetida(listaPalabras, inputPalabra.value) > 0) res = false;

  return res;
};

const palabraRepetida = (listaPalabras, valorBuscas) =>
  [...listaPalabras.children].filter(palabraLi => palabraLi.textContent === valorBuscas).length;


inputPalabra.addEventListener("input", updateValue);
submitNuevaPalabra.addEventListener("click", submitValue);
