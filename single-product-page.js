let data =  [
    {
        "id": 1,
        "sub-category": "iPhone 14",
        "title": "Nimbus Phone Case Cover For iPhone 14",
        "price": 1999,
        "discountPercentage": 12.96,
        "description":"A minimally quilted laptop sleeve with light padding, Siesta is safe to carry by hand for short, comfortable excursions or can be slipped inside your backpacks or tote bags for longer day-outs. It features a one of a kind built with unconventional and eye-catching artworks, exhibiting a bold expression of individuality.",
        "stock": 94,
        "brand": "Apple",
        "category": "phone cases",
        "thumbnail": "https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-14-images/Nimbus-Phone-Case-Cover-For-iPhone-14-2.png?tr=cm-pad_resize,v-2,w-352,h-434,dpr-1",
        "images": [
            "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
            "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-1.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
            "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-2.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
            "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-3.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1",
            "https://images.dailyobjects.com/marche/product-images/1101/numbus-frosted-phone-case-cover-for-samsung-galaxy-z-fold-4-images/Nimbus-Frosted-Phone-Case-Cover-For-Samsung-Galaxy-Z-Fold-4-4.png?tr=cm-pad_resize,v-2,w-768,h-664,dpr-1"
        ]
    }
]
  
  let slide = document.getElementById("slide");
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  
//   slide.style.width = "350px";
//   slide.style.height = "250px";
  let i = 0;
  slide.src = data[0].images[i];
  
  btn2.onclick = () => {
    i++;
    if (i > data[0].images.length - 1) {
      i = 0;
    }
    slide.src = data[0].images[i];
  };
  
  btn1.onclick = () => {
    i--;
    if (i < 0) {
      i = data[0].images.length - 1;
    }
    slide.src = data[0].images[i];
  };
  
  btn1.addEventListener("click", () => {
    slide.classList.add("transition");
  });
  btn1.addEventListener("mouseup", () => {
    slide.classList.remove("transition");
  });
  btn2.addEventListener("click", () => {
    slide.classList.add("transition");
  });
  btn2.addEventListener("mouseup", () => {
    slide.classList.remove("transition");
  });
  let container = document.getElementById("detail-card")
  display(data)
  function display(data){
    data.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute("class","card")
        let name = document.createElement("p");
        name.setAttribute("class","name")
        let pricediv = document.createElement("div")
        let price = document.createElement("span");
        priceRemove = document.createElement("span");
        taxline = document.createElement("span");
        let AddCart =document.createElement("button")
        AddCart.setAttribute("class","cartBtn")
        let h3 = document.createElement("h3")
        let p = document.createElement("p");
        let pincode = document.createElement("input");
        let checkbutton = document.createElement("button");
        checkbutton.setAttribute("class","checkbutton")
        let productDetails = document.createElement("div")
        let details = document.createElement("p");
        let productSpecifications = document.createElement("div")
        let Specifications = document.createElement("p");
        let productDelivery = document.createElement("div")
        let Delivery = document.createElement("p");
        details.textContent = "Product Details";
        Specifications.textContent = "Specifications";
        Delivery.textContent = "Delivery & Returns";
        p.textContent = "*FREE DUFFLE BAG ON ORDERS ABOVE Rs.2999 / FREE KEYCHAIN SET ON ORDERS ABOVE Rs.1999";
        h3.textContent = "EXCITING OFFERS";
        name.textContent = element.title;
        priceRemove.textContent = element.price+850;
        taxline.textContent = "Inclusive of all taxes";
        taxline.setAttribute("class","span3")
        priceRemove.setAttribute("class","span1") 
        price.textContent = `Rs.${element.price}`;
        price.setAttribute("class","span2")
        pricediv.setAttribute("class","pricediv")
        AddCart.textContent = "ADD TO CART";
        pincode.setAttribute("placeholder","Enter Pincode To Check Delivery");
        checkbutton.textContent = "CHECK"
        productDetails.append(details);
        productSpecifications.append(Specifications);
        productDelivery.append(Delivery);
        pricediv.append(price,priceRemove,taxline)
        card.append(name,pricediv,AddCart,h3,p,pincode,checkbutton,productDetails,productSpecifications,productDelivery)
        container.append(card)
    });
  }
  let cont1 = document.getElementById("products-1")
  fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
  .then((res)=>{
      return res.json();
  })
  .then((res)=>{
      console.log(res.data)
      displayRecentData(res.data)
  })
  function displayRecentData(Data){
      Data.forEach((element) => {  
      let card = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("p");
      let price = document.createElement("h4");
      img.src = element.img;
      name.textContent = element.brand;
      price.textContent = `Rs.${element.price}`;
      cont1.append(card);
      card.append(img,name,price)
      });
      
  }
//   let cont2 = document.getElementById("products-2")
//   fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
//   .then((res)=>{
//       return res.json();
//   })
//   .then((res)=>{
//       console.log(res.data)
//       displayRecentData(res.data)
//   })
//   function displayRecentData(Data){
//       Data.forEach((element) => {  
//       let card = document.createElement("div");
//       let img = document.createElement("img");
//       let name = document.createElement("p");
//       let price = document.createElement("h4");
//       img.src = element.img;
//       name.textContent = element.brand;
//       price.textContent = `Rs.${element.price}`;
//       cont2.append(card);
//       card.append(img,name,price)
//       });
      
//   }
//   let cont3 = document.getElementById("products-3")
//   fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
//   .then((res)=>{
//       return res.json();
//   })
//   .then((res)=>{
//       console.log(res.data)
//       displayRecentData(res.data)
//   })
//   function displayRecentData(Data){
//       Data.forEach((element) => {  
//       let card = document.createElement("div");
//       let img = document.createElement("img");
//       let name = document.createElement("p");
//       let price = document.createElement("h4");
//       img.src = element.img;
//       name.textContent = element.brand;
//       price.textContent = `Rs.${element.price}`;
//       cont3.append(card);
//       card.append(img,name,price)
//       });
      
//   }
//   let cont4 = document.getElementById("products-4")
//   fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
//   .then((res)=>{
//       return res.json();
//   })
//   .then((res)=>{
//       console.log(res.data)
//       displayRecentData(res.data)
//   })
//   function displayRecentData(Data){
//       Data.forEach((element) => {  
//       let card = document.createElement("div");
//       let img = document.createElement("img");
//       let name = document.createElement("p");
//       let price = document.createElement("h4");
//       img.src = element.img;
//       name.textContent = element.brand;
//       price.textContent = `Rs.${element.price}`;
//       cont4.append(card);
//       card.append(img,name,price)
//       });
      
//   }
//   let cont5 = document.getElementById("products-5")
//   fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
//   .then((res)=>{
//       return res.json();
//   })
//   .then((res)=>{
//       console.log(res.data)
//       displayRecentData(res.data)
//   })
//   function displayRecentData(Data){
//       Data.forEach((element) => {  
//       let card = document.createElement("div");
//       let img = document.createElement("img");
//       let name = document.createElement("p");
//       let price = document.createElement("h4");
//       img.src = element.img;
//       name.textContent = element.brand;
//       price.textContent = `Rs.${element.price}`;
//       cont5.append(card);
//       card.append(img,name,price)
//       });
      
//   }
