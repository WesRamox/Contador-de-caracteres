
function characterCount() {
    var inputValue = document.getElementById("word").value
    var textValue = document.getElementById("count")
    
    if(inputValue.length <= 0) {
        textValue.innerText = "Erro: Digite algo"
        textValue.style.color = "red"
    } else {
        textValue.innerText = "Quantidade de caracteres: " + inputValue.length
        textValue.style.color = "#5215b2"
    }
}