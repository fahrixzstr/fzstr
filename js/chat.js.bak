import { db } from "./firebase.js";
import { ref, push, onChildAdded, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

export function sendMessage(msg) {
  const chatRef = push(ref(db, "chat"));
  set(chatRef, {
    msg,
    time: Date.now()
  });
}

export function listenChat(callback) {
  const chatRef = ref(db, "chat");
  onChildAdded(chatRef, snap => {
    callback(snap.val());
  });
}

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
SEND CHAT
========================= */

window.sendChat =
function(){

const input =
document.getElementById(
'chatInput'
);

if(!input.value) return;

const chatRef =
ref(db,'chat');

push(chatRef,{

message:
input.value,

sender:'user',

createdAt:
Date.now()

});

input.value = '';

};

/* =========================
LOAD CHAT
========================= */

const chatRef =
ref(db,'chat');

onValue(chatRef,(snapshot)=>{

const data =
snapshot.val();

const container =
document.getElementById(
'chatMessages'
);

container.innerHTML = '';

for(let id in data){

const item =
data[id];

container.innerHTML +=

`
<div class="chat-message ${item.sender}">

${item.message}

</div>
`;

}

container.scrollTop =
container.scrollHeight;

});