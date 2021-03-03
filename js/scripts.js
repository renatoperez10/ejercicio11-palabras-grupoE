const fraseNueva = document.querySelector(".resultado");
document.querySelector(".contador-palabras").textContent = 0;
document.querySelector(".contador-caracteres").textContent = 0;
document.querySelector(".contador-longitud").textContent = 0;

// ContadorPalabras
function contadorPalabras() {
  const palabras = fraseNueva.children.length;
  document.querySelector(".contador-palabras").textContent = palabras;
}

// ContadorCaracteres
function contarCaracteres() {
  console.log(fraseNueva.textContent);
  const suma = fraseNueva.textContent.length;
  document.querySelector(".contador-caracteres").textContent = suma;
}

// ContadorLongitud
function longitud() {
  const lon = (fraseNueva.textContent.length);
  const palabras = fraseNueva.children.length;
  const media = (lon / palabras);
  document.querySelector(".contador-longitud").textContent = media.toFixed(2);
}

const lista = document.querySelectorAll(".lista-palabras li");
const lista2 = document.getElementsByClassName("resultado");

// eslint-disable-next-line guard-for-in
for (const x in lista) {
  lista[x].addEventListener("click", () => {
    nuevaLista(lista[x].textContent);
    contadorPalabras();
    contarCaracteres();
    longitud();
    lista[x].remove();
  });
}

function nuevaLista(s) {
  const hijo = document.createElement("LI");
  const hijoTexto = document.createTextNode(s);
  hijo.appendChild(hijoTexto);
  lista2[0].appendChild(hijo);
  console.log(lista2);
}

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
    if (repeticiones.value !== "0") {
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

const palabraRepetida = (listaPalabras, valorBuscas) => [...listaPalabras.children].filter(palabraLi => palabraLi.textContent === valorBuscas).length;

inputPalabra.addEventListener("input", updateValue);
submitNuevaPalabra.addEventListener("click", submitValue);
