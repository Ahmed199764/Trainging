"use strict";
function render(){
var newHeader = document.getElementById("myHeader");
var he1 = document.createElement('h1');
newHeader.appendChild(he1);
he1.textContent="hi man";
}

render();
