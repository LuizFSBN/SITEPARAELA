const inicio = document.getElementById('inicio');
const mensagem = document.getElementById('mensagem');
const videoSection = document.getElementById('videoSection');
const galeria = document.getElementById('galeria');
const carrossel = document.getElementById('carrossel');
const pedidoBtnWrapper = document.getElementById('pedidoBtnWrapper');
const popupFinal = document.getElementById('popupFinal');

const startBtn = document.getElementById('startBtn');
const verVideoBtn = document.getElementById('verVideoBtn');
const verGaleriaBtn = document.getElementById('verGaleriaBtn');
const abrirPopupBtn = document.getElementById('abrirPopupBtn');

const voltarBtn = document.getElementById('voltar');
const avancarBtn = document.getElementById('avancar');

const bgMusic = document.getElementById('bgMusic');

let slideIndex = 0;

function esconderTudo() {
  inicio.classList.add('escondido');
  mensagem.classList.add('escondido');
  videoSection.classList.add('escondido');
  galeria.classList.add('escondido');
  popupFinal.classList.add('escondido');
  pedidoBtnWrapper.classList.add('escondido');
}

startBtn.onclick = () => {
  esconderTudo();
  mensagem.classList.remove('escondido');
  bgMusic.play().catch(() => {});
};

verVideoBtn.onclick = () => {
  esconderTudo();
  videoSection.classList.remove('escondido');
};

verGaleriaBtn.onclick = () => {
  esconderTudo();
  galeria.classList.remove('escondido');
  updateCarousel();
};

voltarBtn.onclick = () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateCarousel();
  }
};

avancarBtn.onclick = () => {
  const totalSlides = document.querySelectorAll('.slide').length;
  if (slideIndex < totalSlides - 1) {
    slideIndex++;
    updateCarousel();
  }
};

function updateCarousel() {
  carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;

  const totalSlides = document.querySelectorAll('.slide').length;
  if (slideIndex === totalSlides - 1) {
    pedidoBtnWrapper.classList.remove('escondido');
  } else {
    pedidoBtnWrapper.classList.add('escondido');
  }
}

abrirPopupBtn.onclick = () => {
  popupFinal.classList.remove('escondido');
};
