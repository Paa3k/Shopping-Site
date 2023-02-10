const products = [
    {
        name:`LEBRON JAMES KICKS`,
        price:`$400`,
        image:`images/lebron james.jpeg`
    },
    {
        name:`NIKE LEMON KICKS`,
        price:`$300`,
        image:`images/nike lemon green.jpeg`
    },
    {
        name:`CURDDEN WRISTWATCH`,
        price:`$800`,
        image:`images/curdden watch.jpeg`
    },
    {
        name:`SMART WATCH`,
        price:`$650`,
        image:`images/smart watch.jpeg`
    },
    {
        name:`CHANNEL BAG`,
        price:`$120`,
        image:`images/channel bag.jpeg`
    },
    {
        name:`3-IN-1 BAG`,
        price:`$950`,
        image:`images/3-in-1 bag.jpeg`
    },
    {
        name:`TROLLY BAG`,
        price:`$850`,
        image:`images/trolly bag.jpeg`
    },
    {
        name:`CHECK SHIRT`,
        price:`$70`,
        image:`images/check shirt.jpeg`
    },
]

// Looping of the available products 
const files = document.getElementById(`shopStuffs`)
let file = ``
for (let i = 0; i < products.length; i++){
    file += `
    <div class="product-box">
                <img src="${products[i].image}" alt="" class="productImg">
                <h2 class="product-title">${products[i].name}</h2>
                <span class="price">${products[i].price}</span>
                <i class='bx bx-cart add-cart carting'></i>
            </div>
    `
}
files.innerHTML=file

const cartJob = document.getElementsByClassName(`carting`)
for (let i = 0; i < cartJob.length; i++) {
    cartJob[i].addEventListener("click", ()=>{
        addToCart(products[i])
    });
}



// Looping of the Cart items 
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let CloseCart = document.querySelector("#close-cart");

// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// close cart
CloseCart.onclick = () => {
    cart.classList.remove("active");
};


// cart JS
// if (document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded', ready);
// }else {
//     ready();
// }
let cartArr=[]
const contents=document.getElementById(`contents`)

function cartInit(arr) {
    let cartItem = ``
    for (let i = 0; i < arr.length; i++){
        cartItem += `
        <div class="cart-box">
                                 <img src="${arr[i].image}" alt="" class="cart-img">
                                <div class="detail-box">
                                    <div class="cart-product-title">${arr[i].name}</div>
                                    <div class="cart-price">${arr[i].price}</div>
                                    <input type="number" value="1" class="cart-quantity">
                                </div>
    
                                <i class='bx bxs-trash-alt cart-remove'></i>
                            </div>
        `
    }
    contents.innerHTML=cartItem
    
}

// Initializing the cart on load 
cartInit(cartArr)

// Add to cart function 
function addToCart(item){
    const duplicate = cartArr.find(product => product.name === item.name )
    if(duplicate){
        alert("You have already added this item to cart");
    }else {
        cartArr.push(item)
        // console.log(cartArr)
        cartInit(cartArr)
        cartTotal(cartArr)
        initItemsToBeDeleted(cartArr)
    }
}

// getting the cart total 
const totalPrice = document.getElementsByClassName('total-price')[0]
function cartTotal(arr) {
    const total = arr.reduce((acc,item)=>{
         return acc + Number(item.price.replace('$', ''))
     }, 0)
     totalPrice.innerHTML = `$${total}`
}

// remove Delete item 
function initItemsToBeDeleted(arr) {
    const deleteIcons = document.getElementsByClassName('cart-remove')
    console.log(deleteIcons);
    for (let i = 0; i < deleteIcons.length; i++) {
        deleteIcons[i].addEventListener("click", ()=>{
            deleteCartItem(arr[i])
            // console.log('clicked');
        });
    }
    
}

function deleteCartItem(product){
    const filteredArr = cartArr.filter((item)=>{
        return item.name !== product.name
    })
    // console.log(filteredArr);
    cartInit(filteredArr)
    cartTotal(filteredArr)
    initItemsToBeDeleted(cartArr)
}

