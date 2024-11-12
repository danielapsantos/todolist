document.getElementById("botao").addEventListener("click", adicionar);
document.getElementById("item").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); //não vai enviar o formulário
        adicionar();
    }
});

function adicionar() { //adiciona o item na lista
    console.log("Função adicionar item na lista");

    const valor = document.getElementById("item").value;
    if (valor.trim() !== "") {
        const criar = document.createElement("li");

        const checkB = document.createElement("input");
        checkB.type = "checkbox";

        const texto = document.createElement("span");
        texto.textContent = " " + valor;

        const excluirBton = document.createElement("button");
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

        //criar item da lista
        criar.appendChild(checkB);
        criar.appendChild(texto);
        criar.appendChild(excluirBton);

        document.getElementById("lista").appendChild(criar);
        document.getElementById("item").value = "";
    } else {
        alert("Por favor, digite um item!");
    }
}