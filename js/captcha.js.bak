/* =========================
SIMPLE CAPTCHA
========================= */

const captchaText =
document.getElementById(
'captchaText'
);

const captchaInput =
document.getElementById(
'captchaInput'
);

let currentCaptcha =
'';

window.generateCaptcha =
function(){

const chars =
'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';

let result = '';

for(let i=0;i<6;i++){

result +=
chars.charAt(
Math.floor(
Math.random() * chars.length
)
);

}

currentCaptcha =
result;

if(captchaText){

captchaText.innerHTML =
result;

}

};

window.validateCaptcha =
function(){

if(
captchaInput.value !== currentCaptcha
){

alert(
'Captcha salah'
);

generateCaptcha();

return false;

}

return true;

};

window.addEventListener(
'DOMContentLoaded',
generateCaptcha
);