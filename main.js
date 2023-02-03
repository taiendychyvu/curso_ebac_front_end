
$(document).ready(function(){
    $(`form`).on(`submit`, function(e) {
        e.preventDefault();
        const novaTarefa = $(`#nova-tarefa`).val();
        const addTarefa = $(`<li>${novaTarefa}</li>`);
        $(addTarefa).appendTo(`ul`); //para adicionar tudo isso feito a cima em nosso ul do html
        $(`#nova-tarefa`).val(``); //para limpar o campo apos o click no botao
    })

    $(`li`).click(function(){
        console.log(`clicou`)
        $(this).css(`text-decoration`, `line-through`);
    
    })
}) 

