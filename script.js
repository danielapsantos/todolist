document.getElementById("botao").addEventListener("click", adicionar);

function adicionar(){
    const valor = document.getElementById("item").value;
    if(valor.trim() !== ""){
        const criar = document.createElement("li");

        const checkB = document.createElement("input");
        checkB.type = "checkbox";

        criar.appendChild(checkB);
        criar.appendChild(document.createTextNode(" " + valor));

        document.getElementById("lista").appendChild(criar);
        document.getElementById("item").value = "";
    } else{
        alert("Por favor, digite um item!");
    }
}