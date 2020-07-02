var modal = (e) => {
    let id = e.id;

    let conteudo = new XMLHttpRequest();
    conteudo.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            for (let i = 0; i < myObj.result.length; i++) {
                if (i == id) {
                    descricaoModal.innerHTML =
                        `<div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">${myObj.result[i].cabecalho}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body text-center">
                                            <img src="${myObj.result[i].imagem}" width="50%">
                                            <p class="mt-4">${myObj.result[i].texto}</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>`;

                    $('#descricaoModal').modal('show');
                }
            }
        }
    };
    conteudo.open("GET", "./servicos.json", true);
    conteudo.send();
}


onload = () => {
    let conteudo = new XMLHttpRequest();
    conteudo.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            for (let i = 0; i < myObj.result.length; i++) {
                cardServicos.innerHTML +=
                    `<a id='${i}' onclick='modal(this)'>` +
                    `<div class='card text-white bg-dark mb-3 ml-2' style='width: 15rem;'>` +
                    `<div class='card-header'>${myObj.result[i].cabecalho}</div>` +
                    `<div class='card-body'>` +
                    `<h5 class='card-title'>${myObj.result[i].titulo}</h5>` +
                    `<p class='card-text'>${myObj.result[i].abrv}</p>` +
                    `</div>` +
                    `</div>` +
                    `</div>` +
                    `</a>`;
            }
        }
    };
    conteudo.open("GET", "./servicos.json", true);
    conteudo.send();
}