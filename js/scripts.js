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

