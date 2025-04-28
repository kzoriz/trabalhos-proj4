const form = document.getElementById('cadastroForm');

if(form) {
  form.addEventListener('submit', function(event) {
    const cpf = form.cpf.value;
    const email = form.email.value;
    const telefone = form.telefone.value;

    if(!/\d{11}/.test(cpf)) {
      alert('CPF inválido! Informe 11 dígitos.');
      event.preventDefault();
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Email inválido!');
      event.preventDefault();
    }

    if(!/\d{10,11}/.test(telefone)) {
      alert('Telefone inválido! Informe DDD + número.');
      event.preventDefault();
    }
  });
}