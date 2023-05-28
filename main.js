$(document).ready(function(){

//const nom = [];

let linhas = '';

$('#form-atividade').on('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

})
   



function adicionaLinha() {    
      const inputNome = $('#nome').val();
      const tel = $('#telefone').val();
      const ncpf = $('#cpf').mask('000.000.000-00').val();
      const end = $('#endereco').val();
      const ncep = $('#cep').mask('00000-000').val();
      

    let linha = '<tr>';
    linha += `<th>${inputNome}</th>`;
    linha += `<th>${tel}</th>`;
    linha += `<th>${ncpf}</th>`;
    linha += `<th>${end}</th>`;
    linha += `<th>${ncep}</th>`;
    linha += '</tr>';

    /*$(inputNome).on("click",function(){
        $(this).toggleClass('text-decoration','line-through');
    }
    )*/
    

    linhas += linha;

    

    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

/*$('#cpf').mask('000.000.000-00');
$('#cep').mask('00000-000');*/

}
)

