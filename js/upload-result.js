import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getStorage,
ref,
uploadBytes

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

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

const storage =
getStorage(app);

/* =========================
UPLOAD RESULT
========================= */

window.uploadResult =
async function(){

const file =
document.getElementById(
'resultFile'
).files[0];

if(!file){

alert(
'Pilih file'
);

return;

}

const storageRef =
ref(
storage,
'results/' + file.name
);

await uploadBytes(
storageRef,
file
);

alert(
'File berhasil upload'
);

};