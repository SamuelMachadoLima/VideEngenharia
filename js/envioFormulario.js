onload = () => {
    $('#telefone').prop("required", true);
    $('#email').prop("required", true);
}

function verificatel(){
    let tel = $('#telefone').val()

    if (tel.length <= 14) {
        $('#telefone').mask('(00) 0000-00009');
    } else {
        $('#telefone').mask('(00) 00000-0000');
    }
}

$(document).on("input", "#telefone", function () {
    verificatel();

    if($(this).val().trim() == ''){
        $('#email').prop("required", true);
    }else{
        $('#email').prop("required", false);
    }
});
$(document).on("input", "#email", function () {
    if($(this).val().trim() == ''){
        $('#telefone').prop("required", true);
    }else{
        $('#telefone').prop("required", false);
    }
});



function postToGoogle() {

    var field1 = $("[name='nome']").val();
    var field2 = $("[name='telefone']").val();
    var field21 = $("[name='email']").val();
    var field3 = $("[name='assunto']").val();
    var field4 = $("[name='mensagem']").val();

    $.ajax({
        url: "https://docs.google.com/forms/d/1stTZWm9HlCvaHox7X5yDpyzI6fSbHyeLw9TDP8ZYnGY/formResponse",
        data: {
            "entry.88412552": field1,
            "entry.2037107998": field2,
            "entry.892208407": field21,
            "entry.1805832466": field3,
            "entry.1602261439": field4
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                alert("Mensagem enviada!");
                document.getElementById('nome').value = '';
                document.getElementById('telefone').value = '';
                document.getElementById('assunto').value = '';
                document.getElementById('mensagem').value = '';
            },
            200: function () {
                alert("Mensagem enviada!");
                document.getElementById('nome').value = '';
                document.getElementById('telefone').value = '';
                document.getElementById('assunto').value = '';
                document.getElementById('mensagem').value = '';
            }
        }
    });
}