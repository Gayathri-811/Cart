var mouseCount = 0;
var cpuCount = 0;
var keyboardCount = 0;
var totalAmount = 0;
var amount1 = 0;
var amount2 = 0;
var amount3 = 0;

//To calculate the total amount
function Total() {
  totalAmount = amount1 + amount2 + amount3;
  document.querySelector(".right4").innerHTML = ("Total" + "<span class='item4'></span>" + " ₹ " + totalAmount);
}
Total();


//To add items to cart
document.querySelector(".mouse .button").addEventListener("click", addFirstItemToCart);
document.querySelector(".cpu .button").addEventListener("click", addSecondItemToCart);
document.querySelector(".keyboard .button").addEventListener("click", addThirdItemToCart);
//To remove items from cart
document.querySelector(".button-type2.delete1").addEventListener("click", removeFirstItemFromCart);
document.querySelector(".button-type2.delete2").addEventListener("click", removeSecondItemFromCart);
document.querySelector(".button-type2.delete3").addEventListener("click", removeThirdItemFromCart);


function addFirstItemToCart() {
  mouseCount++;
  document.querySelector(".button-type2.delete1").classList.remove("hidden");
  //console.log(mouseCount);
  amount1 = 10 * mouseCount;
  document.querySelector(".right1").innerHTML = ("Mouse - ₹10 ×" + mouseCount + "<span class='item1'></span>" + " ₹" + amount1);
  document.querySelector(".right1").classList.remove("hidden");
  Total();
}

function addSecondItemToCart() {
  cpuCount++;
  document.querySelector(".button-type2.delete2").classList.remove("hidden");
  //console.log(cpuCount);
  amount2 = 1000 * cpuCount;
  document.querySelector(".right2").innerHTML = ("CPU - ₹1000 ×" + cpuCount + "<span class='item2'></span>" + " ₹" + amount2);
  document.querySelector(".right2").classList.remove("hidden");
  Total();
}

function addThirdItemToCart() {
  keyboardCount++;
  document.querySelector(".button-type2.delete3").classList.remove("hidden");
  //console.log(keyboardCount);
  amount3 = 100 * keyboardCount;
  document.querySelector(".right3").innerHTML = ("Keyboard - ₹100 ×" + keyboardCount + "<span class='item3'></span>" + " ₹" + amount3);
  document.querySelector(".right3").classList.remove("hidden");
  Total();
}



function removeFirstItemFromCart() {
  if (mouseCount > 0) {
    mouseCount--;

    //console.log(mouseCount);
    amount1 = 10 * mouseCount;

    if (mouseCount != 0) {
      document.querySelector(".right1").innerHTML = ("Mouse - ₹10 ×" + mouseCount + "<span class='item1'></span>" + " ₹" + amount1);
      Total();
    } else {
      document.querySelector(".right1").classList.add("hidden");
      document.querySelector(".button-type2.delete1").classList.add("hidden");
      Total();
    }
  }
}

function removeSecondItemFromCart() {
  if (cpuCount > 0) {
    cpuCount--;

    //console.log(cpuCount);
    amount2 = 1000 * cpuCount;

    if (cpuCount != 0) {
      document.querySelector(".right2").innerHTML = ("CPU - ₹1000 ×" + cpuCount + "<span class='item2'></span>" + " ₹" + amount2);
      Total();
    } else {
      document.querySelector(".right2").classList.add("hidden");
      document.querySelector(".button-type2.delete2").classList.add("hidden");
      Total();
    }
  }
}

function removeThirdItemFromCart() {
  if (keyboardCount > 0) {
    keyboardCount--;

    //console.log(cpuCount);
    amount3 = 100 * keyboardCount;

    if (keyboardCount != 0) {
      document.querySelector(".right3").innerHTML = ("Keyboard - ₹100 ×" + keyboardCount + "<span class='item3'></span>" + " ₹" + amount3);
      Total();
    } else {
      document.querySelector(".right3").classList.add("hidden");
      document.querySelector(".button-type2.delete3").classList.add("hidden");
      Total();
    }
  }
}
