// Main Menu

var x = document.getElementById("menu");
var createform = document.createElement('form');
x.appendChild(createform);

var bCreate = document.createElement('button');
bCreate.innerHTML = "Create";
bCreate.onclick = "window.location.href='create'";
createform.appendChild(bCreate);

var orTxt = document.createElement('p');
orTxt.innerHTML = "- or -";
createform.appendChild(orTxt);

var bJoin = document.createElement('button');
bJoin.innerHTML = "Join";
bJoin.onclick = "window.location.href='join'";
createform.appendChild(bJoin);