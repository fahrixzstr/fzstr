import {

initializeApp

}

from

'https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js';

import {

getAuth,
onAuthStateChanged,
signOut

}

from

'https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js';

import {

getDatabase,
ref,
push,
onValue,
remove,
update

}

from

'https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js';

/* =========================
FIREBASE
========================= */

const firebaseConfig = {

apiKey:
"AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",

authDomain:
"fahrixzstore.firebaseapp.com",

databaseURL:
"https://fahrixzstore-default-rtdb.firebaseio.com",

projectId:
"fahrixzstore",

storageBucket:
"fahrixzstore.firebasestorage.app",

messagingSenderId:
"1070736619563",

appId:
"1:1070736619563:web:735cdd57d5c90373e1526e",

measurementId:
"G-H7QL79SSMX"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getDatabase(app);

/* =========================
CHECK ADMIN LOGIN
========================= */

onAuthStateChanged(
auth,
(user)=>{

if(!user){

window.location =
'login.html';

}

});

/* =========================
LOGOUT
========================= */

window.logoutAdmin =
async function(){

try{

await signOut(auth);

window.location =
'login.html';

}
catch(error){

console.error(error);

alert(
'Logout gagal'
);

}

};

/* =========================
SAVE PRODUCT
========================= */

window.saveProduct =
async function(){

const name =
document.getElementById(
'productName'
)?.value;

const price =
document.getElementById(
'productPrice'
)?.value;

const category =
document.getElementById(
'productCategory'
)?.value;

if(
!name ||
!price ||
!category
){

alert(
'Lengkapi data produk'
);

return;

}

try{

const productRef =
ref(db,'products');

await push(productRef,{

name,
price,
category,

createdAt:
Date.now()

});

alert(
'Produk berhasil disimpan'
);

document.getElementById(
'productName'
).value = '';

document.getElementById(
'productPrice'
).value = '';

}
catch(error){

console.error(error);

alert(
'Gagal menyimpan produk'
);

}

};

/* =========================
LOAD ORDERS
========================= */

const orderRef =
ref(db,'orders');

onValue(orderRef,(snapshot)=>{

const data =
snapshot.val();

const container =
document.getElementById(
'adminOrders'
);

if(!container) return;

container.innerHTML = '';

if(!data){

container.innerHTML =

`
<div class="empty-order">

Belum ada pesanan

</div>
`;

return;

}

let totalOrders = 0;

for(let id in data){

totalOrders++;

const item =
data[id];

container.innerHTML +=

`

<div class="order-admin-card">

<h3>
${item.product || '-'}
</h3>

<p>
Order ID:
${item.orderId || '-'}
</p>

<p>
Nama:
${item.name || '-'}
</p>

<p>
WhatsApp:
${item.wa || '-'}
</p>

<p>
Status:
<span class="status-badge">
${item.status || 'Pending'}
</span>
</p>

<div class="admin-actions">

<button
onclick="updateOrderStatus('${id}','Diproses')"
class="process-btn">

Proses

</button>

<button
onclick="updateOrderStatus('${id}','Selesai')"
class="success-btn">

Selesai

</button>

<button
onclick="deleteOrder('${id}')"
class="delete-btn">

Hapus

</button>

</div>

</div>

`;

}

document.getElementById(
'totalOrders'
).innerHTML =
totalOrders;

});

/* =========================
UPDATE ORDER STATUS
========================= */

window.updateOrderStatus =
async function(orderId,status){

try{

await update(

ref(db,'orders/' + orderId),

{
status: status
}

);

alert(
'Status berhasil diperbarui'
);

}
catch(error){

console.error(error);

alert(
'Gagal update status'
);

}

};

/* =========================
DELETE ORDER
========================= */

window.deleteOrder =
async function(orderId){

const confirmDelete =
confirm(
'Yakin ingin menghapus order ini?'
);

if(!confirmDelete){
return;
}

try{

await remove(
ref(db,'orders/' + orderId)
);

alert(
'Order berhasil dihapus'
);

}
catch(error){

console.error(error);

alert(
'Gagal menghapus order'
);

}

};

/* =========================
REALTIME STATS
========================= */

const productRef =
ref(db,'products');

onValue(productRef,(snapshot)=>{

const data =
snapshot.val();

let totalProducts = 0;

if(data){

totalProducts =
Object.keys(data).length;

}

const totalUsersElement =
document.getElementById(
'totalUsers'
);

if(totalUsersElement){

totalUsersElement.innerHTML =
totalProducts;

}

});

/* =========================
REVENUE STATS
========================= */

document.getElementById(
'totalRevenue'
).innerHTML =
'Rp12.500.000';