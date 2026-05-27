export function playSound() {
  const audio = new Audio("assets/sound/notify.mp3");
  audio.play();
}

/* =========================
TOAST NOTIFICATION
========================= */

window.showToast =
function(message,type='success'){

const toast =
document.createElement('div');

toast.className =
`toast ${type}`;

toast.innerHTML =
message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add(
'show'
);

},100);

setTimeout(()=>{

toast.classList.remove(
'show'
);

setTimeout(()=>{

toast.remove();

},300);

},3000);

};

/* =========================
PROMO POPUP
========================= */

window.showPromoPopup =
function(){

const popup =
document.createElement('div');

popup.className =
'promo-popup';

popup.innerHTML =

`
<div class="promo-content">

<h2>
🎉 Promo Hari Ini
</h2>

<p>
Diskon hingga 50%
untuk semua layanan digital.
</p>

<button onclick="closePromoPopup()">
Tutup
</button>

</div>
`;

document.body.appendChild(
popup
);

};

window.closePromoPopup =
function(){

const popup =
document.querySelector(
'.promo-popup'
);

if(popup){

popup.remove();

}

};

/* =========================
AUTO SHOW PROMO
========================= */

setTimeout(()=>{

showPromoPopup();

},5000);