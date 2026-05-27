import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getAuth,
sendPasswordResetEmail

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

/* =========================
FIREBASE CONFIG
========================= */

const firebaseConfig = {

apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",

authDomain:
"fahrixzstore.firebasestorage.app",

projectId:
"fahrixzstore",

storageBucket:
"fahrixzstore.firebasestorage.app",

messagingSenderId:
"1070736619563",

appId:
"G-H7QL79SSMX"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

/* =========================
RESET PASSWORD
========================= */

window.resetPassword =
async function(){

const email =
document.getElementById(
'resetEmail'
).value;

if(!email){

alert(
'Masukkan email'
);

return;

}

try{

await sendPasswordResetEmail(
auth,
email
);

alert(
'Link reset password berhasil dikirim'
);

}catch(error){

alert(
error.message
);

}

};