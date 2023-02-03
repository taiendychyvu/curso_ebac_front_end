
$(document).ready(function(){
    $(`form`).on(`submit`, function(e) {
        e.preventDefault();
        const novaTarefa = $(`#nova-tarefa`).val();
        const addTarefa = $(`<li>${novaTarefa}</li>`);
        $(addTarefa).appendTo(`ul`); //para adicionar tudo isso feito a cima em nosso ul do html
        $(`#nova-tarefa`).val(``); //para limpar o campo apos o click no botao

        $(`li`).click(function(){
            $(this).css(`text-decoration`, `line-through`); 
        })
    })
//este codigo abaixo funciona fora do submit, o codigo li.click funciona apenas dentro do submit pois ele deve ser recarregado toda vez que uma li é adicionada no html
/*     
    $(document).on(`click`, `li`, function() {
        $(this).css(`text-decoration`, `line-through`);
    }) 
*/
}) 