const ok = document.getElementById("ok")
console.log(ok);
function closeOverlay(){
    ok.style.visibility = "hidden"
}
function openOverlay(){
    ok.style.visibility = "visible"
    console.log('working');
    
}




// // Making function
// function ready(){
//     // removing items 
//     var removeCartButtons = document.getElementsByClassName('cart-remove');
//     // console.log(removeCartButtons);
//     for (var i = 0; i < removeCartButtons.length; i++){
//         var button = removeCartButtons[i];
//         button.addEventListener("click", removeCartItem);
//     }
// } 

// // Changing quantity
    // var quantityInputs = document.getElementsByClassName('cart-quantity');
    // for (var i = 0; i < quantityInputs.length; i++) {
    //     var input = cartArr[i];
    //     input.addEventListener('change', quantityChanged);
    // }

//     // Adding to cart
    // var addCart = document.getElementsByClassName("add-cart");
    // for (var i = 0; i < addCart.length; i++) {
    //     var button = addCart[i];
    //     button.addEventListener ("click", addCartClicked);
    // }
// Buy button job
// document
//     .getElementsByClassName("btn-buy")[0];
    // .addEventListener("click", buyButtonClicked);


// // Buy Button
// function buyButtonClicked(){
//     alert("Your order have been placed");
//     // var cartContent = document.getElementsByClassName removeChild(child: ChildNode):
//     while (cartContent.hasChildNodes()) {    ChildNode
//         cartContent.removeChild(cartContent.firstChild);
//     }
//     updatetotal();
// }



// // removing items
// function removeCartItem(event){
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     updatetotal();
// }

//     // Quantity changes
// function quantityChanged(event){
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updatetotal();
// }

// // // Adding items to cart
// function addCartClicked(event) {
//     var button = event.target;
//     var shopProducts = button.parentElement;
//     var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//     var price = shopProducts.getElementsByClassName("price")[0].innerText;
//     var productImg = shopProducts.getElementsByClassName("productImg")[0].src;
//     // addProductToCart(title, price, productImg);
//     // console.log(title, price, productImg);
//     updatetotal();
// }
// var cartShopBox = document.createElement("div");
// var cartItems = document.getElementsByClassName("cart-content")[0];
// // var cartBoxContent = `
// //                       <img src="images/lebron james.jpeg" alt="" class="cart-img">
// //                       <div class="detail-box">
// //                             <div class="cart-product-title">Lebron james kicks</div>
// //                             <div class="cart-price">$400</div>
// //                             <input type="number" value="1" class="cart-quantity">
// //                       </div>
// //                       <!-- ! remove cart -->
// //                       <i class='bx bxs-trash-alt cart-remove'></i>`;
// // cartShopBox.innerHTML = cartBoxContent;
// // cartItems.append(cartShopBox);
// // cartShopBox
// //     .getElementsByClassName("cart-remove")[0]
// //     .addEventListener("click", removeCartItem);
// // cartShopBox
// //     .getElementsByClassName("cart-quantity")[0]
// //     .addEventListener("change", quantityChanged);


// function addProductToCart(image, name, price) {
//     cartShopBox.classList.add("cart-box");
//     var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//     for (var i = 0; i < cartItemsNames.length; i++) {
//         if (cartItemsNames[i].innerText == name) {
//             alert("You have already added this item to cart");
//         return;
//         }
//     }
// }








// // updating total cost
// function updatetotal(){
//     var cartContent = document.getElementsByClassName('cart-content')[0];
//     var cartBoxes = cartContent.getElementsByClassName('cart-box');
//     var total = 0;
//     for (var i = 0; i < cartBoxes.length; i++){
//         var cartBox = cartBoxes[i];
//         var priceElement = cartBox.getElementsByClassName('cart-price')[0];
//         var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
//         var price = parseFloat(priceElement.innerText.replace("$",''));
//         var quantity = quantityElement.value;
//         total = total + (price * quantity);

//         document.getElementsByClassName('total-price')[0].innerText = '$' + total;
//     }
// }

