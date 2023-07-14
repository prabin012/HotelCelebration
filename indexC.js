const carts = document.querySelectorAll('.add-cart');
const product=[
    {   
        image :'./Images/images (1).jpeg',
        name:'Katiya',
        tag: "h1",
        price: 450,
        inCart:0,
    },
    {
        image :'./Images/images (2).jpeg',
        name:'Roti',
        tag: "h2",
        price: 15,
        inCart:0,
    },
    {
        image :'./Images/images (8).jpeg',
        name:'Chicken',
        tag: "h3",
        price: 250,
        inCart:0,
    },
    {
        image :'./Images/images (10).jpeg',
        name:'Roast',
        tag: "h11",
        price: 250,
        inCart:0,
    },
    {
        image :'./Images/images (6).jpeg',
        name:'Leg piece',
        tag: "h22",
        price:150,
        inCart:0,
    },
    {
        image :'./Images/images (4).jpeg',
        name:'Fish',
        tag: "h33",
        price: 70,
        inCart:0,
    }
];



for(let i=0; i< carts.length;i++){
    carts[i].addEventListener('click',()=>{
        // createImage(product[i]);
        cartNumber(product[i]);
        TotalCost(product[i]);
    });
}

function onloadcartNumber (){
    let productNumber = localStorage.getItem('cartNumber');
    
    if(productNumber){
        document.querySelector('.cartN').textContent=productNumber;
    }

}

function cartNumber (product){
   
    let productNumber = localStorage.getItem('cartNumber');

    productNumber = parseInt(productNumber);

    if (productNumber){
        localStorage.setItem('cartNumber', productNumber+1);
        document.querySelector('.cartN').textContent = productNumber+1;
    }else{
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.cartN').textContent = 1;
    }
    setItem(product);
}
function setItem(product){
    let cartItems = localStorage.getItem('productincart');
    // let cartimg = localStorage.getItem('cartimg');

    // cartimg =JSON.parse(cartimg);

    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
    cartItems[product.tag].inCart += 1;
    }else{
        product.inCart =1;
        cartItems = {
            [product.tag]:product
        }
    }
    // localStorage.setItem('cartimg', product.image);
    localStorage.setItem('productincart', JSON.stringify(cartItems));
    window.alert("Item added to cart");
}

function TotalCost (product){
    let cartCost = localStorage.getItem('TotalCost');

    if(cartCost != null){

        cartCost = parseInt(cartCost);
        localStorage.setItem('TotalCost', cartCost + product.price);
    }
    else{
        localStorage.setItem('TotalCost', product.price);
    }
}
function display(product){
    let displayItem = localStorage.getItem('productincart');
    displayItem = JSON.parse(displayItem);
    // let cartImage = localStorage.getItem('productincart.image');

    let productcontainer = document.querySelector('.productss');
    let cartCost = localStorage.getItem('TotalCost');
    if(displayItem && productcontainer){
        productcontainer.innerHTML = ''
        Object.values(displayItem).map(item =>{
            productcontainer.innerHTML +=
            `
            <div class="product-tittle">
            <img src="${item.image}"></img>
            <h4> ${item.name}</h4>
            </div>
            <div class="product-price"><span>${item.price}</span></div>
            <div class="product-quentity">${item.inCart}</div>

            <div class="total-price">${item.price*item.inCart}</div>
            
            
            `; 
        });
        productcontainer.innerHTML += 
        `
        <div class="basketcontainer">
        <h4>Grand Total : </h4>
        <span>${cartCost}</span>
        </div>
        
        `
       
    }
}




/*****************************************************************/





// ************************************************************************?



onloadcartNumber();
display(product);

