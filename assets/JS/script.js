//Animacion Nosotros

let atras = document.querySelector(".arrow-l-n"),
  adelante = document.querySelector(".arrow-r-n");
let personaje = [`.n-1`, `.n-2`, `.n-3`];
let i = 0;

atras.addEventListener("click", moverAtras);
adelante.addEventListener("click", moverAdelante);

function moverAtras() {
  if (personaje[i] === `.n-3`) {
    x = document.querySelector(".carrusel-nosotros").style.marginLeft = `-100%`;
    i--;
  } else if (personaje[i] === `.n-2`) {
    document.querySelector(".carrusel-nosotros").style.marginLeft = `0`;
    i--;
  } else {
    document.querySelector(".carrusel-nosotros").style.marginLeft = `-200%`;
    i = 2;
  }
}

function moverAdelante() {
  if (personaje[i] === `.n-1`) {
    document.querySelector(".carrusel-nosotros").style.marginLeft = `-100%`;
    i++;
  } else if (personaje[i] === `.n-2`) {
    document.querySelector(".carrusel-nosotros").style.marginLeft = `-200%`;
    i++;
  } else {
    document.querySelector(".carrusel-nosotros").style.marginLeft = `0`;
    i = 0;
  }
}

//Animacion Portafolio

let portafolio = [`sbutton1`, `sbutton2`, `sbutton3`, `sbutton4`];
let i2 = 0;

const resetI2 = () => {
  if (i2 === 3) {
    return (i2 = 0 - 1);
  }
};

const animacionPortafolio = () => {
  if (i2 <= 3) {
    document.getElementById(portafolio[i2 + 1]).click();
    i2++;
  }
  resetI2();
};

const automatizarAnimacion = () => {
  window.setInterval(animacionPortafolio, 3000);
};

automatizarAnimacion();
