import { db } from "./firebase.js";
import { ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

export function addWishlist(userId, item) {
  const wRef = push(ref(db, "wishlist/" + userId));
  set(wRef, item);
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
ADD WISHLIST
========================= */

window.addWishlist =
function(product){

const wishlistRef =
ref(db,'wishlist');

push(wishlistRef,{

product,

createdAt:
Date.now()

});

alert(
'Ditambahkan ke wishlist'
);

};

/* =========================
LOAD WISHLIST
========================= */

window.loadWishlist =
function(){

const wishlistRef =
ref(db,'wishlist');

onValue(wishlistRef,(snapshot)=>{

const data =
snapshot.val();

const container =
document.getElementById(
'wishlistContainer'
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
${item.product}
</h3>

</div>
`;

}

});

};