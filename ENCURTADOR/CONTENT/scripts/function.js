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

            // Adiciona o link encurtado à lista de links
            let mylinksLeft = document.getElementById("mylinks-left")
            
            const addNovoLink = document.createElement("p")
            addNovoLink.className = "new-mylinks"
            addNovoLink.innerText = linkEncurtado
            mylinksLeft.appendChild(addNovoLink)

            const addOldLink = document.createElement("p")
            addOldLink.className = "old-mylinks"
            addOldLink.innerText = link
            mylinksLeft.appendChild(addOldLink)
            
            document.getElementById("input-link").value = ""
        
            // Cria botão extras
            
            
            let buttonsLinks = document.getElementById("buttons-links")

            const btnCopy = document.createElement("img")
            btnCopy.src = "../imgs/copy.png"
            btnCopy.classList.add = "button"
            buttonsLinks.appendChild(btnCopy)
        
            const btnDelete = document.createElement("img")
            btnDelete.src = "../imgs/trash.png"
            btnDelete.classList.add = "button"
            buttonsLinks.appendChild(btnDelete)
        }
}