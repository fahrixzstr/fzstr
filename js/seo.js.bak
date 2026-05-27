/* =========================
SEO META AUTO
========================= */

window.setSEO =
function(title,description){

document.title =
title;

let metaDesc =
document.querySelector(
'meta[name="description"]'
);

if(!metaDesc){

metaDesc =
document.createElement(
'meta'
);

metaDesc.name =
'description';

document.head.appendChild(
metaDesc
);

}

metaDesc.content =
description;

};

/* =========================
OPEN GRAPH
========================= */

window.setOpenGraph =
function(title,image){

let ogTitle =
document.querySelector(
'meta[property="og:title"]'
);

if(!ogTitle){

ogTitle =
document.createElement(
'meta'
);

ogTitle.setAttribute(
'property',
'og:title'
);

document.head.appendChild(
ogTitle
);

}

ogTitle.content =
title;

let ogImage =
document.querySelector(
'meta[property="og:image"]'
);

if(!ogImage){

ogImage =
document.createElement(
'meta'
);

ogImage.setAttribute(
'property',
'og:image'
);

document.head.appendChild(
ogImage
);

}

ogImage.content =
image;

};