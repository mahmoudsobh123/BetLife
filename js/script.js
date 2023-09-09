var user = document.querySelector("#user")
var logAndReg = document.querySelector(".log-reg")
var userInfo = document.querySelector("#user-info")
var carr = document.querySelector(".carr")
var logOut = document.querySelector("#logout")
var usere = document.querySelector(".usere")
var wel = document.querySelector(".wel")
if(localStorage.getItem("first-name")){
    logAndReg.remove()
    userInfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("first-name")
    usere.innerHTML = localStorage.getItem("first-name")
}else{
    userInfo.style.display = "none"
    carr.style.display = "none"
    wel.display = "none"
}
logOut.addEventListener("click" , function(){
    localStorage.clear()
    setTimeout( () => {
        window.location = "index.html"
    } , 1500)
})
////////////////////////////////////////////////
var allProducts = document.querySelector(".Products")
let products = [
    {
        id : 1 ,
        product : "T-shirt" ,
        price : 20  ,
        Category : "chlothes" , 
        imageUrl : "images/chlo1.jpeg"
    } ,
    {
        id : 2 ,
        product : "T-shirt" ,
        price : 30  ,
        Category : "chlothes" , 
        imageUrl : "images/chlo2.jpg"
    } ,
    {
        id : 3 ,
        product : "T-shirt" ,
        price : 25  ,
        Category : "chlothes" , 
        imageUrl : "images/chlo3.jpg"
    } ,
    {
        id : 4 ,
        product : "Body" ,
        price : 40  ,
        Category : "chlothes" , 
        imageUrl : "images/thin4.jpeg"
    } ,
    {
        id : 5 ,
        product : "Head" ,
        price : 20  ,
        Category : "chlothes" , 
        imageUrl : "images/thin3.jpeg"
    } ,    
    {
        id : 6 ,
        product : "Tools" ,
        price : 50  ,
        Category : "Products" , 
        imageUrl : "images/thing1.jpeg"
    } ,
    {
        id : 7 ,
        product : "Tools" ,
        price : 40 ,
        Category : "Products Food" , 
        imageUrl : "images/thin2.jpeg"
    } ,
    {
        id : 8 ,
        product : "Scissors" ,
        price : 10 ,
        Category : "Tools" , 
        imageUrl : "images/mgs1.jpeg"
    } ,
    {
        id : 9 ,
        product : "Scissors" ,
        price : 15 ,
        Category : "Tools" , 
        imageUrl : "images/mgs2.jpeg"
    } ,
    {
        id : 10,
        product : "German" ,
        price : 95 ,
        Category : "Dogs" , 
        imageUrl : "images/dog1.jpeg"
    } ,
    {
        id : 11 ,
        product : "German" ,
        price : 90 ,
        Category : "Dogs" , 
        imageUrl : "images/dog2.jpg"
    } ,
    {
        id : 12 ,
        product : "German" ,
        price : 85 ,
        Category : "Dogs" , 
        imageUrl : "images/dog3.jpeg"
    } ,
    {
        id : 13,
        product : "German" ,
        price : 80 ,
        Category : "Dogs" , 
        imageUrl : "images/dog4.jpeg"
    } ,
    {
        id : 14 ,
        product : " municipal" ,
        price : 70 ,
        Category : "Dogs" , 
        imageUrl : "images/dog5.jpg"
    } ,
    {
        id : 15 ,
        product : " municipal" ,
        price : 74 ,
        Category : "Dogs" , 
        imageUrl : "images/dog6.jpeg"
    } ,
    {
        id : 16 ,
        product : " municipal" ,
        price : 60,
        Category : "Dogs" , 
        imageUrl : "images/dogg1.jpg"
    } ,
    {
        id : 17,
        product : " municipal" ,
        price : 50 ,
        Category : "Dogs" , 
        imageUrl : "images/dogg2.jpeg"
    } ,
    {
        id : 18 ,
        product : " municipal" ,
        price : 50 ,
        Category : "Cats" , 
        imageUrl : "images/cat1.jpg"
    } ,
    {
        id : 19 ,
        product : " Domestic cats" ,
        price : 40 ,
        Category : "Cats" , 
        imageUrl : "images/cat2.jpg"
    } ,
    {
        id : 20,
        product : " Domestic cats" ,
        price : 35 ,
        Category : "Cats" , 
        imageUrl : "images/cat3.jpg"
    } ,
    {
        id : 21 ,
        product : " Domestic cats" ,
        price : 43 ,
        Category : "Cats" , 
        imageUrl : "images/cat4.jpg"
    } ,
    {
        id : 22 ,
        product : "Dekheila cats" ,
        price : 30 ,
        Category : "Cats" , 
        imageUrl : "images/cat5.jpg"
    } ,
    {
        id : 23 ,
        product : "Dekheila cats" ,
        price : 25 ,
        Category : "Cats" , 
        imageUrl : "images/cat6.jpg"
    } ,
    {
        id : 24 ,
        product : "Dekheila cats" ,
        price : 45 ,
        Category : "Cats" , 
        imageUrl : "images/cat7.jpg"
    } 
]
localStorage.setItem("myProduct" , JSON.stringify(products))
//////////////////////////////////////
let drawItems ;
(drawItems = function (products = []){
    let y = products.map((item) => {
        return `
         <div class="child1 col-lg-3 col-sm-5 col-12">
        <img src="${item.imageUrl}" class="cart-img">
        <h2 class="cart-title1">product : ${item.product}</h2>
        <h2 class="cart-title2">price : ${item.price}</h2>
        <span class = "dol"> $ </span>
        <h2 class="cart-title3" id = "cat">category : ${item.Category}</h2>
        <div class="product-item-action">
        <button class="btn btn-primary add-to-cart" onClick ="addToCard(${item.id})">Add To Cart</button>
        <button class="btn remove-from-card" onClick ="deleteData(${item.id})" style = "display:none";>Remove from card</button>
        <i class="far fa-heart fav${item.id}" id = "fav" onClick ="addFavourite(${item.id})"></i>
        <i class="fas fa-heart fav2${item.id}" id = "fav2" style="color: #ff0000;" onClick ="colorFavourite(${item.id})"></i>
    </div>
 </div>
        `
    })
    allProducts.innerHTML = y.join("");
})(JSON.parse(localStorage.getItem("myProduct")))
// /////////////////////////////////////////////
let favouriteItem = localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : [] ;
function addFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav2.style.display = "block"
    fav.style.display = "none"
    let favItem = products.find(item => item.id === id );
    favouriteItem.push(favItem)
    localStorage.setItem("fav" ,JSON.stringify(favouriteItem))
}
// /////////////////////////////////////////
function colorFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav.style.display = "block"
    fav2.style.display = "none"
}
 ////////////////////////////////////////////////
 let badge = document.querySelector(".badge")
 let cartProductsDiv = document.querySelector(".carts-products div")
 let addItem = localStorage.getItem("productsInCarts") ? JSON.parse(localStorage.getItem("productsInCarts")) : [] ;
  if(addItem){
     addItem.map(item => {
         cartProductsDiv.innerHTML += `<p>
         <div class = "icon">
            ${item.product}
            <div class = "icon2"> 
                <span class = "num${item.id}" id = "num">${localStorage.getItem(`num${item.id}`) ? localStorage.getItem(`num${item.id}`): 1}</span>
                <i class="fas fa-minus minus" style="cursor: pointer;" onClick ="minus(${item.id})" ></i>
                <i class="fas fa-plus plus" style="cursor: pointer;" onClick ="plus(${item.id})"></i>
            </div>
         </div>   
    </p>`;
     })
     badge.style.display = "block";
     badge.innerHTML = localStorage.getItem("bad")  ? localStorage.getItem("bad") : addItem.length ;
  }''
