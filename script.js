let cart = []

let total = 0

function addToCart(name, price){

cart.push({name, price})

total += price

displayCart()

}

function displayCart(){

let list = document.getElementById("cart-items")

list.innerHTML = ""

cart.forEach(item => {

let li = document.createElement("li")

li.textContent = item.name + " - ₹" + item.price

list.appendChild(li)

})

document.getElementById("total").innerText = total

}

function checkout(){

let name = document.getElementById("name").value
let phone = document.getElementById("phone").value
let address = document.getElementById("address").value

let message = "Order from Ignatius Sports:%0A%0A"

message += "Customer Name: " + name + "%0A"
message += "Phone: " + phone + "%0A"
message += "Address: " + address + "%0A%0A"

message += "Products:%0A"

cart.forEach(item => {

message += item.name + " - ₹" + item.price + "%0A"

})

message += "%0ATotal: ₹" + total

window.open("https://wa.me/8122863609?text=" + message)

}