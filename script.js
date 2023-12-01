const input = document.querySelector('input')
const qrcode = document.querySelector('#qrcode')


function gerar() {
    if (!input.value) {
        alert("Erro digite uma URL")
    } else {
        genQRCode()
    }
}

function genQRCode() {
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`
}