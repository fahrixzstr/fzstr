import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getDatabase,
ref,
push,
onValue

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

/* =========================
FIREBASE
========================= */

const firebaseConfig = {

apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",

authDomain:
"fahrixzstore.firebasestorage.app",

databaseURL:
"https://fahrixzstore-default-rtdb.firebaseio.com",

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

const db =
getDatabase(app);

/* =========================
WITHDRAW
========================= */

window.requestWithdraw =
function(){

const amount =
document.getElementById(
'withdrawAmount'
).value;

const bank =
document.getElementById(
'withdrawBank'
).value;

const rekening =
document.getElementById(
'withdrawRekening'
).value;

const nama =
document.getElementById(
'withdrawName'
).value;

if(
!amount ||
!bank
){

alert(
'Lengkapi data withdraw'
);

return;

}

const withdrawRef =
ref(db,'withdraws');

push(withdrawRef,{

amount,
bank,
rekening,
nama,

status:
'Pending',

createdAt:
Date.now()

});

alert(
'Withdraw berhasil dikirim'
);

};

/* =========================
LOAD HISTORY
========================= */

window.loadWithdrawHistory =
function(){

const historyRef =
ref(db,'withdraws');

onValue(historyRef,(snapshot)=>{

const data =
snapshot.val();

const container =
document.getElementById(
'withdrawHistory'
);

container.innerHTML = '';

for(let id in data){

const item =
data[id];

container.innerHTML +=

`
<div class="order-card">

<h3>
Rp${item.amount}
</h3>

<p>
${item.bank}
</p>

<p>
${item.status}
</p>

</div>
`;

}

});

};