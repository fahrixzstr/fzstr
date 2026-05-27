import { db } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

export function listenStats(callback) {
  onValue(ref(db, "stats"), snap => {
    callback(snap.val());
  });
}

import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {

getAuth,
onAuthStateChanged,
signOut

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

import {

getDatabase,
ref,
onValue

}

from

'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

/* =========================
FIREBASE CONFIG
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

const auth =
getAuth(app);

const db =
getDatabase(app);

/* =========================
USER SESSION
========================= */

onAuthStateChanged(
auth,
(user)=>{

if(user){

document.getElementById(
'userProfile'
).innerHTML =

`
<h2>${user.email}</h2>
<p>Status login aktif</p>
`;

loadOrders();

}

else{

window.location =
'login.html';

}

});

/* =========================
LOGOUT
========================= */

window.logoutUser =
async function(){

await signOut(auth);

window.location =
'login.html';

};

/* =========================
TRACK ORDER
========================= */

window.trackOrder =
function(){

const orderId =
document.getElementById(
'trackInput'
).value;

const result =
document.getElementById(
'trackResult'
);

result.innerHTML =

`
<div class="order-card">
<h3>${orderId}</h3>
<p>Status: Diproses</p>
</div>
`;

};

/* =========================
LOAD ORDERS
========================= */

function loadOrders(){

const orderRef =
ref(db,'orders');

onValue(orderRef,(snapshot)=>{

const data =
snapshot.val();

const orderList =
document.getElementById(
'orderList'
);

orderList.innerHTML = '';

for(let id in data){

const item =
data[id];

orderList.innerHTML +=

`
<div class="order-card">

<h3>${item.product}</h3>

<p>
Status:
${item.status}
</p>

<p>
Order ID:
${item.orderId}
</p>

</div>
`;

}

});

}