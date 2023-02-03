$(document).ready(function(){
    $(`#cpf`).mask(`000.000.000-00`, {
        placeholder: `123.123.123-00`
    }) 

    $(`#telefone`).mask(`(00) 00000-0000`, {
        placeholder: `(75) 99999-9999`
    }) 

    $(`#cep`).mask(`00000-000`, {
        placeholder: `12345-000`
    }) 

})
