const startBtn = document.getElementById('startBtn');
const inicio = document.getElementById('inicio');
const mensagem = document.getElementById('mensagem');
const avancarBtn = document.getElementById('avancarBtn');
const galeria = document.getElementById('galeria');
const carrossel = document.getElementById('carrossel');
const voltarBtn = document.getElementById('voltar');
const avancarSetaBtn = document.getElementById('avancar');
const pedidoBtn = document.getElementById('pedidoBtn');
const bgMusic = document.getElementById('bgMusic');

let slideIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

startBtn.addEventListener('click', () => {
  inicio.classList.add('escondido');
  mensagem.classList.remove('escondido');
  bgMusic.play().catch(() => {});
});

avancarBtn.addEventListener('click', () => {
  mensagem.classList.add('escondido');
  galeria.classList.remove('escondido');
  updateCarousel();
});

avancarSetaBtn.addEventListener('click', () => {
  if (slideIndex < totalSlides - 1) {
    slideIndex++;
    updateCarousel();
  }
});

voltarBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;

  // Lógica para mostrar/esconder o botão do pedido final
  if (slideIndex === totalSlides - 1) {
    pedidoBtn.style.display = 'block';
  } else {
    pedidoBtn.style.display = 'none';
  }
}

pedidoBtn.addEventListener('click', () => {
  window.location.href = 'pedido.html';
});

// Inicializa a galeria com o botão do pedido escondido
updateCarousel();