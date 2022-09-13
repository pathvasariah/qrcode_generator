const inputValue = document.querySelector('#input');
const buttonValue = document.querySelector('#buttonValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let valueDefault;

let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

buttonValue.addEventListener('click', generateQrCode);

function generateQrCode(){
    let qrcodeValue = inputValue.value.trim();
    if(!qrcodeValue || qrcodeValue === valueDefault){
        return;
    }else{
        valueDefault = qrcodeValue;
        buttonValue.innerHTML = 'Gerando QR Code...';
        imgQrCode.src = `${url}${valueDefault}`;
        imgQrCode.addEventListener('load', () => {
            wrapper.classList.add('active');
            buttonValue.innerHTML = 'Gerar QR Code';
        });
    }
}