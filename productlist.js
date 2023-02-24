let container = document.getElementById("Products-container");
let name = JSON.parse(localStorage.getItem("products"))||[]
let x = name[name.length-1]
let bag = "";
for(let i=0;i<x.length;i++){
    if(x[i]==" "){
        bag+="-";
    }
    else{
        bag+=x[i];
    }
}
console.log(bag)
fetch(`http://127.0.0.1:9090/${bag}`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    display(res)
})
function display(data){
    data.forEach((element) => {  
    let card = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let price = document.createElement("h4");
    img.src = element.thumbnail;
    name.textContent = element.title;
    price.textContent = `Rs.${element.price}`;
    container.append(card);
    card.append(img,name,price)
    card.addEventListener("click",()=>{
        let obj = {}
        obj.name = element.title;
        obj.img = element.thumbnail;
        obj.price = element.price;
        let arr =[];
        arr.push(obj);
        localStorage.setItem("single-data",JSON.stringify(arr))
        window.location.href = "http://127.0.0.1:5500/single-product-page.html"
    })
    });
    
}
let logo = document.getElementById("logo")
    logo.addEventListener("click",()=>{
        window.location.href="http://127.0.0.1:5500/index.html"
    })