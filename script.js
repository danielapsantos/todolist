document.getElementById("botao").addEventListener("click", adicionar);
document.getElementById("item").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); //não vai enviar o formulário
        adicionar();
    }
});

function adicionar() { //adiciona o item na lista
    console.log("chamando a função");

    const valor = document.getElementById("item").value;
    const data = document.getElementById("data").value;
    const descricao = document.getElementById("descricao").value;

    if (valor.trim() !== "") {
        const criar = document.createElement("li");

        const checkB = document.createElement("input");
        checkB.type = "checkbox";

        const container = document.createElement("div");

        const texto = document.createElement("span");
        texto.textContent = " " + valor +(data ? ` - ${data}` : "");

        const desc = document.createElement("small");
        desc.textContent = descricao ? descricao : "";
        desc.style.display = "block";
        desc.style.fontSize = "0.8em"
        desc.style.color = "666";

        container.appendChild(texto);
        container.appendChild(desc);

        checkB.addEventListener("change", function() {
            if(checkB.checked) {
                texto.classList.add("riscado");
                document.getElementById("concluidos").appendChild(criar);
            } else {
                texto.classList.remove("riscado")
                document.getElementById("lista").appendChild(criar);
            }
        });

        const excluirBton = document.createElement("button"); //excluir o item
        excluirBton.textContent = " ";
        excluirBton.classList.add("excluir");
        excluirBton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
         </svg>`;
        excluirBton.addEventListener("click", function () {
            criar.remove();
        });

        const editarBton = document.createElement("button"); //editar o item
        editarBton.classList.add("editar");
        editarBton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
        </svg>`;
        editarBton.addEventListener("click", function(){
            if(!editarBton.classList.contains("editando")) {
                const novaEntrada = document.createElement("input");
                novaEntrada.type = "text";
                novaEntrada.value = texto.textContent.trim();
                novaEntrada.classList.add("novo");

                criar.insertBefore(novaEntrada, texto);
                criar.removeChild(texto);

                editarBton.textContent = "Salvar";
                editarBton.classList.add("editando");
            } else {
                const novaEntrada = criar.querySelector(".novo");
                const novoValor = novaEntrada.value.trim();

                if(novoValor !== "") {
                    texto.textContent = " " + novoValor;
                    criar.insertBefore(texto, novaEntrada);
                    criar.removeChild(novaEntrada);

                    editarBton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>`;
                    editarBton.classList.remove("editando");
                } else {
                    alert("O campo de edição não pode estar vazio.");
                }
            }
        });

        //criar item da lista
        criar.appendChild(checkB);
        criar.appendChild(texto);
        criar.appendChild(container);
        criar.appendChild(editarBton);
        criar.appendChild(excluirBton);

        document.getElementById("lista").appendChild(criar);

        document.getElementById("item").value = "";
        document.getElementById("data").value = "";
        document.getElementById("descricao").value = "";
    } else {
        alert("Por favor, digite um item!");
    }
}