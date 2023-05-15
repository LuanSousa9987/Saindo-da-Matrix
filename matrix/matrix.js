// Desenhar o fundo animado Matrix

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;
var ascii = "!@#$%^&*()_+{}:\"<>?'[]-=`\\;,./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var font_size = 16;
var columns = Math.floor(w / font_size); // Correção: usar Math.floor para arredondar para baixo
var drops = [];

for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#0F0'; // Cor do texto verde
  ctx.font = font_size + 'px monospace';


  // Fazendo a animação das letras caindo

  for (var i = 0; i < drops.length; i++) {
    var text = ascii[Math.floor(Math.random() * ascii.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > h && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// O código cria um loop de animação que atualiza continuamente a tela com novos quadros, criando a ilusão de movimento suave.

// O código finaliza com a chamada inicial de animate() para iniciar a animação.

function animate() {
  requestAnimationFrame(animate);
  draw();
}

animate();
