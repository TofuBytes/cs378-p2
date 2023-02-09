//declare variables
let subtotal = 0;
let cart = new Map();

//changes the quantity of an item based on what is clicked
function changeQty(val, item){
    //alert("changing quantity");

    let num = document.getElementById(item).textContent;
    let key = item.substring(0,3);
    let name = document.getElementById(key).textContent;


    //increment or decrement quantity based on buttons. update cart and subtotal 
    if(val === '+'){
        document.getElementById(item).innerHTML = parseInt(num,10) + 1;

        //add item to cart
        if(!cart.has(name)){
            //alert("cart empty");
            cart.set(name, 1);
        } else{
            let qty = cart.get(name) + 1;
            cart.set(name, qty);
        }

        subtotal += parseInt(document.getElementById(key + "-price").textContent.substring(1), 10);
        
    }
    else if (val == '-' && num > 0){
        document.getElementById(item).innerHTML = parseInt(num,10) - 1;

        if(cart.get(name) === 1){
            //alert("cart empty");
            cart.delete(name)
        } else{
            let qty = cart.get(name) - 1;
            cart.set(name, qty);
        }

        subtotal -= parseInt(document.getElementById(key + "-price").textContent.substring(1), 10);
    }

    document.getElementById("subtotal").innerHTML = "$" + subtotal;
}

//place an order
function placeOrder(){
    
    let items = "Order Placed!\n";

    //check if cart is empty
    if(cart.size == 0){
        items = "There are no items in your cart.";
    }else {

        //get qty and items in cart
        for(let [key, value] of cart){
            items += value + " " + key + "\n";
        }
    }

    alert(items);
}

//reset values, subtotal, and cart
function reset(){
    subtotal = 0;

    //go through each item added in cart and set to 0
    for(let [key] of cart){
        let name = key.substring(0,3).toLowerCase();
        document.getElementById(name + "-qty").innerHTML = 0;
    }
    
    cart.clear();
    document.getElementById("subtotal").innerHTML = "$" + subtotal;
}