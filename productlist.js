let container = document.getElementById("Products-container");
fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res)
    display(res.data)
})
function display(data){
    data.forEach((element) => {  
    let card = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let price = document.createElement("h4");
    img.src = element.img;
    name.textContent = element.brand;
    price.textContent = `Rs.${element.price}`;
    container.append(card);
    card.append(img,name,price)
    });
    
}