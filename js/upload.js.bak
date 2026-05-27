import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getStorage,
ref,
uploadBytes,
getDownloadURL

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

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

const storage =
getStorage(app);

/* =========================
UPLOAD FILE
========================= */

window.uploadFile =
async function(file){

if(!file){

alert(
'File belum dipilih'
);

return;

}

const storageRef =
ref(
storage,
'uploads/' + file.name
);

await uploadBytes(
storageRef,
file
);

const downloadURL =
await getDownloadURL(
storageRef
);

return downloadURL;

};