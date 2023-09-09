let productsInCart = localStorage.getItem("productsInCarts")
let allProducts = document.querySelector(".Products")
if(productsInCart){
    let item = JSON.parse(productsInCart);
    drawCartProducts(item);
}
function drawCartProducts(products){
    let y = products.map((item) => {
        return `
        <div class="favv col-lg-5 col-md-10 col-11 mt-md-5">
        <img src="${item.imageUrl}" class="cart-img" style = "margin-top : 0px";>
        <h2 class="cart-title1" style ="margin-left: 230px">product : ${item.product}</h2>
        <h2 class="cart-title2" style ="margin-left: 230px">price : ${item.price}</h2>
        <span class = "pou" style = "margin-left : 125px ;"> $ </span>
        <h2 class="cart-title3" style ="margin-left: 230px">category : ${item.Category}</h2>
        <div class="product-item-action">
        <div class = "icon2"> 
        <span class = "num${item.id}" id = "num">${localStorage.getItem(`num${item.id}`) ? localStorage.getItem(`num${item.id}`): 1}</span>
        <i class="fas fa-minus minus" style="cursor: pointer;" onClick ="minus(${item.id})" ></i>
        <i class="fas fa-plus plus" style="cursor: pointer;" onClick ="plus(${item.id})"></i>
    </div>
        <button class="btn remove-from-card" style ="font-weight: 600;" onClick ="deleteData(${item.id})">Remove</button>
    </div>
 </div>
        `
    })    
    allProducts.innerHTML = y.join("");
}
/////////////////////////////////////////////////////
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
//////////////////////////////////////
function deleteData(id){
    var x = JSON.parse((localStorage.getItem("productsInCarts")))
    var index = x.map(function (item) {
        return item.id }) .indexOf(id) 
    if (index !== -1 ){
        x.splice(index , 1)
        drawCartProducts(x)    
        localStorage.setItem("productsInCarts" , JSON.stringify(x))
    }
}
// ///////////////////////////////////
var cost = document.querySelector(".cost")
 cost.innerHTML = localStorage.getItem("totalprice")
// /////////////////////////////////
function plus(id){
    var number = document.querySelector(`.num${id}`)
    var badgee = localStorage.getItem("bad")
    badgee ++
    number.innerHTML ++
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badgee)
}
// ///////////////////////
function minus(id){
    var number = document.querySelector(`.num${id}`)
    number.innerHTML --
    var badgee = localStorage.getItem("bad")
    badgee --
    localStorage.setItem(`num${id}` , number.innerHTML)
    localStorage.setItem("bad" , badgee)
}
// /////////////////////////////////////////////////////////////////
let favouriteItem = localStorage.getItem("fav") ? localStorage.getItem("fav") : [] ;
function addFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav2.style.display = "block"
    fav.style.display = "none"
    let favItem = products.find(item => item.id === id );
    favouriteItem.push(favItem)
    localStorage.setItem("fav" ,JSON.stringify(favouriteItem))
}
// /////////////////////
function colorFavourite(id){
    var fav = document.querySelector(`.fav${id}`)
    var fav2 = document.querySelector(`.fav2${id}`)
    fav.style.display = "block"
    fav2.style.display = "none"
}

// /////////////////////////////////////////////////////////////////
var favPar = document.querySelector(".fav-par")
let Fav = localStorage.getItem("fav")
if(Fav){
    let item = JSON.parse(Fav);
    drawCartFavourite(item);
}
function drawCartFavourite(products){
    let Z = products.map((item) => {
        return `
        <div class="fav-10 col-lg-5 col-md-10">
        <img src="${item.imageUrl}" class="img" id = "im" style = "margin-top : 10px;" >
        <h2 class="title1">product : ${item.product}</h2>
        <h2 class="title2">price : ${item.price}</h2>
        <span class = "pou" id = "pou2"> $ </span>
        <h2 class="title3"  style ="margin-top: 0px">category : ${item.Category}</h2>
        <div class="product-item-action">
        <button class="btn remove-card" onClick ="deleteFav(${item.id})">Remove</button>
   </div>
</div>
        `
    })    
    favPar.innerHTML = Z.join("");
}
// ////////////////////
function deleteFav(id){
    var mah = JSON.parse((localStorage.getItem("fav")))
    var index = mah.map(function (item) {
        return item.id }) .indexOf(id) 
    if (index !== -1 ){
        mah.splice(index , 1)
        drawCartFavourite(mah)    
        localStorage.setItem("fav" , JSON.stringify(mah))   
    }
}
// ////////////////////  