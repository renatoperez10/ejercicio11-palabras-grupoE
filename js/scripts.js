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
    nodoPalabra.dataset.repeticiones = repeticiones.value;
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
  const a = listaPalabras.children;
  const b = [...a].map(paraula => paraula.innerHTML);
  if (repeticiones.required && repeticiones.value === "") res = false;
  if (inputPalabra.required && inputPalabra.value === "") res = false;
  if (b.includes(inputPalabra.value)) res = false;

  return res;
};

inputPalabra.addEventListener("input", updateValue);
submitNuevaPalabra.addEventListener("click", submitValue);
