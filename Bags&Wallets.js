let container = document.getElementById("category-container");

// fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
// .then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     console.log(res)
//     display(res.data)
// })
let data = [
    {
        img:"https://images.dailyobjects.com/marche/icons/sub-category/wallets.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :" WALLETS "
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/category/crossbody-bags-intermediate-filter-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"CROSS BODY BAGS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/category/messenger-bag-filter-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"MESSENGER BAGS "
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/sub-category/tote-bags.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"TOTE BAGS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/sub-category/backpacks.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"BACKPACKS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/sub-category/duffle-bags.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"DUFFLE BAGS"
    },
    {
        img:"https://images.dailyobjects.com/marche/tmp/pouches-main.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"POUCHES"
    }
]
display(data)
function display(data){
    container.innerHTML= "";
    data.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute = ("class","card")
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        img.src = element.img;
        h3.textContent = element.category;
        container.append(card);
        card.append(img,h3)
        card.addEventListener("click",()=>{
            localStorage.setItem("products",JSON.stringify(data))
            window.location.href = "http://127.0.0.1:5500/productlist.html"
        })
    });
}
let logo = document.getElementById("logo")
    logo.addEventListener("click",()=>{
        window.location.href="http://127.0.0.1:5500/index.html"
    })