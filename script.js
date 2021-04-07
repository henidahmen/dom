// console.log (document)
// var totalTag = document.getElementById("total")
// var totalTag = document.querySelector("total")
// var imgs = document.getElementsByTagName("img")
// var imgs = document.querySelctorAll("img")
var btnsAddTag = document.getElementsByClassName("add");
var checkTags = document.querySelectorAll(".check");
var removeTag=document.querySelectorAll(".delete");
console.log(btnsAddTag);

for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].addEventListener("click", total);
}

for (var i = 0; i < btnsAddTag.length; i++) {
  // btnsAddTags[i].addEventListener("click";add)
  btnsAddTag[i].onclick = add
}
for (var j=0; j<removeTag.length;j++){
    removeTag[j].addEventListener("click",delet);
}
function add(event) {
  // console.log(event.target)
  var btnAdd = event.target;
  var tdElt = btnAdd.parentElement;
  // console.log(tdElt)
  var inputTag = tdElt.querySelector(".quantity");
  var quantity = Number(inputTag.value);
  quantity++
  inputTag.value = quantity;
  var trElt = btnAdd.parentElement.parentElement;
  console.log(trElt)
  var unitpriceTag = trElt.querySelector(".unitPrice");
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  console.log(unitpriceTag)
  var unitprice = Number(unitpriceTag.innerHTML);
  price = quantity * unitprice;
  priceTag.innerHTML = price;
}

function total(event) {
    console.log(event)
  var currentcheck = event.target;
  var totalTag = document.getElementById("total");
  var total = Number(totalTag.innerHTML);
  var trElt = currentcheck.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var btnAddTag = trElt.querySelector(".add");
  var btnRemoveTag = trElt.querySelector(".remove");

  if (currentcheck.checked === true) {
    total += price;
    btnAddTag.setAttribute("disabled", true);
    btnRemoveTag.setAttribute("disabled", true);
  } else {
    total -= price;
    btnAddTag.removeAttribute("disabled");
    btnRemoveTag.removeAttribute("disabled");
  }
  totalTag.innerHTML = total;
}

function delet(event) {
 var btnRemove=event.target
 var trElt=btnRemove.parentElement.parentElement
 trElt.remove()
 total(event)

 

    
}
