const form = document.getElementById('form');
const primeiroNumero = document.getElementById('numeroA');
const segundoNumero = document.getElementById('numeroB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemDeSucesso =`O primeiro número: <b>${primeiroNumero.value}</b> é menor do que o segundo número: <b>${segundoNumero.value}</b>`;

    if(primeiroNumero.value < segundoNumero.value) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemSucesso.style.display = 'block';

        primeiroNumero.value = '';
        segundoNumero.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'block'
        nomeBeneficiario.style.border = '2px solid red'
    }
})

segundoNumero.addEventListener('keyup', function(e){
    console.log(e.target.value);

    if(primeiroNumero.value > segundoNumero.value) {
        segundoNumero.classList.add ('error')
        document.querySelector('.error-message').style.display = 'block'
    }
    else {
        segundoNumero.classList.remove ('error')
        document.querySelector('.error-message').style.display = 'none'
    }
});