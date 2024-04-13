var products = [
    {name: "Black Shoes", headline: "Constrution Shoes", price: "10,000", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7869dac9-4d4a-4337-9c13-affa8c0d3c5c/air-monarch-iv-workout-shoes-cc3XbD.png"},
    {name: "Green Shoes", headline: "Sport Shoes", price: "15,000", image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/60618c33-70df-45c4-98eb-4870f2625b6c/custom-nike-air-force-1-mid-by-you-shoes.png"},
    {name: "Brown Shoes", headline: "Casual Shoes", price: "20,000", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc364778-dc3e-490f-b1f4-907c8fa535f7/air-jordan-1-low-se-shoes-SXvmZ0.png"}
];

var popular = [
    {name: "Blue Shoes", headline: "Constrution Shoes", price: "10,000", image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d59cfbce-e99c-4130-9086-234a3fa45418/revolution-7-older-running-shoes-RTdvsl.png"},
    {name: "Red Shoes", headline: "Sport Shoes", price: "15,000", image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3d2e7e94-4618-4ac1-8062-6a330dccbbed/court-borough-low-recraft-older-shoes-cg2qJ0.png"},
    {name: "White Shoes", headline: "Casual Shoes", price: "20,000", image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc5b4f2a-3a32-4757-bd94-e23e7a9612c3/air-force-1-07-essential-shoes-Dsb0fT.png"}
];

var cart = [];

function addProduct(){
    var clutter = "";
    products.forEach(function(product, index){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
          <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover" src=${product.image}  />
          </div>
          <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">
              ${product.name}
            </h1>
            <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
              </div>
              <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
                <i data-index="${index}" class="add ri-add-line"></i>
              </button>
            </div>
          </div>
        </div>`;
})

document.querySelector(".products").innerHTML = clutter;
}

function addPopularProduct(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div
            class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
          >
            <div
              class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                src="${product.image}"
                alt=""
              />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${product.name}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                ${product.headline}
              </h4>
              <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
            </div>
          </div>`;
    })

    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(details){
       if(details.target.classList.contains('add')){
        cart.push(products[details.target.dataset.index])
        console.log(cart);
    }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(prod, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}" />     
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
        </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
}

showCart();
addToCart();
addPopularProduct();
addProduct();
