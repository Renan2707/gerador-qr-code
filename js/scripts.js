const inputQR = document.querySelector("#input-qr")
const btnQR = document.querySelector("#btn-qr")
const imgQR = document.querySelector("#qr-code img")
const divQR = document.querySelector("#qr-code")

//Gerar QR CODE

function criarQRcode(){
    const inputQRvalue = inputQR.value;

    if(!inputQRvalue) return;

    btnQR.innerText = "Gerando Código...";

    imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputQRvalue}`

    imgQR.addEventListener("load",()=>{
        divQR.classList.remove("hidden");
        divQR.classList.add("flex");
        btnQR.innerText = "QR Code Criado!";
    })
}

btnQR.addEventListener("click", () => {
    criarQRcode();
})

inputQR.addEventListener("keydown", (e) => {
    if (e.code === "Enter"){
        criarQRcode();
    }
})

//Limpar QR Code

inputQR.addEventListener("keyup",()=>{
    if (!inputQR.value){
        divQR.classList.remove("flex");
        divQR.classList.add("hidden");
        btnQR.innerText = "Gerar QR Code";
    }
})

