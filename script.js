document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.whatsapp-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const produto = this.dataset.produto;
        const numero = '5585982199519';
        const mensagem = `Olá! Gostaria de encomendar o produto: ${produto}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
        window.open(url, '_blank');
      });
    });
  });

document.querySelectorAll('#filtros button').forEach(botao => {
  botao.addEventListener('click', function () {
    const filtro = this.dataset.filtro;
    const produtos = document.querySelectorAll('.produto');

    // Aplica filtro nos produtos
    produtos.forEach(produto => {
      const categoria = produto.dataset.categoria;
      if (filtro === 'todos' || categoria === filtro) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
    });

    // Marca o botão ativo
    document.querySelectorAll('#filtros button').forEach(btn => btn.classList.remove('ativo'));
    this.classList.add('ativo');
  });
});
