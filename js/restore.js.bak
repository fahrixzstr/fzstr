/* =========================
RESTORE DATABASE
========================= */

window.restoreBackup =
function(event){

const file =
event.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload =
function(e){

const data =
JSON.parse(e.target.result);

console.log(data);

alert(
'Restore berhasil'
);

};

reader.readAsText(file);

};