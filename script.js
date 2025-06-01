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
  