//////////////////////////////////////////////////////
  var totalPrice = 0 
  var addProduct = document.querySelector(".add-to-cart")
  var deleteProduct = document.querySelector(".remove-from-card")
    if(localStorage.getItem("first-name")){
        function addToCard(id){
        let choosenItem = products.find(item => item.id === id );
        totalPrice += choosenItem.price
        localStorage.setItem("totalprice" , totalPrice )
        ////////////////////////////////////////////////// 
        if(addItem.indexOf(choosenItem) != -1){
            plus(id)
            openDiv()
        }else{
        addItem.push(choosenItem)
        localStorage.setItem("productsInCarts" , JSON.stringify(addItem))
        badge.innerHTML ++
        const cardProductLength = addItem.length
        cartProductsDiv.innerHTML += `<p>    
        <div class = "icon">
        ${choosenItem.product}
         <div class = "icon2"> 
         <span class = "num${choosenItem.id}" id = "num"> 1 </span>
         <i class="fas fa-minus minus" style="cursor: pointer;" onClick ="minus(${choosenItem.id})" ></i>
         <i class="fas fa-plus plus" style="cursor: pointer;" onClick ="plus(${choosenItem.id})"></i>
         </div>
        </div>   
    </p>`
        badge.style.display = "block"
        badge.innerHTML = localStorage.getItem("bad") ? localStorage.getItem("bad") : cardProductLength.toString()
    }}
}else{
    window.location = "index.html"
}
 ///////////////////////////////////////////
 let cross = document.querySelector("#tria")
 let shoopingCart = document.querySelector(".Shooping-cart")
 let cartProduct = document.querySelector(".carts-products")
 shoopingCart.addEventListener("click" , openDiv)
 function openDiv(){
     if(cartProductsDiv.innerHTML != ""){
         if(cartProduct.style.display == "block"){
             cartProduct.style.display = "none"
         }else{
             cartProduct.style.display = "block"
         }
     }
 }
 ///////////////////////////////////////////
