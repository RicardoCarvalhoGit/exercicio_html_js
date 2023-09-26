const form = document.getElementById('form-contato')
const nomes = []
const numeros = []

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (numeros.includes(inputNumeroTelefone.value)) {
        alert(`O número: ${inputNumeroTelefone.value} já foi adicionado aos contatos`);
    } else {

    nomes.push(inputNomeContato.value);
    numeros.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
