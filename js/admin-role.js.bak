/* =========================
ADMIN ROLE SYSTEM
========================= */

window.checkAdminRole =
function(role){

const permissions = {

superadmin:[
'users',
'orders',
'products',
'withdraw',
'broadcast',
'report'
],

staff:[
'orders',
'products'
]

};

return permissions[role];

};

/* =========================
CHECK ACCESS
========================= */

window.hasAccess =
function(role,feature){

const access =
checkAdminRole(role);

return access.includes(feature);

};