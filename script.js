document.getElementById("botao").addEventListener("click", adicionar);
document.getElementById("item").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); //não vai enviar o formulário
        adicionar();
    }
});

function adicionar() { //adiciona o item na lista
    console.log("Função adicionar chamada!");

    const valor = document.getElementById("item").value;
    if(valor.trim() !== ""){
        const criar = document.createElement("li");

        const checkB = document.createElement("input");
        checkB.type = "checkbox";

        //criar item da lista
        criar.appendChild(checkB);
        criar.appendChild(document.createTextNode(" " + valor));

        document.getElementById("lista").appendChild(criar);
        document.getElementById("item").value = "";
    } else{
        alert("Por favor, digite um item!");
    }
}