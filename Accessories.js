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
        img:"https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :" CHARGING SOLUTIONS "
    },
    {
        img:"https://images.dailyobjects.com/marche/marche/sub-categories/tech-accessories/straps/watch-straps.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"WATCH BANDS"
    },
    {
        img:"https://images.dailyobjects.com/marche/tmp/stands-main.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"STANDS "
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/category/drinkware-filter-icon.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"DRINKWARE"
    },
    {
        img:"https://images.dailyobjects.com/marche/tmp/screen-guard.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"SCREEN GUARDS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/category/phone-wallets.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"PHONE WALLETS"
    },
    {
        img:"https://images.dailyobjects.com/marche/tmp/organiser-main.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"ORGANISERS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/category/mask.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"MASKS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/category/keychain.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"KEYCHAINS"
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