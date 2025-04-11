function mostrarCadastro() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block';
  }
  
  function voltarLogin() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  }
  
  // Cria chuva
  const container = document.querySelector('.raindrops');
  for (let i = 0; i < 100; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = `${Math.random() * window.innerWidth}px`;
    drop.style.animationDuration = `${0.5 + Math.random()}s`;
    container.appendChild(drop);
  }
  
  // Efeito de raio (flash) aleatório
  setInterval(() => {
    if (Math.random() < 0.1) {
      const lightning = document.querySelector('.lightning');
      lightning.style.opacity = 1;
      setTimeout(() => {
        lightning.style.opacity = 0;
      }, 100);
    }
  }, 200);
  