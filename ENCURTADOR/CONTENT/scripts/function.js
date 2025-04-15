export default function capturarLink(){
        let link = document.getElementById("input-link").value
        let linkValue = document.getElementById("link-encurtado")
        
        if(link == ""){
            alert("Por favor, insira um link válido!")
        }
        else{
            let linkEncurtado = "brev.ly/" + Math.random().toString(36).substring(2, 8)
            linkValue.innerText = linkEncurtado
            let linkBox = document.getElementById("links-content")
            linkBox.style.display = "none"
        }
}