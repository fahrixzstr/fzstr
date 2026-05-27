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
SEND TICKET
========================= */

window.sendTicket =
function(){

const title =
document.getElementById(
'ticketTitle'
).value;

const message =
document.getElementById(
'ticketMessage'
).value;

if(!title || !message){

alert(
'Lengkapi data'
);

return;

}

const ticketRef =
ref(db,'tickets');

push(ticketRef,{

title,

message,

status:'Pending',

createdAt:
Date.now()

});

alert(
'Ticket berhasil dikirim'
);

};

/* =========================
LOAD TICKET
========================= */

const ticketRef =
ref(db,'tickets');

onValue(ticketRef,(snapshot)=>{

const data =
snapshot.val();

const container =
document.getElementById(
'ticketList'
);

if(!container) return;

container.innerHTML = '';

for(let id in data){

const item =
data[id];

container.innerHTML +=

`
<div class="order-card">

<h3>
${item.title}
</h3>

<p>
${item.message}
</p>

<span>
${item.status}
</span>

</div>
`;

}

});