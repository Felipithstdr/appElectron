const pass = document.querySelector("#pass")
const newPass = document.querySelector("#newPass")
document.getElementById("btnGeneratePass").addEventListener("click", generatePass);


function generatePass(){
    newPass.innerHTML = ''

    if(pass.value === ''){
        alert('Digite o tamanho da sua senha');
        return;
    }

    let charset ="fadhfdsgncnbmvhgfyterrte1234567890NBVVHJHGJOPIIYYTVNQA"
    let password = "" 

    for (let i =0, n = charset.length; i < pass.value; i++){
        password += charset.charAt(Math.floor(Math.random() * n))
    }

    let result = document.createTextNode("Sua senha é: " + password)
    return newPass.appendChild(result)
}