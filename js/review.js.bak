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
SEND REVIEW
========================= */

window.sendReview =
function(){

const name =
document.getElementById(
'reviewName'
).value;

const rating =
document.getElementById(
'reviewRating'
).value;

const message =
document.getElementById(
'reviewMessage'
).value;

if(!name || !message){

alert(
'Lengkapi data'
);

return;

}

const reviewRef =
ref(db,'reviews');

push(reviewRef,{

name,

rating,

message,

createdAt:
Date.now()

});

alert(
'Review berhasil dikirim'
);

};

/* =========================
LOAD REVIEW
========================= */

const reviewRef =
ref(db,'reviews');

onValue(reviewRef,(snapshot)=>{

const data =
snapshot.val();

const container =
document.getElementById(
'reviewContainer'
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
${item.name}
</h3>

<p>
${'⭐'.repeat(item.rating)}
</p>

<p>
${item.message}
</p>

</div>
`;

}

});