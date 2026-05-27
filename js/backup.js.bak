/* =========================
BACKUP DATABASE
========================= */

window.backupData =
function(){

const data = {

backup:
'FahriXZ Store',

createdAt:
new Date().toISOString()

};

const blob =
new Blob(
[
JSON.stringify(data,null,2)
],
{
type:'application/json'
}
);

const a =
document.createElement('a');

a.href =
URL.createObjectURL(blob);

a.download =
'backup.json';

a.click();

};