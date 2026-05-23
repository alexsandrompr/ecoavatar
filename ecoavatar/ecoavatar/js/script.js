// ==========================================================================
// 1. MENU MOBILE
// Abre e fecha o menu ao clicar no botão hambúrguer
// ==========================================================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function () {
    // Adiciona ou remove a classe 'open' para mostrar/esconder o menu
    navMenu.classList.toggle('open');

    // Atualiza o atributo de acessibilidade (aberto = true, fechado = false)
    const estaAberto = navMenu.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', estaAberto);
  });
}

// ==========================================================================
// 2. FAQ — PERGUNTAS E RESPOSTAS
// Abre e fecha cada resposta ao clicar na pergunta
// ==========================================================================
const perguntas = document.querySelectorAll('.faq-question');

perguntas.forEach(function (pergunta) {
  pergunta.addEventListener('click', function () {
    // Pega o elemento logo abaixo da pergunta (a resposta)
    const resposta = pergunta.nextElementSibling;

    // Adiciona ou remove a classe 'open' para mostrar/esconder a resposta
    resposta.classList.toggle('open');

    // Atualiza o atributo de acessibilidade
    const estaAberta = resposta.classList.contains('open');
    pergunta.setAttribute('aria-expanded', estaAberta);
  });
});

// ==========================================================================
// 3. FORMULÁRIO DE CONTATO
// Valida os campos e exibe mensagem de sucesso ou erro
// ==========================================================================
const formulario = document.querySelector('.contact-form');

if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    // Impede o envio padrão do formulário (que recarregaria a página)
    evento.preventDefault();

    // Pega os valores digitados em cada campo
    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensagem = document.querySelector('#mensagem').value.trim();
    const status = document.querySelector('.form-status');

    // Verifica se algum campo está vazio
    if (!nome || !email || !mensagem) {
      status.textContent = 'Preencha todos os campos antes de enviar.';
      return;
    }

    // Verifica se o e-mail tem formato básico válido
    if (!email.includes('@') || !email.includes('.')) {
      status.textContent = 'Digite um e-mail válido.';
      return;
    }

    // Se tudo estiver certo, exibe sucesso e limpa o formulário
    status.textContent = 'Mensagem enviada com sucesso!';
    formulario.reset();
  });
}
