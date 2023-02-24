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
        img:"https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :" ALL "
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"STANDS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/home-page/carousel/new-cases-collection-icon-update.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"CASES "
    },
    {
        img:"https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"CHARGING SOLUTIONS"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/new-arrival/planner.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"PLANNER"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/new-arrival/airtags.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"AIRTAG CASES"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        category :"MACBOOK SLEEVES"
    },
    {
        img:"https://images.dailyobjects.com/marche/icons/new-arrival/collections.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        category :"COLLECTIONS"
    }
]
let arr = JSON.parse(localStorage.getItem("products"))||[]
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
            console.log(element.category)
            arr.push(element.category)
            localStorage.setItem("products",JSON.stringify(arr))
            window.location.href = "http://127.0.0.1:5500/productlist.html"
        })
    });
}
let logo = document.getElementById("logo")
    logo.addEventListener("click",()=>{
        window.location.href="http://127.0.0.1:5500/index.html"
    })