/* =========================
RATE LIMIT LOGIN
========================= */

let loginAttempts = 0;

window.checkRateLimit =
function(){

loginAttempts++;

if(loginAttempts >= 5){

alert(
'Terlalu banyak percobaan login'
);

return false;

}

return true;

};