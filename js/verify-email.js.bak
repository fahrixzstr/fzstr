import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getAuth,
sendEmailVerification

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

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
VERIFY EMAIL
========================= */

window.sendVerifyEmail =
async function(){

const user =
auth.currentUser;

if(!user){

alert(
'User belum login'
);

return;

}

await sendEmailVerification(
user
);

alert(
'Email verifikasi berhasil dikirim'
);

};