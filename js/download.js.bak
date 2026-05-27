import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getStorage,
ref,
getDownloadURL

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
DOWNLOAD FILE
========================= */

window.downloadResult =
async function(fileName){

const fileRef =
ref(
storage,
'results/' + fileName
);

const url =
await getDownloadURL(
fileRef
);

window.open(url);

};