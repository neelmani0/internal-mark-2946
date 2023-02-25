//const { data } = require("cypress/types/jquery")

const url = `http://127.0.0.1:9090/new-arivale`
fetchdata()

function fetchdata() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            append(data)

        })
}
var items = document.getElementById("items")

function append(array) {
    array.forEach(element => {


        var li = document.createElement("li");
        var div = document.createElement("div");
        var image = document.createElement("img");
        var div2 = document.createElement("div");
        var name = document.createElement("h3");
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        var edit = document.createElement("button");
        var del = document.createElement("button");
        div.setAttribute("class", "product")
        image.src = element.image[0];
        div2.setAttribute("class", "product-details");
        name.innerText = element.name;
        p1.innerText = element.description;
        p2.innerText = `price:${element.price}`
        p3.innerText = element.modal;
        edit.innerText = "EDIT";
        del.innerText = "DELETE"
        edit.addEventListener()





        div2.append(name, p1, p2, p3, edit, del)
        div.append(image, div2);
        li.append(div)
        items.append(li)

    });
}