function plus(id){
    var number = document.querySelector(`.num${id}`)
    console.log(number)
    number.innerHTML ++
    badge.innerHTML ++
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badge.innerHTML)
    openDiv()
}
// ///////////////////////
function minus(id){
    var number = document.querySelector(`.num${id}`)
    number.innerHTML --
    badge.innerHTML --
    if(number == 0){
        window.remove("number")
    }
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badge.innerHTML)
    openDiv()
}

            ////////////////Search function////////////////
let searchELe = document.querySelector("#Search")
 searchELe.addEventListener("keyup" , function(e){
    searchDat(e.target.value ,  JSON.parse(localStorage.getItem("myProduct")) )
    if(e.target.value.trim() === ""){
         drawItems(JSON.parse(localStorage.getItem("myProduct")))
    }
            } )
 function searchDat(product , products){
    let arr = products.filter((item) => item.product.indexOf(product) !== -1 );
    drawItems(arr)
}
            /////////////Search By Title and Category//////////
let searchMood = "title"
function getSearchMood(id){
let search = document.querySelector("#Search")
if(id == "searchTitle"){
searchMood = "title"
search.placeholder = " Search By Title"
let searchELe = document.querySelector("#Search")
searchELe.addEventListener("keyup" , function(e){
    searchDat(e.target.value ,  JSON.parse(localStorage.getItem("myProduct")) )
    if(e.target.value.trim() === ""){
        drawItems(JSON.parse(localStorage.getItem("myProduct")))
    }
} )
   function searchDat(product , products){
    let arr = products.filter((item) => item.product.indexOf(product) !== -1 );
    drawItems(arr)
  }
//////////////////
}else{
searchMood = "category"
search.placeholder = " Search By category"
let searchELe = document.querySelector("#Search")
searchELe.addEventListener("keyup" , function(e){
    searchCAt(e.target.value ,  JSON.parse(localStorage.getItem("myProduct")) )
    if(e.target.value.trim() === ""){
        drawItems(JSON.parse(localStorage.getItem("myProduct")))
    }
} )
  function searchCAt(Category, products){
    let arr = products.filter((item) => item.Category.indexOf(Category) !== -1 );
    drawItems(arr)
    }
    }
    search.focus()
}