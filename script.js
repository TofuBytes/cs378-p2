var orderbt = document.getElementById("order-items");
var macInc = document.getElementById("mac-inc");

//increment event listeners
macInc.addEventListener("click", incQty);
orderbt.addEventListener("click", orderAlert);

function incQty(){
    //alert("changing quantity");
    var num = document.getElementById("qty-mac").textContent;
    //alert(num);
    document.getElementById("qty-mac").innerHTML = parseInt(num,10) + 1;
    //qty = qty + 1;
}

function orderAlert(){
    //just testing to see if it works for now
    alert("Order Placed!")
}
//alert('hello world');